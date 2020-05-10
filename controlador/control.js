const fs = require('fs'); // filesystem
const csv = require('csv-parser'); // Encargado de parsear
let vector = [];

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
        .on('data', row => vector.push(row)) // Pasarlo al parseador a través de una tubería
        .on("end", () => { // Y al finalizar, terminar lo necesario
            //console.log(vector);
            let data = JSON.stringify(vector);
            fs.writeFileSync('modelo/data.json', data, (err) => {
                if (err) throw new Error('No se pudo guarda la data', err);
            })
            console.log("Se ha terminado de leer el archivo");
        });
    console.log(vector);


}

module.exports = {
    guardar
}

//santiago lema