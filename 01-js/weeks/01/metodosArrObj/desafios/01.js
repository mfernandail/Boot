const cursos = [
  {
    id: 1,
    titulo: 'JavaScript Básico',
    instructor: 'Ana García',
    estudiantes: [
      { nombre: 'Carlos', progreso: 100, calificacion: 9 },
      { nombre: 'María', progreso: 80, calificacion: 8 },
      { nombre: 'Pedro', progreso: 100, calificacion: 10 },
    ],
    precio: 50,
    categorias: ['programación', 'web'],
  },
  {
    id: 2,
    titulo: 'React Avanzado',
    instructor: 'Carlos López',
    estudiantes: [
      { nombre: 'Ana', progreso: 60, calificacion: 7 },
      { nombre: 'Luis', progreso: 100, calificacion: 9 },
    ],
    precio: 80,
    categorias: ['programación', 'react', 'web'],
  },
  {
    id: 3,
    titulo: 'Python para Data Science',
    instructor: 'Ana García',
    estudiantes: [
      { nombre: 'María', progreso: 40, calificacion: 6 },
      { nombre: 'Pedro', progreso: 70, calificacion: 8 },
    ],
    precio: 100,
    categorias: ['programación', 'data science'],
  },
]

// A) Total de estudiantes únicos en la plataforma
// (Un estudiante puede estar en varios cursos)
// Resultado esperado: ['Carlos', 'María', 'Pedro', 'Ana', 'Luis']

const totalEstudiantesUnicos = [
  ...new Set(cursos.flatMap((c) => c.estudiantes.map((e) => e.nombre))),
]

console.log('A) Estudiantes únicos:', totalEstudiantesUnicos)

// B) Promedio de calificaciones de todos los cursos
const { sumaCalificaciones, cantidadEstudiantes } = cursos.reduce(
  (acc, { estudiantes }) => {
    estudiantes.forEach((e) => {
      acc.sumaCalificaciones += e.calificacion
      acc.cantidadEstudiantes++
    })
    return acc
  },
  { sumaCalificaciones: 0, cantidadEstudiantes: 0 }
)

console.log(
  'B) Promedio de calificaciones:',
  sumaCalificaciones / cantidadEstudiantes
)

// C) Cursos de 'Ana García' ordenados por precio (mayor a menor)
const cursoAnaGarcia = cursos
  .filter((curso) => curso.instructor === 'Ana García')
  .sort((a, b) => b.precio - a.precio)

console.log('C) Cursos de Ana García ordenados por precio:', cursoAnaGarcia)

// D) ¿Todos los cursos tienen al menos un estudiante que completó (progreso 100)?
const cursosConUnEstudianteCompleto = cursos.every((curso) =>
  curso.estudiantes.some((e) => e.progreso === 100)
)

console.log(
  'D) Todos los cursos tienen al menos un estudiante que completó:',
  cursosConUnEstudianteCompleto
)

// E) Estudiantes que completaron todos los cursos en los que están inscritos
let infoEstudiantesCompletaronTodoCursos = {}

cursos.forEach((curso) => {
  curso.estudiantes.forEach((e) => {
    if (!infoEstudiantesCompletaronTodoCursos[e.nombre]) {
      infoEstudiantesCompletaronTodoCursos[e.nombre] = {
        nombre: e.nombre,
        cantidadCursos: 0,
        cantidadTerminado: 0,
      }
    }

    infoEstudiantesCompletaronTodoCursos[e.nombre].cantidadCursos++

    if (e.progreso === 100)
      infoEstudiantesCompletaronTodoCursos[e.nombre].cantidadTerminado++
  })
})

const estudiantesCompletaronTodoCursos = Object.values(
  infoEstudiantesCompletaronTodoCursos
)
  .filter((info) => info.cantidadCursos === info.cantidadTerminado)
  .map((estudiante) => estudiante.nombre)

console.log(
  'E) Estudiantes que completaron todos sus cursos:',
  estudiantesCompletaronTodoCursos
)

// F) Lista de todas las categorías únicas
const todasCategorias = [
  ...new Set(cursos.flatMap((curso) => curso.categorias)),
]
console.log('F) Categorías únicas:', todasCategorias)

// G) Curso con mayor cantidad de estudiantes
const cursoMayorCantEstudiantes = [...cursos].sort(
  (a, b) => b.estudiantes.length - a.estudiantes.length
)[0].titulo

console.log(
  'G) Curso con mayor cantidad de estudiantes:',
  cursoMayorCantEstudiantes
)

// H) Total de ingresos si todos los estudiantes pagaron
// (cantidad de estudiantes * precio del curso, sumado de todos los cursos)
let precio = 0
cursos.forEach((curso) => (precio += curso.precio * curso.estudiantes.length))

console.log('H) Total de ingresos si todos pagaron:', precio)
