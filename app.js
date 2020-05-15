const argv = require('./config/yargs').argv;
const control = require('./controlador/control')
let comando = argv._[0];
//Oscar
switch (comando) {
    case 'publicar':
        control.publicar(argv.file, argv.country, argv.year)
        break;
    case 'guardar':
        control.guardar(argv.file, argv.country, argv.year, argv.out).then(men => console.log(men));
        break;
    default:
        console.log('Comando no reconocido');
}
//linea de cometario para ver