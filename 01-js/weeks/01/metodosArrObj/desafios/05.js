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

// B) Usuario con carrito más caro (sin descuentos)
const usuarioCarritoMasCaro = usuarios.reduce(
  (acc_carrito, el_carrito) => {
    const total_calc = el_carrito.carrito.reduce(
      (acc_total, el_total) =>
        (acc_total += el_total.precio * el_total.cantidad),
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

// C) ¿Algún usuario tiene el carrito vacío?
const algunCarritoVacio = usuarios.some(
  (usuario) => usuario.carrito.length === 0
)

// D) Total histórico de compras de todos los usuarios
const totalHistoricoCompras = usuarios.reduce((acc_total, el_total) => {
  acc_total += el_total.historialCompras.reduce(
    (acc_historico, el_historico) => (acc_historico += el_historico.total),
    0
  )
  return acc_total
}, 0)

// E) Usuario con mayor gasto histórico
const usuarioMayorGastos = usuarios.reduce(
  (acc_usuario, el_usuario) => {
    const total = el_usuario.historialCompras.reduce(
      (acc_historico, el_historico) => (acc_historico += el_historico.total),
      0
    )
    if (!acc_usuario.nombre || acc_usuario.total < total) {
      return {
        nombre: el_usuario.nombre,
        total: total,
      }
    }
    return acc_usuario
  },
  { nombre: '', total: 0 }
)

// F) Productos únicos en todos los carritos
const productosUnicos = [
  ...new Set(
    usuarios.flatMap((producos) =>
      producos.carrito.map((producto) => producto.producto)
    )
  ),
]

// G) Promedio del valor del carrito (con descuentos) de usuarios que tienen productos
const promedioConProductos = usuarios.filter(
  (usuario) => usuario.carrito.length !== 0
)
const promedioTotalConProductos =
  promedioConProductos.reduce((acc_prom, el_prom) => {
    acc_prom += el_prom.carrito.reduce(
      (acc_carrito, el_carrito) =>
        (acc_carrito +=
          el_carrito.cantidad * el_carrito.precio * (1 - el_carrito.descuento)),
      0
    )
    return acc_prom
  }, 0) / promedioConProductos.length

// H) ¿Todos los usuarios tienen al menos una compra histórica?
const usuariosCompraHistorica = usuarios.every(
  (usuario) => usuario.historialCompras.length > 0
)
