# 🎯 Quiz - Fundamentos de JavaScript

Pon a prueba tus conocimientos sobre los conceptos fundamentales de JavaScript.

---

## 📋 Instrucciones

- Lee cada pregunta cuidadosamente
- Intenta responder sin ver las soluciones
- Las respuestas están al final de cada sección
- Para preguntas de código, escribe tu respuesta antes de ver la solución

---

## 🎓 Sección 1: Lenguaje Interpretado y JIT

### Pregunta 1.1 (Opción Múltiple)

¿Cuál de las siguientes afirmaciones es correcta sobre JavaScript?

A) JavaScript es un lenguaje puramente compilado  
B) JavaScript es puramente interpretado  
C) JavaScript es interpretado pero usa compilación JIT  
D) JavaScript genera un archivo ejecutable

<details>
<summary>Ver Respuesta</summary>

**Respuesta: C**

JavaScript es conceptualmente interpretado, pero los motores modernos (V8, SpiderMonkey) usan compilación Just-In-Time (JIT) para optimizar el código en tiempo de ejecución.

</details>

### Pregunta 1.2 (Conceptual)

¿Qué significa JIT (Just-In-Time) y cómo mejora el rendimiento de JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

JIT significa "compilación en tiempo de ejecución". El motor JavaScript:

1. Ejecuta el código normalmente al principio
2. Observa qué partes se usan frecuentemente (hot paths)
3. Compila esas partes a código máquina optimizado
4. Reutiliza la versión optimizada en futuras ejecuciones

Esto permite que JavaScript "aprenda" mientras corre y mejore su rendimiento sin intervención del programador.

</details>

### Pregunta 1.3 (Entrevista)

**Entrevistador:** "¿JavaScript es un lenguaje compilado o interpretado?"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"JavaScript es técnicamente un lenguaje interpretado, pero en la práctica, los motores modernos como V8 usan compilación Just-In-Time (JIT). Esto significa que el código se compila en tiempo de ejecución en lugar de antes de ejecutarse. El motor analiza el código, identifica patrones de uso frecuente y compila esas secciones a código máquina para optimizar el rendimiento. Entonces, aunque JavaScript no requiere un paso de compilación previo como C++ o Java, sí se compila internamente durante la ejecución."

</details>

---

## 🔧 Sección 2: Motores de JavaScript

### Pregunta 2.1 (Opción Múltiple)

¿Qué motor de JavaScript utiliza Chrome y Node.js?

A) SpiderMonkey  
B) JavaScriptCore  
C) Chakra  
D) V8

<details>
<summary>Ver Respuesta</summary>

**Respuesta: D**

V8 es el motor usado por Chrome, Edge (Chromium), Node.js y Deno.

</details>

### Pregunta 2.2 (Orden)

Ordena las siguientes fases en el orden correcto de ejecución de un motor JS:

A) Machine Code  
B) Parser  
C) Bytecode  
D) AST  
E) JIT Compiler

<details>
<summary>Ver Respuesta</summary>

**Respuesta:** B → D → C → E → A

1. **Parser** - Lee y analiza el código
2. **AST** - Crea el árbol sintáctico abstracto
3. **Bytecode** - Genera código intermedio
4. **JIT Compiler** - Optimiza código frecuente
5. **Machine Code** - Código máquina ejecutable
</details>

### Pregunta 2.3 (Entrevista)

**Entrevistador:** "¿Qué es el AST y para qué se utiliza?"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"El AST (Abstract Syntax Tree) es una representación estructurada del código en forma de árbol. Después de que el parser analiza la sintaxis, convierte el código en este árbol jerárquico que representa la estructura lógica del programa. El AST es fundamental porque herramientas como Babel, ESLint, Prettier y TypeScript lo utilizan para analizar y transformar código. Por ejemplo, Babel usa el AST para transpilar características modernas de JavaScript a versiones compatibles con navegadores antiguos."

</details>

---

## ⚡ Sección 3: Single-Thread y Event Loop

### Pregunta 3.1 (Verdadero/Falso)

JavaScript puede ejecutar dos funciones simultáneamente.

<details>
<summary>Ver Respuesta</summary>

**Respuesta: Falso**

