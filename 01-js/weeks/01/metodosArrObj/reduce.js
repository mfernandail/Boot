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
