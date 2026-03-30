# JavaScript hace una cosa a la vez” (single-thread)

## JavaScript tiene un solo hilo de ejecución:

- Solo una función puede ejecutarse a la vez
- Solo una línea se procesa en un instante
- No puede ejecutar dos operaciones JS al mismo tiempo

## Entonces… ¿cómo hace cosas “al mismo tiempo”?

- JavaScript no hace todo solo.
- Trabaja con ayudantes externos.

## Los “ayudantes” de JavaScript

En el navegador:

- Timers (setTimeout)
- Fetch (HTTP)
- DOM events
- APIs del navegador

En Node.js:

- Sistema de archivos
- Red
- Timers

👉 Estos NO son JavaScript puro
Son del entorno.

## Aquí entra el Event Loop 🌀

El Event Loop es el coordinador:

- Revisa si el Call Stack está vacío
- Decide qué tarea puede entrar
- Respeta prioridades

Orden mental:

- Código normal
- Promises (microtasks)
- Timers / eventos (macrotasks)

## Ejemplo

```js
console.log('A')

setTimeout(() => console.log('B'), 0)

Promise.resolve().then(() => console.log('C'))

console.log('D')
```

Salida:
A
D
C
B

Por qué

- A y D → ejecución normal
- C → microtask (prioridad)
- B → macrotask

## Analogía muy clara 🧠

Imagina:

- JS = una persona
- Call Stack = lo que tiene en las manos
- Navegador = asistentes
- Event Loop = coordinador

La persona:

- Solo puede hacer una tarea
- Pero puede pedir favores
- Cuando termina, revisa si hay algo pendiente

## Lo más importante que debes quedarte

✔ JavaScript no es multithread
✔ No ejecuta dos cosas JS a la vez
✔ Usa el entorno para tareas lentas
✔ El Event Loop crea la ilusión de asincronía
✔ async/await no crea hilos, solo ordena Promises

Frase final (para entrevistas)

JavaScript es single-threaded, pero su modelo de concurrencia basado en el Event Loop le permite manejar operaciones asíncronas sin bloquear el hilo principal.
