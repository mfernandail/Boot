const estudiantes = [
  { nombre: 'Carlos', notas: [8, 9, 7, 10], edad: 20 },
  { nombre: 'María', notas: [9, 9, 8, 9], edad: 19 },
  { nombre: 'Pedro', notas: [6, 7, 5, 8], edad: 21 },
  { nombre: 'Lucía', notas: [10, 10, 9, 10], edad: 20 },
]

// TODO: Calcula el promedio de cada estudiante con map y reduce
const promedios = estudiantes.map((estudiante) => {
  const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0)
  return {
    nombre: estudiante.nombre,
    promedio: sumaNotas / estudiante.notas.length,
  }
})

console.log(promedios)
