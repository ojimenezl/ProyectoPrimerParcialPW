const colors = require('colors');
const fs = require('fs'); // filesystem
const csv = require('csv-parser'); // Encargado de parsear
let vector = [];
let tareaPorHAcer = [];
const guardar = (file, country, year, out) => {
        //let archivo = fs.readFileSync(file, "utf8");
        //vector = archivo.toString().split(/\r?\n/);
        //console.log(vector[5].split(',').length);
        //console.log(vector[5].split(',')[0]);

        fs.createReadStream(file).on('error', err => {
                console.log(err);
            }) // Abrir archivo
            .pipe(csv({
                cast: true
            }))
            .on('data', row => {
                for (let i = 4; i < 65; i++) {
                    if (row[i] == '' || row[i] == ' ' || row[i] == "") {
                        row[i] = '0'
                    }
                }
                //console.log(row);
                vector.push(row)
            }) // Pasarlo al parseador a través de una tubería
            .on("end", () => { // Y al finalizar, terminar lo necesario
                //console.log(vector);
                let data = JSON.stringify(vector);
                fs.writeFileSync('modelo/data.json', data, (err) => {
                        if (err) throw new Error('No se pudo guarda la data', err);
                    })
                    //console.log("Se ha terminado de leer el archivo");
            });

        cargarDB()
            //console.log(tareaPorHAcer[20]);
        media(country, year)
        topcinco(year)
        menores(country, year)

    }
    //Nicolas Carrasco
const topcinco = (year) => {
        let vec = []
        year = year % 1960 + 4;
        //console.log(year);
        //console.log(tareaPorHAcer);
        for (let i = 5; i < tareaPorHAcer.length; i++) {
            let temp = {
                codigo: tareaPorHAcer[i][1],
                valor: parseInt(tareaPorHAcer[i][year])
            }
            vec.push(temp);
        }

        vec = vec.sort((a, b) => { return b.valor - a.valor });
        console.log(vec.splice(0, 5));
        return vec.splice(0, 5)
    }
    //Oscar Jiménez

const menores = (country, year) => {
    cargarDB()
    var sub = 0;
    var top = [];
    var colum = [];
    var pais = '';
    var consul = `${country} - ${year}`
    var newArray = new Array();
    for (let i = 1; i < 65; i++) {
        if (tareaPorHAcer[3][i] === year.toString()) {
            for (let j = 3; j < tareaPorHAcer.length; j++) {
                colum.push(parseInt(tareaPorHAcer[j][i]));
                if (tareaPorHAcer[j][1] == country) {
                    sub = tareaPorHAcer[j][i];
                }
            }
        }
    }
    console.log(`LOS 5 PAISES CON MENORES SUSCRIPCIONES QUE ${country}`.green);
    console.log(`SU CONSULTA:`.green);
    console.log(`${consul} | ${sub}`.red);
    console.log("");
    for (var cr = 0, jm = colum.length; cr < jm; cr++) {
        if (colum[cr]) {
            newArray.push(colum[cr])
        }

    }
    newArray.sort((ca, cb) => ca - cb)

    console.log(`TOP | AÑO | PAISES | SUSCRIPCIONES`.green);
    for (var jj = 1; jj < newArray.length; jj++) {

        if (newArray[jj] === parseInt(sub)) {
            for (var p = 1; p <= 5; p++) {
                top.push(newArray[jj - p])
            }
            for (let i = 1; i < 65; i++) {
                if (tareaPorHAcer[3][i] === year.toString()) {
                    for (let j = 0; j <= top.length; j++) {

                        for (var tv = 3; tv < tareaPorHAcer.length; tv++) {
                            if (top[j] === parseInt(tareaPorHAcer[tv][i])) {
                                console.log(j + 1, " | ", year, " | ", tareaPorHAcer[tv][1], " | ", top[j]);
                            }
                        }
                    }
                    i = 65;
                }
            }
            jj = newArray.length
        }
    }
}

const cargarDB = () => {
        try {
            tareaPorHAcer = require('../modelo/data.json');
        } catch (error) {
            tareaPorHAcer = []
        }

    }
    //Kevin Ramirez
const media = (pais, anio) => {
    cargarDB();
    for (var i = 4; i < tareaPorHAcer.length; i++) {
        if (tareaPorHAcer[i][1] === pais) {
            break;
        }
    }
    for (var j = 4; j < 65; j++) {
        if (tareaPorHAcer[3][j] == anio) {
            break;
        }
    }
    let t = 0;
    let media = 0
    for (let h = 4; h < tareaPorHAcer.length; h++) {
        media += Number(tareaPorHAcer[h][j]);
        t += 1;
    }
    let mediaM = media / t;
    //77771107626///313593175.9
    if (Number(tareaPorHAcer[i][j]) > mediaM) {
        console.log(`\nEl valor de las suscripciones del pais ${pais.green}:(${tareaPorHAcer[i][j].magenta}) es ${'Mayor'.blue} a la media mundial:(${mediaM.toString().magenta}) en el año ${anio.toString().cyan}`);
    } else {
        console.log(`\nEl valor de las suscripciones del pais ${pais.green}:(${tareaPorHAcer[i][j].magenta}) es ${'Menor'.blue} a la media mundial:(${mediaM.toString().magenta}) en el año ${anio.toString().cyan}`);
    }
}

module.exports = {
    guardar

}

//santiago lema