JavaScript es single-threaded, solo puede ejecutar una función a la vez. El Event Loop y las APIs del entorno crean la ilusión de concurrencia, pero JavaScript en sí solo ejecuta código de forma secuencial.

</details>

### Pregunta 3.2 (Código - Predecir Output)

¿Cuál será la salida de este código?

```js
console.log('A')
setTimeout(() => console.log('B'), 0)
Promise.resolve().then(() => console.log('C'))
console.log('D')
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
A
D
C
B
```

**Explicación:**

1. `A` - Código síncrono (Call Stack)
2. `D` - Código síncrono (Call Stack)
3. `C` - Microtask (Promise.then tiene prioridad)
4. `B` - Macrotask (setTimeout, aunque sea 0ms)

**Prioridad:** Call Stack → Microtasks → Macrotasks

</details>

### Pregunta 3.3 (Entrevista)

**Entrevistador:** "¿Cómo maneja JavaScript operaciones asíncronas si es single-threaded?"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"JavaScript delega operaciones asíncronas al entorno de ejecución (navegador o Node.js). Por ejemplo, cuando hacemos un `setTimeout` o `fetch`, JavaScript no espera - pasa esa tarea a las Web APIs del navegador o las APIs de Node.js, que sí pueden ejecutar múltiples operaciones en paralelo. El Event Loop constantemente revisa si el Call Stack está vacío y, cuando lo está, trae callbacks desde las colas de tareas siguiendo un orden de prioridad: primero microtasks (Promises) y luego macrotasks (setTimeout, eventos). De esta forma, aunque JavaScript solo ejecuta una cosa a la vez, puede manejar múltiples operaciones asíncronas eficientemente."

</details>

---

## 🎭 Sección 4: Prioridades y Memoria

### Pregunta 4.1 (Opción Múltiple)

¿Cuál tiene mayor prioridad en el Event Loop?

A) setTimeout  
B) Promise.then  
C) setInterval  
D) addEventListener

<details>
<summary>Ver Respuesta</summary>

**Respuesta: B**

Promise.then es una microtask y tiene mayor prioridad que las macrotasks (setTimeout, setInterval, eventos).

</details>

### Pregunta 4.2 (Código - Predecir Output)

¿Qué imprime este código?

```js
setTimeout(() => console.log('1'), 0)
Promise.resolve().then(() => console.log('2'))
Promise.resolve().then(() => console.log('3'))
setTimeout(() => console.log('4'), 0)
console.log('5')
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
5
2
3
1
4
```

**Explicación:**

1. `5` - Código síncrono primero
2. `2` y `3` - Todas las microtasks se vacían antes de pasar a macrotasks
3. `1` - Primera macrotask
4. `4` - Segunda macrotask
</details>

### Pregunta 4.3 (Conceptual)

¿Cuál es la diferencia entre Stack y Heap en la gestión de memoria de JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

**Stack (Pila):**

- Almacena valores primitivos (number, string, boolean, etc.)
- Almacena referencias a objetos
- Memoria rápida, acceso directo
- Tamaño limitado
- Se limpia automáticamente (LIFO - Last In First Out)

**Heap (Montículo):**

- Almacena objetos, arrays, funciones
- Memoria más grande pero más lenta
- Acceso a través de referencias
- Gestionado por el Garbage Collector
- Puede causar memory leaks si no se libera correctamente
</details>

---

## 📦 Sección 5: Hoisting y Scope

### Pregunta 5.1 (Código - Predecir Output)

¿Qué imprime este código?

```js
console.log(x)
var x = 5
console.log(x)
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
undefined
5
```

**Explicación:**
Con `var`, la declaración se eleva (hoisting) pero NO la asignación. JavaScript lo interpreta como:

```js
var x
console.log(x) // undefined
x = 5
console.log(x) // 5
```

</details>

### Pregunta 5.2 (Código - Predecir Error)

¿Qué sucede con este código?

```js
console.log(y)
let y = 10
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:** ❌ Error: Cannot access 'y' before initialization

**Explicación:**
`let` y `const` están sujetas a la Temporal Dead Zone (TDZ). Aunque la variable existe desde el inicio del scope, no se puede acceder antes de su declaración.

</details>

### Pregunta 5.3 (Código - Predecir Output)

¿Qué imprime este código?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
3
3
3
```

