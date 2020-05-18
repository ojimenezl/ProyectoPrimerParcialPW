## Suscripciones a telefonía celular móvil.

Crear una aplicación en NodeJS que permita leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico.

## Comenzando.

Esta instrucción permitira ejecutar la aplicación del proyecto en funcionamiento, para propósito de pruebas.

- Instalar el proyecto por medio de: https://github.com/ojimenezl/ProyectoPrimerParcialPW.git

### Pre-requisitos 📋

Para poder ejecutar la aplicación se requiere instalar el siguiente comando.

```html
npm i
```

### Ayuda

Este comando nos despliega unas opciones de ayuda para poder ejecutar la aplicación.

```html
node app guardar -help
```

```html
node app publicar -help
```

## Ejecutando las pruebas ⚙️

Al ingresar a la siguiente página: https://datos.bancomundial.org/indicador/IT.CEL.SETS
Esta nos indicara los años y paises disponibles para poder guiarse y hacer las consultas en esta aplicación.

Tomando en cuenta que en -f se deberá ingresar el path del csv
y en -o el nombre del archivo donde se guardarán los respectivos reportes.

Ejecutar una prueba de guardar. (Ejemplo)

- node app guardar -f ./modelo/doc.csv -y 2018 -c ECU -o reporte

Ejecutar una prueba de publicar. (Ejemplo)

- node app publicar -f ./modelo/doc.csv -y 2018 -c ECU

Al ejecutar el comando de publicar se le presentara el siguiente link que se dirigira a la página web: http://localhost:3000

### Análisis de prueba por consola 🔩

Enfocandose en la consulta hecha anteriormente se desplegará la siguiente información:

- La media de suscripciones de todos los países en el año especificado.

```html
LA MEDIA DEL 2018 ES 308242982
```

- Establecer si el valor de las suscripciones del país
  determinado, es mayor o menor a la media mundial.

```
El valor de las suscripciones del pais ECU:(15772838) es Menor a la media mundial:(308242982.1628788) en el año 2018
```

- Los cinco países por encima del valor de suscripciones del
  país determinado.

```
TOP | AÑO | PAISES | SUSCRIPCIONES
1 | 2018 | SEN | 16559942

2 | 2018 | SYR | 17129676

3 | 2018 | CMR | 18455836

4 | 2018 | BFA | 19339109

5 | 2018 | KHM | 19417123
```

- Los cinco países por debajo del valor de suscripciones del
  país determinado.

```
TOP | AÑO | PAISES | SUSCRIPCIONES
1 | 2018 | ZMB | 15470270

2 | 2018 | YEM | 15297789

3 | 2018 | TUN | 14769594

4 | 2018 | MOZ | 14074248

5 | 2018 | AGO | 13288421
```

- El top cinco de países para el año especificado.

```
CODIGO | VALOR
WLD | 7858266808

IBT | 6400236446

LMY | 6316274525

MIC | 5970863639

IBD | 5194063717
```

## Despliegue 📦

Implementación de gráficas y tablas en la página web.

## Construido con 🛠️

Las herramientas que utilizamos son:

- Node.js
- Json
- HBS
- Html

## Recursos 📖

Los recursos utilizados han sido los siguientes:

- https://www.campusmvp.es/recursos/post/5-bibliotecas-javascript-para-creacion-de-graficas-y-visualizaciones.aspx

- https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM

- https://desarrolloweb.com/articulos/1235.phps

## Autores ✒️

- _Nicolas Carrasco_
- _Oscar Jimenez_
- _Wendy Juma_
- _Eduardo Quisupangui_
- _Kevin Ramirez_

También puedes mirar la lista de todos los [contribuyentes](https://github.com/ojimenezl/ProyectoPrimerParcialPW/graphs/contributors) quíenes han participado en este proyecto.

## Expresiones de Gratitud 🎁

- Gracias a todos los integrantes que han realizado este proyecto, el cual se ha podido culminar por medio del trabajo en equipo 🍺 🍺 🍺 🍺 🍺.

- Esperamos que este aporte sea de gran ayuda para la gente que lo visita.
