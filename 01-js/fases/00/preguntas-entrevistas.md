# 💼 Preguntas Frecuentes en Entrevistas de JavaScript

Las preguntas más comunes que te harán en entrevistas técnicas sobre fundamentos de JavaScript, con respuestas modelo profesionales.

---

## 📋 Cómo usar este documento

- Lee cada pregunta e intenta responderla en voz alta
- Luego expande la respuesta para comparar
- Practica explicar con tus propias palabras
- Usa los ejemplos de código cuando sea apropiado

---

## 🎯 Nivel: Junior/Mid-Level

### 1. ¿Qué es JavaScript y cuáles son sus características principales?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

JavaScript es un lenguaje de programación de alto nivel, interpretado y dinámico, principalmente conocido por dar interactividad a las páginas web. Sus características principales son:

1. **Single-threaded**: Ejecuta una sola tarea a la vez
2. **Interpretado con JIT**: Los motores modernos compilan en tiempo de ejecución
3. **Dinámicamente tipado**: No necesitas declarar tipos de variables
4. **Basado en prototipos**: Herencia mediante prototipos, no clases tradicionales
5. **First-class functions**: Las funciones son objetos de primera clase
6. **Event-driven**: Programación basada en eventos y callbacks
7. **Multi-paradigma**: Soporta programación funcional, orientada a objetos e imperativa

Hoy en día se usa tanto en frontend (navegadores) como en backend (Node.js), mobile (React Native) y desktop (Electron).

</details>

---

### 2. ¿Cuál es la diferencia entre `var`, `let` y `const`?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

La principal diferencia está en el **scope**, **hoisting** y **reasignación**:

**`var`:**

- Scope: Function scope
- Hoisting: Sí, se inicializa como `undefined`
- Redeclaración: Permitida
- Reasignación: Permitida
- Problema: Puede causar bugs difíciles de detectar

**`let`:**

- Scope: Block scope
- Hoisting: Sí, pero con Temporal Dead Zone (no accesible antes de declaración)
- Redeclaración: No permitida
- Reasignación: Permitida
- Uso: Variables que cambiarán de valor

**`const`:**

- Scope: Block scope
- Hoisting: Sí, pero con Temporal Dead Zone
- Redeclaración: No permitida
- Reasignación: No permitida (el valor primitivo o la referencia)
- Uso: Valores constantes o referencias que no cambiarán

**Ejemplo:**

```js
// var - function scope
function ejemplo() {
  if (true) {
    var x = 10
  }
  console.log(x) // 10 (se escapa del bloque)
}

// let - block scope
function ejemplo2() {
  if (true) {
    let y = 10
  }
  console.log(y) // Error: y is not defined
}

// const - no reasignable
const obj = { nombre: 'María' }
obj.nombre = 'Juan' // ✅ Permitido (modificar propiedades)
obj = {} // ❌ Error (reasignar referencia)
```

**Recomendación:** Usa `const` por defecto, `let` cuando necesites reasignar, evita `var`.

</details>

---

### 3. ¿Qué es el hoisting en JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Hoisting es el comportamiento de JavaScript donde las **declaraciones** de variables y funciones se "elevan" al inicio de su scope antes de la ejecución del código. Es importante entender que solo se eleva la declaración, NO la asignación.

**Con `var`:**

```js
console.log(x) // undefined (no error)
var x = 5
console.log(x) // 5

// JavaScript lo interpreta como:
var x
console.log(x) // undefined
x = 5
console.log(x) // 5
```

**Con `let` y `const`:**

```js
console.log(y) // Error: Cannot access 'y' before initialization
let y = 10
```

Aunque técnicamente también sufren hoisting, están en la **Temporal Dead Zone (TDZ)** desde el inicio del scope hasta su declaración, por lo que no se pueden acceder.

**Con funciones:**

_Function declarations_ se elevan completamente:

```js
saludar() // "Hola" (funciona)

function saludar() {
  console.log('Hola')
}
```

