const productos = [
  {
    id: 1,
    nombre: 'Laptop',
    precio: 1000,
    stock: 5,
    categorias: ['electrónica', 'computadoras'],
  },
  {
    id: 2,
    nombre: 'Mouse',
    precio: 50,
    stock: 0,
    categorias: ['electrónica', 'accesorios'],
  },
  {
    id: 3,
    nombre: 'Teclado',
    precio: 80,
    stock: 3,
    categorias: ['electrónica', 'accesorios'],
  },
  {
    id: 4,
    nombre: 'Monitor',
    precio: 300,
    stock: 0,
    categorias: ['electrónica', 'pantallas'],
  },
  {
    id: 5,
    nombre: 'Monitor wide',
    precio: 30000,
    stock: 0,
    categorias: ['lala', 'dsdas', 'dsdas'],
  },
]

// A) ¿Todos los productos tienen stock?
// Método: every
const a = productos.every((p) => p.stock > 0)

// B) ¿Hay algún producto sin stock?
// Método: some
const b = productos.some((p) => p.stock > 0)

// C) ¿Cuántos productos no tienen stock?
// Método(s): filter y length

const c = productos.filter((p) => p.stock > 0).length

// D) Dame todos los productos sin stock
// Método: filter
const d = productos.filter((p) => p.stock === 0)

// E) Dame el primer producto sin stock
// Método: find
const e = productos.find((p) => p.stock === 0)

// F) Lista de todas las categorías (sin repetir)
// Método(s): _______
const f = [...new Set(productos.flatMap((p) => p.categorias))]

// G) ¿Cuál es el producto más caro?
// Método(s): _______
const g = productos.reduce((acc, p) => {
  if (p.precio > acc.precio) {
    return p
  }
  return acc
}, productos[0])

// H) Productos ordenados por precio ascendente
// Método: _______

const h = productos.sort((a, b) => a.precio - b.precio)
