# 🧠 JavaScript – Prioridades, Event Loop y Memoria

## ❓ ¿Qué significa que JavaScript “respeta prioridades”?

JavaScript **no decide al azar qué ejecutar**.  
Sigue **reglas estrictas de prioridad**.

👉 **La prioridad NO es por “tiempo”**, es por **tipo de tarea**.

---

## 🔢 Orden REAL de prioridades en JavaScript

JavaScript siempre sigue este orden:

### 🥇 1. Call Stack (código síncrono)

Tiene **máxima prioridad**.

- Variables
- Funciones normales
- `console.log`
- Lo que no es async

📌 **Mientras haya algo aquí, NO entra nada más.**

---

### 🥈 2. Microtasks Queue

Segunda prioridad.

- `Promise.then`
- `catch`
- `finally`
- `await` (internamente)

📌 **Se ejecutan TODAS antes de pasar a lo siguiente.**

---

### 🥉 3. Macrotasks Queue

Tercera prioridad.

- `setTimeout`
- `setInterval`
- Eventos DOM
- Callbacks de APIs

📌 Aunque el delay sea `0`, **van después**.

---

### 🧠 Regla de oro

> JavaScript nunca interrumpe código síncrono,  
> siempre vacía las microtasks,  
> y recién después toma una macrotask.

---

## 🧠 ¿Qué pasa en memoria?

Ahora lo más importante: **qué se guarda y dónde**.

---

## 🧩 Memoria de JavaScript (simplificado)

JavaScript divide la memoria en:

### 📦 Stack (memoria rápida)

Guarda:

- Variables primitivas
- Contextos de ejecución
- Referencias

Ejemplo:

```js
let x = 10
```

**Stack**

- `x → 10`

---

### 🏠 Heap (memoria grande)

Guarda:

- Objetos
- Arrays
- Funciones
- Closures

Ejemplo:

```js
let user = { name: 'Ana' }
```

**Stack**

- `user → referencia`

**Heap**

- `{ name: "Ana" }`

---

### ⏳ Qué pasa con async en memoria

```js
function foo() {
  let x = 10

  setTimeout(() => {
    console.log(x)
  }, 1000)
}

foo()
```

**Paso clave:**

- `foo()` termina
- Su execution context sale del stack
- **PERO…**

👉 `x` **no se elimina**, porque:

- El callback lo necesita
- Se crea un **closure**

**Heap**

- `closure → x = 10`

---

### 🔥 Frase clave

> JavaScript no mantiene cosas en memoria “por tiempo”,  
> las mantiene **mientras alguien las necesite**.

---

## 🧾 Resumen ultra corto

### Prioridad

- **Call Stack → Microtasks → Macrotasks**

- Call Stack: código normal (máxima prioridad)
- Microtasks: Promises, await
- Macrotasks: setTimeout, eventos, timers

### 🌀 Event Loop

El Event Loop no ejecuta código, solo decide cuándo puede entrar al Call Stack.

- Observa el stack
- Respeta prioridades
- Nunca interrumpe código en ejecución

### ⏳ Async

- Async NO significa paralelo ni bloqueante.
- JavaScript sigue siendo single-thread
- Las tareas lentas se delegan al entorno
- El hilo principal nunca se bloquea

### 🧠 Closures

Un closure mantiene vivas las variables que aún se necesitan.

- Aunque la función ya terminó
- Mientras exista una referencia
- Base de callbacks, hooks y encapsulación

### 🏠 Memoria (Heap)

- El Heap guarda objetos, funciones y closures.
- El Stack guarda referencias
- El Heap guarda los datos reales
- El Garbage Collector libera lo que ya no se usa

### Ideas clave

- El Event Loop **coordina**, no ejecuta
- Async **NO bloquea**
- Closures **mantienen memoria viva**
- Heap guarda objetos y closures

---

## 🧩 Frase completa

> JavaScript es single-threaded, ejecuta código según la prioridad Call Stack, Microtasks y Macrotasks; el Event Loop solo coordina el acceso al stack, las operaciones asíncronas no bloquean el hilo principal y los closures mantienen vivas las variables en el heap mientras existan referencias.
