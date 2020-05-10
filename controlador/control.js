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
    topcinco(year = 2018)
}

const topcinco = (year) => {
    let vec = []
    year = year % 1960 + 4;
    console.log(year);
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
const cargarDB = () => {
    try {
        tareaPorHAcer = require('../modelo/data.json');
    } catch (error) {
        tareaPorHAcer = []
    }

}

module.exports = {
    guardar
}

//santiago lema