const usuarios = [
  {
    id: 1,
    nombre: 'Ana',
    carrito: [
      { producto: 'Laptop', precio: 1000, cantidad: 1, descuento: 0.1 },
      { producto: 'Mouse', precio: 50, cantidad: 2, descuento: 0 },
    ],
    historialCompras: [
      { fecha: '2024-01-15', total: 500 },
      { fecha: '2024-02-20', total: 300 },
    ],
  },
  {
    id: 2,
    nombre: 'Carlos',
    carrito: [
      { producto: 'Monitor', precio: 300, cantidad: 1, descuento: 0.15 },
    ],
    historialCompras: [{ fecha: '2024-01-10', total: 1200 }],
  },
  {
    id: 3,
    nombre: 'María',
    carrito: [],
    historialCompras: [
      { fecha: '2024-02-05', total: 800 },
      { fecha: '2024-03-01', total: 600 },
    ],
  },
]

// A) Total del carrito de Ana (con descuentos aplicados)
// Formula: precio * cantidad * (1 - descuento)
const totalCarritoAna = usuarios.reduce((acc, el) => {
  if (el.nombre === 'Ana') {
    acc += el.carrito.reduce(
      (acc_carrito, el_carrito) =>
        (acc_carrito +=
          el_carrito.precio * el_carrito.cantidad * (1 - el_carrito.descuento)),
      0
    )
  }
  return acc
}, 0)
console.log(`Total del carrito de Ana: $${totalCarritoAna.toFixed(2)}`)

// B) Usuario con carrito más caro (sin descuentos)
const usuarioCarritoMasCaro = usuarios.reduce(
  (acc_carrito, el_carrito) => {
    const total_calc = el_carrito.carrito.reduce(
      (acc_total, el_total) => (acc_total += el_total.precio),
      0
    )

    if (!acc_carrito || acc_carrito.total < total_calc) {
      return {
        nombre: el_carrito.nombre,
        total: total_calc,
      }
    }
    return acc_carrito
  },
  { nombre: '', total: 0 }
)
console.log(
  `Usuario con carrito más caro: ${
    usuarioCarritoMasCaro.nombre
  } con un total de $${usuarioCarritoMasCaro.total.toFixed(2)}`
)

// C) ¿Algún usuario tiene el carrito vacío?
const algunCarritoVacio = usuarios.some(
  (usuario) => usuario.carrito.length === 0
)
console.log(`¿Algún usuario tiene el carrito vacío? ${algunCarritoVacio}`)

// D) Total histórico de compras de todos los usuarios

// E) Usuario con mayor gasto histórico

// F) Productos únicos en todos los carritos

// G) Promedio del valor del carrito (con descuentos) de usuarios que tienen productos

// H) ¿Todos los usuarios tienen al menos una compra histórica?
