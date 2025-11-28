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

// B) Promedio de calificaciones de todos los cursos

// C) Cursos de 'Ana García' ordenados por precio (mayor a menor)

// D) ¿Todos los cursos tienen al menos un estudiante que completó (progreso 100)?

// E) Estudiantes que completaron todos los cursos en los que están inscritos

// F) Lista de todas las categorías únicas

// G) Curso con mayor cantidad de estudiantes

// H) Total de ingresos si todos los estudiantes pagaron
// (cantidad de estudiantes * precio del curso, sumado de todos los cursos)