**Explicación:**
`var` tiene function scope, no block scope. Todas las funciones de `setTimeout` comparten la misma `i`. Cuando se ejecutan los callbacks, el loop ya terminó e `i` vale 3.

**Solución:** Usar `let` en lugar de `var`:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Salida: 0, 1, 2
```

</details>

### Pregunta 5.4 (Tabla Comparativa)

Completa la tabla:

| Característica | var | let | const |
| -------------- | --- | --- | ----- |
| Scope          | ?   | ?   | ?     |
| Redeclaración  | ?   | ?   | ?     |
| Reasignación   | ?   | ?   | ?     |

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

| Característica | var      | let   | const |
| -------------- | -------- | ----- | ----- |
| Scope          | Function | Block | Block |
| Redeclaración  | ✅ Sí    | ❌ No | ❌ No |
| Reasignación   | ✅ Sí    | ✅ Sí | ❌ No |

</details>

### Pregunta 5.5 (Entrevista)

**Entrevistador:** "Explica qué es la Temporal Dead Zone (TDZ)"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"La Temporal Dead Zone es el periodo entre el inicio de un scope y el punto donde una variable con `let` o `const` es declarada. Durante este tiempo, la variable técnicamente existe en memoria pero no se puede acceder. Si intentas usarla, obtienes un ReferenceError. Esto es diferente de `var`, que se eleva con valor `undefined`. La TDZ ayuda a prevenir bugs al forzar declaraciones antes de uso y hace el código más predecible."

**Ejemplo:**

```js
{
  // TDZ inicia aquí para x
  console.log(x) // Error: Cannot access 'x' before initialization
  let x = 10 // TDZ termina aquí
  console.log(x) // 10
}
```

</details>

---

## 🔒 Sección 6: Closures

### Pregunta 6.1 (Conceptual)

¿Qué es un closure en JavaScript?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Un closure es una función que tiene acceso a variables de su scope externo, incluso después de que la función externa haya terminado de ejecutarse. JavaScript crea closures automáticamente cuando una función interna referencia variables de su función contenedora.

</details>

### Pregunta 6.2 (Código - Predecir Output)

¿Qué imprime este código?

```js
function crearContador() {
  let count = 0
  return function () {
    count++
    return count
  }
}

const contador1 = crearContador()
const contador2 = crearContador()

console.log(contador1()) // ?
console.log(contador1()) // ?
console.log(contador2()) // ?
console.log(contador1()) // ?
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
1
2
1
3
```

**Explicación:**

- Cada llamada a `crearContador()` crea un nuevo scope con su propia variable `count`
- `contador1` tiene su propio `count`
- `contador2` tiene su propio `count` independiente
- Cada closure mantiene su estado de forma privada
</details>

### Pregunta 6.3 (Código - Identificar Problema)

¿Qué problema tiene este código?

```js
let mensaje = 'Hola'

function crearSaludo() {
  return function () {
    console.log(mensaje)
  }
}

const saludo = crearSaludo()
mensaje = 'Adiós'
saludo() // ¿Qué imprime?
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:** Imprime "Adiós"

**Explicación:**
El closure guarda una **referencia** a la variable `mensaje`, no su valor. Cuando se ejecuta `saludo()`, busca el valor actual de `mensaje`, que es "Adiós".

**Si quisieras capturar el valor:**

```js
function crearSaludo(msg) {
  return function () {
    console.log(msg) // Captura el valor como parámetro
  }
}

const saludo = crearSaludo(mensaje)
mensaje = 'Adiós'
saludo() // "Hola"
```

</details>

### Pregunta 6.4 (Código Práctico)

Crea una función `crearCuenta` que:

- Acepte un `saldoInicial`
- Devuelva un objeto con métodos `depositar`, `retirar` y `verSaldo`
- El saldo debe ser privado (no accesible desde afuera)

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```js
function crearCuenta(saldoInicial) {
  let saldo = saldoInicial // Variable privada

  return {
    depositar(cantidad) {
      if (cantidad > 0) {
        saldo += cantidad
        return saldo
      }
      return 'Cantidad inválida'
    },
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad
        return saldo
      }
      return 'Fondos insuficientes'
    },
    verSaldo() {
      return saldo
    },
  }
}

// Uso:
const cuenta = crearCuenta(100)
cuenta.depositar(50) // 150
cuenta.retirar(30) // 120
cuenta.verSaldo() // 120
console.log(cuenta.saldo) // undefined (privado)
```

