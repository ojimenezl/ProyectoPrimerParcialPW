const argv = require('./config/yargs').argv;
const control = require('./controlador/control')
const colors = require('colors');
let comando = argv._[0];
// bucle
switch (comando) {
    case 'publicar':

        break;
    case 'guardar':
        let guardar = control.guardar(argv.file, argv.country, argv.year, argv.out)
            //console.log(guardar);
        break;
    default:
        console.log('Comando no reconocido');
}
//santy