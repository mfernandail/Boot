## Array methods

| Método          | Qué hace                                               | Qué retorna                             | Performance (aprox.)                                                        |
| --------------- | ------------------------------------------------------ | --------------------------------------- | --------------------------------------------------------------------------- |
| **forEach**     | Itera sobre cada elemento y ejecuta una función        | `undefined`                             | ⭐⭐⭐⭐☆ (rápido) — similar a un `for`, pero sin break/continue            |
| **map**         | Crea un nuevo array transformando cada elemento        | Nuevo array transformado                | ⭐⭐⭐⭐☆ — rápido, un poco más lento que `forEach` por crear array nuevo   |
| **filter**      | Filtra elementos que cumplan una condición             | Nuevo array filtrado                    | ⭐⭐⭐☆☆ — más costoso que `map` porque evalúa condición y crea array nuevo |
| **reduce**      | Acumula valores en un único resultado                  | Cualquier tipo (número, objeto, array…) | ⭐⭐☆☆☆ — más lento que `map`/`filter` por su flexibilidad                  |
| **find**        | Encuentra el primer elemento que cumpla la condición   | Valor encontrado o `undefined`          | ⭐⭐⭐⭐⭐ — muy rápido, se detiene al encontrar resultado                  |
| **findIndex**   | Igual que `find` pero retorna el índice                | Índice o `-1`                           | ⭐⭐⭐⭐⭐ — muy rápido                                                     |
| **some**        | Verifica si _algún_ elemento cumple la condición       | `true` / `false`                        | ⭐⭐⭐⭐⭐ — muy rápido, se detiene temprano                                |
| **every**       | Verifica si _todos_ los elementos cumplen la condición | `true` / `false`                        | ⭐⭐⭐⭐☆ — se detiene al encontrar un falso                                |
| **flat**        | Aplana arrays anidados                                 | Nuevo array                             | ⭐⭐☆☆☆ — costoso si la profundidad es grande                               |
| **flatMap**     | Combina `map` + `flat(1)`                              | Nuevo array aplanado                    | ⭐⭐☆☆☆ — más lento que `map`                                               |
| **sort**        | Ordena el array (mutando el original)                  | El mismo array ordenado                 | ⭐☆☆☆☆ — uno de los métodos más pesados (O(n log n))                        |
| **reduceRight** | Igual que reduce pero en orden inverso                 | Cualquier tipo                          | ⭐⭐☆☆☆ — igual costo que reduce                                            |
| **concat**      | Une arrays (sin mutar)                                 | Nuevo array unido                       | ⭐⭐⭐☆☆ — depende del tamaño de los arrays                                 |
| **includes**    | Verifica si existe un valor                            | `true` / `false`                        | ⭐⭐⭐⭐⭐ — búsqueda muy rápida                                            |
| **push**        | Agrega al final (muta array)                           | Nueva longitud                          | ⭐⭐⭐⭐⭐ — muy rápido                                                     |
| **pop**         | Quita del final (muta array)                           | Elemento quitado                        | ⭐⭐⭐⭐⭐ — muy rápido                                                     |
| **shift**       | Quita el primer elemento (muta array)                  | Elemento quitado                        | ⭐☆☆☆☆ — muy lento (reindexa todo el array)                                 |
| **unshift**     | Agrega al inicio (muta array)                          | Nueva longitud                          | ⭐☆☆☆☆ — muy lento por reindexado                                           |
| **slice**       | Corta una parte del array (no muta)                    | Nuevo array                             | ⭐⭐⭐⭐☆ — rápido en arrays pequeños/medianos                              |
| **splice**      | Agrega/borra en posiciones específicas (muta)          | Elementos removidos                     | ⭐☆☆☆☆ — costoso, reindexa y muta                                           |
| **indexOf**     | Busca un elemento y retorna su índice                  | Índice o `-1`                           | ⭐⭐⭐⭐☆ — rápido en arrays pequeños/medianos                              |
| **reverse**     | Invierte el orden del array (muta)                     | El mismo array invertido                | ⭐⭐⭐☆☆ — costo moderado, muta el array original                           |
| **join**        | Une todos los elementos en un string                   | String                                  | ⭐⭐⭐⭐☆ — rápido, depende del tamaño del array                            |
| **fill**        | Rellena el array con un valor (muta)                   | El mismo array relleno                  | ⭐⭐⭐⭐☆ — rápido, muta el array                                           |
| **split**       | Divide un string en un array                           | Nuevo array                             | ⭐⭐⭐⭐☆ — rápido, depende del tamaño del string                           |

## Formas de clonas un array

Hay varias formas de clonar un array sin mutar el original:

```js
const original = [1, 2, 3]

const copia1 = original.slice()
const copia2 = original.slice(0)
const copia3 = [...original]
const copia4 = Array.from(original)
```

## Flat

`flat()` crea un nuevo array aplanando sub-arrays hasta la profundidad especificada (por defecto 1):

```js
const profundo = [1, [2, [3, [4, 5]]]]

profundo.flat() // [1, 2, [3, [4, 5]]] - 1 nivel (default)
profundo.flat(2) // [1, 2, 3, [4, 5]] - 2 niveles
profundo.flat(Infinity) // [1, 2, 3, 4, 5] - todos los niveles
```

## FlatMap

`flatMap()` primero mapea cada elemento y luego aplana el resultado en un solo array. Es equivalente a hacer `map()` seguido de `flat(1)`:

```js
const palabras = ['Hola mundo', 'Cómo estás']
const resultado = palabras.flatMap((frase) => frase.split(' '))
// ["Hola", "mundo", "Cómo", "estás"]
```

## Performance relativa de métodos de array

| Método           | Tiempo relativo | Observaciones                          |
| ---------------- | --------------- | -------------------------------------- |
| `for`            | 1x (baseline)   | Más rápido                             |
| `for…of`         | ~1.1x           | Muy cercano                            |
| `reduce`         | ~1.3x – 1.5x    | Callback overhead                      |
| `forEach`        | ~1.4x           | Similar a reduce                       |
| `map`            | ~1.5x – 1.7x    | Crea nuevo array                       |
| `filter`         | ~1.6x – 1.8x    | También crea array                     |
| `flatMap`        | ~2x             | Hace dos operaciones internas          |
| `some` / `every` | ~1.1x – 1.3x    | Puede ser más rápido si rompe temprano |