_Function expressions_ NO se elevan:

```js
saludar() // Error: saludar is not a function

var saludar = function () {
  console.log('Hola')
}
```

**Buena práctica:** Declara todas las variables al inicio de su scope para evitar confusión.

</details>

---

### 4. ¿Qué es un closure? Da un ejemplo práctico

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Un closure es una función que tiene acceso a variables de su scope externo, incluso después de que la función externa haya terminado de ejecutarse. Los closures se crean automáticamente en JavaScript cuando una función interna referencia variables de su función contenedora.

**Ejemplo básico:**

```js
function crearContador() {
  let count = 0 // Variable privada

  return function () {
    count++
    return count
  }
}

const contador = crearContador()
console.log(contador()) // 1
console.log(contador()) // 2
console.log(contador()) // 3
console.log(count) // Error: count is not defined
```

**¿Por qué es útil?**

- Encapsulación: `count` es privada, solo accesible por la función devuelta
- Persistencia de estado: `count` se mantiene entre llamadas
- Cada contador es independiente

**Ejemplo práctico - Event Handler:**

```js
function configurarBotones() {
  const botones = ['Guardar', 'Cancelar', 'Eliminar']

  botones.forEach((texto, index) => {
    const btn = document.createElement('button')
    btn.textContent = texto

    // El closure captura 'texto' e 'index'
    btn.addEventListener('click', function () {
      console.log(`Botón ${texto} (${index}) clickeado`)
    })

    document.body.appendChild(btn)
  })
}
```

Cada event handler recuerda su propio `texto` e `index` gracias al closure.

**Otros usos:**

- Variables privadas
- Factory functions
- Memoización (cache)
- Currying
- Module pattern
</details>

---

### 5. Explica la diferencia entre `==` y `===`

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**`==` (Igualdad abstracta):**

- Compara valores CON coerción de tipos
- JavaScript convierte los operandos al mismo tipo antes de comparar
- Puede dar resultados inesperados

**`===` (Igualdad estricta):**

- Compara valores Y tipos SIN coerción
- Más predecible y generalmente recomendado
- Más rápido (no requiere conversión)

**Ejemplos:**

```js
// Coerción de tipos con ==
5 == '5' // true (string '5' se convierte a número)
0 == false // true (false se convierte a 0)
null == undefined // true (casos especiales)
'' == 0 // true (string vacío se convierte a 0)

// Sin coerción con ===
5 === '5' // false (diferentes tipos)
0 === false // false (diferentes tipos)
null === undefined // false (diferentes tipos)
'' === 0 // false (diferentes tipos)
```

**Casos extraños con `==`:**

```js
[] == ![]       // true (WTF!)
[] == 0         // true
'' == '0'       // false
0 == ''         // true
```

**Recomendación:**

- Usa `===` siempre que sea posible
- Solo usa `==` cuando entiendas exactamente qué coerción ocurrirá
- Si necesitas conversión, hazla explícita: `Number(x) === 5`

**Para objetos:**

```js
const obj1 = { a: 1 }
const obj2 = { a: 1 }
const obj3 = obj1

obj1 == obj2 // false (diferentes referencias)
obj1 === obj2 // false (diferentes referencias)
obj1 === obj3 // true (misma referencia)
```

Tanto `==` como `===` comparan referencias para objetos, no contenido.

</details>

---

### 6. ¿Qué es el Event Loop y cómo funciona?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asíncronas a pesar de ser single-threaded. Coordina la ejecución de código, eventos y callbacks.

**Componentes principales:**

1. **Call Stack (Pila de llamadas)**: Donde se ejecuta el código síncrono
2. **Web APIs / Node APIs**: Manejan operaciones asíncronas (setTimeout, fetch, etc.)
3. **Microtask Queue**: Cola de microtareas (Promises, queueMicrotask)
4. **Macrotask Queue**: Cola de macrotareas (setTimeout, setInterval, I/O)

**Funcionamiento:**

