const argv = require('./config/yargs').argv;
const control = require('./controlador/control')
let comando = argv._[0];
//Oscar
switch (comando) {
    case 'publicar':
        control.publicar(argv.file, argv.country, argv.year)
        break;
    case 'guardar':
        control.guardar(argv.file, argv.country, argv.year, argv.out).then(men => console.log(men)).catch(err => console.log(err.message));
        break;
    default:
        console.log('Comando no reconocido');
}
//linea de cometario para ver
// for (let tarea of lista) {
//     //console.log(tarea.des);
//     if (tarea.completado != argv.lista) {
//         console.log(`Descripcion: ${tarea.des}\nCompletado: ${tarea.completado}\n`);
//     }
// }