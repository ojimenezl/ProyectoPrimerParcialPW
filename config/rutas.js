const express = require('express');
const router = express.Router()

const imprimir = require('../controlador/control')

var year = "2018"
var country = "ECU"

router.get('/', (req, res) => {
    const top = imprimir.pag("./modelo/data.json", country, year)
        // console.log(top);

    res.render('index', { top });

});


// const top = imprimir.guardar("./modelo/data.json", country, year)
//     console.log(top);

//     res.render('index', { top });


// router.post('/add',(req,res)=>{

//     res.send('listo')
// })


module.exports = router