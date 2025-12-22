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
const empleadoOrdenadoSalario = empleados.sort((a, b) => b.salario - a.salario)

// B) ¿Todos los empleados tienen al menos un proyecto asignado?
const empleadosProyectos = empleados.every(
  (empleado) => empleado.proyectos.length > 0
)

// C) Total de horas trabajadas en proyectos por todo el equipo
const totalHorasPorProyectoEquipo = empleados.reduce(
  (acc_equipo, el_equipo) => {
    if (!acc_equipo[el_equipo.departamento]) {
      acc_equipo[el_equipo.departamento] = 0
    }
    acc_equipo[el_equipo.departamento] += el_equipo.proyectos.reduce(
      (acc_horas, el_horas) => (acc_horas += el_horas.horas),
      0
    )
    return acc_equipo
  },
  {}
)

// D) Empleado con más horas trabajadas en proyectos
const empleadosMasHoras = empleados.reduce(
  (acc_empleados, el_empleados) => {
    const horasCalc = el_empleados.proyectos.reduce(
      (acc_horas, el_horas) => (acc_horas += el_horas.horas),
      0
    )
    if (acc_empleados.horas < horasCalc) {
      return {
        nombre: el_empleados.nombre,
        horas: horasCalc,
      }
    }
    return acc_empleados
  },
  { nombre: '', horas: 0 }
)

// E) Promedio de salario por departamento
// Formato: { IT: 4000, Marketing: 3000 }

// F) Habilidades únicas en la empresa

// G) Empleados que saben JavaScript

// H) ¿Hay algún empleado con más de 6 años de antigüedad y salario menor a 4000?
