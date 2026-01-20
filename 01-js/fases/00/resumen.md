# 📚 Resumen - Fundamentos de JavaScript (Fase 00)

Este documento resume los conceptos fundamentales de JavaScript cubiertos en esta carpeta.

---

## 📑 Índice de Contenidos

1. [Lenguaje Interpretado](#1-lenguaje-interpretado)
2. [Motores de JavaScript](#2-motores-de-javascript)
3. [Prioridades, Event Loop y Memoria](#3-prioridades-event-loop-y-memoria)
4. [Single-Thread (Un Solo Hilo)](#4-single-thread-un-solo-hilo)
5. [Hoisting y Scope](#5-hoisting-y-scope)

### 🔗 Accesos Directos a los Documentos Originales

- [0.base.md](0.base.md) - Lenguaje interpretado y compilación JIT
- [motores.md](motores.md) - Motores de JavaScript y arquitectura
- [prioridades-memoria.md](prioridades-memoria.md) - Prioridades, Event Loop y gestión de memoria
- [single-thread.md](single-thread.md) - Modelo de ejecución de un solo hilo
- [hoisting-scope.md](hoisting-scope.md) - Hoisting, Scope y Temporal Dead Zone

---

## 1. Lenguaje Interpretado

**📄 Ver documento completo:** [0.base.md](0.base.md)

### Conceptos Clave

JavaScript es un **lenguaje interpretado** que se ejecuta "sobre la marcha", sin generar un archivo ejecutable previo.

#### Diferencias entre Compilado vs Interpretado

**Lenguaje Compilado (C, C++):**

1. Escribes el código
2. Un compilador lo traduce ANTES
3. Se genera un archivo ejecutable
4. El sistema ejecuta ese archivo

**Lenguaje Interpretado (JavaScript, Python):**

1. Escribes el código
2. Un intérprete lo lee
3. Ejecuta línea por línea
4. No hay ejecutable final

### Compilación JIT (Just-In-Time)

Aunque JavaScript es interpretado en concepto, es **compilado en la práctica** usando JIT:

- Los motores modernos (V8, SpiderMonkey) compilan partes del código en tiempo de ejecución
- JavaScript "aprende" mientras corre
- Optimiza código que se usa frecuentemente

**Proceso JIT:**

1. Primera vez: ejecuta normal
2. Detecta código que se repite mucho
3. Lo optimiza y compila
4. Reutiliza la versión optimizada

```js
function suma(a, b) {
  return a + b
}

for (let i = 0; i < 1000000; i++) {
  suma(1, 2) // El motor optimiza esto automáticamente
}
```

💡 **JIT es JavaScript aprendiendo y mejorando su propio rendimiento mientras ya está corriendo.**

---

## 2. Motores de JavaScript

**📄 Ver documento completo:** [motores.md](motores.md)

### ¿Qué es un Motor de JavaScript?

Un motor de JavaScript es el programa que ejecuta tu código JS. JavaScript no se ejecuta solo, necesita un motor que:

- Lea el código
- Lo entienda
- Lo convierta a instrucciones de máquina
- Lo ejecute

### Principales Motores

| Entorno       | Motor          |
| ------------- | -------------- |
| Chrome / Edge | V8             |
| Firefox       | SpiderMonkey   |
| Safari        | JavaScriptCore |
| Node.js       | V8             |
| Deno          | V8             |

### Arquitectura General de un Motor JS

Todos los motores siguen este flujo:

```
Código JS
   ↓
Parser
   ↓
AST (Abstract Syntax Tree)
   ↓
Bytecode
   ↓
JIT Compiler
   ↓
Machine Code
```

#### Fases del Motor:

1. **Parser**: Lee y verifica la sintaxis del código, construye el AST
2. **AST**: Árbol estructurado del código usado por herramientas como Babel, ESLint, Prettier
3. **Bytecode**: Primera forma ejecutable del código

💡 **Mismo motor, distinto entorno**: React en navegador y Node.js usan V8, pero con diferentes APIs disponibles.

---

## 3. Prioridades, Event Loop y Memoria

**📄 Ver documento completo:** [prioridades-memoria.md](prioridades-memoria.md)

### Orden de Prioridades en JavaScript

JavaScript **NO decide al azar** qué ejecutar. Sigue reglas estrictas:

#### 🥇 1. Call Stack (código síncrono) - Máxima prioridad

- Variables
- Funciones normales
- `console.log`
- Todo lo que NO es async

📌 **Mientras haya algo aquí, NO entra nada más**

#### 🥈 2. Microtasks Queue - Segunda prioridad

- `Promise.then`
- `catch`
- `finally`
- `await` (internamente)

📌 **Se ejecutan TODAS antes de pasar a lo siguiente**

#### 🥉 3. Macrotasks Queue - Tercera prioridad

- `setTimeout`
- `setInterval`
- Eventos DOM
- Callbacks de APIs

📌 **Aunque el delay sea `0`, van después**

### Regla de Oro

> JavaScript nunca interrumpe código síncrono,  
> siempre vacía las microtasks,  
> y recién después toma una macrotask.

### Gestión de Memoria

JavaScript divide la memoria en:

#### 📦 Stack (memoria rápida)

Guarda:

- Variables primitivas
- Contextos de ejecución
- Referencias

```js
let x = 10 // Stack: x → 10
```

#### 🏠 Heap (memoria grande)

Guarda:

- Objetos
- Arrays
- Funciones
- Closures

---

## 4. Single-Thread (Un Solo Hilo)

**📄 Ver documento completo:** [single-thread.md](single-thread.md)

### JavaScript Hace Una Cosa a la Vez

- **Solo un hilo de ejecución**: Una función a la vez
- **Una línea por instante**: No ejecuta dos operaciones JS simultáneamente

### ¿Cómo Hace Cosas "Al Mismo Tiempo"?

JavaScript trabaja con **ayudantes externos**:

**En el navegador:**

- Timers (setTimeout)
- Fetch (HTTP)
- DOM events
- APIs del navegador

**En Node.js:**

- Sistema de archivos
- Red
- Timers

👉 **Estos NO son JavaScript puro**, son del entorno.

### El Event Loop 🌀

El Event Loop es el **coordinador** que:

- Revisa si el Call Stack está vacío
- Decide qué tarea puede entrar
- Respeta prioridades

**Orden mental:**

1. Código normal
2. Promises (microtasks)
3. Timers / eventos (macrotasks)

### Ejemplo Práctico

```js
console.log('A')
setTimeout(() => console.log('B'), 0)
Promise.resolve().then(() => console.log('C'))
console.log('D')
```

**Salida:**

```
A
D
C
B
```

**¿Por qué?**

- A y D → ejecución normal (síncrona)
- C → microtask (prioridad sobre macrotasks)
- B → macrotask (última prioridad)

### Analogía

Imagina:

- **JS** = una persona
- **Call Stack** = lo que tiene en las manos
- **Navegador** = asistentes
- **Event Loop** = coordinador

La persona solo puede hacer una tarea, pero puede pedir favores. Cuando termina, revisa si hay algo pendiente.

### Conceptos Clave

✔ JavaScript no es multithread  
✔ No ejecuta dos cosas JS a la vez  
✔ Usa el entorno para tareas lentas  
✔ El Event Loop crea la ilusión de asincronía  
✔ async/await no crea hilos, solo ordena Promises

### Frase para Entrevistas

> "JavaScript es single-threaded, pero su modelo de concurrencia basado en el Event Loop le permite manejar operaciones asíncronas sin bloquear el hilo principal."

---

## 5. Hoisting y Scope

**📄 Ver documento completo:** [hoisting-scope.md](hoisting-scope.md)

### ¿Qué es el Scope?

El **scope** (ámbito) determina dónde puedes acceder a una variable.

#### Tipos de Scope

**1. Global Scope**: Variables accesibles desde cualquier parte

```js
let nombre = 'María' // Accesible en todo el código
```

**2. Function Scope**: Variables solo dentro de la función

```js
function calcular() {
  let resultado = 10 // Solo existe aquí
}
```

**3. Block Scope**: Variables solo dentro del bloque `{ }`

```js
if (true) {
  let x = 10 // Solo existe en este bloque
}
console.log(x) // ❌ Error
```

#### Scope Chain

JavaScript busca variables desde el scope actual hacia arriba:

1. Scope local
2. Scope padre
3. Scope global
4. Si no existe → Error

### ¿Qué es el Hoisting?

**Hoisting** = JavaScript "eleva" las declaraciones al inicio de su scope.

⚠️ Solo eleva la **declaración**, NO la **asignación**.

#### Hoisting con `var`

```js
console.log(x) // undefined (no error)
var x = 5
console.log(x) // 5
```

#### Hoisting con `let` y `const`

```js
console.log(x) // ❌ Error: Cannot access 'x' before initialization
let x = 5
```

📌 **Temporal Dead Zone (TDZ)**: Zona donde la variable existe pero no se puede acceder.

#### Hoisting con Funciones

**Function Declaration** (se eleva completamente):

```js
saludar() // ✅ "Hola" (funciona antes de declarar)

function saludar() {
  console.log('Hola')
}
```

**Function Expression** (NO se eleva):

```js
saludar() // ❌ Error: saludar is not a function

var saludar = function () {
  console.log('Hola')
}
```

### Tabla Comparativa: var vs let vs const

| Característica | var            | let      | const    |
| -------------- | -------------- | -------- | -------- |
| Scope          | Function       | Block    | Block    |
| Hoisting       | ✅ (undefined) | ⚠️ (TDZ) | ⚠️ (TDZ) |
| Redeclaración  | ✅             | ❌       | ❌       |
| Reasignación   | ✅             | ✅       | ❌       |

### Caso Práctico: var vs let en loops

```js
// Con var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Salida: 3, 3, 3 (var es function scope)

// Con let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Salida: 0, 1, 2 (let es block scope)
```

### Reglas de Oro

✔ Usa `let` y `const`, evita `var`  
✔ Declara variables al inicio del scope  
✔ Block scope `{ }` solo funciona con `let` y `const`  
✔ Nunca dependas del hoisting en código real

### Para Entrevistas

> "El hoisting es el comportamiento de JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su scope antes de la ejecución. Solo se eleva la declaración, no la inicialización. Con `let` y `const` existe la Temporal Dead Zone que previene el acceso antes de la declaración."

---

## 🎯 Conclusión

Estos conceptos fundamentales son la base para entender cómo funciona JavaScript:

1. **Interpretado con JIT**: Aprende y optimiza mientras ejecuta
2. **Motores**: V8, SpiderMonkey, etc., compilan y ejecutan el código
3. **Prioridades**: Call Stack → Microtasks → Macrotasks
4. **Single-Thread**: Un hilo con Event Loop para asincronía
5. **Hoisting y Scope**: var vs let/const, TDZ y scope chain

Dominar estos conceptos te permitirá escribir código más eficiente y debuggear problemas más fácilmente.
