const colors = require("colors");
const fs = require("fs"); // filesystem
const csv = require("csv-parser"); // Encargado de parsear
const srv = require("../vista/servidor");
//const pag = require("./config/lista");
let vector = [];
let tareaPorHAcer = [];
let vect = [];
let todo = [];
//publicar en la web

const lecturacsv = async(file) => {
    fs.createReadStream(file)
        .on("error", (err) => console.log(err)) // Abrir archivo
        .pipe(csv({ cast: true, delimiter: ',' }))
        .on("data", (row) => {
            for (let i = 4; i < 64; i++) {
                if (row[i] == "" || row[i] == " " || row[i] == "") {
                    row[i] = "0";
                    //console.log(row[i]);
                }
            }
            vector.push(row);
        })
        .on("end", () => {
            // Y al finalizar, terminar lo necesario
            //console.log(vector);
            let data = JSON.stringify(vector);
            fs.writeFileSync("modelo/data.json", data, (err) => {
                if (err) throw new Error("No se pudo guarda la data", err);
            });
            //console.log("Se ha terminado de leer el archivo");
        });
    return 'Se ha terminado de leer el archivo';
};

let getR = async(file) => {
    let doc = await lecturacsv(file);
    return doc
}
const cargarDB = () => {
    try {
        tareaPorHAcer = require("../modelo/data.json");
    } catch (error) {
        tareaPorHAcer = [];
    }

};

const publicar = (file, country, year) => {
    lecturacsv(file);
    cargarDB();

    todo.push(medxanio(year));
    todo.push(media(country, year));
    todo.push(mayores(country, year));
    todo.push(menores(country, year));
    todo.push(topcinco(year));
    let top = {
        MediaxAnio: medxanio(year),
        Menor_Mayor: media(country, year),
        Menores: menores(country, year),
        Mayores: mayores(country, year),
        top5: topcinco(year),
    };
    srv.escribir(top);
    //srv.escribir(todo);
    // return todo;
    //pag.escrib(todo);
    //pag.list()


};

//guardar en json
const guardar = async(file, country, year, out) => {
    getR(file)

    cargarDB();
    let top = {
        MediaxAnio: medxanio(year).then(men => vec.push(men)).catch(err => err),
        Menor_Mayor: media(country, year).then(men => men).catch(err => err),
        Menores: menores(country, year).then(men => men).catch(err => err),
        Mayores: mayores(country, year).then(men => men).catch(err => err),
        top5: topcinco(year).then(men => men).catch(err => err)
    };
    vect.push(top);
    escribirjson(out);

    return 'Guardado completo';
};

const escribirjson = (out) => {
    let data = JSON.stringify(vect);
    fs.writeFile(`./modelo/${out}.json`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
};
//Wendy Juma
const medxanio = async(year) => {
    let acum = 0;
    let tam = tareaPorHAcer.length - 4;
    vec = []
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
    guardar,
    publicar,
};