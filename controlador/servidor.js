const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const escribir = (vector) => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        let titulos = ["La media de suscripciones de todos los países en el año especificado.", "Establecer si el valor de las suscripciones del país determinado, es mayor o menor a la media mundial.", "Los cinco países por encima del valor de suscripciones del país determinado.", "Los cinco países por debajo del valor de suscripciones del país determinado.", "El top cinco de países para el año especificado."];
        let template = '';

        template += `<label>${titulos[0]}</label></br>`;
        template += `<label>Año: ${vector[0][0].anio} Media: ${vector[0][0].media}</label></br>`;

        template += `<label>${titulos[1]}</label></br>`;
        template += `<label>Pais: ${vector[1][0].pais} Media Pais: ${vector[1][0].medpais} Estado: ${vector[1][0].estado}</label></br>`;

        for (let i = 2; i < vector.length; i++) {
            template += `<label>${titulos[i]}</label></br>`;
            for (let j = 0; j < vector.length; j++) {
                template += `</label>Codigo: ${vector[i][j].codigo} Valor: ${vector[i][j].valor}</label></br>`;
            }
        }

        //template += `<a href="#">Hola mundo</a>`
        res.write(template)
        res.end('');
    }).listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });


}
module.exports = {
    escribir
}