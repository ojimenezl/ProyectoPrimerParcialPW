const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//const methodOverride = require('method-override');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const escribir = (vector) => {

    app.set('port', process.env.PORT || 3000);

    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'pantallas'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    app.use(require('../config/rutas'))

    //app.use(express.static(path.join(__dirname, 'public')))
    app.listen(app.get('port'), () => {
        console.log(`server on port:  http://localhost:${app.get('port')}`);
    });
}
module.exports = {
    escribir
}