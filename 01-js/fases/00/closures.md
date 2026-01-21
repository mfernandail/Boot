# 🔒 Closures en JavaScript (Lenguaje Sencillo)

Un closure es una de las características más poderosas de JavaScript, pero también de las más confusas.

---

## ¿Qué es un Closure?

**En términos simples:**

> Un closure es cuando una función "recuerda" las variables del lugar donde fue creada, incluso después de que ese lugar ya no exista.

**Definición más técnica:**

> Un closure es la combinación de una función y el entorno léxico (scope) en el que fue declarada. Esto permite a la función acceder a variables de su scope externo incluso después de que la función externa haya terminado de ejecutarse.

---

## 🎯 Ejemplo Básico

```js
function crearSaludo(nombre) {
  // nombre está en este scope

  return function () {
    console.log(`Hola, ${nombre}`)
  }
}

const saludarMaria = crearSaludo('María')
const saludarJuan = crearSaludo('Juan')

saludarMaria() // "Hola, María"
saludarJuan() // "Hola, Juan"
```

### ¿Qué pasó aquí?

1. `crearSaludo('María')` se ejecuta
2. Crea la variable `nombre = 'María'`
3. Devuelve una función
4. `crearSaludo` termina de ejecutar
5. **Normalmente** `nombre` debería desaparecer
6. **PERO NO** → La función interna la "recuerda" 🔒
7. Cada vez que llamas `saludarMaria()`, accede a `nombre`

📌 **Eso es un closure**: la función interna mantiene acceso a las variables del scope donde fue creada.

---

## 🧮 Caso Clásico: Contador Privado

```js
function crearContador() {
  let count = 0 // Variable "privada"

  return function () {
    count++
    return count
  }
}

const contador = crearContador()

console.log(contador()) // 1
console.log(contador()) // 2
console.log(contador()) // 3

console.log(count) // ❌ Error: count is not defined
```

### ¿Por qué es útil?

- `count` NO es accesible desde afuera
- Solo la función devuelta puede modificarlo
- Es como crear una variable "privada"
- Cada contador es independiente

```js
const contador1 = crearContador()
const contador2 = crearContador()

contador1() // 1
contador1() // 2

contador2() // 1 (tiene su propio count)
contador1() // 3
```

---

## 🎨 Ejemplo Visual (Analogía)

Imagina una **caja con un secreto**:

```js
function crearCaja() {
  let secreto = '🎁 Regalo' // El secreto está dentro

  return function verSecreto() {
    console.log(secreto)
  }
}

const miCaja = crearCaja()
```

- La función `crearCaja` termina de ejecutarse
- Pero `verSecreto` aún puede acceder a `secreto`
- Es como si la función llevara la caja consigo

```js
miCaja() // "🎁 Regalo" (aún recuerda el secreto)
```

---

## 💡 ¿Por Qué Pasa Esto?

Cuando JavaScript crea una función:

1. Guarda la función
2. Guarda **referencias** a las variables que usa
3. Mantiene ese "entorno" vivo
4. Aunque la función externa termine

**No es magia**, es el **Scope Chain** en acción.

---

## 🔥 Caso Real: Botones en un Loop

### ❌ Problema Común (SIN closure correcto)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// Salida: 3, 3, 3 😵
```

**¿Por qué?**

- `var` tiene function scope
- Todas las funciones comparten la misma `i`
- Cuando se ejecutan, `i` ya es 3

### ✅ Solución 1: Usando `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// Salida: 0, 1, 2 ✅
```

**¿Por qué funciona?**

- `let` tiene block scope
- Cada iteración tiene su propia `i`
- Cada función captura su propia versión

### ✅ Solución 2: Usando IIFE (closure explícito)

```js
for (var i = 0; i < 3; i++) {
  ;(function (num) {
    setTimeout(function () {
      console.log(num)
    }, 1000)
  })(i)
}

