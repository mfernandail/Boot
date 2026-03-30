# 🔄 Valores vs Referencias en JavaScript

Entender cómo JavaScript maneja valores y referencias es fundamental para evitar bugs y escribir código predecible.

---

## Concepto Fundamental

JavaScript maneja dos tipos de datos de forma diferente:

1. **Tipos primitivos** → se pasan por **valor**
2. **Tipos de referencia** → se pasan por **referencia**

---

## Tipos Primitivos (Por Valor)

**Primitivos:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

```js
let a = 10
let b = a // Copia el VALOR

b = 20

console.log(a) // 10 (no cambió)
console.log(b) // 20
```

### Lo que pasa en memoria:

```
Stack (Pila):
a → 10
b → 20
```

Cada variable tiene su **propia copia** del valor. Son independientes.

### Ejemplos con diferentes primitivos:

```js
// Números
let x = 5
let y = x
y = 10
console.log(x) // 5 (no cambió)

// Strings
let nombre1 = 'María'
let nombre2 = nombre1
nombre2 = 'Juan'
console.log(nombre1) // 'María' (no cambió)

// Booleanos
let activo1 = true
let activo2 = activo1
activo2 = false
console.log(activo1) // true (no cambió)
```

---

## Tipos de Referencia (Por Referencia)

**Referencias:** `object`, `array`, `function`, `date`, `regexp`

```js
let obj1 = { nombre: 'María' }
let obj2 = obj1 // Copia la REFERENCIA (no el objeto)

obj2.nombre = 'Juan'

console.log(obj1.nombre) // 'Juan' (¡cambió!)
console.log(obj2.nombre) // 'Juan'
```

### Lo que pasa en memoria:

```
Stack (Pila):           Heap (Montón):
obj1 → ref123          ref123: { nombre: 'Juan' }
obj2 → ref123          ↑
       └───────────────┘
```

Ambas variables apuntan al **mismo objeto** en memoria.

---

## Visualización con Arrays

```js
const arr1 = [1, 2, 3]
const arr2 = arr1 // Copia la referencia

arr2.push(4) // Modifica el array

console.log(arr1) // [1, 2, 3, 4] (¡cambió!)
console.log(arr2) // [1, 2, 3, 4]

arr1 === arr2 // true (misma referencia)
```

**Diagrama:**

```
Stack:              Heap:
arr1 → ref456      ref456: [1, 2, 3, 4]
arr2 → ref456             ↑
       └──────────────────┘
```

---

## Copiar vs Referenciar

### ❌ Esto NO copia el objeto:

```js
const original = { a: 1, b: 2 }
const copia = original // Solo copia la referencia

copia.a = 999
console.log(original.a) // 999 (modificó el original)

original === copia // true (misma referencia)
```

### ✅ Copias superficiales (Shallow Copy):

```js
const original = { a: 1, b: 2 }

// Opción 1: Spread operator (recomendado)
const copia1 = { ...original }

// Opción 2: Object.assign
const copia2 = Object.assign({}, original)

// Opción 3: Para arrays - spread
const arr = [1, 2, 3]
const arrCopia = [...arr]

// Opción 4: Para arrays - slice
const arrCopia2 = arr.slice()

// Opción 5: Para arrays - Array.from
const arrCopia3 = Array.from(arr)

// Ahora son independientes
copia1.a = 999
console.log(original.a) // 1 (no cambió)
original === copia1 // false (diferente referencia)
```

---

## Problema: Objetos Anidados

```js
const persona = {
  nombre: 'María',
  direccion: {
    ciudad: 'Santiago',
    pais: 'Chile',
  },
}

const copia = { ...persona } // Shallow copy (copia superficial)

copia.nombre = 'Juan' // ✅ No afecta el original
console.log(persona.nombre) // 'María'

copia.direccion.ciudad = 'Valparaíso' // ❌ SÍ afecta el original
console.log(persona.direccion.ciudad) // 'Valparaíso' (¡cambió!)
```

### ¿Por qué?

El spread operator solo copia el **primer nivel**. Los objetos anidados siguen siendo **referencias**.

```
Stack:                     Heap:
persona → ref1            ref1: { nombre: 'María', direccion: ref2 }
copia → ref3              ref3: { nombre: 'Juan', direccion: ref2 }
                          ref2: { ciudad: 'Valparaíso', pais: 'Chile' }
                                 ↑                       ↑
                                 └───────────────────────┘
                          Ambos apuntan a la misma direccion
```

---

## Copia Profunda (Deep Copy)

### Opción 1 - JSON (simple pero limitado):

```js
const copiaProf = JSON.parse(JSON.stringify(original))
```

**⚠️ Limitaciones de JSON:**

- ❌ No copia funciones
- ❌ No copia `undefined`
- ❌ No copia `Date` correctamente (convierte a string)
- ❌ No copia `RegExp`, `Map`, `Set`
- ❌ No maneja referencias circulares
- ❌ No copia símbolos

