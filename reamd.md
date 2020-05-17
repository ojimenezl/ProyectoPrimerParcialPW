## Suscripciones a telefonía celular móvil.

Crear una aplicación en NodeJS que permita leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico.

```html
<p style="color:red">This is some red text.</p>
```

```diff
+ this will be highlighted in green
- this will be highlighted in red
```

- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Holaaaaaaaaa`
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `#c5f015`
- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `#1589F0`

## Comenzando.

Esta instrucción permitira ejecutar la aplicación del proyecto en funcionamiento, para propósito de pruebas.

- Instalar el proyecto por medio de: https://github.com/ojimenezl/ProyectoPrimerParcialPW.git

### Pre-requisitos 📋

Para poder ejecutar la aplicación se requiere instalar el siguiente comando.

- npm i

### Ayuda

Este comando nos despliega unas opciones de ayuda para poder ejecutar la aplicación.

- node app guardar -help

- node app publicar -help

## Ejecutando las pruebas ⚙️

Al ingresar a la siguiente página: https://datos.bancomundial.org/indicador/IT.CEL.SETS
Esta nos indicara los años y paises disponibles para poder guiarse y hacer las consultas en nuestra aplicación.

Ejecutar una prueba de guardar. (Ejemplo)

- node app guardar -f ./modelo/API.csv -y 2017 -c KOR -o Hola

Ejecutar una prueba de publicar. (Ejemplo)

- node app publicar -f ./modelo/API.csv -y 2017 -c KOR

Por medio de este link se dirigira a la página web: http://localhost:3000

### Analice las pruebas end-to-end 🔩

- La media de suscripciones de todos los países en el año
  especificado.
- • Establecer si el valor de las suscripciones del país
  determinado, es mayor o menor a la media mundial.
- Los cinco países por encima del valor de suscripciones del
  país determinado.

  LOS 5 PAISES CON MAYORES SUSCRIPCIONES QUE ECU
  SU CONSULTA:

  ECU - 2018 | 15772838

TOP | AÑO | PAISES | SUSCRIPCIONES

1 | 2018 | SEN | 16559942

2 | 2018 | SYR | 17129676

3 | 2018 | CMR | 18455836

4 | 2018 | BFA | 19339109

5 | 2018 | KHM | 19417123

- Los cinco países por debajo del valor de suscripciones del
  país determinado.
- El top cinco de países para el año especificado.

TOP DE LOS 5 PAISES POR AÑO 2018
CODIGO | VALOR
WLD | 7858266808
IBT | 6400236446
LMY | 6316274525
MIC | 5970863639
IBD | 5194063717

### Y las pruebas de estilo de codificación ⌨️

Explica que verifican estas pruebas y por qué

Da un ejemplo

## Despliegue 📦

Agrega notas adicionales sobre como hacer deploy

## Construido con 🛠️

Menciona las herramientas que utilizaste para crear tu proyecto

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
- [Maven](https://maven.apache.org/) - Manejador de dependencias
- [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios

- _Andrés Villanueva_ - Trabajo Inicial - [villanuevand](https://github.com/villanuevand)
- _Fulanito Detal_ - Documentación - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.

---

⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊
