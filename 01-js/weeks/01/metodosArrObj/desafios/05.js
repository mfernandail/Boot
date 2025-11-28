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

// B) Usuario con carrito más caro (sin descuentos)

// C) ¿Algún usuario tiene el carrito vacío?

// D) Total histórico de compras de todos los usuarios

// E) Usuario con mayor gasto histórico

// F) Productos únicos en todos los carritos

// G) Promedio del valor del carrito (con descuentos) de usuarios que tienen productos

// H) ¿Todos los usuarios tienen al menos una compra histórica?
