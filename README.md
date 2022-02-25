# ML Test
### Pueba front-end ingreso a Mercado libre

La prueba esta realizada con la libreria ReactJS usando TypeScript, haciendo consumo de la 
API de ML.

## Installation

Clonar del repositorio GitHub https://github.com/hmaussa24/ml-test.

una vez clonado ingresar al folder del proyecto y ejecutar el comando para instalar las librerias necesarias 


```sh
npm install
```

o bien 

```sh
npm i
```
recuenda que debes tener instalado NodeJS en tu maquina para que puedas ejecutar el proyecto


## Test Unitarios

Para ejecutar los test debes ingresar al folder del del proyesto y ejecutar el siguiete comando

```sh
npm run test
```

## Development

la aplicacion cuenta con tres Ulr's en las cuales puedes ingresar.

la principal 

```sh
http://localhost:3000/
```
Mostrara una primera pantalla con una caja de busqueda en la cual podras buscar productos ingresando las palabras claves que desees.

la Segunda es:

```sh
http://localhost:3000/items?search=:query
```

siendo ":query" remplazada por los parametros de busqueda que usted ingrese. 

ejemplo

```sh
http://localhost:3000/items?search=Phone
```

dara como resultado la busqueda de productos que coinsidad con la palabra "Phone"

y la tercera:

```sh
http://localhost:3000/items/:id
```
Coresponde al detalle de un producto, recuerde que en la segunda vista usted puede dar click en un producto y sera redirigido a la tercera Url, o puede indresar directamente a esta url ingresando un id de producto

ejemplo

```sh
http://localhost:3000/items/MLA706993979
```

siendo "MLA706993979" el id de un producto en ML