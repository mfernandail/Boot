const numeros = [1, 2, 2, 3, 3, 3, 4]

// Crear Set (elimina duplicados automáticamente)
const numerosUnicos = new Set(numeros)
console.log(numerosUnicos) // Set { 1, 2, 3, 4 }

// Convertir de vuelta a array
const array = [...numerosUnicos] // [1, 2, 3, 4]

// O directamente
const unicos = [...new Set(numeros)] // [1, 2, 3, 4]

const frutas = new Set(['manzana', 'pera', 'manzana'])

frutas.add('uva') // Agregar
frutas.has('pera') // ¿Existe? → true
frutas.delete('manzana') // Eliminar
frutas.size // Cantidad → 2
frutas.clear() // Eliminar todo

console.log(frutas)

// Ejercicio: Agrupar estudiantes por edad usando reduce y un Set

const estudiantes = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 22 },
  { nombre: 'Carlos', edad: 20 },
  { nombre: 'María', edad: 21 },
  { nombre: 'Jorge', edad: 22 },
]

// Resultado esperado:
// {
//   20: [ { nombre: 'Ana', edad: 20 }, { nombre: 'Carlos', edad: 20 } ],
//   21: [ { nombre: 'María', edad: 21 } ],
//   22: [ { nombre: 'Luis', edad: 22 }, { nombre: 'Jorge', edad: 22 } ]
// }

const agruparPorEdad = estudiantes.reduce((acc, estudiante) => {
  const { edad } = estudiante
  if (!acc[edad]) {
    acc[edad] = []
  }
  acc[edad].push(estudiante)
  return acc
}, {})