1. JavaScript ejecuta código del Call Stack
2. Operaciones async se delegan a las Web APIs
3. Cuando terminan, sus callbacks van a las colas
4. El Event Loop revisa si el Call Stack está vacío
5. Si está vacío:
   - Primero ejecuta TODAS las microtasks
   - Luego ejecuta UNA macrotask
   - Repite el proceso

**Orden de prioridad:**

```
Call Stack (código síncrono)
    ↓
Microtask Queue (Promises)
    ↓
Macrotask Queue (setTimeout, etc.)
```

**Ejemplo:**

```js
console.log('1') // Call Stack

setTimeout(() => console.log('2'), 0) // Macrotask

Promise.resolve().then(() => console.log('3')) // Microtask

console.log('4') // Call Stack

// Salida: 1, 4, 3, 2
```

**Explicación:**

1. `1` y `4`: Código síncrono (Call Stack)
2. `3`: Microtask (Promise.then)
3. `2`: Macrotask (setTimeout), aunque sea 0ms

**Analogía:**
El Event Loop es como un organizador de eventos que:

- Atiende primero lo urgente (código síncrono)
- Luego revisa mensajes importantes (Promises)
- Finalmente revisa mensajes normales (setTimeout, eventos)

Esto permite que JavaScript no se bloquee esperando operaciones lentas (red, archivos, etc.).

</details>

---

### 7. ¿Cuál es la diferencia entre `null` y `undefined`?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Aunque ambos representan "ausencia de valor", tienen diferencias importantes:

**`undefined`:**

- Significa que una variable ha sido declarada pero NO inicializada
- Es el valor por defecto de variables sin asignar
- Es el valor de retorno de funciones sin `return`
- Tipo: `"undefined"`
- Asignado automáticamente por JavaScript

**`null`:**

- Significa "intencionalmente sin valor" o "vacío"
- Es un valor que asignas explícitamente
- Representa la ausencia intencional de un objeto
- Tipo: `"object"` (bug histórico de JavaScript)
- Asignado manualmente por el programador

**Ejemplos:**

```js
let x
console.log(x) // undefined (declarada pero no inicializada)

function sinRetorno() {
  // no hay return
}
console.log(sinRetorno()) // undefined

const obj = { nombre: 'Juan' }
console.log(obj.edad) // undefined (propiedad no existe)

// null - asignación intencional
let usuario = null // "No hay usuario actualmente"
let datos = obtenerDatos() // Puede retornar null si no hay datos

// Comparación
undefined == null // true (coerción)
undefined === null // false (diferentes tipos)

typeof undefined // "undefined"
typeof null // "object" (bug histórico)

// Conversión a booleano
Boolean(undefined) // false
Boolean(null) // false

// Conversión a número
Number(undefined) // NaN
Number(null) // 0
```

**Cuándo usar cada uno:**

- `undefined`: Déjalo para JavaScript (variables no inicializadas)
- `null`: Úsalo cuando quieras indicar explícitamente "sin valor"

**Ejemplo práctico:**

```js
let usuario = null // Aún no hemos cargado el usuario

fetch('/api/usuario')
  .then((res) => res.json())
  .then((data) => {
    usuario = data.usuario || null // null si no hay usuario
  })

// Más adelante:
if (usuario === null) {
  console.log('No hay usuario logueado')
} else if (usuario === undefined) {
  console.log('Error: usuario no inicializado')
}
```

</details>

---

### 8. ¿Qué son las Promises y cómo funcionan?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Una Promise es un objeto que representa el resultado eventual (éxito o error) de una operación asíncrona. Es una forma más elegante de manejar código async que callbacks.

**Estados de una Promise:**

1. **Pending (Pendiente)**: Estado inicial, ni cumplida ni rechazada
2. **Fulfilled (Cumplida)**: Operación completada con éxito
3. **Rejected (Rechazada)**: Operación falló

**Estructura básica:**

