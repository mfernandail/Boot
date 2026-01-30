# 🚀 ES6+ Features

Características modernas de JavaScript que debes dominar.

---

## 📋 Índice

1. [Arrow Functions](#1-arrow-functions)
2. [Destructuring](#2-destructuring)
3. [Spread y Rest Operators](#3-spread-y-rest-operators)
4. [Template Literals](#4-template-literals)
5. [Default Parameters](#5-default-parameters)
6. [Enhanced Object Literals](#6-enhanced-object-literals)
7. [Modules (import/export)](#7-modules-importexport)
8. [Optional Chaining (?.)](#8-optional-chaining-)
9. [Nullish Coalescing (??)](#9-nullish-coalescing-)
10. [Array Methods Modernos](#10-array-methods-modernos)

---

## 1. Arrow Functions

### Sintaxis Básica

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

### Diferencias con Funciones Tradicionales

**1. No tienen su propio `this`:**

```js
// ❌ Función tradicional
const persona = {
  nombre: 'María',
  amigos: ['Juan', 'Pedro'],
  mostrarAmigos: function () {
    this.amigos.forEach(function (amigo) {
      console.log(this.nombre + ' conoce a ' + amigo)
      // Error: this es undefined
    })
  },
}

// ✅ Arrow function hereda this
const persona = {
  nombre: 'María',
  amigos: ['Juan', 'Pedro'],
  mostrarAmigos: function () {
    this.amigos.forEach((amigo) => {
      console.log(this.nombre + ' conoce a ' + amigo)
      // Funciona: this es persona
    })
  },
}
```

**2. No pueden ser constructores:**

```js
// ❌ No funciona
const Persona = (nombre) => {
  this.nombre = nombre
}
new Persona('María') // Error

// ✅ Usar función tradicional
function Persona(nombre) {
  this.nombre = nombre
}
new Persona('María') // Funciona
```

**3. No tienen `arguments`:**

```js
// ❌ Arrow function
const suma = () => {
  console.log(arguments) // Error
}

// ✅ Usar rest operator
const suma = (...args) => {
  console.log(args) // Funciona
}
```

### Casos de Uso

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

---

## 2. Destructuring

### Destructuring de Objetos

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

### Destructuring de Arrays

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

### En Parámetros de Funciones

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

---

## 3. Spread y Rest Operators

### Spread Operator (`...`)

**Arrays - Expandir:**

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinado = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

// Copiar array
const copia = [...arr1]

// Agregar elementos
const conNuevos = [0, ...arr1, 4] // [0, 1, 2, 3, 4]
```

**Objetos - Expandir:**

```js
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
```

**En Funciones:**

```js
const numeros = [1, 2, 3, 4, 5]
Math.max(...numeros) // 5
```

### Rest Operator (`...`)

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

---

## 4. Template Literals

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

---

## 5. Default Parameters

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

---

## 6. Enhanced Object Literals

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

---

## 7. Modules (import/export)

### Exportar

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

### Importar

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

### Re-exportar

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

### Dynamic Imports

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

---

## 8. Optional Chaining (?.)

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

---

## 9. Nullish Coalescing (??)

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

---

## 10. Array Methods Modernos

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

## 🎯 Mejores Prácticas

✔ **Arrow functions**: Usa para callbacks, no para métodos de objetos  
✔ **Destructuring**: Extrae datos limpiamente, evita accesos repetitivos  
✔ **Spread/rest**: Manipula arrays y objetos de forma inmutable  
✔ **Template literals**: Mejor legibilidad que concatenación  
✔ **Default parameters**: Valores por defecto claros en las funciones  
✔ **Modules**: Organiza código en archivos separados, mejora mantenibilidad  
✔ **Optional chaining (`?.`)**: Evita errores con objetos que pueden ser null/undefined  
✔ **Nullish coalescing (`??`)**: Mejor que `||` cuando 0, false o '' son valores válidos

---

## ✅ Checklist de Dominio

- [ ] Domino arrow functions y sé cuándo NO usarlas (métodos, constructores)
- [ ] Uso destructuring fluidamente en objetos y arrays
- [ ] Entiendo la diferencia entre spread y rest operators
- [ ] Uso template literals para strings complejas
- [ ] Aplico default parameters en funciones
- [ ] Trabajo con modules (import/export) correctamente
- [ ] Uso optional chaining para evitar errores de acceso
- [ ] Distingo cuándo usar `??` vs `||`
- [ ] Domino los array methods modernos (map, filter, reduce, etc.)
- [ ] Aplico enhanced object literals en mi código

---

## 💡 Para Entrevistas

**"¿Cuál es la diferencia entre una arrow function y una función tradicional?"**

> "Las arrow functions no tienen su propio `this`, lo heredan del contexto donde fueron creadas. Tampoco pueden ser usadas como constructores con `new`, ni tienen el objeto `arguments`. Son ideales para callbacks y funciones cortas, pero no para métodos de objetos que necesitan acceder a `this`."

**"¿Qué es destructuring y por qué es útil?"**

> "Destructuring permite extraer valores de objetos y arrays de forma más limpia y legible. Reduce código repetitivo y hace explícito qué propiedades se están usando. Es especialmente útil en parámetros de funciones y cuando trabajamos con APIs que devuelven objetos complejos."

**"¿Cuál es la diferencia entre `??` y `||`?"**

> "El operador `||` retorna el operando derecho si el izquierdo es falsy (false, 0, '', null, undefined, NaN). El operador `??` (nullish coalescing) solo retorna el derecho si el izquierdo es null o undefined. Es útil cuando 0, false o '' son valores válidos que queremos mantener."

**"¿Por qué usar modules en JavaScript?"**

> "Los modules permiten organizar código en archivos separados, evitando contaminar el scope global. Facilitan la reutilización de código, el mantenimiento, las pruebas unitarias, y permiten lazy loading para mejorar el rendimiento. Son fundamentales en aplicaciones modernas."
