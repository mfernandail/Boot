# Rutas

## Rutas absolutas

- Se escriben desde la raíz del proyecto.
- Ejemplo: `/src/utils.js` o `/lib/helpers.js`
- Se puede mover con ejemplo:

```js
cd /
cd/home/user/project
cd src
```

## Rutas relativas

- Se escriben en relación a la ubicación del archivo que las importa.
- Ejemplo: `./utils.js` o `../helpers.js`
- Si el fichero empieza con punto (.) `.congif/` significa que es una carpeta oculta.
- Se puede mover con ejemplo:

```js
cd ...
cd home && cd user && cd project
cd .. && cd .. && cd lib
```

# Creacion

- Para crear un archivo o carpeta, se puede usar el comando `touch` para archivos y `mkdir` para carpetas.
- Ejemplo para crear un archivo: `touch src/utils.js`
- Ejemplo para crear una carpeta: `mkdir src/components`
- También se pueden crear ambos al mismo tiempo: `mkdir src && touch src/utils.js`