```js
const miPromise = new Promise((resolve, reject) => {
  // Operación asíncrona
  const exito = true

  if (exito) {
    resolve('Datos obtenidos') // Cumplida
  } else {
    reject('Error al obtener datos') // Rechazada
  }
})

// Consumir la Promise
miPromise
  .then((resultado) => console.log(resultado)) // Si se cumple
  .catch((error) => console.error(error)) // Si falla
  .finally(() => console.log('Terminó')) // Siempre se ejecuta
```

**Ejemplo práctico:**

```js
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, nombre: 'María' })
      } else {
        reject('ID inválido')
      }
    }, 1000)
  })
}

obtenerUsuario(1)
  .then((usuario) => {
    console.log(usuario)
    return obtenerPosts(usuario.id) // Encadenamiento
  })
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error))
```

**Ventajas sobre callbacks:**

- Evita "callback hell"
- Mejor manejo de errores
- Encadenamiento más limpio
- Composición más fácil

**async/await (sintaxis moderna):**

```js
async function obtenerDatos() {
  try {
    const usuario = await obtenerUsuario(1)
    const posts = await obtenerPosts(usuario.id)
    return posts
  } catch (error) {
    console.error(error)
  }
}
```

**Métodos útiles:**

```js
// Ejecutar múltiples promises en paralelo
Promise.all([promise1, promise2, promise3]).then((resultados) =>
  console.log(resultados)
)

// Toma la primera que se resuelva
Promise.race([promise1, promise2]).then((resultado) => console.log(resultado))

// Todas terminan (cumplidas o rechazadas)
Promise.allSettled([promise1, promise2]).then((resultados) =>
  console.log(resultados)
)
```

**Relación con Event Loop:**
Los `.then()`, `.catch()`, `.finally()` van a la **Microtask Queue**, por eso tienen prioridad sobre `setTimeout`.

</details>

---

### 9. ¿Qué es `this` en JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

`this` es una palabra clave que referencia al contexto de ejecución de una función. Su valor depende de **cómo se llama la función**, no de dónde se declara.

**Reglas de `this`:**

**1. En método de objeto:**

```js
const persona = {
  nombre: 'María',
  saludar() {
    console.log(this.nombre) // 'María'
  },
}
persona.saludar() // this = persona
```

**2. Función normal (modo no estricto):**

```js
function mostrar() {
  console.log(this) // window (navegador) o global (Node.js)
}
mostrar()
```

**3. Función normal (strict mode):**

```js
'use strict'
function mostrar() {
  console.log(this) // undefined
}
mostrar()
```

**4. Arrow function:**

```js
const obj = {
  nombre: 'María',
  saludar: () => {
    console.log(this.nombre) // undefined
    // Arrow function NO tiene su propio this
    // Hereda this del scope padre
  },
}
```

**5. Constructor (con `new`):**

```js
function Persona(nombre) {
  this.nombre = nombre // this = nuevo objeto
}
const maria = new Persona('María')
```

**6. Con `call`, `apply`, `bind`:**

```js
function saludar() {
  console.log(this.nombre)
}

const persona = { nombre: 'María' }

saludar.call(persona) // this = persona
saludar.apply(persona) // this = persona
const saludarMaria = saludar.bind(persona)
saludarMaria() // this = persona
```

**Problema común con callbacks:**

```js
const persona = {
  nombre: 'María',
  saludar() {
    setTimeout(function () {
      console.log(this.nombre) // undefined (this = window)
    }, 1000)
  },
}

// Solución 1: Arrow function
const persona2 = {
  nombre: 'María',
  saludar() {
    setTimeout(() => {
      console.log(this.nombre) // 'María' ✅
    }, 1000)
  },
}

// Solución 2: bind
const persona3 = {
  nombre: 'María',
  saludar() {
    setTimeout(
      function () {
        console.log(this.nombre) // 'María' ✅
      }.bind(this),
      1000
    )
  },
}
```

**Resumen:**

- Métodos de objeto → `this` = objeto
- Función normal → `this` = window/global/undefined
- Arrow function → `this` = heredado del scope padre
- Constructor → `this` = nuevo objeto
- call/apply/bind → `this` = lo que especifiques
</details>

