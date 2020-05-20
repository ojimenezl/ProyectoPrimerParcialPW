const colors = require("colors");
const fs = require("fs");
const csv = require("csv-parser");
let tareaPorHAcer = [];

const lecturacsv = async(file) => {
    //let vector = [];
    const g = fs.createReadStream(file)
        .on("error", (err) => console.log(err)) // Abrir archivo
        .pipe(csv({ cast: true, delimiter: ';' }))
    for await (const row of g) {
        //console.log(g.length);
        for (let i = 4; i < 65; i++) {
            if (row[i] == "" || row[i] == " " || row[i] == "") {
                row[i] = "0";
            }
        }
        tareaPorHAcer.push(row);
    }

    return 'Se ha terminado de leer el archivo';
};


let getE = async(file, country, year) => {


    let doc = await lecturacsv(file);
    console.log(doc);
    let val = await validar(country, year);

    let est = {
        MediaxAnio: await medxanio(year),
        Menor_Mayor: await media(country, year),
        Menores: await menores(country, year),
        Mayores: await mayores(country, year),
        top5: await topcinco(year)
    };

    return est;

}

const validar = async(country, year) => {
    let i = 0;
    if (year < 1960 || year > 2019)
        throw new Error('Año no Encontrado')
    for (i = 4; i < tareaPorHAcer.length; i++) {
        if (country === tareaPorHAcer[i][1]) { break; }
    }
    if (i == tareaPorHAcer.length)
        throw new Error('Codigo de Pais no encontrado')

}

//Wendy Juma
const medxanio = async(year) => {
    let acum = 0;
    let tam = tareaPorHAcer.length - 4;
    let vec = []
    year = (year % 1960) + 4;
    for (let i = 4; i < tareaPorHAcer.length; i++) {
        valor = parseInt(tareaPorHAcer[i][year]);
        //vec.push(valor);
        acum += parseInt(valor);
    }
    oper = acum / tam;

    let datos = {
        anio: tareaPorHAcer[3][year],
        media: parseInt(oper)
    };
    vec.push(datos);
    console.log("\n-------MEDIA POR AÑO--------".red);
    console.log(`LA MEDIA DEL ${tareaPorHAcer[3][year]} ES ${parseInt(oper)}`.yellow);
    return vec;
};
//Nicolas Carrasco
const topcinco = async(year) => {
    let vec = [];
    year = (year % 1960) + 4;
    for (let i = 4; i < tareaPorHAcer.length; i++) {
        let temp = {
            codigo: tareaPorHAcer[i][1],
            valor: parseInt(tareaPorHAcer[i][year]),
        };
        vec.push(temp);
    }

    vec = vec.sort((a, b) => b.valor - a.valor);
    console.log(`\nTOP DE LOS 5 PAISES POR AÑO ${tareaPorHAcer[3][year]}`.red);
    console.log('CODIGO\t|\tVALOR'.green);
    vec = vec.splice(0, 5);
    for (let i of vec) {
        console.log(`${i.codigo}\t|\t${i.valor}`.yellow);
    }
    return vec;
};
//Oscar Jiménez
const menores = async(country, year) => {
    // cargarDB()
    var sub = 0;
    var top = [];
    var colum = [];
    var resul = [];
    var consul = `${country} - ${year}`;
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
    console.log(`\nLOS 5 PAISES CON MENORES SUSCRIPCIONES QUE ${country}`.green);
    console.log(`SU CONSULTA:`.green);
    console.log(`${consul} | ${sub}`.red);
    console.log("");
    for (var cr = 0, jm = colum.length; cr < jm; cr++) {
        if (colum[cr]) {
            newArray.push(colum[cr]);
        }
    }
    newArray = newArray.sort((ca, cb) => ca - cb);

    console.log(`TOP | AÑO | PAISES | SUSCRIPCIONES`.green);
    for (var jj = 1; jj < newArray.length; jj++) {
        if (newArray[jj] === parseInt(sub)) {
            for (var p = 1; p <= 5; p++) {
                top.push(newArray[jj - p]);
            }
            for (let i = 1; i < 65; i++) {
                if (tareaPorHAcer[3][i] === year.toString()) {
                    for (let j = 0; j <= top.length; j++) {
                        for (var tv = 3; tv < tareaPorHAcer.length; tv++) {
                            if (top[j] === parseInt(tareaPorHAcer[tv][i])) {
                                let numenor = {
                                    //                              year: year,
                                    codigo: tareaPorHAcer[tv][1],
                                    valor: top[j],
                                };
                                resul.push(numenor);

                                console.log(
                                    j + 1,
                                    " | ",
                                    year,
                                    " | ",
                                    tareaPorHAcer[tv][1],
                                    " | ",
                                    top[j]
                                );
                            }
                        }
                    }
                    i = 65;
                }
            }
            jj = newArray.length;
        }
    }
    //console.log(resul);
    return resul;
};

