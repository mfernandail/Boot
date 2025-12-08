const ventas = [
  {
    id: 1,
    vendedor: 'Ana',
    cliente: 'TechCorp',
    monto: 5000,
    mes: 'Enero',
    productos: ['Laptop', 'Mouse'],
  },
  {
    id: 2,
    vendedor: 'Carlos',
    cliente: 'InnovateLtd',
    monto: 3000,
    mes: 'Enero',
    productos: ['Monitor'],
  },
  {
    id: 3,
    vendedor: 'Ana',
    cliente: 'DataInc',
    monto: 7000,
    mes: 'Febrero',
    productos: ['Laptop', 'Teclado', 'Mouse'],
  },
  {
    id: 4,
    vendedor: 'María',
    cliente: 'TechCorp',
    monto: 4000,
    mes: 'Febrero',
    productos: ['Monitor', 'Webcam'],
  },
  {
    id: 5,
    vendedor: 'Carlos',
    cliente: 'StartupXYZ',
    monto: 2000,
    mes: 'Marzo',
    productos: ['Mouse', 'Teclado'],
  },
  {
    id: 6,
    vendedor: 'Ana',
    cliente: 'TechCorp',
    monto: 6000,
    mes: 'Marzo',
    productos: ['Laptop'],
  },
]

// A) Vendedor con mayores ventas totales
const vendedorMayorVentas = ventas.reduce((acc, el) => {
  if (!acc[el.vendedor]) {
    acc[el.vendedor] = 0
  }
  acc[el.vendedor] += el.monto
  return acc
}, {})

const nombreVendedorMayorVentas = Object.entries(vendedorMayorVentas).sort(
  (a, b) => b[1] - a[1]
)[0][0]
console.log(nombreVendedorMayorVentas)

// B) Cliente que más ha comprado (por monto total)

// C) Mes con mayores ventas

// D) Top 3 productos más vendidos (por cantidad de veces que aparecen)

// E) Promedio de venta por transacción

// F) ¿Todos los vendedores tienen al menos una venta?
// (vendedores conocidos: ['Ana', 'Carlos', 'María', 'Pedro'])

// G) Ventas agrupadas por mes con totales
// Formato: { Enero: 8000, Febrero: 11000, Marzo: 8000 }

// H) Lista de clientes únicos que compraron 'Laptop'
