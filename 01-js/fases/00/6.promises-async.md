# ⚡ Promises vs async/await

Guía completa sobre manejo de código asíncrono en JavaScript.

---

## ¿Qué es una Promise?

Una Promise es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar en uno de tres estados:

- **Pending** (Pendiente): Estado inicial
- **Fulfilled** (Cumplida): Operación exitosa
- **Rejected** (Rechazada): Operación falló

---

## Sintaxis con Promises

```js
// Crear una Promise
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: 'María' })
      } else {
        reject('ID inválido')
      }
    }, 1000)
  })
}

// Consumir con .then()
obtenerUsuario(1)
  .then((usuario) => {
    console.log(usuario)
    return obtenerPosts(usuario.id)
  })
  .then((posts) => {
    console.log(posts)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log('Terminó')
  })
```

---

## Sintaxis con async/await

```js
// Misma función, consumida con async/await
async function mostrarUsuario() {
  try {
    const usuario = await obtenerUsuario(1)
    console.log(usuario)

    const posts = await obtenerPosts(usuario.id)
    console.log(posts)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Terminó')
  }
}

mostrarUsuario()
```

---

## Comparación

**Promises (.then):**

```js
fetch('/api/users')
  .then((res) => res.json())
  .then((users) => {
    console.log(users)
    return fetch('/api/posts')
  })
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts)
  })
  .catch((error) => console.error(error))
```

**async/await:**

```js
async function obtenerDatos() {
  try {
    const resUsers = await fetch('/api/users')
    const users = await resUsers.json()
    console.log(users)

    const resPosts = await fetch('/api/posts')
    const posts = await resPosts.json()
    console.log(posts)
  } catch (error) {
    console.error(error)
  }
}
```

---

## Ventajas de async/await

✅ **Código más legible**: Parece síncrono  
✅ **Menos anidación**: Evita el "callback hell"  
✅ **Debugging más fácil**: Stack traces más claros  
✅ **Manejo de errores unificado**: Un solo try/catch

---

## Operaciones en Paralelo

**❌ Secuencial (lento):**

```js
async function obtenerTodo() {
  const usuarios = await fetch('/api/users') // Espera
  const posts = await fetch('/api/posts') // Luego espera
  return { usuarios, posts }
}
// Tiempo total: suma de ambas llamadas
```

**✅ Paralelo (rápido):**

```js
async function obtenerTodo() {
  // Lanzar ambas peticiones al mismo tiempo
  const [usuarios, posts] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
  ])
  return { usuarios, posts }
}
// Tiempo total: la más lenta de las dos
```

---

## Promise.all vs Promise.race vs Promise.allSettled

```js
// Promise.all - Espera que TODAS se resuelvan
// Si una falla, todo falla
const resultados = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments'),
])
// [usuarios, posts, comments] o Error si alguna falla

// Promise.race - Retorna la primera que se resuelva
const primera = await Promise.race([
  fetch('/api/server1'),
  fetch('/api/server2'),
])
// La que responda primero

// Promise.allSettled - Espera todas, sin importar si fallan
const resultados = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments'),
])
// [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]
```

### Ejemplos Prácticos

**Promise.all - Todos o ninguno:**

```js
async function cargarDashboard() {
  try {
    const [usuarios, ventas, productos] = await Promise.all([
      obtenerUsuarios(),
      obtenerVentas(),
      obtenerProductos(),
    ])

    renderizarDashboard({ usuarios, ventas, productos })
  } catch (error) {
    // Si cualquiera falla, muestra error
    mostrarError('Error al cargar el dashboard')
  }
}
```

**Promise.race - El más rápido gana:**

```js
async function obtenerConTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject('Timeout'), timeout)),
  ])
}
```

**Promise.allSettled - Todos los resultados:**

```js
async function sincronizarMultiplesApis() {
  const resultados = await Promise.allSettled([
    subirAServidor1(datos),
    subirAServidor2(datos),
    subirAServidor3(datos),
  ])

  resultados.forEach((resultado, index) => {
    if (resultado.status === 'fulfilled') {
      console.log(`Servidor ${index + 1}: ✅ Éxito`)
    } else {
      console.log(`Servidor ${index + 1}: ❌ Error: ${resultado.reason}`)
    }
  })
}
```

---

## Manejo de Errores

**Con Promises:**

```js
fetch('/api/data')
  .then((res) => res.json())
  .catch((error) => {
    // Maneja errores de fetch Y de .json()
    console.error(error)
  })

// Manejo específico por paso
fetch('/api/data')
  .then((res) => {
    if (!res.ok) throw new Error('HTTP error')
    return res.json()
  })
  .catch((error) => console.error('Fetch error:', error))
```

**Con async/await:**

```js
async function obtenerDatos() {
  try {
    const res = await fetch('/api/data')

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    // Maneja cualquier error
    console.error(error)
    throw error // Re-lanzar si necesario
  }
}
```

**Manejo granular de errores:**

```js
async function procesarDatos() {
  let usuario, posts

  try {
    usuario = await obtenerUsuario()
  } catch (error) {
    console.error('Error obteniendo usuario:', error)
    usuario = null
  }

  try {
    posts = await obtenerPosts(usuario?.id)
  } catch (error) {
    console.error('Error obteniendo posts:', error)
    posts = []
  }

  return { usuario, posts }
}
```

---

## Casos de Uso

### Usa Promises cuando:

