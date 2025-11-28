const pacientes = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    edad: 45,
    consultas: [
      { fecha: '2024-01-15', diagnostico: 'Gripe', costo: 50 },
      { fecha: '2024-02-20', diagnostico: 'Revisión', costo: 30 },
    ],
    seguro: true,
  },
  {
    id: 2,
    nombre: 'María López',
    edad: 32,
    consultas: [
      { fecha: '2024-01-10', diagnostico: 'Dolor de cabeza', costo: 40 },
    ],
    seguro: false,
  },
  {
    id: 3,
    nombre: 'Carlos Ruiz',
    edad: 67,
    consultas: [
      { fecha: '2024-01-05', diagnostico: 'Hipertensión', costo: 100 },
      { fecha: '2024-02-15', diagnostico: 'Hipertensión', costo: 100 },
      { fecha: '2024-03-10', diagnostico: 'Hipertensión', costo: 100 },
    ],
    seguro: true,
  },
  {
    id: 4,
    nombre: 'Ana Martínez',
    edad: 28,
    consultas: [
      { fecha: '2024-02-01', diagnostico: 'Revisión', costo: 30 },
      { fecha: '2024-03-01', diagnostico: 'Revisión', costo: 30 },
    ],
    seguro: true,
  },
]

// A) Total de consultas en el sistema

// B) Paciente con mayor gasto acumulado

// C) ¿Todos los pacientes con más de 60 años tienen seguro?

// D) Promedio de edad de pacientes

// E) Diagnósticos únicos en el sistema

// F) Pacientes sin seguro que han gastado más de $50

// G) Total de ingresos del hospital

// H) Paciente más joven con al menos 2 consultas
