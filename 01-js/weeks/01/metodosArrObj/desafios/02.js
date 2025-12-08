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
const clienteConMasCompras = ventas.reduce((acc, el) => {
  if (!acc[el.cliente]) {
    acc[el.cliente] = 0
  }
  acc[el.cliente] += el.monto
  return acc
}, {})
const nombreClienteMasCompras = Object.entries(clienteConMasCompras).sort(
  (a, b) => b[1] - a[1]
)[0][0]

console.log(nombreClienteMasCompras)

// C) Mes con mayores ventas
const mesConMayorVentas = ventas.reduce((acc, el) => {
  if (!acc[el.mes]) {
    acc[el.mes] = 0
  }

  acc[el.mes] += el.monto
  return acc
}, {})

const nombreMesMayorVentas = Object.entries(mesConMayorVentas).sort(
  (a, b) => b[1] - a[1]
)[0][0]

console.log(nombreMesMayorVentas)

// D) Top 3 productos más vendidos (por cantidad de veces que aparecen)
const topTresProductosMasVendidos = ventas.reduce((acc, { productos }) => {
  productos.forEach((producto) => {
    if (!acc[producto]) {
      acc[producto] = 0
    }
    acc[producto]++
  })
  return acc
}, {})

let nombreProductoTopTres = Object.entries(topTresProductosMasVendidos)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3)
  .map((p) => p[0])

console.log(nombreProductoTopTres)

// E) Promedio de venta por transacción
const promedioVentasPorTransaccion =
  ventas.reduce((acc, el) => {
    acc += el.monto
    return acc
  }, 0) / ventas.length

console.log(promedioVentasPorTransaccion)

// F) ¿Todos los vendedores tienen al menos una venta?
// (vendedores conocidos: ['Ana', 'Carlos', 'María', 'Pedro'])
const vendedoresConVentas = ventas.map((el) => el.vendedor)
const vendedoresConVentaUnica = [...new Set(vendedoresConVentas)]
const vendedoresConVenta = ['Ana', 'Carlos', 'María', 'Pedro'].every(
  (vendedor) => vendedoresConVentaUnica.includes(vendedor)
)

console.log(vendedoresConVenta)

// G) Ventas agrupadas por mes con totales
// Formato: { Enero: 8000, Febrero: 11000, Marzo: 8000 }
const ventasPorMes = ventas.reduce((acc, el) => {
  if (!acc[el.mes]) {
    acc[el.mes] = 0
  }

  acc[el.mes] += el.monto

  return acc
}, {})
console.log(ventasPorMes)

// H) Lista de clientes únicos que compraron 'Laptop'
const listaClientesLaptop = [
  ...new Set(
    ventas
      .filter((producto) => producto.productos.includes('Laptop'))
      .map((cliente) => cliente.cliente)
  ),
]
console.log(listaClientesLaptop)
