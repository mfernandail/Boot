# 📚 Resumen - Fundamentos de JavaScript (Fase 00)

Este documento resume los conceptos fundamentales de JavaScript cubiertos en esta carpeta.

---

## 📑 Índice de Contenidos

1. [Lenguaje Interpretado](#1-lenguaje-interpretado)
2. [Motores de JavaScript](#2-motores-de-javascript)
3. [Prioridades, Event Loop y Memoria](#3-prioridades-event-loop-y-memoria)
4. [Single-Thread (Un Solo Hilo)](#4-single-thread-un-solo-hilo)
5. [Hoisting y Scope](#5-hoisting-y-scope)
6. [Closures](#6-closures)

### 🔗 Accesos Directos a los Documentos Originales

- [0.base.md](0.base.md) - Lenguaje interpretado y compilación JIT
- [motores.md](motores.md) - Motores de JavaScript y arquitectura
- [prioridades-memoria.md](prioridades-memoria.md) - Prioridades, Event Loop y gestión de memoria
- [single-thread.md](single-thread.md) - Modelo de ejecución de un solo hilo
- [hoisting-scope.md](hoisting-scope.md) - Hoisting, Scope y Temporal Dead Zone
- [closures.md](closures.md) - Closures, variables privadas y usos prácticos

### 🎯 Evaluación

- [quiz.md](quiz.md) - **Quiz completo** con preguntas de estudio y entrevistas
- [preguntas-entrevistas.md](preguntas-entrevistas.md) - **Preguntas frecuentes en entrevistas** con respuestas profesionales

---

## 📖 Orden de Estudio Recomendado

Para aprovechar al máximo estos conceptos, sigue este orden progresivo:

### 🎯 Ruta de Aprendizaje

#### 1️⃣ Lenguaje Interpretado (JIT)

**¿Por qué primero?** Entender qué es JavaScript y cómo funciona en general.

- Conceptos: Interpretado vs Compilado, JIT
- Tiempo estimado: 20-30 min
- 📄 [0.base.md](0.base.md)

#### 2️⃣ Hoisting y Scope

**¿Por qué segundo?** Son la base para entender cómo funcionan las variables y funciones.

- Conceptos: var/let/const, TDZ, Scope Chain
- Tiempo estimado: 45-60 min
- 📄 [hoisting-scope.md](hoisting-scope.md)
- ⚠️ **Fundamental**: Sin esto, el resto será confuso

#### 3️⃣ Motores de JavaScript

**¿Por qué tercero?** Con la base anterior, entenderás mejor cómo se ejecuta tu código.

- Conceptos: V8, Parser, AST, Bytecode
- Tiempo estimado: 30-40 min
- 📄 [motores.md](motores.md)

#### 4️⃣ Single-Thread

**¿Por qué cuarto?** Comprende el modelo de ejecución de JavaScript.

- Conceptos: Un solo hilo, Event Loop básico
- Tiempo estimado: 30-40 min
- 📄 [single-thread.md](single-thread.md)

#### 5️⃣ Prioridades, Event Loop y Memoria

**¿Por qué quinto?** Profundiza en asincronía y gestión de memoria.

- Conceptos: Call Stack, Microtasks, Macrotasks, Stack vs Heap
- Tiempo estimado: 60-75 min
- 📄 [prioridades-memoria.md](prioridades-memoria.md)
- ⚡ **Combina** conceptos de Single-Thread con gestión avanzada

#### 6️⃣ Closures

**¿Por qué último?** Requiere dominar Scope, Hoisting y Event Loop.

- Conceptos: Variables privadas, Factory functions, Memoización
- Tiempo estimado: 60-90 min
- 📄 [closures.md](closures.md)
- 🎓 **Concepto avanzado**: Practica mucho con ejemplos

### 📅 Plan de Estudio Sugerido

**Opción 1 - Intensivo (1 día)**

- Mañana: Temas 1, 2, 3
- Tarde: Temas 4, 5
- Noche: Tema 6 + práctica

**Opción 2 - Gradual (3 días)**

- Día 1: Temas 1 y 2 + práctica
- Día 2: Temas 3 y 4 + práctica
- Día 3: Temas 5 y 6 + práctica

**Opción 3 - Profundo (1 semana)**

- 1-2 temas por día con ejercicios prácticos entre cada uno

### ✅ Checklist de Progreso

- [ ] Entiendo la diferencia entre interpretado y compilado
- [ ] Domino scope (global, function, block) y hoisting
- [ ] Sé cómo funcionan los motores JS (V8, AST, etc.)
- [ ] Comprendo el modelo single-thread
- [ ] Entiendo el Event Loop y sus prioridades
- [ ] Puedo explicar qué es un closure y crear ejemplos

### 💡 Consejos de Estudio

1. **No saltes temas**: Cada uno construye sobre el anterior
2. **Practica después de cada tema**: Escribe código, no solo leas
3. **Usa la consola**: Experimenta con los ejemplos
4. **Dibuja diagramas**: Especialmente para Event Loop y Closures
5. **Explica en voz alta**: Si puedes enseñarlo, lo entendiste
6. **Revisa el código existente**: Busca closures y hoisting en tu código

### 🔗 Conceptos Interrelacionados

```
Hoisting & Scope
       ↓
    Closures
       ↓
  Event Loop
       ↓
 Programación Async
```

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

## 6. Closures

**📄 Ver documento completo:** [closures.md](closures.md)

### ¿Qué es un Closure?

En términos simples:

> Un closure es cuando una función "recuerda" las variables del lugar donde fue creada, incluso después de que ese lugar ya no exista.

### Ejemplo Básico

```js
function crearSaludo(nombre) {
  return function () {
    console.log(`Hola, ${nombre}`)
  }
}

const saludarMaria = crearSaludo('María')
saludarMaria() // "Hola, María"
```

**¿Qué pasó?**

1. `crearSaludo('María')` se ejecuta
2. Crea la variable `nombre = 'María'`
3. Devuelve una función
4. `crearSaludo` termina de ejecutar
5. **Normalmente** `nombre` debería desaparecer
6. **PERO NO** → La función interna la "recuerda" 🔒

### Contador Privado (Caso Clásico)

```js
function crearContador() {
  let count = 0 // Variable "privada"

  return function () {
    count++
    return count
  }
}

const contador = crearContador()

contador() // 1
contador() // 2
contador() // 3

console.log(count) // ❌ Error: count is not defined
```

📌 `count` NO es accesible desde afuera, solo la función devuelta puede modificarlo.

### Problema Común: var en Loops

**❌ Problema:**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// Salida: 3, 3, 3
```

**✅ Solución con `let`:**

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// Salida: 0, 1, 2
```

### Usos Prácticos

#### 1. Variables Privadas

```js
function crearCuenta(saldoInicial) {
  let saldo = saldoInicial // Privada

  return {
    depositar(cantidad) {
      saldo += cantidad
      return saldo
    },
    verSaldo() {
      return saldo
    },
  }
}

const miCuenta = crearCuenta(100)
miCuenta.depositar(50) // 150
console.log(miCuenta.saldo) // undefined (protegido)
```

#### 2. Factory Functions

```js
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor
  }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

duplicar(5) // 10
triplicar(5) // 15
```

#### 3. Memoización (Cache)

```js
function crearCalculadora() {
  const cache = {} // Privado

  return function (n) {
    if (cache[n]) return cache[n]

    const resultado = n * n
    cache[n] = resultado
    return resultado
  }
}
```

### Reglas de Oro

✔ Closures se crean **automáticamente** cuando una función interna usa variables externas  
✔ Guardan **referencias**, no copian valores  
✔ Úsalos para **encapsulación** y variables privadas  
✔ Cuidado con loops y `var`, usa `let`  
✔ Atención a **memory leaks** con objetos grandes

### Para Entrevistas

> "Un closure es una función que tiene acceso a variables de su scope externo, incluso después de que la función externa haya terminado de ejecutarse. JavaScript crea closures automáticamente cuando una función interna referencia variables de su función contenedora, manteniendo esas variables en memoria."

---

## 🎯 Conclusión

Estos conceptos fundamentales son la base para entender cómo funciona JavaScript:

1. **Interpretado con JIT**: Aprende y optimiza mientras ejecuta
2. **Motores**: V8, SpiderMonkey, etc., compilan y ejecutan el código
3. **Prioridades**: Call Stack → Microtasks → Macrotasks
4. **Single-Thread**: Un hilo con Event Loop para asincronía
5. **Hoisting y Scope**: var vs let/const, TDZ y scope chain
6. **Closures**: Funciones que recuerdan su entorno, encapsulación

Dominar estos conceptos te permitirá escribir código más eficiente y debuggear problemas más fácilmente.