---

### 10. ¿Qué es el scope y qué tipos existen?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

El scope (ámbito) determina la accesibilidad de variables, funciones y objetos en diferentes partes del código.

**Tipos de Scope:**

**1. Global Scope:**
Variables accesibles desde cualquier parte del código.

```js
let global = 'Soy global'

function mostrar() {
  console.log(global) // Accesible
}

mostrar()
console.log(global) // Accesible
```

**2. Function Scope:**
Variables declaradas dentro de una función solo existen dentro de ella.

```js
function ejemplo() {
  var local = 'Solo aquí'
  let tambienLocal = 'Solo aquí'
  console.log(local) // Accesible
}

ejemplo()
console.log(local) // Error: local is not defined
```

**3. Block Scope:**
Variables con `let` y `const` solo existen dentro del bloque `{ }`.

```js
if (true) {
  let x = 10
  const y = 20
  var z = 30
}

console.log(z) // 30 (var se escapa del bloque)
console.log(x) // Error: x is not defined
console.log(y) // Error: y is not defined
```

**Scope Chain (Cadena de ámbitos):**

JavaScript busca variables desde el scope actual hacia arriba.

```js
let global = 'Global'

function externa() {
  let externaVar = 'Externa'

  function interna() {
    let internaVar = 'Interna'

    console.log(internaVar) // 'Interna' (scope local)
    console.log(externaVar) // 'Externa' (scope padre)
    console.log(global) // 'Global' (scope global)
  }

  interna()
  console.log(internaVar) // Error (no accesible)
}

externa()
```

**Orden de búsqueda:**

1. Scope local
2. Scopes padres (de dentro hacia afuera)
3. Scope global
4. Si no existe → ReferenceError

**Lexical Scope (Scope Léxico):**

El scope se determina por dónde se **declara** la función, no dónde se **ejecuta**.

```js
let nombre = 'Global'

function externa() {
  let nombre = 'Externa'

  function interna() {
    console.log(nombre) // 'Externa' (donde se declaró)
  }

  return interna
}

let nombre = 'Otro Global'
const fn = externa()
fn() // 'Externa' (no 'Otro Global')
```

**Diferencia clave: var vs let/const**

```js
// var - function scope
function ejemploVar() {
  for (var i = 0; i < 3; i++) {
    // i existe aquí
  }
  console.log(i) // 3 (i se escapa del bloque)
}

// let - block scope
function ejemploLet() {
  for (let i = 0; i < 3; i++) {
    // i solo existe aquí
  }
  console.log(i) // Error: i is not defined
}
```

El scope es fundamental para entender closures, hoisting y el comportamiento general de JavaScript.

</details>

---

## 🚀 Nivel: Mid-Level/Senior

### 11. Explica la diferencia entre función normal y arrow function

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Las arrow functions (`=>`) tienen diferencias importantes con las funciones tradicionales:

**1. Sintaxis más concisa:**

```js
// Función tradicional
function suma(a, b) {
  return a + b
}

// Arrow function
const suma = (a, b) => a + b
```

**2. No tienen su propio `this`:**

Las arrow functions heredan `this` del scope donde se declaran (lexical `this`).

```js
// Función tradicional
const obj = {
  nombre: 'María',
  saludar: function () {
    setTimeout(function () {
      console.log(this.nombre) // undefined (this = window)
    }, 1000)
  },
}

// Arrow function
const obj2 = {
  nombre: 'María',
  saludar: function () {
    setTimeout(() => {
      console.log(this.nombre) // 'María' ✅
    }, 1000)
  },
}
```

**3. No tienen `arguments`:**

```js
// Función tradicional
function tradicional() {
  console.log(arguments) // [1, 2, 3]
}
tradicional(1, 2, 3)

// Arrow function
const arrow = () => {
  console.log(arguments) // Error: arguments is not defined
}

// Solución: rest parameters
const arrow2 = (...args) => {
  console.log(args) // [1, 2, 3]
}
arrow2(1, 2, 3)
```

