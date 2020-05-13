const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const escribir = (vector) => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        let template = '';
        console.log("Pr", vector[0][0].anio);
        template += vector[0][0].anio;
        /*
        for (let i o) {
            //template += `<h2>Codigo:<label>${i.codigo}</label></h2>  <h2>Valor:<label>${i.valor}</label></h2> `
            //console.log(vector[i]);
        }
        */
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