// Salida: 0, 1, 2 ✅
```

**¿Por qué funciona?**

- La IIFE crea un nuevo scope en cada iteración
- `num` captura el valor de `i` en ese momento
- Cada `setTimeout` tiene su propio `num`

---

## 🎯 Usos Prácticos de Closures

### 1. Encapsulación (Variables Privadas)

```js
function crearCuenta(saldoInicial) {
  let saldo = saldoInicial // Privada

  return {
    depositar(cantidad) {
      saldo += cantidad
      return saldo
    },
    retirar(cantidad) {
      if (cantidad <= saldo) {
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

const miCuenta = crearCuenta(100)

miCuenta.depositar(50) // 150
miCuenta.retirar(30) // 120
miCuenta.verSaldo() // 120

console.log(miCuenta.saldo) // undefined (está protegido)
```

### 2. Factory Functions

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

### 3. Event Handlers

```js
function agregarBotones() {
  const botones = ['A', 'B', 'C']

  botones.forEach((letra) => {
    const btn = document.createElement('button')
    btn.textContent = letra

    btn.addEventListener('click', function () {
      console.log(`Clic en ${letra}`) // Closure captura letra
    })

    document.body.appendChild(btn)
  })
}
```

### 4. Memoización (Cache de Resultados)

```js
function crearCalculadora() {
  const cache = {} // Privado

  return function (n) {
    if (cache[n]) {
      console.log('Desde cache')
      return cache[n]
    }

    console.log('Calculando...')
    const resultado = n * n
    cache[n] = resultado
    return resultado
  }
}

const calcular = crearCalculadora()

calcular(5) // "Calculando..." → 25
calcular(5) // "Desde cache" → 25
```

---

## ⚠️ Errores Comunes

### 1. Confundir el valor actual vs el valor capturado

```js
let mensaje = 'Hola'

function crearSaludo() {
  return function () {
    console.log(mensaje)
  }
}

const saludo = crearSaludo()
mensaje = 'Adiós'

saludo() // "Adiós" (no "Hola")
```

📌 El closure guarda una **referencia**, no el valor en sí.

### 2. Memory Leaks (Fugas de Memoria)

```js
function crearElemento() {
  const elemento = document.getElementById('grande')

  return function () {
    console.log(elemento.innerHTML)
  }
}

const mostrar = crearElemento()
// El elemento sigue en memoria aunque no lo uses
```

📌 Los closures mantienen vivas las variables, incluso objetos grandes.

---

## 🧠 Relación con Otros Conceptos

### Closure + Scope Chain

```js
let global = 'Global'

function externa() {
  let externa_var = 'Externa'

  function interna() {
    let interna_var = 'Interna'

    console.log(interna_var) // Scope local
    console.log(externa_var) // Closure
    console.log(global) // Scope global
  }

  return interna
}

const fn = externa()
fn()
```

### Closure + Arrow Functions

```js
function crearContador() {
  let count = 0

  // Arrow function también crea closure
  return () => {
    count++
    return count
  }
}
```

### Closure + `this`

```js
const objeto = {
  nombre: 'Objeto',
  metodo() {
    // Arrow function captura el this del scope externo (closure)
    setTimeout(() => {
      console.log(this.nombre) // "Objeto" ✅
    }, 1000)
  },
}

objeto.metodo()
```

---

## 📋 Checklist: ¿Entendiste Closures?

- [ ] Puedes explicar qué es un closure en tus propias palabras
- [ ] Entiendes por qué las funciones "recuerdan" variables
- [ ] Sabes crear variables privadas con closures
- [ ] Comprendes el problema de `var` en loops
- [ ] Puedes identificar closures en código real
- [ ] Entiendes la diferencia entre valor y referencia en closures
- [ ] Conoces casos de uso prácticos

---

## 💡 Para Entrevistas

**¿Qué es un closure?**

> "Un closure es una función que tiene acceso a variables de su scope externo, incluso después de que la función externa haya terminado de ejecutarse. JavaScript crea closures automáticamente cuando una función interna referencia variables de su función contenedora, manteniendo esas variables en memoria."

**¿Para qué sirven?**

> "Los closures permiten crear variables privadas, factory functions, memoización y mantener estado en programación funcional. Son fundamentales para patrones como el módulo pattern y para manejar event handlers de forma correcta."

**Ejemplo simple:**

```js
function crear() {
  let privado = 'secreto'
  return () => console.log(privado)
}

const fn = crear()
fn() // "secreto" (closure mantiene acceso a privado)
```

---

## 🎯 Reglas de Oro

✔ **Closures se crean automáticamente** cuando una función interna usa variables externas  
✔ **No copies valores, guarda referencias** a las variables  
✔ **Úsalos para encapsulación** y crear variables privadas  
✔ **Cuidado con loops y `var`**, usa `let` o IIFE  
✔ **Ten cuidado con memory leaks** al capturar objetos grandes

---

## 🔗 Conceptos Relacionados

- **Scope Chain**: Los closures dependen del scope chain para acceder a variables
- **Hoisting**: Entender el scope ayuda a entender closures
- **Contexto de Ejecución**: Cada función crea un contexto con su scope
- **Arrow Functions**: También crean closures y capturan `this`

---

## ✨ Frase Final

> "Los closures no son una feature que actives, son una consecuencia natural de cómo JavaScript maneja el scope y las funciones. Dominarlos es dominar JavaScript."