**4. No se pueden usar como constructores:**

```js
// Función tradicional
function Persona(nombre) {
  this.nombre = nombre
}
const maria = new Persona('María') // ✅

// Arrow function
const PersonaArrow = (nombre) => {
  this.nombre = nombre
}
const juan = new PersonaArrow('Juan') // ❌ Error
```

**5. No tienen `prototype`:**

```js
function Tradicional() {}
console.log(Tradicional.prototype) // { constructor: f }

const Arrow = () => {}
console.log(Arrow.prototype) // undefined
```

**6. No se pueden usar como métodos de objeto (generalmente):**

```js
// ❌ Incorrecto
const obj = {
  nombre: 'María',
  saludar: () => {
    console.log(this.nombre) // undefined (this no es obj)
  },
}

// ✅ Correcto
const obj2 = {
  nombre: 'María',
  saludar() {
    console.log(this.nombre) // 'María'
  },
}
```

**Cuándo usar cada una:**

**Arrow functions:**

- Callbacks (map, filter, reduce, etc.)
- Funciones dentro de métodos (para mantener `this`)
- Funciones que no necesitan `this`, `arguments` o `new`

**Funciones tradicionales:**

- Métodos de objeto
- Constructores
- Cuando necesitas `arguments`
- Cuando el comportamiento dinámico de `this` es necesario
</details>

---

### 12. ¿Qué es el 'use strict' y para qué sirve?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

`'use strict'` es una directiva que activa el modo estricto en JavaScript, introducida en ES5. Hace que el código sea más seguro y previene errores comunes.

**Cómo activarlo:**

```js
// Global (todo el archivo)
'use strict'

// Local (solo en la función)
function ejemplo() {
  'use strict'
  // código estricto
}
```

**Cambios principales:**

**1. Previene variables globales accidentales:**

```js
'use strict'
x = 10 // Error: x is not defined
// Sin strict mode: crea variable global
```

**2. `this` es `undefined` en funciones:**

```js
'use strict'
function mostrar() {
  console.log(this) // undefined
}
mostrar()
// Sin strict mode: this = window
```

**3. No permite duplicar parámetros:**

```js
'use strict'
function suma(a, a, b) {
  // Error
  return a + a + b
}
// Sin strict mode: permitido (confuso)
```

**4. No permite eliminar variables:**

```js
'use strict'
let x = 10
delete x // Error
// Sin strict mode: falla silenciosamente
```

**5. Palabras reservadas protegidas:**

```js
'use strict'
let let = 5        // Error
let implements = 3 // Error
```

**6. `with` statement no permitido:**

```js
'use strict'
with (obj) {
  // Error
  // código
}
```

**7. Octal syntax no permitido:**

```js
'use strict'
let num = 010 // Error
// Sin strict mode: num = 8 (octal)
```

**Ventajas:**

- Captura errores comunes tempranamente
- Previene uso accidental de features "inseguras"
- Código más optimizable para motores JS
- Facilita transición a ES6+

**Nota:**

- Los módulos ES6 (`import`/`export`) están en strict mode por defecto
- Las clases ES6 están en strict mode por defecto

```js
// Automáticamente en strict mode
export function ejemplo() {
  // 'use strict' implícito
}

class MiClase {
  metodo() {
    // 'use strict' implícito
  }
}
```

**Recomendación:** Úsalo siempre, especialmente en código nuevo.

</details>

---

### 13. ¿Qué es el temporal dead zone (TDZ)?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

La Temporal Dead Zone (TDZ) es el período entre el inicio de un scope y el punto donde una variable declarada con `let` o `const` es inicializada. Durante este tiempo, la variable existe pero no se puede acceder.

**Explicación:**

```js
{
  // TDZ empieza aquí para x
  console.log(x) // Error: Cannot access 'x' before initialization

  let x = 10 // TDZ termina aquí
  console.log(x) // 10 ✅
}
```

