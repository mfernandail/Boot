const empleados = [
  {
    nombre: 'Ana García',
    departamento: 'IT',
    salario: 4000,
    antiguedad: 5,
    habilidades: ['JavaScript', 'React', 'Node.js'],
    proyectos: [
      { nombre: 'Web App', horas: 120 },
      { nombre: 'API REST', horas: 80 },
    ],
  },
  {
    nombre: 'Carlos López',
    departamento: 'Marketing',
    salario: 3000,
    antiguedad: 3,
    habilidades: ['SEO', 'Google Ads', 'Analytics'],
    proyectos: [{ nombre: 'Campaña Q1', horas: 100 }],
  },
  {
    nombre: 'María Rodríguez',
    departamento: 'IT',
    salario: 4500,
    antiguedad: 7,
    habilidades: ['Python', 'Django', 'PostgreSQL'],
    proyectos: [
      { nombre: 'Data Pipeline', horas: 150 },
      { nombre: 'Dashboard', horas: 90 },
    ],
  },
  {
    nombre: 'Pedro Sánchez',
    departamento: 'IT',
    salario: 3500,
    antiguedad: 2,
    habilidades: ['JavaScript', 'Vue.js', 'TypeScript'],
    proyectos: [],
  },
]

// A) Empleados de IT ordenados por salario (mayor a menor)

// B) ¿Todos los empleados tienen al menos un proyecto asignado?

// C) Total de horas trabajadas en proyectos por todo el equipo

// D) Empleado con más horas trabajadas en proyectos

// E) Promedio de salario por departamento
// Formato: { IT: 4000, Marketing: 3000 }

// F) Habilidades únicas en la empresa

// G) Empleados que saben JavaScript

// H) ¿Hay algún empleado con más de 6 años de antigüedad y salario menor a 4000?