```js
const obj = {
  fecha: new Date(),
  funcion: () => {},
  undefined: undefined,
  simbolo: Symbol('test'),
}

const copia = JSON.parse(JSON.stringify(obj))
console.log(copia)
// { fecha: "2026-01-29T..." }
// Perdió: funcion, undefined, simbolo
```

### Opción 2 - Recursiva manual:

```js
function copiarProfundo(obj) {
  // Primitivos y null
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => copiarProfundo(item))
  }

  // Objetos
  const copia = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copia[key] = copiarProfundo(obj[key])
    }
  }
  return copia
}

const original = {
  nombre: 'María',
  datos: {
    edad: 25,
    hobbies: ['leer', 'correr'],
  },
}

const copia = copiarProfundo(original)
copia.datos.hobbies.push('nadar')

console.log(original.datos.hobbies) // ['leer', 'correr'] (no cambió)
console.log(copia.datos.hobbies) // ['leer', 'correr', 'nadar']
```

### Opción 3 - Librería (lodash):

```js
import { cloneDeep } from 'lodash'

const copia = cloneDeep(original)
// Copia todo correctamente: funciones, fechas, referencias circulares, etc.
```

### Opción 4 - structuredClone (moderno, nativo):

```js
const copia = structuredClone(original)
```

**Ventajas:**

- ✅ Copia fechas, RegExp, Map, Set
- ✅ Maneja referencias circulares
- ✅ Más rápido que JSON.parse/stringify
- ⚠️ No copia funciones (las ignora)

```js
const obj = {
  fecha: new Date(),
  mapa: new Map([['a', 1]]),
  datos: { nivel: { profundo: true } },
}

const copia = structuredClone(obj)
copia.datos.nivel.profundo = false
console.log(obj.datos.nivel.profundo) // true (no cambió)
```

---

## Comparación de Objetos

```js
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, b: 2 }
const obj3 = obj1

// Comparación de referencias
obj1 === obj2 // false (diferentes objetos en memoria)
obj1 === obj3 // true (misma referencia)

// Para comparar contenido:
JSON.stringify(obj1) === JSON.stringify(obj2) // true (mismo contenido)

// Función para comparar objetos
function sonIguales(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

// O comparación profunda manual
function compararProfundo(obj1, obj2) {
  if (obj1 === obj2) return true
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false
  if (obj1 === null || obj2 === null) return false

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  return keys1.every((key) => compararProfundo(obj1[key], obj2[key]))
}
```

---

## En Funciones

### Por Valor (Primitivos):

```js
function modificar(x) {
  x = 100
  console.log('Dentro:', x) // 100
}

let num = 10
modificar(num)
console.log('Fuera:', num) // 10 (no cambió)
```

La función recibe una **copia** del valor.

### Por Referencia (Objetos):

```js
function modificar(obj) {
  obj.nombre = 'Juan' // Modifica el objeto original
  console.log('Dentro:', obj.nombre) // 'Juan'
}

const persona = { nombre: 'María' }
modificar(persona)
console.log('Fuera:', persona.nombre) // 'Juan' (cambió)
```

La función recibe una **referencia** al objeto.

### Reasignación en funciones:

```js
function reasignar(obj) {
  obj = { nombre: 'Pedro' } // Crea nuevo objeto local
  console.log('Dentro:', obj.nombre) // 'Pedro'
}

const persona = { nombre: 'María' }
reasignar(persona)
console.log('Fuera:', persona.nombre) // 'María' (no cambió)
```

**¿Por qué no cambió?**

La reasignación (`=`) solo cambia la referencia **local** de la función, no afecta la referencia original.

```
Antes de reasignar:
Fuera: persona → ref1
Dentro: obj → ref1    (misma referencia)

Después de reasignar:
Fuera: persona → ref1 (no cambió)
Dentro: obj → ref2    (nueva referencia local)
```

---

## Casos Prácticos

### 1. Funciones que no deben mutar

**❌ Mutable (mala práctica):**

```js
function agregarItem(array, item) {
  array.push(item) // Modifica el array original
  return array
}

const numeros = [1, 2, 3]
agregarItem(numeros, 4)
console.log(numeros) // [1, 2, 3, 4] (cambió)
```

**✅ Inmutable (buena práctica):**

```js
function agregarItem(array, item) {
  return [...array, item] // Retorna nueva copia
}

const numeros = [1, 2, 3]
const nuevos = agregarItem(numeros, 4)
console.log(numeros) // [1, 2, 3] (original intacto)
console.log(nuevos) // [1, 2, 3, 4]
```

### 2. Default parameters con objetos