**Comparación con `var`:**

```js
// var - NO tiene TDZ
console.log(a) // undefined (hoisting)
var a = 5
console.log(a) // 5

// let - TDZ
console.log(b) // Error
let b = 10
console.log(b) // 10

// const - TDZ
console.log(c) // Error
const c = 20
console.log(c) // 20
```

**¿Por qué existe?**

1. **Prevenir bugs**: Fuerza a declarar antes de usar
2. **Código más predecible**: No puedes acceder a variables no inicializadas
3. **Mejor debugging**: Errores claros en lugar de `undefined` silencioso

**TDZ con parámetros por defecto:**

```js
function ejemplo(a = b, b = 2) {
  return [a, b]
}

ejemplo() // Error: Cannot access 'b' before initialization
// 'a' intenta usar 'b' que está en su TDZ
```

**Correcto:**

```js
function ejemplo(b = 2, a = b) {
  return [a, b]
}

ejemplo() // [2, 2] ✅
```

**TDZ en scope anidado:**

```js
let x = 1

{
  // TDZ para x inicia aquí
  console.log(x) // Error (no accede al x externo)
  let x = 2 // Declaración del x local
}
```

**Caso con `typeof`:**

```js
// Sin TDZ (variable no declarada)
console.log(typeof noExiste) // "undefined" (no error)

// Con TDZ (variable declarada pero en TDZ)
console.log(typeof x) // Error: Cannot access 'x' before initialization
let x = 10
```

**Importancia:**

La TDZ ayuda a escribir código más robusto al hacer explícito el orden de declaración e inicialización, evitando el uso accidental de variables antes de que estén listas.

</details>

---

### 14. ¿Cómo funciona el prototype en JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

En JavaScript, cada objeto tiene una propiedad interna llamada `[[Prototype]]` (accesible via `__proto__` o `Object.getPrototypeOf()`) que referencia a otro objeto. Este mecanismo se llama **herencia prototípica**.

**Concepto básico:**

Cuando intentas acceder a una propiedad de un objeto:

1. JavaScript busca en el objeto mismo
2. Si no la encuentra, busca en su prototype
3. Luego en el prototype del prototype
4. Hasta llegar a `null`

Esto se llama **Prototype Chain (cadena de prototipos)**.

**Ejemplo:**

```js
const animal = {
  comer() {
    console.log('Comiendo...')
  },
}

const perro = {
  ladrar() {
    console.log('Guau!')
  },
}

// Establecer prototype
Object.setPrototypeOf(perro, animal)

perro.ladrar() // 'Guau!' (método propio)
perro.comer() // 'Comiendo...' (del prototype)
```

**Con funciones constructoras:**

```js
function Persona(nombre) {
  this.nombre = nombre
}

// Métodos en el prototype (compartidos)
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

const maria = new Persona('María')
const juan = new Persona('Juan')

maria.saludar() // 'Hola, soy María'
juan.saludar() // 'Hola, soy Juan'

// Ambos comparten el mismo método
maria.saludar === juan.saludar // true
```

**Prototype Chain:**

```js
maria.toString() // [object Object]
// ¿De dónde viene toString?

maria.hasOwnProperty('nombre') // true
maria.hasOwnProperty('saludar') // false (está en prototype)

// Chain:
maria
  └── Persona.prototype
      └── Object.prototype
          └── null
```

**Ventajas:**

- Ahorro de memoria (métodos compartidos)
- Herencia flexible
- Modificación dinámica

**Con clases ES6:**

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }

  comer() {
    console.log(`${this.nombre} está comiendo`)
  }
}

class Perro extends Animal {
  ladrar() {
    console.log('Guau!')
  }
}

const firulais = new Perro('Firulais')
firulais.comer() // 'Firulais está comiendo'
firulais.ladrar() // 'Guau!'