</details>

### Pregunta 6.5 (Entrevista)

**Entrevistador:** "Dame un ejemplo práctico de cuándo usarías un closure"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"Un caso práctico común es crear event handlers dinámicos en un loop. Por ejemplo, si tengo varios botones y quiero que cada uno recuerde su propio ID:

```js
function crearBotones() {
  const botones = ['A', 'B', 'C']

  botones.forEach((letra, index) => {
    const btn = document.createElement('button')
    btn.textContent = letra

    // El closure captura el valor de letra e index
    btn.addEventListener('click', function () {
      console.log(`Botón ${letra} en posición ${index}`)
    })

    document.body.appendChild(btn)
  })
}
```

Cada handler recuerda su propio valor de `letra` e `index` gracias al closure. Sin closures, tendríamos que usar atributos data o variables globales, lo cual es menos elegante y más propenso a errores."

**Otros casos:**

- Variables privadas (encapsulación)
- Factory functions (crear funciones configuradas)
- Memoización (cache de resultados)
- Currying y composición de funciones
</details>

---

## 🎯 Sección 7: Integración de Conceptos

### Pregunta 7.1 (Código Complejo)

Predice el output de este código que combina múltiples conceptos:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
```

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

```
4 (después de 1 segundo)
4 (después de 2 segundos)
4 (después de 3 segundos)
```

**Explicación:**
Combina varios conceptos:

1. **var** tiene function scope (todas las funciones comparten la misma `i`)
2. **Closure** - cada función recuerda la referencia a `i`
3. **Event Loop** - setTimeout es macrotask
4. Cuando los callbacks ejecutan, el loop terminó e `i` vale 4

**Solución correcta:**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
// Salida: 1, 2, 3 (en sus respectivos tiempos)
```

</details>

### Pregunta 7.2 (Debugging)

¿Por qué este código no funciona como se espera y cómo lo arreglarías?

```js
const boton = document.getElementById('miBoton')
let contador = 0

boton.addEventListener('click', function () {
  setTimeout(function () {
    contador++
    console.log(contador)
  }, 1000)
})
```

Si haces clic 3 veces rápidamente, ¿qué imprime?

<details>
<summary>Ver Respuesta</summary>

**Respuesta:**

Imprime `1, 2, 3` (pero después de 1 segundo cada uno).

**Problema potencial:** Si el usuario espera que todo se imprima al mismo tiempo después de 1 segundo, esto no lo hace.

**Conceptos involucrados:**

- **Closures**: Cada callback captura la referencia a `contador`
- **Event Loop**: setTimeout son macrotasks que se ejecutan en orden
- **Scope**: `contador` es compartido por todas las funciones

**Si se quisiera mostrar todo después de 1 segundo:**

```js
let clicks = 0

boton.addEventListener('click', function () {
  clicks++
})

setTimeout(function () {
  console.log(`Total de clicks: ${clicks}`)
}, 1000)
```

</details>

---

## 🏆 Preguntas de Entrevista Avanzadas

### Pregunta E.1

**Entrevistador:** "¿Cuál es la diferencia entre `==` y `===`, y cómo se relaciona con el motor de JavaScript?"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"`==` (igualdad abstracta) realiza coerción de tipos antes de comparar, mientras que `===` (igualdad estricta) compara tanto el valor como el tipo sin coerción.

Por ejemplo:

```js
5 == '5' // true (coerción: '5' se convierte a 5)
5 === '5' // false (diferentes tipos)
```

En términos del motor, `==` requiere pasos adicionales según la especificación ECMAScript para convertir tipos, lo que hace `===` más rápido y predecible. Siempre recomiendo usar `===` excepto cuando específicamente necesites coerción de tipos, y en ese caso, es mejor hacerlo explícitamente con `Number()`, `String()`, etc., para mayor claridad."

</details>

### Pregunta E.2

