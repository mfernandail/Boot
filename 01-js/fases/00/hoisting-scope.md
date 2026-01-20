# 🎯 Hoisting y Scope en JavaScript

Dos conceptos fundamentales que debes dominar para entender cómo JavaScript ejecuta tu código.

---

## 📌 Scope (Ámbito)

El **scope** determina dónde puedes acceder a una variable.

### Tipos de Scope

#### 1. Global Scope

Variables accesibles desde cualquier parte del código.

```js
let nombre = 'María' // Global

function saludar() {
  console.log(nombre) // ✅ Puede acceder
}

saludar() // "María"
console.log(nombre) // "María"
```

#### 2. Function Scope

Variables declaradas dentro de una función solo existen ahí.

```js
function calcular() {
  let resultado = 10 + 5 // Solo existe aquí
  console.log(resultado) // 15
}

calcular()
console.log(resultado) // ❌ Error: resultado is not defined
```

📌 **`var` tiene function scope**, no block scope.

```js
function ejemplo() {
  if (true) {
    var x = 10
  }
  console.log(x) // ✅ 10 (var se escapa del bloque)
}
```

#### 3. Block Scope

Variables con `let` y `const` solo existen dentro del bloque `{ }`.

```js
if (true) {
  let x = 10
  const y = 20
}

console.log(x) // ❌ Error
console.log(y) // ❌ Error
```

```js
for (let i = 0; i < 3; i++) {
  // i solo existe aquí
}

console.log(i) // ❌ Error
```

### Scope Chain (Cadena de Ámbitos)

JavaScript busca variables desde el scope actual hacia arriba.

```js
let global = 'Global'

function externa() {
  let externa_var = 'Externa'

  function interna() {
    let interna_var = 'Interna'
    console.log(interna_var) // ✅ "Interna"
    console.log(externa_var) // ✅ "Externa" (scope padre)
    console.log(global) // ✅ "Global" (scope global)
  }

  interna()
}

externa()
```

**Orden de búsqueda:**

1. Scope local
2. Scope padre
3. Scope global
4. Si no existe → Error

---

## 🚀 Hoisting

**Hoisting** = JavaScript "eleva" las declaraciones al inicio de su scope.

⚠️ **Importante:** Solo eleva la **declaración**, NO la **asignación**.

### Hoisting con `var`

```js
console.log(x) // undefined (no error)
var x = 5
console.log(x) // 5
```

**Lo que JavaScript hace internamente:**

```js
var x // Declaración se eleva
console.log(x) // undefined
x = 5 // Asignación queda en su lugar
console.log(x) // 5
```

### Hoisting con `let` y `const`

```js
console.log(x) // ❌ Error: Cannot access 'x' before initialization
let x = 5
```

📌 **Temporal Dead Zone (TDZ)**: Zona entre donde empieza el scope y donde se declara la variable.

```js
{
  // ⚠️ TDZ empieza aquí
  console.log(x) // ❌ Error
  let x = 10 // TDZ termina aquí
  console.log(x) // ✅ 10
}
```

### Hoisting con Funciones

#### Function Declaration (se eleva completamente)

```js
saludar() // ✅ "Hola" (funciona antes de declarar)

function saludar() {
  console.log('Hola')
}
```

**JavaScript lo interpreta como:**

```js
function saludar() {
  console.log('Hola')
}

saludar() // "Hola"
```

#### Function Expression (NO se eleva)

```js
saludar() // ❌ Error: saludar is not a function

var saludar = function () {
  console.log('Hola')
}
```

**JavaScript lo interpreta como:**

```js
var saludar // Se eleva la variable
saludar() // saludar es undefined, no una función
saludar = function () {
  console.log('Hola')
}
```

#### Arrow Functions (NO se elevan)

```js
saludar() // ❌ Error

const saludar = () => {
  console.log('Hola')
}
```

---

## 🧪 Casos Prácticos

### Ejemplo 1: var vs let en loops

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

### Ejemplo 2: Scope anidado

```js
let x = 10

function outer() {
  let x = 20

  function inner() {
    let x = 30
    console.log(x) // 30 (busca primero en su scope)
  }

  inner()
  console.log(x) // 20 (su propio scope)
}

outer()
console.log(x) // 10 (scope global)
```

### Ejemplo 3: Hoisting complejo

```js
console.log(typeof a) // "undefined" (hoisting de var)
console.log(typeof b) // ❌ Error (TDZ)
console.log(typeof c) // "function" (hoisting de function)

var a = 1
let b = 2
function c() {}
```

### Ejemplo 4: Redeclaración

```js
// var permite redeclarar
var x = 10
var x = 20 // ✅ Permitido (mala práctica)

// let NO permite redeclarar
let y = 10
let y = 20 // ❌ Error: Identifier 'y' has already been declared

// const NO permite redeclarar ni reasignar
const z = 10
z = 20 // ❌ Error: Assignment to constant variable
```

---

## 📋 Tabla Comparativa

| Característica     | var            | let      | const    |
| ------------------ | -------------- | -------- | -------- |
| Scope              | Function       | Block    | Block    |
| Hoisting           | ✅ (undefined) | ⚠️ (TDZ) | ⚠️ (TDZ) |
| Redeclaración      | ✅             | ❌       | ❌       |
| Reasignación       | ✅             | ✅       | ❌       |
| Temporal Dead Zone | ❌             | ✅       | ✅       |

---

## 🎯 Reglas de Oro

### Sobre Scope

✔ Usa `let` y `const`, evita `var`  
✔ Declara variables en el scope más pequeño posible  
✔ Recuerda el Scope Chain: local → padre → global  
✔ Block scope `{ }` solo funciona con `let` y `const`

### Sobre Hoisting

✔ Declara variables al inicio del scope  
✔ Usa function declarations si necesitas invocarlas antes  
✔ Con `let`/`const` respeta la TDZ  
✔ Nunca dependas del hoisting en código real

---

## 💡 Para Entrevistas

**¿Qué es el hoisting?**

> "Es el comportamiento de JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su scope antes de la ejecución. Sin embargo, solo se eleva la declaración, no la inicialización. Con `let` y `const` existe la Temporal Dead Zone que previene el acceso antes de la declaración."

**¿Diferencia entre var, let y const?**

> "`var` tiene function scope, permite hoisting y redeclaración. `let` y `const` tienen block scope, están sujetas a la Temporal Dead Zone y no permiten redeclaración. `const` además no permite reasignación del valor."

**¿Qué es el Scope Chain?**

> "Es el mecanismo por el cual JavaScript busca variables. Cuando se referencia una variable, JS la busca primero en el scope local, luego en scopes padres sucesivamente hasta llegar al scope global. Si no la encuentra, arroja un ReferenceError."

---

## 🔗 Relación con Otros Conceptos

- **Closures**: Dependen del scope chain para capturar variables
- **Event Loop**: Las variables respetan su scope incluso en callbacks async
- **Contexto de Ejecución**: Cada función crea un nuevo scope
- **This**: Se comporta diferente según el scope (especialmente en arrow functions)

---

## ✅ Checklist de Dominio

- [ ] Entiendes la diferencia entre function, block y global scope
- [ ] Sabes por qué evitar `var`
- [ ] Comprendes la Temporal Dead Zone
- [ ] Puedes explicar el hoisting de funciones vs variables
- [ ] Entiendes el scope chain y cómo JS busca variables
- [ ] Sabes cuándo usar `let` vs `const`
- [ ] Puedes predecir el output de código con hoisting complejo