// Internamente usa prototypes
firulais.__proto__ === Perro.prototype // true
Perro.prototype.__proto__ === Animal.prototype // true
```

**Nota:** Las clases ES6 son "azúcar sintáctica" sobre prototypes.

**Diferencia clave con otros lenguajes:**

JavaScript usa **prototypes**, no clases tradicionales. Los objetos heredan directamente de otros objetos.

</details>

---

### 15. ¿Qué son los event bubbling y event capturing?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Son las dos fases del flujo de eventos en el DOM. Cuando ocurre un evento, se propaga a través de los elementos del árbol DOM.

**Fases del evento:**

1. **Capturing (Captura)**: Del elemento raíz hacia el target
2. **Target**: El elemento donde ocurrió el evento
3. **Bubbling (Burbujeo)**: Del target hacia el elemento raíz

**Visualización:**

```html
<div id="abuelo">
  <div id="padre">
    <button id="hijo">Click</button>
  </div>
</div>
```

```
Capturing: document → abuelo → padre → hijo
                                        ↓
Bubbling:  document ← abuelo ← padre ← hijo
```

**Ejemplo de Bubbling (por defecto):**

```js
document.getElementById('abuelo').addEventListener('click', () => {
  console.log('Abuelo')
})

document.getElementById('padre').addEventListener('click', () => {
  console.log('Padre')
})

document.getElementById('hijo').addEventListener('click', () => {
  console.log('Hijo')
})

// Click en hijo:
// Salida: Hijo → Padre → Abuelo
```

**Ejemplo de Capturing:**

```js
document.getElementById('abuelo').addEventListener(
  'click',
  () => {
    console.log('Abuelo')
  },
  true
) // true = capturing

document.getElementById('padre').addEventListener(
  'click',
  () => {
    console.log('Padre')
  },
  true
)

document.getElementById('hijo').addEventListener('click', () => {
  console.log('Hijo')
})

// Click en hijo:
// Salida: Abuelo → Padre → Hijo
```

**Detener la propagación:**

```js
document.getElementById('hijo').addEventListener('click', (e) => {
  console.log('Hijo')
  e.stopPropagation() // Detiene bubbling/capturing
})

document.getElementById('padre').addEventListener('click', () => {
  console.log('Padre') // NO se ejecuta
})
```

**Event delegation (delegación):**

Aprovechar el bubbling para manejar eventos de múltiples elementos:

```js
// ❌ Ineficiente
document.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', handleClick)
})

// ✅ Eficiente (event delegation)
document.getElementById('lista').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    handleClick(e)
  }
})
```

**Ventajas de event delegation:**

- Menos event listeners (mejor rendimiento)
- Funciona con elementos dinámicos
- Menos memoria utilizada

**preventDefault vs stopPropagation:**

```js
element.addEventListener('click', (e) => {
  e.preventDefault() // Previene acción por defecto (ej: seguir link)
  e.stopPropagation() // Detiene propagación del evento
})
```

**Uso práctico:**

- Bubbling: event delegation, manejo centralizado
- Capturing: menos común, casos especiales de interceptación
</details>

---

## 💡 Consejos para la Entrevista

1. **No memorices, entiende**: Los entrevistadores notan cuando solo recitas
2. **Usa ejemplos de código**: Muestra, no solo digas
3. **Relaciona conceptos**: Demuestra comprensión profunda
4. **Admite cuando no sabes**: "No estoy 100% seguro, pero creo que..."
5. **Pregunta para aclarar**: "¿Te refieres a X o a Y?"
6. **Explica el 'por qué'**: No solo el 'qué' o el 'cómo'
7. **Menciona casos de uso reales**: Conecta con experiencia práctica

---

## 📚 Recursos Adicionales

Después de dominar estas preguntas, profundiza en:

- async/await y manejo de errores
- Módulos ES6 (import/export)
- Destructuring y spread operator
- Map, Set, WeakMap, WeakSet
- Generators y Symbols
- Web APIs (localStorage, fetch, etc.)
- Performance y optimización

¡Mucho éxito en tu entrevista! 🚀
