const fs = require("fs"); // filesystem
const srv = require("../vista/servidor");
const est = require("./estadistica");
//const pag = require("./config/lista");
let tareaPorHAcer = [];


//publicar en la web
const publicar = (file, country, year) => {
    est.getE(file, country, year).then(v => srv.escribir(v)).catch(msg => console.log(msg.message));
};

//guardar en json
const guardar = (file, country, year, out) => {
    est.getE(file, country, year).then(v => escribirjson(out, v)).catch(msg => console.log(msg.message));
};
//Guardando en json
const escribirjson = (out, vect) => {
    let data = JSON.stringify(vect);
    fs.writeFile(`./modelo/${out}.json`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
};

module.exports = {
    publicar,
    guardar
}