```js
// ❌ Problema: todos comparten el mismo objeto
function crearUsuario(opciones = { tema: 'claro' }) {
  return opciones
}

const user1 = crearUsuario()
const user2 = crearUsuario()

user1.tema = 'oscuro'
console.log(user2.tema) // 'oscuro' (¡comparten el objeto!)

// ✅ Solución: crear nuevo objeto cada vez
function crearUsuario(opciones = {}) {
  return { tema: 'claro', ...opciones }
}

const user1 = crearUsuario()
const user2 = crearUsuario()

user1.tema = 'oscuro'
console.log(user2.tema) // 'claro' (independientes)
```

### 3. Métodos de array que retornan referencias

```js
const original = [1, 2, 3]

// slice() - retorna nueva copia
const copia1 = original.slice()
copia1.push(4)
console.log(original) // [1, 2, 3] (no cambió)

// map(), filter() - retornan nuevos arrays
const dobles = original.map((n) => n * 2)
const pares = original.filter((n) => n % 2 === 0)

// concat() - retorna nuevo array
const combinado = original.concat([4, 5])
console.log(original) // [1, 2, 3] (no cambió)
```

### 4. Pasar objetos a componentes React

```js
// ❌ Problema: mutación inesperada
function Parent() {
  const config = { tema: 'claro' }

  return <Child config={config} />
}

function Child({ config }) {
  config.tema = 'oscuro' // Muta el objeto del padre
}

// ✅ Solución: pasar copia o usar inmutabilidad
function Parent() {
  const config = { tema: 'claro' }

  return <Child config={{ ...config }} /> // Pasa copia
}
```

---

## 🎯 Reglas de Oro

✔ **Primitivos**: Se copian por valor, son independientes  
✔ **Objetos/Arrays**: Se copian por referencia, comparten memoria  
✔ **Shallow copy**: `{...obj}` o `[...arr]` - solo primer nivel  
✔ **Deep copy**: `structuredClone()`, lodash, o JSON (con limitaciones)  
✔ **Comparación**: `===` compara referencias, no contenido  
✔ **En funciones**: Objetos se pueden modificar, reasignación no afecta  
✔ **Inmutabilidad**: Siempre crea copias en lugar de mutar

---

## Tabla de Comparación

| Aspecto           | Primitivos                                               | Referencias                                     |
| ----------------- | -------------------------------------------------------- | ----------------------------------------------- |
| Asignación        | Copia valor                                              | Copia referencia                                |
| Modificación      | No afecta original                                       | Afecta original                                 |
| Comparación `===` | Compara valores                                          | Compara referencias                             |
| En funciones      | Pasa copia                                               | Pasa referencia                                 |
| Memoria           | Stack                                                    | Heap                                            |
| Tipos             | string, number, boolean, null, undefined, symbol, bigint | object, array, function, date, regexp, map, set |

---

## 💡 Para Entrevistas

**"¿Cuál es la diferencia entre pasar por valor y por referencia?"**

> "En JavaScript, los tipos primitivos (number, string, boolean, etc.) se pasan por valor, lo que significa que se crea una copia independiente. Los objetos y arrays se pasan por referencia, compartiendo la misma ubicación en memoria. Esto significa que cuando pasas un objeto a una función y lo modificas, afectas el objeto original. Es importante entender esto para evitar mutaciones inesperadas y bugs difíciles de rastrear."

**"¿Cómo copias un objeto en JavaScript?"**

> "Para copias superficiales uso el spread operator `{...obj}` o `Object.assign()`. Para copias profundas, si el objeto es simple, puedo usar `JSON.parse(JSON.stringify(obj))`, aunque esto tiene limitaciones con funciones, fechas y referencias circulares. Para casos complejos, uso `structuredClone()` en navegadores modernos o librerías como lodash's `cloneDeep()`."

**"¿Por qué este código no funciona como esperaba?"**

```js
const original = { data: { value: 1 } }
const copia = { ...original }
copia.data.value = 2
console.log(original.data.value) // 2 (¿por qué?)
```

> "El spread operator solo hace una copia superficial, copiando el primer nivel. La propiedad `data` sigue siendo una referencia al mismo objeto anidado. Para copiar completamente, necesito hacer una copia profunda: `{ ...original, data: { ...original.data } }`."

---

## ✅ Checklist de Dominio

- [ ] Entiendo la diferencia entre primitivos y referencias
- [ ] Sé que `===` compara referencias, no contenido
- [ ] Conozco cómo hacer shallow copy y deep copy
- [ ] Entiendo el problema de objetos anidados
- [ ] Sé cuándo usar cada método de copia
- [ ] Comprendo cómo funcionan los parámetros en funciones
- [ ] Puedo explicar por qué ciertos bugs ocurren
- [ ] Escribo código que no muta objetos inesperadamente

---

## 🔗 Conceptos Relacionados

- **Inmutabilidad**: Depende de entender valores vs referencias
- **Closures**: Capturan referencias, no valores
- **React**: Usa comparación de referencias para optimizar
- **Stack y Heap**: Donde se almacenan valores y referencias
