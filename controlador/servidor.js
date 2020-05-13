const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const escribir = (vector) => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        //console.log(vector);
        let template = '';
        for (let i of vector) {
            template += `<h2>Codigo:<label>${i.codigo}</label></h2>  <h2>Valor:<label>${i.valor}</label></h2> `
        }
        template += `<a href="#">Hola mundo</a>`
        res.write(template)
        res.end('');
    }).listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });


}
module.exports = {
    escribir
}