//Eduardo Quisupangui
const mayores = async(country, year) => {
    // cargarDB()
    var sub = 0;
    var top = [];
    var colum = [];
    var resul = [];
    var consul = `${country} - ${year}`;
    var newArray = new Array();
    for (let i = 1; i < 65; i++) {
        if (tareaPorHAcer[3][i] === year.toString()) {
            for (let j = 3; j < tareaPorHAcer.length; j++) {
                //console.log(tareaPorHAcer[j][i]);
                colum.push(parseInt(tareaPorHAcer[j][i]));
                if (tareaPorHAcer[j][1] == country) {
                    sub = tareaPorHAcer[j][i];
                }
            }
        }
    }

    console.log(`\nLOS 5 PAISES CON MAYORES SUSCRIPCIONES QUE ${country}`.green);
    console.log(`SU CONSULTA:`.green);
    console.log(`${consul} | ${sub}`.red);
    console.log("");
    for (var cr = 0, jm = colum.length; cr < jm; cr++) {
        if (colum[cr]) {
            //console.log(colum[cr]);
            newArray.push(colum[cr]);
        }
    }
    newArray = newArray.sort((ca, cb) => ca - cb);

    console.log(`TOP | AÑO | PAISES | SUSCRIPCIONES`.green);
    for (var jj = 1; jj < newArray.length; jj++) {
        if (newArray[jj] === parseInt(sub)) {
            for (var p = 1; p <= 5; p++) {
                top.push(newArray[jj + p]);
            }
            for (let i = 1; i < 65; i++) {
                if (tareaPorHAcer[3][i] === year.toString()) {
                    for (let j = 0; j <= top.length; j++) {
                        for (var tv = 3; tv < tareaPorHAcer.length; tv++) {
                            if (top[j] === parseInt(tareaPorHAcer[tv][i])) {
                                let numenor = {
                                    //year: year,
                                    codigo: tareaPorHAcer[tv][1],
                                    valor: top[j],
                                };
                                resul.push(numenor);

                                console.log(
                                    j + 1,
                                    " | ",
                                    year,
                                    " | ",
                                    tareaPorHAcer[tv][1],
                                    " | ",
                                    top[j]
                                );
                            }
                        }
                    }
                    i = 65;
                }
            }
            jj = newArray.length;
        }
    }
    //console.log(resul);
    return resul;
};

//Kevin Ramirez
const media = async(pais, anio) => {
    // cargarDB();
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
    let media = 0;
    for (let h = 4; h < tareaPorHAcer.length; h++) {
        media += Number(tareaPorHAcer[h][j]);
        t += 1;
    }
    let mediaM = media / t;
    let vec = []
        //77771107626///313593175.9
    let men = "";
    if (Number(tareaPorHAcer[i][j]) > mediaM) {
        console.log(
            `\nEl valor de las suscripciones del pais ${pais.green}:(${
        tareaPorHAcer[i][j].magenta
      }) es ${"Mayor".blue} a la media mundial:(${
        mediaM.toString().magenta
      }) en el año ${anio.toString().cyan}`
        );
        men += "Mayor a la media mundial";
    } else {
        console.log(
            `\nEl valor de las suscripciones del pais ${pais.green}:(${
        tareaPorHAcer[i][j].magenta
      }) es ${"Menor".blue} a la media mundial:(${
        mediaM.toString().magenta
      }) en el año ${anio.toString().cyan}`
        );
        men += "Menor a la media mundial";
    }

    let datos = {
        pais: pais,
        medpais: Number(tareaPorHAcer[i][j]),
        estado: men
    };
    vec.push(datos);
    return vec;
};

module.exports = {
    getE
};