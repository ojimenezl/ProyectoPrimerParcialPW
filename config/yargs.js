const file = {
    demand: true,
    alias: "f",
    desc: "Path csv",
};
const country = {
    alias: "c",
    desc: "Codigo de pais",
};
const year = {
    alias: "y",
    default: "2018",
    desc: "Año",
};
const out = {
    demand: true,
    alias: "o",
    desc: "Path json",
};
const argv = require("yargs")
    .command("publicar", "Crear una tarea", {
        file,
        country,
        year,
    })
    .command("guardar", "Actualizo una tarea", {
        file,
        country,
        year,
        out,
    }).argv;
module.exports = {
    argv,
};
//cambio