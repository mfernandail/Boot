# 🔒 Inmutabilidad en JavaScript

Guía completa sobre cómo trabajar con datos de forma inmutable.

---

## ¿Qué es la Inmutabilidad?

La inmutabilidad significa que **no modificas datos existentes**, sino que **creas nuevas copias** con los cambios.

---

## ¿Por Qué es Importante?

✅ **Previene bugs**: No hay modificaciones inesperadas  
✅ **Código más predecible**: Sabes que tus datos no cambian  
✅ **Facilita debugging**: Puedes rastrear cambios  
✅ **Optimización en frameworks**: React, Redux dependen de esto  
✅ **Funciones puras**: Esencial en programación funcional  
✅ **Time-travel debugging**: Permite deshacer/rehacer cambios

---

## Primitivos son Inmutables (por naturaleza)

```js
let x = 10
let y = x
y = 20

console.log(x) // 10 (no cambió)
console.log(y) // 20
```

Los primitivos (string, number, boolean, null, undefined, symbol, bigint) son inmutables por defecto.

```js
let texto = 'Hola'
texto.toUpperCase() // Retorna 'HOLA', pero no modifica texto
console.log(texto) // 'Hola' (no cambió)

let nuevoTexto = texto.toUpperCase()
console.log(nuevoTexto) // 'HOLA' (nueva variable)
```

---

## Objetos y Arrays son Mutables

```js
// ❌ Mutable (modifica el original)
const persona = { nombre: 'María', edad: 25 }
persona.edad = 26 // Modifica el objeto original

const numeros = [1, 2, 3]
numeros.push(4) // Modifica el array original
```

---

## Trabajar de Forma Inmutable

### Objetos

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

**Otras formas de copiar objetos:**

```js
// Con Object.assign()
const copia = Object.assign({}, persona, { edad: 26 })

// Spread con múltiples propiedades
const actualizado = {
  ...persona,
  edad: 26,
  ciudad: 'Santiago',
}

// Eliminar propiedad (inmutable)
const { edad, ...sinEdad } = persona
console.log(sinEdad) // { nombre: 'María' }
```

### Arrays

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
const enMedio = [...numeros.slice(0, 2), 999, ...numeros.slice(2)]
// [1, 2, 999, 3]

// Eliminar elementos
const sinPrimero = numeros.slice(1) // [2, 3]
const sinUltimo = numeros.slice(0, -1) // [1, 2]
const sinIndice = [...numeros.slice(0, 1), ...numeros.slice(2)] // [1, 3]

// Modificar elementos
const modificado = numeros.map((n) => n * 2) // [2, 4, 6]
const modificarUno = numeros.map((n, i) => (i === 1 ? n * 10 : n))
// [1, 20, 3]

// Filtrar elementos
const filtrado = numeros.filter((n) => n > 1) // [2, 3]

// Ordenar (crear copia primero)
const ordenado = [...numeros].sort() // [1, 2, 3]
const descendente = [...numeros].sort((a, b) => b - a) // [3, 2, 1]

// Invertir (crear copia primero)
const invertido = [...numeros].reverse() // [3, 2, 1]

// Combinar
const combinado = [...numeros, ...[4, 5, 6]]
```

---

## Actualizar Objetos Anidados de Forma Inmutable

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

console.log(usuario.direccion.ciudad) // 'Santiago' (original no cambió)
console.log(usuarioActualizado.direccion.ciudad) // 'Valparaíso'
```

**Con múltiples niveles:**

```js
const empresa = {
  nombre: 'Tech Corp',
  departamento: {
    desarrollo: {
      equipo: {
        lider: 'Juan',
        miembros: ['Ana', 'Pedro'],
      },
    },
  },
}

// Actualizar el líder
const empresaActualizada = {
  ...empresa,
  departamento: {
    ...empresa.departamento,
    desarrollo: {
      ...empresa.departamento.desarrollo,
      equipo: {
        ...empresa.departamento.desarrollo.equipo,
        lider: 'Carlos',
      },
    },
  },
}
```

---

## Actualizar Arrays de Objetos

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
// Actualizar un objeto específico
const usuariosActualizados = usuarios.map((usuario) =>
  usuario.id === 1 ? { ...usuario, nombre: 'María José' } : usuario
)

