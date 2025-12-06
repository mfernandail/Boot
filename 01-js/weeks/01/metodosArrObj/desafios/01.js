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

const a = [
  ...new Set(
    cursos.flatMap((curso) =>
      curso.estudiantes.map((estudiante) => estudiante.nombre)
    )
  ),
]

console.log('A) Estudiantes únicos:', a)

// B) Promedio de calificaciones de todos los cursos

const b =
  cursos.reduce((acc, curso) => {
    const totalCalificaciones = curso.estudiantes.reduce(
      (sum, estudiante) => sum + estudiante.calificacion,
      0
    )
    return acc + totalCalificaciones
  }, 0) / cursos.reduce((total, curso) => total + curso.estudiantes.length, 0)

console.log('B) Promedio de calificaciones:', b)

const { suma, cantidad } = cursos.reduce(
  (acc, curso) => {
    curso.estudiantes.forEach((e) => {
      acc.suma += e.calificacion
      acc.cantidad++
    })
    return acc
  },
  { suma: 0, cantidad: 0 }
)

const promedio = suma / cantidad

// C) Cursos de 'Ana García' ordenados por precio (mayor a menor)

const c = cursos
  .filter((curso) => curso.instructor === 'Ana García')
  .sort((a, b) => b.precio - a.precio)

console.log('C) Cursos de Ana García ordenados por precio:', c)

// D) ¿Todos los cursos tienen al menos un estudiante que completó (progreso 100)?
const d = cursos.every((curso) =>
  curso.estudiantes.some((estudiante) => estudiante.progreso === 100)
)

// E) Estudiantes que completaron todos los cursos en los que están inscritos
const e = cursos
  .flatMap((curso) =>
    curso.estudiantes
      .filter((estudiante) => estudiante.progreso === 100)
      .map((estudiante) => estudiante.nombre)
  )
  .filter((nombre, index, self) => self.indexOf(nombre) === index)

console.log('E) Estudiantes que completaron todos sus cursos:', e)

// F) Lista de todas las categorías únicas

// G) Curso con mayor cantidad de estudiantes
const cursoMasEstudiantes = cursos
  .map((curso) => ({
    nombre: curso.titulo,
    instructoe: curso.instructor,
    cantidad: curso.estudiantes.length,
  }))
  .sort((a, b) => b.cantidad - a.cantidad)[0]

console.log('G) Curso con mayor cantidad de estudiantes:', cursoMasEstudiantes)

// H) Total de ingresos si todos los estudiantes pagaron
// (cantidad de estudiantes * precio del curso, sumado de todos los cursos)

const h = cursos.reduce((acc, curso) => {
  return acc + curso.estudiantes.length * curso.precio
}, 0)

console.log('H) Total de ingresos si todos pagaron:', h)

// F) Lista de todas las categorías únicas
const totalIngresos = cursos.reduce((acc, el) => {
  acc += el.estudiantes.length * el.precio
  return acc
}, 0)

console.log('F) Categorías únicas:', f)