- Tienes operaciones independientes en paralelo
- Necesitas transformaciones complejas con `.then()`
- Trabajas con APIs que solo retornan Promises
- Necesitas control fino sobre cada paso

```js
// Ejemplo: Transformación en cadena
obtenerDatos()
  .then(validar)
  .then(transformar)
  .then(guardar)
  .then(notificar)
  .catch(manejarError)
```

### Usa async/await cuando:

- Código secuencial complejo
- Necesitas mejor legibilidad
- Trabajas con múltiples operaciones dependientes
- Quieres debugging más fácil
- Necesitas lógica condicional compleja

```js
// Ejemplo: Lógica compleja
async function procesarPedido(pedido) {
  const usuario = await obtenerUsuario(pedido.userId)

  if (!usuario.verificado) {
    await enviarEmailVerificacion(usuario)
    throw new Error('Usuario no verificado')
  }

  const stock = await verificarStock(pedido.items)

  if (!stock.disponible) {
    await notificarStockBajo(pedido)
    return { estado: 'pendiente' }
  }

  const pago = await procesarPago(pedido.total)
  const envio = await programarEnvio(pedido)

  return { pago, envio, estado: 'completado' }
}
```

---

## 🎯 Regla de Oro

> `async/await` es azúcar sintáctica sobre Promises. Internamente, sigue siendo una Promise.

```js
async function ejemplo() {
  return 'Hola'
}

// Es equivalente a:
function ejemplo() {
  return Promise.resolve('Hola')
}

ejemplo().then((valor) => console.log(valor)) // 'Hola'

// Una función async SIEMPRE retorna una Promise
typeof ejemplo() // 'object' (Promise)
```

---

## Patrones Comunes

### 1. Retry (Reintentar)

```js
async function fetchConReintentos(url, maxReintentos = 3) {
  for (let i = 0; i < maxReintentos; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return await res.json()
    } catch (error) {
      if (i === maxReintentos - 1) throw error
      await esperar(1000 * (i + 1)) // Espera progresiva
    }
  }
}

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
```

### 2. Sequential vs Parallel

```js
// ❌ Secuencial (innecesariamente lento)
const user1 = await getUser(1)
const user2 = await getUser(2)
const user3 = await getUser(3)

// ✅ Paralelo (más rápido)
const [user1, user2, user3] = await Promise.all([
  getUser(1),
  getUser(2),
  getUser(3),
])
```

### 3. Waterfall (Cascada)

```js
// Cada paso depende del anterior
async function waterfall() {
  const usuario = await obtenerUsuario()
  const perfil = await obtenerPerfil(usuario.id)
  const posts = await obtenerPosts(perfil.id)
  const comentarios = await obtenerComentarios(posts[0].id)

  return comentarios
}
```

### 4. Procesar Array Secuencialmente

```js
// ❌ Esto no funciona como esperas
async function procesarTodos(items) {
  items.forEach(async (item) => {
    await procesar(item) // No espera realmente
  })
}

// ✅ Opción 1: for...of
async function procesarTodos(items) {
  for (const item of items) {
    await procesar(item) // Espera cada uno
  }
}

// ✅ Opción 2: reduce
async function procesarTodos(items) {
  await items.reduce(async (promise, item) => {
    await promise
    return procesar(item)
  }, Promise.resolve())
}

// ✅ Opción 3: En paralelo (si es posible)
async function procesarTodos(items) {
  await Promise.all(items.map((item) => procesar(item)))
}
```

---

## 💡 Para Entrevistas

**"¿Cuál es la diferencia entre Promises y async/await?"**

> "async/await es azúcar sintáctica sobre Promises que hace el código asíncrono más legible y fácil de mantener. Permite escribir código asíncrono que parece síncrono, facilitando el debugging y el manejo de errores con try/catch. Sin embargo, internamente sigue siendo una Promise. Las funciones async siempre retornan una Promise, y await pausa la ejecución hasta que la Promise se resuelve."

**"¿Cuándo usarías Promise.all vs Promise.race?"**

> "Promise.all se usa cuando necesitas que todas las operaciones se completen, como cargar múltiples recursos para una página. Si una falla, todas fallan. Promise.race se usa cuando solo te importa la primera que termine, como implementar timeouts o conectar al servidor más rápido entre varias opciones."

**"¿Cómo manejas errores en async/await?"**

> "Uso try/catch para manejar errores en funciones async. También puedo usar .catch() en la Promise retornada por la función async. Para errores específicos, puedo tener múltiples bloques try/catch o verificar el tipo de error en el catch principal."

---

## ✅ Checklist de Dominio

- [ ] Entiendo los tres estados de una Promise
- [ ] Puedo crear Promises con `new Promise()`
- [ ] Sé encadenar Promises con `.then()`
- [ ] Uso `async/await` en lugar de `.then()` cuando es apropiado
- [ ] Manejo errores correctamente con try/catch
- [ ] Sé cuándo usar Promise.all, race y allSettled
- [ ] Puedo ejecutar operaciones en paralelo vs secuencial
- [ ] Entiendo que async/await es azúcar sintáctica
- [ ] Sé procesar arrays con async/await correctamente

---

## 🔗 Conceptos Relacionados

- **Event Loop**: Las Promises son microtasks
- **Callbacks**: Promises solucionan el "callback hell"
- **Generators**: Precursor de async/await
- **Observable**: Patrón similar para streams de datos
