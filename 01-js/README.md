# JS

- En JS existe el estandar de doble precisión (64 bits) para representar números. Para saber cual es el valor máximo y mínimo que puede tener un número en JS, podemos usar las siguientes propiedades:
  - `Number.SAFE_MAX_INTEGER`: 9007199254740991
  - `Number.SAFE_MIN_INTEGER`: -9007199254740991
- Si se tiene que utilizar un número mayor a estos valores, se recomienda usar `BigInt`, el cual permite representar números enteros de tamaño arbitrario.
- Para crear un `BigInt`, se puede agregar una `n` al final del número o usar la función `BigInt()`. Ejemplo:
  - `const bigInt1 = 9007199254740992n;`
  - `const bigInt2 = BigInt("9007199254740993");`

## Tipos de datos en JS

- En JavaScript, existen varios tipos de datos primitivos, entre ellos:
  - `Number`: para representar números (enteros y decimales).
  - `String`: para representar cadenas de texto.
  - `Boolean`: para representar valores lógicos (`true` o `false`).
  - `BigInt`: para representar enteros de tamaño arbitrario.
  - `Symbol`: para representar identificadores únicos.
  - `undefined`: para representar una variable que no ha sido asignada.
  - `null`: para representar la ausencia intencional de cualquier valor.

## Folsy values

- En JavaScript, los valores "falsy" son aquellos que se evalúan como `false` en un contexto booleano. Los valores "falsy" en JS son:
  - `false`
  - `0`
  - `-0`
  - `0n` (BigInt cero)
  - `""` (cadena vacía)
  - `null`
  - `undefined`
  - `NaN` (Not a Number)
- Cualquier valor que no sea "falsy" se considera "truthy" y se evalúa como `true` en un contexto booleano.
