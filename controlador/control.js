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
        .on('data', (row) => {

        }) // Pasarlo al parseador a través de una tubería
        .on("end", () => { // Y al finalizar, terminar lo necesario
            //console.log(vector);
            let data = JSON.stringify(vector);
            fs.writeFileSync('modelo/data.json', data, (err) => {
                if (err) throw new Error('No se pudo guarda la data', err);
            })
            console.log("Se ha terminado de leer el archivo");
        });
    //console.log(vector);
    cargarDB()

    console.log(tareaPorHAcer[3][2]);
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