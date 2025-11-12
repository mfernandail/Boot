# JS

- En JS existe el estandar de doble precisión (64 bits) para representar números. Para saber cual es el valor máximo y mínimo que puede tener un número en JS, podemos usar las siguientes propiedades:
  - `Number.SAFE_MAX_INTEGER`: 9007199254740991
  - `Number.SAFE_MIN_INTEGER`: -9007199254740991
- Si se tiene que utilizar un número mayor a estos valores, se recomienda usar `BigInt`, el cual permite representar números enteros de tamaño arbitrario.
- Para crear un `BigInt`, se puede agregar una `n` al final del número o usar la función `BigInt()`. Ejemplo:
  - `const bigInt1 = 9007199254740992n;`
  - `const bigInt2 = BigInt("9007199254740993");`
