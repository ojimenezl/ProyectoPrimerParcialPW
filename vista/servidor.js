const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//const rutas = require('../config/rutas')
//const methodOverride = require('method-override');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const router = express.Router()

const escribir = (vector, y, c) => {
    app.set('port', process.env.PORT || 3000);

    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'pantallas'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    app.use(router)

    router.get('/', (req, res) => {
        //const top = imprimir.pag("./modelo/data.json", country, year)
        // console.log(top);
        let top = vector;
        res.render('index', { top, y, c });

    });

    //app.use(express.static(path.join(__dirname, 'public')))
    app.listen(app.get('port'), () => {
        console.log(`server on port:  http://localhost:${app.get('port')}`);
    });

};
module.exports = {
    escribir
}