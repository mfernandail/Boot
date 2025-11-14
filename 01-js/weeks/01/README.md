# Semana 1-2: Arrays y Objetos

1. Métodos de arrays: map, filter, reduce, forEach
2. Spread operator y destructuring
3. Métodos de objetos (Object.keys, values, entries)
4. Referencias vs valores primitivos

## 1. Métodos de arrays

map, filter, reduce y forEach son métodos muy útiles para trabajar con arrays en JavaScript.

### Conceptos clave:

- `forEach`: itera sobre cada elemento del array y ejecuta una función. No retorna nada.
- `map`: transforma cada elemento del array y retorna un nuevo array con los resultados.
- `filter`: crea un nuevo array con los elementos que cumplen una condición.
- `reduce`: reduce el array a un solo valor acumulando los resultados de una función.

### Historio

- Se incluyeron el 2009 con ES5 para programación funcional.
- Antes se usaban bucles tradicionales (for, while).
- El metodo con mejor rencimiento es forEach, pero map, filter y reduce son más expresivos.
- Dependiendo del caso de uso, uno puede ser más adecuado que otro.

### Bugs comunes:

- Olvidar retornar un valor en `map` o `reduce`. Si no se retorna, el resultado será `undefined`.
- Modificar el array original dentro de `forEach`, `map` o `filter`, lo que puede causar resultados inesperados.
- Usar `reduce` sin un valor inicial, lo que puede causar errores si el array está vacío.

## 2. Spread operator y destructuring

### Spread operator

El spread operator (`...`) y el destructuring son características de ES6 que facilitan la manipulación de arrays y objetos. Copia superficial esto significa que solo copia el primer nivel de propiedades, no las anidadas.

#### Conceptos clave:

- Spread operator (`...`): permite expandir elementos de un array u objeto. Esto significa que crea una copia superficial.
- Fue introducido en ES6 (2015).
- Reemplazo metodos como `Array.prototype.slice()` para copiar arrays y `Object.assign()` para copiar objetos.

#### Bugs comunes:

- Shallow copy: El spread operator crea una copia superficial, lo que significa que si el array u objeto contiene otros objetos o arrays, solo se copiarán las referencias a esos objetos, no los objetos en sí. Esto puede llevar a modificaciones no deseadas en los datos originales.
- Confundir spread con rest parameters: Aunque ambos usan `...`, el spread operator se usa para expandir elementos, mientras que los rest parameters se usan para agrupar múltiples elementos en un solo array.
- El uso execesivo del spread operator puede afectar el rendimiento, especialmente con arrays u objetos grandes, ya que crea copias adicionales en memoria.

### Destructuring

El destructuring permite extraer valores de arrays u objetos y asignarlos a variables de manera más concisa. Ademas permite que la asignacion de valores por defecto en caso de que la propiedad no exista y asignacion a variables con nombres diferentes.

#### Conceptos clave:

- Destructuring: permite extraer valores de arrays u objetos y asignarlos a variables.
- Introducido en ES6 (2015).

#### Bugs comunes:

- Intentar destructurar `undefined` o `null`, lo que genera un error.
- `const { x = 4 } = { x = null }` no asigna el valor por defecto, ya que `x` existe pero es `null`.
- Confundir la sintaxis de destructuring para arrays y objetos.

## 3. Métodos de objetos

### Object.keys, Object.values, Object.entries

Estos métodos permiten obtener las claves, valores o pares clave-valor de un objeto como arrays.

#### Conceptos clave:

- `Object.keys(obj)`: retorna un array con las claves del objeto.
- `Object.values(obj)`: retorna un array con los valores del objeto.
- `Object.entries(obj)`: retorna un array de arrays con pares [clave, valor].
- `Object.keys` se introdujo en ES5 (2009).
- `Object.values` y `Object.entries` se introdujeron en ESS2017/ES8.

#### Bugs comunes:

- El orden de las claves en `Object.keys` no está garantizado para objetos normales (aunque en la práctica suele ser consistente).
- Confución con hasOwnProperty: for...in itera sobre todas las propiedades enumerables, incluidas las heredadas, mientras que Object.keys solo devuelve las propiedades propias del objeto.

### Ejemplos:

```javascript
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) // ['a', 'b', 'c']
console.log(Object.values(obj)) // [1, 2, 3]
console.log(Object.entries(obj)) // [['a', 1], ['b', 2], ['c', 3]]
```

## 4. Referencias vs valores primitivos

- Los valores primitivos son string, number, boolean, null, undefined, symbol, bigint.
- Los valores por referencia son objetos (incluyendo arrays y funciones). El type of de un objeto es "object". Y el de un array es "object" tambien. Y el de una funcion es "function".
