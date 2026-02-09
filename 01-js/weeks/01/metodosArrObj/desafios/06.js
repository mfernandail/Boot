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

const empleadoOrdenadoSalario = empleados
  .filter((empleado) => empleado.departamento === 'IT')
  .sort((a, b) => b.salario - a.salario)

// B) ¿Todos los empleados tienen al menos un proyecto asignado?
const empleadosProyectos = empleados.every(
  (empleado) => empleado.proyectos.length > 0
)

// C) Total de horas trabajadas en proyectos por todo el equipo
const totalHorasPorProyectoEquipo = empleados.reduce(
  (acc_totalHoras, el_totalHoras) => {
    acc_totalHoras += el_totalHoras.proyectos.reduce(
      (acc_horas, el_horas) => (acc_horas += el_horas.horas),
      0
    )
    return acc_totalHoras
  },
  0
)
totalHorasPorProyectoEquipo

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

const promedioSalarioDepto = empleados.reduce((acc_depto, el_depto) => {
  if (!acc_depto[el_depto.departamento]) {
    acc_depto[el_depto.departamento] = {
      salarioTotal: 0,
      contador: 0,
    }
  }

  acc_depto[el_depto.departamento].salarioTotal += el_depto.salario
  acc_depto[el_depto.departamento].contador += 1

  return acc_depto
}, {})

promedioSalarioDepto

const resultadoPromedioSalario = Object.keys(promedioSalarioDepto).reduce(
  (acc_dep, el_dep) => {
    acc_dep[el_dep] =
      promedioSalarioDepto[el_dep].salarioTotal /
      promedioSalarioDepto[el_dep].contador
    return acc_dep
  },
  {}
)

// F) Habilidades únicas en la empresa
const habilidadesUnicas = [...new Set(empleados.flatMap((h) => h.habilidades))]

// G) Empleados que saben JavaScript
const empleadosJS = empleados.filter((empleado) =>
  empleado.habilidades.includes('JavaScript')
)

// H) ¿Hay algún empleado con más de 6 años de antigüedad y salario menor a 4000?
const empleadoAntiguedadSalario = empleados.some(
  (empleado) => empleado.antiguedad > 6 && empleado.salario < 4000
)
