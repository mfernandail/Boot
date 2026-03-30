# 🚀 JavaScript Moderno - Conceptos Esenciales

Conceptos fundamentales de JavaScript moderno (ES6+) explicados de forma clara y práctica.

---

## 📑 Contenido

1. [Promises vs async/await](#1-promises-vs-asyncawait)
2. [Inmutabilidad](#2-inmutabilidad)
3. [Valores vs Referencias](#3-valores-vs-referencias)
4. [ES6+ Features](#4-es6-features)

---

## 1. Promises vs async/await

### ¿Qué es una Promise?

Una Promise es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar en uno de tres estados:

- **Pending** (Pendiente): Estado inicial
- **Fulfilled** (Cumplida): Operación exitosa
- **Rejected** (Rechazada): Operación falló

### Sintaxis con Promises

```js
// Crear una Promise
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: 'María' })
      } else {
        reject('ID inválido')
      }
    }, 1000)
  })
}

// Consumir con .then()
obtenerUsuario(1)
  .then((usuario) => {
    console.log(usuario)
    return obtenerPosts(usuario.id)
  })
  .then((posts) => {
    console.log(posts)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log('Terminó')
  })
```

### Sintaxis con async/await

```js
// Misma función, consumida con async/await
async function mostrarUsuario() {
  try {
    const usuario = await obtenerUsuario(1)
    console.log(usuario)

    const posts = await obtenerPosts(usuario.id)
    console.log(posts)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Terminó')
  }
}

mostrarUsuario()
```

### Comparación

**Promises (.then):**

```js
fetch('/api/users')
  .then((res) => res.json())
  .then((users) => {
    console.log(users)
    return fetch('/api/posts')
  })
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts)
  })
  .catch((error) => console.error(error))
```

**async/await:**

```js
async function obtenerDatos() {
  try {
    const resUsers = await fetch('/api/users')
    const users = await resUsers.json()
    console.log(users)

    const resPosts = await fetch('/api/posts')
    const posts = await resPosts.json()
    console.log(posts)
  } catch (error) {
    console.error(error)
  }
}
```

### Ventajas de async/await

✅ **Código más legible**: Parece síncrono  
✅ **Menos anidación**: Evita el "callback hell"  
✅ **Debugging más fácil**: Stack traces más claros  
✅ **Manejo de errores unificado**: Un solo try/catch

### Operaciones en Paralelo

**❌ Secuencial (lento):**

```js
async function obtenerTodo() {
  const usuarios = await fetch('/api/users') // Espera
  const posts = await fetch('/api/posts') // Luego espera
  return { usuarios, posts }
}
// Tiempo total: suma de ambas llamadas
```

**✅ Paralelo (rápido):**

```js
async function obtenerTodo() {
  // Lanzar ambas peticiones al mismo tiempo
  const [usuarios, posts] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
  ])
  return { usuarios, posts }
}
// Tiempo total: la más lenta de las dos
```

### Promise.all vs Promise.race vs Promise.allSettled

```js
// Promise.all - Espera que TODAS se resuelvan
// Si una falla, todo falla
const resultados = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments'),
])
// [usuarios, posts, comments] o Error si alguna falla

// Promise.race - Retorna la primera que se resuelva
const primera = await Promise.race([
  fetch('/api/server1'),
  fetch('/api/server2'),
])
// La que responda primero

// Promise.allSettled - Espera todas, sin importar si fallan
const resultados = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments'),
])
// [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]
```

### Manejo de Errores

```js
// Con Promises
fetch('/api/data')
  .then((res) => res.json())
  .catch((error) => {
    // Maneja errores de fetch Y de .json()
    console.error(error)
  })

// Con async/await
async function obtenerDatos() {
  try {
    const res = await fetch('/api/data')
    const data = await res.json()
    return data
  } catch (error) {
    // Maneja cualquier error
    console.error(error)
    throw error // Re-lanzar si necesario
  }
}
```

### Casos de Uso

**Usa Promises cuando:**

- Tienes operaciones independientes en paralelo
- Necesitas transformaciones complejas con `.then()`
- Trabajas con APIs que solo retornan Promises

**Usa async/await cuando:**

- Código secuencial complejo
- Necesitas mejor legibilidad
- Trabajas con múltiples operaciones dependientes
- Quieres debugging más fácil

### 🎯 Regla de Oro

> `async/await` es azúcar sintáctica sobre Promises. Internamente, sigue siendo una Promise.

```js
async function ejemplo() {
  return 'Hola'
}

// Es equivalente a:
function ejemplo() {
  return Promise.resolve('Hola')
}

ejemplo().then((valor) => console.log(valor)) // 'Hola'
```

---

## 2. Inmutabilidad

### ¿Qué es la Inmutabilidad?

La inmutabilidad significa que **no modificas datos existentes**, sino que **creas nuevas copias** con los cambios.

### ¿Por Qué es Importante?

✅ **Previene bugs**: No hay modificaciones inesperadas  
✅ **Código más predecible**: Sabes que tus datos no cambian  
✅ **Facilita debugging**: Puedes rastrear cambios  
✅ **Optimización en frameworks**: React, Redux dependen de esto  
✅ **Funciones puras**: Esencial en programación funcional

### Primitivos son Inmutables (por naturaleza)

```js
let x = 10
let y = x
y = 20

console.log(x) // 10 (no cambió)
console.log(y) // 20
```

Los primitivos (string, number, boolean, null, undefined, symbol) son inmutables por defecto.

### Objetos y Arrays son Mutables

```js
// ❌ Mutable (modifica el original)
const persona = { nombre: 'María', edad: 25 }
persona.edad = 26 // Modifica el objeto original

const numeros = [1, 2, 3]
numeros.push(4) // Modifica el array original
```

### Trabajar de Forma Inmutable

#### Objetos

**❌ Mutable:**

```js
const persona = { nombre: 'María', edad: 25 }
persona.edad = 26 // Modifica directamente
```

**✅ Inmutable:**

```js
const persona = { nombre: 'María', edad: 25 }
const personaActualizada = { ...persona, edad: 26 }

console.log(persona) // { nombre: 'María', edad: 25 }
console.log(personaActualizada) // { nombre: 'María', edad: 26 }
```

#### Arrays

**❌ Métodos Mutables:**

```js
const numeros = [1, 2, 3]

numeros.push(4) // Agrega al final
numeros.pop() // Elimina del final
numeros.unshift(0) // Agrega al inicio
numeros.shift() // Elimina del inicio
numeros.splice(1, 1) // Elimina/inserta elementos
numeros.sort() // Ordena el array
numeros.reverse() // Invierte el array
```

**✅ Métodos Inmutables:**

```js
const numeros = [1, 2, 3]

// Agregar elementos
const conNuevo = [...numeros, 4] // [1, 2, 3, 4]
const conInicio = [0, ...numeros] // [0, 1, 2, 3]

// Eliminar elementos
const sinPrimero = numeros.slice(1) // [2, 3]
const sinUltimo = numeros.slice(0, -1) // [1, 2]

// Modificar elementos
const modificado = numeros.map((n) => n * 2) // [2, 4, 6]

// Filtrar elementos
const filtrado = numeros.filter((n) => n > 1) // [2, 3]

// Ordenar
const ordenado = [...numeros].sort() // [1, 2, 3] (copia primero)

// Combinar
const combinado = [...numeros, ...otrosNumeros]
```

### Actualizar Objetos Anidados de Forma Inmutable

**❌ Mutable:**

```js
const usuario = {
  nombre: 'María',
  direccion: {
    ciudad: 'Santiago',
    pais: 'Chile',
  },
}

usuario.direccion.ciudad = 'Valparaíso' // Modifica el objeto anidado
```

**✅ Inmutable:**

```js
const usuarioActualizado = {
  ...usuario,
  direccion: {
    ...usuario.direccion,
    ciudad: 'Valparaíso',
  },
}
```

### Actualizar Arrays de Objetos

**❌ Mutable:**

```js
const usuarios = [
  { id: 1, nombre: 'María' },
  { id: 2, nombre: 'Juan' },
]

usuarios[0].nombre = 'María José' // Modifica directamente
```

**✅ Inmutable:**

```js
const usuariosActualizados = usuarios.map((usuario) =>
  usuario.id === 1 ? { ...usuario, nombre: 'María José' } : usuario
)
```

### Inmutabilidad en React

```js
// ❌ No funciona bien en React
const [usuarios, setUsuarios] = useState([...])

function agregarUsuario(usuario) {
  usuarios.push(usuario) // Muta el estado
  setUsuarios(usuarios) // React no detecta el cambio
}

// ✅ Forma inmutable en React
function agregarUsuario(usuario) {
  setUsuarios([...usuarios, usuario]) // Nueva referencia
}

function eliminarUsuario(id) {
  setUsuarios(usuarios.filter(u => u.id !== id))
}

function actualizarUsuario(id, cambios) {
  setUsuarios(usuarios.map(u =>
    u.id === id ? { ...u, ...cambios } : u
  ))
}
```

### Librerías para Inmutabilidad

Para estructuras muy complejas:

```js
// Immer.js - Simplifica inmutabilidad
import produce from 'immer'

const siguiente = produce(estado, (draft) => {
  draft.usuario.direccion.ciudad = 'Valparaíso'
  draft.contador++
})
// Parece mutable, pero Immer lo hace inmutable
```

### 🎯 Reglas de Oro

✔ **Primitivos**: Ya son inmutables  
✔ **Objetos**: Usa spread `{...obj}` o `Object.assign()`  
✔ **Arrays**: Usa spread `[...arr]`, `.map()`, `.filter()`, `.slice()`  
✔ **Evita**: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `.sort()`, `.reverse()`  
✔ **En React/Redux**: Siempre crea nuevas referencias

---

## 3. Valores vs Referencias

### Concepto Fundamental

JavaScript maneja dos tipos de datos de forma diferente:

1. **Tipos primitivos** → se pasan por **valor**
2. **Tipos de referencia** → se pasan por **referencia**

### Tipos Primitivos (Por Valor)

Primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`

```js
let a = 10
let b = a // Copia el VALOR

b = 20

console.log(a) // 10 (no cambió)
console.log(b) // 20
```

**Lo que pasa en memoria:**

```
Stack:
a → 10
b → 20
```

Cada variable tiene su propia copia del valor.

### Tipos de Referencia (Por Referencia)

Referencias: `object`, `array`, `function`, `date`, `regexp`

```js
let obj1 = { nombre: 'María' }
let obj2 = obj1 // Copia la REFERENCIA

obj2.nombre = 'Juan'

console.log(obj1.nombre) // 'Juan' (¡cambió!)
console.log(obj2.nombre) // 'Juan'
```

**Lo que pasa en memoria:**

```
Stack:           Heap:
obj1 → ref123    ref123: { nombre: 'Juan' }
obj2 → ref123
```

Ambas variables apuntan al **mismo objeto** en memoria.

### Visualización con Arrays

```js
const arr1 = [1, 2, 3]
const arr2 = arr1 // Referencia al mismo array

arr2.push(4)

console.log(arr1) // [1, 2, 3, 4] (cambió)
console.log(arr2) // [1, 2, 3, 4]

arr1 === arr2 // true (misma referencia)
```

### Copiar vs Referenciar

**❌ Esto NO copia el objeto:**

```js
const original = { a: 1, b: 2 }
const copia = original // Solo copia la referencia

copia.a = 999
console.log(original.a) // 999 (modificó el original)
```

**✅ Copias superficiales (Shallow Copy):**

```js
// Con spread operator
const copia1 = { ...original }

// Con Object.assign
const copia2 = Object.assign({}, original)

// Con Array.from (arrays)
const arrCopia = Array.from(original)

// Con slice (arrays)
const arrCopia2 = original.slice()
```

### Problema: Objetos Anidados

```js
const persona = {
  nombre: 'María',
  direccion: {
    ciudad: 'Santiago',
  },
}

const copia = { ...persona } // Shallow copy

copia.nombre = 'Juan' // ✅ No afecta el original
copia.direccion.ciudad = 'Valparaíso' // ❌ SÍ afecta el original

console.log(persona.direccion.ciudad) // 'Valparaíso' (cambió)
```

**¿Por qué?** El spread solo copia el primer nivel. Los objetos anidados siguen siendo referencias.

### Copia Profunda (Deep Copy)

**Opción 1 - JSON (simple pero limitado):**

```js
const copiaProf = JSON.parse(JSON.stringify(original))
```

⚠️ **Limitaciones de JSON:**

- No copia funciones
- No copia undefined
- No copia Dates correctamente
- No copia referencias circulares

**Opción 2 - Recursiva manual:**

```js
function copiarProfundo(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => copiarProfundo(item))
  }

  const copia = {}
  for (let key in obj) {
    copia[key] = copiarProfundo(obj[key])
  }
  return copia
}
```

**Opción 3 - Librería (lodash):**

```js
import { cloneDeep } from 'lodash'

const copia = cloneDeep(original)
```

**Opción 4 - structuredClone (moderno):**

```js
const copia = structuredClone(original) // Nativo en navegadores modernos
```

### Comparación de Objetos

```js
const obj1 = { a: 1 }
const obj2 = { a: 1 }
const obj3 = obj1

obj1 === obj2 // false (diferentes referencias)
obj1 === obj3 // true (misma referencia)

// Para comparar contenido, necesitas hacerlo manualmente
JSON.stringify(obj1) === JSON.stringify(obj2) // true (compara contenido)
```

### En Funciones

**Por Valor (Primitivos):**

```js
function modificar(x) {
  x = 100
}

let num = 10
modificar(num)
console.log(num) // 10 (no cambió)
```

**Por Referencia (Objetos):**

```js
function modificar(obj) {
  obj.nombre = 'Juan' // Modifica el objeto original
}

const persona = { nombre: 'María' }
modificar(persona)
console.log(persona.nombre) // 'Juan' (cambió)
```

**Reasignación en funciones:**

```js
function reasignar(obj) {
  obj = { nombre: 'Pedro' } // Crea nuevo objeto local
}

const persona = { nombre: 'María' }
reasignar(persona)
console.log(persona.nombre) // 'María' (no cambió)
```

La reasignación (`=`) no afecta el objeto original, solo cambia la referencia local.

### 🎯 Reglas de Oro

✔ **Primitivos**: Se copian por valor, son independientes  
✔ **Objetos/Arrays**: Se copian por referencia, comparten memoria  
✔ **Shallow copy**: `{...obj}` o `[...arr]` - solo primer nivel  
✔ **Deep copy**: `structuredClone()`, lodash, o JSON (con limitaciones)  
✔ **Comparación**: `===` compara referencias, no contenido  
✔ **En funciones**: Objetos se pueden modificar, reasignación no afecta

---

## 4. ES6+ Features

Características modernas de JavaScript que debes dominar.

### 4.1 Arrow Functions

**Sintaxis básica:**

```js
// Función tradicional
function suma(a, b) {
  return a + b
}

// Arrow function
const suma = (a, b) => a + b

// Un parámetro (sin paréntesis)
const doble = (x) => x * 2

// Sin parámetros
const saludar = () => 'Hola'

// Múltiples líneas
const complejo = (a, b) => {
  const resultado = a + b
  return resultado * 2
}
```

**No tienen su propio `this`:**

```js
const objeto = {
  nombre: 'María',

  // ❌ Arrow function como método
  saludar: () => {
    console.log(this.nombre) // undefined
  },

  // ✅ Método normal
  saludarBien() {
    console.log(this.nombre) // 'María'
  },

  // ✅ Arrow en callback
  lista() {
    const items = [1, 2, 3]
    items.forEach(() => {
      console.log(this.nombre) // 'María' (captura this del método)
    })
  },
}
```

**Casos de uso:**

```js
// Array methods
const numeros = [1, 2, 3, 4, 5]
const dobles = numeros.map((n) => n * 2)
const pares = numeros.filter((n) => n % 2 === 0)
const suma = numeros.reduce((acc, n) => acc + n, 0)

// Callbacks
setTimeout(() => console.log('Hola'), 1000)

// Promesas
fetch('/api/data')
  .then((res) => res.json())
  .then((data) => console.log(data))
```

### 4.2 Destructuring

**Destructuring de Objetos:**

```js
const persona = {
  nombre: 'María',
  edad: 25,
  ciudad: 'Santiago',
}

// ✅ Con destructuring
const { nombre, edad } = persona
console.log(nombre) // 'María'
console.log(edad) // 25

// Renombrar variables
const { nombre: nom, edad: years } = persona
console.log(nom) // 'María'

// Valores por defecto
const { pais = 'Chile' } = persona
console.log(pais) // 'Chile'

// Anidado
const usuario = {
  nombre: 'Juan',
  direccion: {
    ciudad: 'Valparaíso',
    pais: 'Chile',
  },
}

const {
  direccion: { ciudad, pais },
} = usuario
console.log(ciudad) // 'Valparaíso'
```

**Destructuring de Arrays:**

```js
const colores = ['rojo', 'verde', 'azul']

// ✅ Con destructuring
const [primero, segundo] = colores
console.log(primero) // 'rojo'
console.log(segundo) // 'verde'

// Saltar elementos
const [, , tercero] = colores
console.log(tercero) // 'azul'

// Rest operator
const [head, ...tail] = colores
console.log(head) // 'rojo'
console.log(tail) // ['verde', 'azul']

// Swap de variables
let a = 1,
  b = 2
;[a, b] = [b, a]
console.log(a, b) // 2, 1
```

**En parámetros de funciones:**

```js
// Objetos
function presentar({ nombre, edad }) {
  console.log(`${nombre} tiene ${edad} años`)
}

presentar({ nombre: 'María', edad: 25 })

// Con defaults
function crear({ nombre = 'Anónimo', edad = 0 } = {}) {
  return { nombre, edad }
}

// Arrays
function sumarPrimeros([a, b]) {
  return a + b
}

sumarPrimeros([10, 20]) // 30
```

### 4.3 Spread y Rest Operators

**Spread Operator (`...`):**

```js
// Arrays - Expandir
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinado = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

// Copiar array
const copia = [...arr1]

// Agregar elementos
const conNuevos = [0, ...arr1, 4] // [0, 1, 2, 3, 4]

// Objetos - Expandir
const persona = { nombre: 'María', edad: 25 }
const empleado = { ...persona, puesto: 'Developer' }
// { nombre: 'María', edad: 25, puesto: 'Developer' }

// Sobrescribir propiedades
const actualizado = { ...persona, edad: 26 }
// { nombre: 'María', edad: 26 }

// Combinar objetos
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinado = { ...obj1, ...obj2 }
// { a: 1, b: 2, c: 3, d: 4 }

// En funciones
const numeros = [1, 2, 3, 4, 5]
Math.max(...numeros) // 5
```

**Rest Operator (`...`):**

```js
// En parámetros de función
function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

sumar(1, 2, 3) // 6
sumar(1, 2, 3, 4, 5) // 15

// Combinar con parámetros normales
function crear(nombre, ...habilidades) {
  return { nombre, habilidades }
}

crear('María', 'JS', 'React', 'Node')
// { nombre: 'María', habilidades: ['JS', 'React', 'Node'] }

// En destructuring
const [primero, ...resto] = [1, 2, 3, 4, 5]
console.log(primero) // 1
console.log(resto) // [2, 3, 4, 5]

const { nombre, ...otrosDatos } = {
  nombre: 'María',
  edad: 25,
  ciudad: 'Santiago',
}
console.log(nombre) // 'María'
console.log(otrosDatos) // { edad: 25, ciudad: 'Santiago' }
```

### 4.4 Template Literals

```js
const nombre = 'María'
const edad = 25

// ❌ Concatenación antigua
const mensaje1 = 'Hola, soy ' + nombre + ' y tengo ' + edad + ' años'

// ✅ Template literals
const mensaje2 = `Hola, soy ${nombre} y tengo ${edad} años`

// Expresiones
const precio = 100
const mensaje3 = `Total: $${precio * 1.19}` // Con IVA

// Multilínea
const html = `
  <div>
    <h1>${nombre}</h1>
    <p>Edad: ${edad}</p>
  </div>
`

// Tagged templates (avanzado)
function destacar(strings, ...valores) {
  return strings.reduce(
    (acc, str, i) =>
      acc + str + (valores[i] ? `<strong>${valores[i]}</strong>` : ''),
    ''
  )
}

const mensaje = destacar`Hola, soy ${nombre} y tengo ${edad} años`
// 'Hola, soy <strong>María</strong> y tengo <strong>25</strong> años'
```

### 4.5 Default Parameters

```js
// ❌ Forma antigua
function crear(nombre, edad) {
  nombre = nombre || 'Anónimo'
  edad = edad || 0
  return { nombre, edad }
}

// ✅ ES6+
function crear(nombre = 'Anónimo', edad = 0) {
  return { nombre, edad }
}

crear() // { nombre: 'Anónimo', edad: 0 }
crear('María') // { nombre: 'María', edad: 0 }
crear('María', 25) // { nombre: 'María', edad: 25 }

// Valores por defecto con expresiones
function saludar(nombre, saludo = `Hola ${nombre}`) {
  return saludo
}

// Parámetros por defecto usan parámetros anteriores
function crear(ancho = 10, alto = ancho * 2) {
  return { ancho, alto }
}
```

### 4.6 Enhanced Object Literals

```js
const nombre = 'María'
const edad = 25

// ❌ Forma antigua
const persona1 = {
  nombre: nombre,
  edad: edad,
  saludar: function () {
    console.log('Hola')
  },
}

// ✅ ES6+ - Shorthand properties
const persona2 = {
  nombre, // Si la variable y propiedad tienen el mismo nombre
  edad,
  saludar() {
    // Shorthand methods
    console.log('Hola')
  },
}

// Computed property names
const propiedad = 'edad'
const persona3 = {
  nombre: 'María',
  [propiedad]: 25, // Usa el valor de la variable como nombre
  [`get${propiedad}`]() {
    return this[propiedad]
  },
}

console.log(persona3.edad) // 25
console.log(persona3.getedad()) // 25
```

### 4.7 Modules (import/export)

**Exportar:**

```js
// math.js

// Named exports
export const PI = 3.14159
export function suma(a, b) {
  return a + b
}
export function resta(a, b) {
  return a - b
}

// O exportar al final
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

export { multiplicar, dividir }

// Default export (solo uno por archivo)
export default function calcular(operacion, a, b) {
  // ...
}
```

**Importar:**

```js
// app.js

// Named imports
import { suma, resta } from './math.js'
suma(5, 3) // 8

// Renombrar
import { suma as add } from './math.js'

// Importar todo
import * as Math from './math.js'
Math.suma(5, 3)
Math.PI

// Default import
import calcular from './math.js'

// Combinar default y named
import calcular, { suma, resta } from './math.js'

// Solo ejecutar el módulo (sin importar)
import './config.js'
```

**Re-exportar:**

```js
// utils/index.js

// Re-exportar todo de otro módulo
export * from './math.js'
export * from './strings.js'

// Re-exportar selectivamente
export { suma, resta } from './math.js'

// Re-exportar default como named
export { default as calcular } from './math.js'
```

**Dynamic imports:**

```js
// Importar bajo demanda
async function cargarModulo() {
  const modulo = await import('./modulo-pesado.js')
  modulo.hacerAlgo()
}

// Condicional
if (condicion) {
  import('./modulo.js').then((modulo) => {
    modulo.usar()
  })
}
```

### 4.8 Optional Chaining (?.)

```js
const usuario = {
  nombre: 'María',
  direccion: {
    ciudad: 'Santiago',
  },
}

// ❌ Sin optional chaining
const pais = usuario.direccion && usuario.direccion.pais
const codigo =
  usuario.contacto &&
  usuario.contacto.telefono &&
  usuario.contacto.telefono.codigo

// ✅ Con optional chaining
const pais = usuario.direccion?.pais // undefined (no error)
const codigo = usuario.contacto?.telefono?.codigo // undefined

// Con arrays
const primero = usuarios?.[0]

// Con funciones
const resultado = objeto.metodo?.()

// Combinado con nullish coalescing
const ciudad = usuario.direccion?.ciudad ?? 'Desconocida'
```

### 4.9 Nullish Coalescing (??)

```js
// ❌ Con ||
const valor1 = 0 || 10 // 10 (0 es falsy)
const valor2 = '' || 'default' // 'default' ('' es falsy)
const valor3 = false || true // true (false es falsy)

// ✅ Con ??  (solo null o undefined)
const valor1 = 0 ?? 10 // 0
const valor2 = '' ?? 'default' // ''
const valor3 = false ?? true // false
const valor4 = null ?? 10 // 10
const valor5 = undefined ?? 10 // 10

// Uso práctico
const config = {
  timeout: 0,
  cache: false,
}

const timeout = config.timeout ?? 3000 // 0 (respeta el 0)
const cache = config.cache ?? true // false (respeta el false)
```

### 4.10 Array Methods Modernos

```js
const numeros = [1, 2, 3, 4, 5]

// map - Transformar
const dobles = numeros.map((n) => n * 2) // [2, 4, 6, 8, 10]

// filter - Filtrar
const pares = numeros.filter((n) => n % 2 === 0) // [2, 4]

// reduce - Reducir a un valor
const suma = numeros.reduce((acc, n) => acc + n, 0) // 15

// find - Encontrar uno
const primero = numeros.find((n) => n > 3) // 4

// findIndex - Índice del primero
const indice = numeros.findIndex((n) => n > 3) // 3

// some - ¿Alguno cumple?
const hayPares = numeros.some((n) => n % 2 === 0) // true

// every - ¿Todos cumplen?
const todosPositivos = numeros.every((n) => n > 0) // true

// includes - ¿Contiene?
const tiene3 = numeros.includes(3) // true

// flat - Aplanar arrays
const anidado = [1, [2, 3], [4, [5, 6]]]
anidado.flat() // [1, 2, 3, 4, [5, 6]]
anidado.flat(2) // [1, 2, 3, 4, 5, 6]

// flatMap - map + flat
const palabras = ['hola mundo', 'adiós']
palabras.flatMap((s) => s.split(' ')) // ['hola', 'mundo', 'adiós']

// Object.entries / Object.keys / Object.values
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj) // ['a', 'b', 'c']
Object.values(obj) // [1, 2, 3]
Object.entries(obj) // [['a', 1], ['b', 2], ['c', 3]]

// Object.fromEntries
const entries = [
  ['a', 1],
  ['b', 2],
]
Object.fromEntries(entries) // { a: 1, b: 2 }
```

---

## 🎯 Resumen y Mejores Prácticas

### Promises vs async/await

✔ Usa `async/await` para código más legible  
✔ `Promise.all()` para operaciones en paralelo  
✔ Siempre maneja errores con `try/catch`  
✔ Recuerda que `async/await` es azúcar sintáctica sobre Promises

### Inmutabilidad

✔ Usa spread operator para copiar: `{...obj}`, `[...arr]`  
✔ Evita métodos mutables: `push`, `pop`, `splice`, etc.  
✔ Para deep copy: `structuredClone()` o librerías  
✔ En React/Redux: siempre crea nuevas referencias

### Valores vs Referencias

✔ Primitivos se copian por valor  
✔ Objetos/arrays se copian por referencia  
✔ Usa spread para copias superficiales  
✔ Cuidado con objetos anidados (requieren deep copy)

### ES6+ Features

✔ Arrow functions para callbacks, no para métodos  
✔ Destructuring para extraer datos limpiamente  
✔ Spread/rest para manipular arrays y objetos  
✔ Optional chaining (`?.`) para evitar errores  
✔ Modules para organizar código

---

## ✅ Checklist de Dominio

- [ ] Puedo explicar la diferencia entre Promises y async/await
- [ ] Entiendo cuándo usar Promise.all, race y allSettled
- [ ] Sé trabajar de forma inmutable con objetos y arrays
- [ ] Distingo entre shallow copy y deep copy
- [ ] Comprendo la diferencia entre valores y referencias
- [ ] Domino arrow functions y sé cuándo NO usarlas
- [ ] Uso destructuring fluidamente
- [ ] Entiendo spread y rest operators
- [ ] Trabajo con modules (import/export)
- [ ] Uso optional chaining y nullish coalescing

---

## 💡 Para Entrevistas

**"¿Cuál es la diferencia entre Promises y async/await?"**

> "async/await es azúcar sintáctica sobre Promises que hace el código asíncrono más legible y fácil de mantener. Permite escribir código asíncrono que parece síncrono, facilitando el debugging y el manejo de errores con try/catch. Internamente, sigue siendo una Promise."

**"¿Por qué es importante la inmutabilidad?"**

> "La inmutabilidad previene bugs al evitar modificaciones inesperadas de datos, hace el código más predecible y facilita el debugging. Es especialmente importante en frameworks como React, donde la detección de cambios depende de comparaciones de referencias."

**"¿Cuál es la diferencia entre pasar por valor y por referencia?"**

> "Los tipos primitivos se pasan por valor, creando copias independientes. Los objetos y arrays se pasan por referencia, por lo que múltiples variables pueden apuntar al mismo objeto en memoria. Esto significa que modificar el objeto a través de una variable afecta a todas las demás que referencian el mismo objeto."