**Entrevistador:** "Explica cómo optimizarías un componente React que renderiza una lista grande considerando el Event Loop"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"Para optimizar el renderizado de listas grandes considerando el Event Loop, usaría varias estrategias:

1. **Virtualización**: Usar librerías como react-window o react-virtualized que solo renderizan elementos visibles
2. **Paginación o Lazy Loading**: Cargar datos en chunks
3. **requestAnimationFrame**: Para animaciones, usar rAF que se ejecuta antes del repaint
4. **Fragmentación de trabajo**: Dividir operaciones pesadas usando setTimeout o requestIdleCallback para no bloquear el hilo principal

```js
// Ejemplo de fragmentación
function procesarLista(items, chunkSize = 100) {
  let index = 0

  function procesarChunk() {
    const end = Math.min(index + chunkSize, items.length)

    for (let i = index; i < end; i++) {
      // Procesar item
    }

    index = end

    if (index < items.length) {
      setTimeout(procesarChunk, 0) // Dar oportunidad al navegador
    }
  }

  procesarChunk()
}
```

Esto aprovecha que setTimeout es una macrotask, permitiendo que el navegador procese eventos y repinte entre chunks."

</details>

### Pregunta E.3

**Entrevistador:** "¿Qué es el 'this' en JavaScript y cómo se relaciona con closures?"

<details>
<summary>Ver Respuesta Modelo</summary>

**Respuesta:**

"`this` en JavaScript se determina por cómo se llama una función, no dónde se declara. Su valor depende del contexto de ejecución.

**Reglas principales:**

1. En método de objeto: `this` es el objeto
2. Función normal: `this` es `window` (o `undefined` en strict mode)
3. Arrow function: NO tiene su propio `this`, lo hereda del scope externo (closure)
4. Con `new`: `this` es el nuevo objeto
5. Con `call/apply/bind`: `this` es el valor especificado

**Relación con closures:**

```js
const obj = {
  nombre: 'María',
  metodo() {
    // Arrow function crea closure que captura el this del método
    setTimeout(() => {
      console.log(this.nombre) // 'María' ✅
    }, 1000)

    // Función regular NO captura this
    setTimeout(function () {
      console.log(this.nombre) // undefined ❌
    }, 1000)
  },
}
```

Las arrow functions crean closures sobre `this`, capturándolo del scope donde se definen."

</details>

---

## ✅ Evaluación Final

### Puntuación por Sección:

- Sección 1 (JIT): 3 preguntas = 15 puntos
- Sección 2 (Motores): 3 preguntas = 15 puntos
- Sección 3 (Single-Thread): 3 preguntas = 15 puntos
- Sección 4 (Event Loop): 3 preguntas = 15 puntos
- Sección 5 (Hoisting): 5 preguntas = 20 puntos
- Sección 6 (Closures): 5 preguntas = 20 puntos
- **Total: 100 puntos**

### Niveles de Dominio:

- 90-100 puntos: 🏆 **Experto** - Listo para entrevistas senior
- 75-89 puntos: 🎯 **Avanzado** - Buen nivel, repasa conceptos específicos
- 60-74 puntos: 📚 **Intermedio** - Sigue practicando y estudiando
- 0-59 puntos: 🌱 **Principiante** - Revisa el material y practica más

---

## 💡 Consejos para Entrevistas

1. **Practica explicar en voz alta**: No solo entiendas, practica comunicarlo
2. **Usa ejemplos de código**: Los entrevistadores valoran ejemplos concretos
3. **Conecta conceptos**: Demuestra que entiendes cómo se relacionan entre sí
4. **Admite cuando no sabes**: Es mejor decir "no estoy seguro" que inventar
5. **Pregunta para aclarar**: Si la pregunta es ambigua, pide más contexto
6. **Piensa en voz alta**: Muestra tu proceso de razonamiento

---

## 🔄 Próximos Pasos

- [ ] Completa el quiz sin ver las respuestas
- [ ] Revisa los temas donde tuviste errores
- [ ] Practica explicando conceptos en voz alta
- [ ] Escribe código de ejemplo para cada concepto
- [ ] Haz el quiz nuevamente en una semana
- [ ] Busca problemas de LeetCode relacionados con estos conceptos
