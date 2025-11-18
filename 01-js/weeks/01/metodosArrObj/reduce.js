const estudiantes = [
  { nombre: 'Carlos', notas: [8, 9, 7, 10], edad: 20 },
  { nombre: 'María', notas: [9, 9, 8, 9], edad: 19 },
  { nombre: 'Pedro', notas: [6, 7, 5, 8], edad: 21 },
  { nombre: 'Lucía', notas: [10, 10, 9, 10], edad: 20 },
]

// TODO: Calcula el promedio de cada estudiante con map y reduce
const notas = estudiantes.map((estudiante) => {
  const notas = estudiante.notas.reduce((acc, el) => acc + el, 0)
  return {
    nombre: estudiante.nombre,
    promedio: notas / estudiante.notas.length,
  }
})
console.log(notas)

// TODO: Filtra estudiantes con promedio >= 8
const filtraProm = notas.filter((nota) => nota.promedio >= 8)
console.log(filtraProm)

// TODO: Encuentra el estudiante con mejor promedio
const mejorProm = notas.reduce(
  (acc, el) => {
    if (acc.promedio < el.promedio) {
      acc.nombre = el.nombre
      acc.promedio = el.promedio
    }
    return acc
  },
  { nombre: '', promedio: 0 }
)
console.log(mejorProm)

// TODO: Crea un objeto con Object.entries que agrupe por edad
const agruparPorEdad = estudiantes.reduce((acc, estudiante) => {
  const edad = estudiante.edad
  if (!acc[edad]) {
    acc[edad] = []
  }

  acc[edad].push(estudiante)
  return acc
}, {})

agruparPorEdad

const palabras = ['Ana', 'Alberto', 'Beatriz', 'Carlos', 'Carla']

const agrupar = palabras.reduce((acc, el) => {
  const letra = el.charAt(0)

  if (!acc[letra]) {
    acc[letra] = []
  }

  acc[letra].push(el)

  return acc
}, {})

console.log(agrupar)

const calificaciones = [
  { estudiante: 'Ana', materia: 'Matemáticas', nota: 8 },
  { estudiante: 'Ana', materia: 'Historia', nota: 9 },
  { estudiante: 'Carlos', materia: 'Matemáticas', nota: 7 },
  { estudiante: 'Carlos', materia: 'Historia', nota: 8 },
  { estudiante: 'Ana', materia: 'Ciencias', nota: 10 },
  { estudiante: 'Carlos', materia: 'Ciencias', nota: 6 },
]

// TODO: Calcula el promedio de cada estudiante
// Resultado esperado:
// {
//   Ana: 9,        // (8 + 9 + 10) / 3
//   Carlos: 7      // (7 + 8 + 6) / 3
// }

const resCalificaciones = calificaciones.reduce((acc, { estudiante, nota }) => {
  acc[estudiante] = acc[estudiante] || { nota: 0, cant: 0 }
  acc[estudiante].nota += nota
  acc[estudiante].cant++
  return acc
}, {})

console.log(resCalificaciones)

const res = Object.entries(resCalificaciones).map(
  ([nombre, { nota, cant }]) => {
    return {
      [nombre]: nota / cant,
    }
  }
)

console.log(res)

// Ejercicio 6: Dos Niveles - Total Simple

const tiendas = {
  tienda1: {
    productos: {
      prod1: { nombre: 'Laptop', precio: 1200 },
      prod2: { nombre: 'Mouse', precio: 25 },
    },
  },
  tienda2: {
    productos: {
      prod3: { nombre: 'Teclado', precio: 80 },
      prod4: { nombre: 'Monitor', precio: 300 },
    },
  },
}
// TODO: Suma TODOS los precios de TODAS las tiendas
// Resultado esperado: 1605
const resultado6 = Object.entries(tiendas).reduce(
  (acc, [tienda, { productos }]) => {
    acc += Object.values(productos).reduce((acc, { precio }) => {
      acc += precio
      return acc
    }, null)

    return acc
  },
  null
)

console.log(resultado6)