// Agregar nuevo usuario
const conNuevo = [...usuarios, { id: 3, nombre: 'Pedro' }]

// Eliminar usuario
const sinUsuario = usuarios.filter((u) => u.id !== 2)

// Actualizar múltiples propiedades
const actualizados = usuarios.map((u) =>
  u.id === 1 ? { ...u, nombre: 'María José', edad: 26, activo: true } : u
)
```

---

## Inmutabilidad en React

```js
// ❌ No funciona bien en React
const [usuarios, setUsuarios] = useState([...])

function agregarUsuario(usuario) {
  usuarios.push(usuario) // Muta el estado
  setUsuarios(usuarios) // React no detecta el cambio (misma referencia)
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

// Actualizar objeto anidado en estado
function actualizarDireccion(ciudad) {
  setUsuario({
    ...usuario,
    direccion: {
      ...usuario.direccion,
      ciudad
    }
  })
}
```

**¿Por qué React necesita inmutabilidad?**

```js
// React compara referencias
const anterior = { nombre: 'María' }
const nuevo = anterior
nuevo.nombre = 'Juan'

anterior === nuevo // true (misma referencia, React no re-renderiza)

// Forma correcta
const nuevo = { ...anterior, nombre: 'Juan' }
anterior === nuevo // false (diferente referencia, React re-renderiza)
```

---

## Librerías para Inmutabilidad

### Immer.js

Para estructuras muy complejas, Immer simplifica el trabajo:

```js
import produce from 'immer'

const estado = {
  usuario: {
    nombre: 'María',
    direccion: {
      ciudad: 'Santiago',
      pais: 'Chile',
    },
  },
  contador: 0,
}

// ❌ Sin Immer (verboso)
const siguiente = {
  ...estado,
  usuario: {
    ...estado.usuario,
    direccion: {
      ...estado.usuario.direccion,
      ciudad: 'Valparaíso',
    },
  },
  contador: estado.contador + 1,
}

// ✅ Con Immer (parece mutable, pero no lo es)
const siguiente = produce(estado, (draft) => {
  draft.usuario.direccion.ciudad = 'Valparaíso'
  draft.contador++
})

// El original no cambió
console.log(estado.usuario.direccion.ciudad) // 'Santiago'
console.log(siguiente.usuario.direccion.ciudad) // 'Valparaíso'
```

**Con React:**

```js
import { useImmer } from 'use-immer'

function Component() {
  const [usuario, setUsuario] = useImmer({
    nombre: 'María',
    direccion: { ciudad: 'Santiago' },
  })

  function actualizarCiudad(ciudad) {
    setUsuario((draft) => {
      draft.direccion.ciudad = ciudad // Parece mutable
    })
  }
}
```

---

## Patrones Comunes

### 1. Toggle (Alternar valor booleano)

```js
// En objeto
const config = { activo: false }
const toggle = { ...config, activo: !config.activo }

// En array de objetos
const items = [
  { id: 1, completado: false },
  { id: 2, completado: true },
]

const toggled = items.map((item) =>
  item.id === 1 ? { ...item, completado: !item.completado } : item
)
```

### 2. Incrementar/Decrementar

```js
const contador = { valor: 5 }
const incrementado = { ...contador, valor: contador.valor + 1 }
const decrementado = { ...contador, valor: contador.valor - 1 }
```

### 3. Agregar a lista anidada

```js
const estado = {
  usuario: {
    nombre: 'María',
    tareas: ['Tarea 1', 'Tarea 2'],
  },
}

const conNuevaTarea = {
  ...estado,
  usuario: {
    ...estado.usuario,
    tareas: [...estado.usuario.tareas, 'Tarea 3'],
  },
}
```

### 4. Resetear a estado inicial

```js
const estadoInicial = {
  usuario: null,
  cargando: false,
  error: null,
}

const estadoActual = {
  usuario: { nombre: 'María' },
  cargando: false,
  error: null,
}

// Reset
const reseteado = { ...estadoInicial }
```

---

## Funciones Puras e Inmutabilidad

Las funciones puras no modifican sus argumentos:

**❌ Impura (muta el argumento):**

```js
function agregarItem(array, item) {
  array.push(item) // Modifica el array original
  return array
}

const numeros = [1, 2, 3]
agregarItem(numeros, 4)
console.log(numeros) // [1, 2, 3, 4] (cambió)
```

**✅ Pura (retorna nueva copia):**

```js
function agregarItem(array, item) {
  return [...array, item] // Nueva copia
}

const numeros = [1, 2, 3]
const nuevos = agregarItem(numeros, 4)
console.log(numeros) // [1, 2, 3] (original intacto)
console.log(nuevos) // [1, 2, 3, 4]
```

---

## 🎯 Reglas de Oro

✔ **Primitivos**: Ya son inmutables por naturaleza  
✔ **Objetos**: Usa spread `{...obj}` o `Object.assign()`  
✔ **Arrays**: Usa spread `[...arr]`, `.map()`, `.filter()`, `.slice()`  
✔ **Evita**: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `.sort()`, `.reverse()`  
✔ **En React/Redux**: Siempre crea nuevas referencias  
✔ **Funciones puras**: No mutes los argumentos  
✔ **Anidados**: Copia cada nivel que modifiques

---

## Tabla Comparativa: Métodos Mutables vs Inmutables

| Operación           | ❌ Mutable         | ✅ Inmutable                             |
| ------------------- | ------------------ | ---------------------------------------- |
| Agregar al final    | `arr.push(x)`      | `[...arr, x]`                            |
| Agregar al inicio   | `arr.unshift(x)`   | `[x, ...arr]`                            |
| Eliminar del final  | `arr.pop()`        | `arr.slice(0, -1)`                       |
| Eliminar del inicio | `arr.shift()`      | `arr.slice(1)`                           |
| Eliminar por índice | `arr.splice(i, 1)` | `arr.filter((_, idx) => idx !== i)`      |
| Modificar elemento  | `arr[i] = x`       | `arr.map((v, idx) => idx === i ? x : v)` |
| Ordenar             | `arr.sort()`       | `[...arr].sort()`                        |
| Invertir            | `arr.reverse()`    | `[...arr].reverse()`                     |
| Agregar propiedad   | `obj.x = y`        | `{ ...obj, x: y }`                       |
| Eliminar propiedad  | `delete obj.x`     | `const { x, ...rest } = obj`             |

---

## 💡 Para Entrevistas

**"¿Por qué es importante la inmutabilidad en React?"**

> "React usa comparación de referencias para detectar cambios. Si mutamos un objeto o array directamente, la referencia no cambia, por lo que React no detecta el cambio y no re-renderiza. Al crear una nueva copia con spread operator o métodos inmutables, cambiamos la referencia y React puede optimizar el renderizado. Además, la inmutabilidad previene bugs difíciles de rastrear causados por modificaciones inesperadas."

**"¿Cómo actualizas un objeto anidado de forma inmutable?"**

> "Debes copiar cada nivel del objeto hasta llegar al que quieres modificar. Uso el spread operator en cada nivel: `{ ...obj, nested: { ...obj.nested, prop: newValue } }`. Para estructuras muy complejas, puedo usar librerías como Immer que simplifican este proceso permitiendo escribir código que parece mutable pero genera copias inmutables."

---

## ✅ Checklist de Dominio

- [ ] Entiendo qué es la inmutabilidad y por qué importa
- [ ] Sé usar spread operator para copiar objetos y arrays
- [ ] Conozco métodos inmutables: map, filter, slice
- [ ] Evito métodos mutables: push, pop, splice
- [ ] Puedo actualizar objetos anidados inmutablemente
- [ ] Trabajo con arrays de objetos de forma inmutable
- [ ] Entiendo por qué React necesita inmutabilidad
- [ ] Escribo funciones puras que no mutan argumentos

---

## 🔗 Conceptos Relacionados

- **Valores vs Referencias**: Base para entender inmutabilidad
- **Funciones Puras**: Requieren inmutabilidad
- **React/Redux**: Dependen de inmutabilidad para optimización
- **Programación Funcional**: Principio fundamental
