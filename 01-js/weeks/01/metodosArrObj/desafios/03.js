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
const totalConsultas = pacientes.reduce((acc, { consultas }) => {
  acc += consultas.length
  return acc
}, 0)
console.log('Total de consultas:', totalConsultas)

// B) Paciente con mayor gasto acumulado
const pacienteMayorGasto = pacientes.reduce(
  (acc, paciente) => {
    const gastoTotal = paciente.consultas.reduce((accGasto, { costo }) => {
      accGasto += costo
      return accGasto
    }, 0)
    if (gastoTotal > acc.gasto) {
      return { nombre: paciente.nombre, gasto: gastoTotal }
    }
    return acc
  },
  { nombre: '', gasto: 0 }
)

console.log(
  'Paciente con mayor gasto acumulado:',
  pacienteMayorGasto.nombre,
  'con un gasto de $' + pacienteMayorGasto.gasto
)

// C) ¿Todos los pacientes con más de 60 años tienen seguro?
const pacientesMas60 = pacientes
  .filter((paciente) => paciente.edad > 60)
  .every((paciente) => paciente.seguro)
console.log(
  '¿Todos los pacientes con más de 60 años tienen seguro?',
  pacientesMas60
)

// D) Promedio de edad de pacientes
const promedioEdad = pacientes.reduce((acc, { edad }) => {
  acc += edad / pacientes.length
  return acc
}, 0)
console.log('Promedio de edad de pacientes:', promedioEdad)

const promedioEdadPacientes =
  pacientes.reduce((acc, el) => {
    acc += el.edad
    return acc
  }, 0) / pacientes.length

// E) Diagnósticos únicos en el sistema
const diagnosticosUnicos = [
  ...new Set(
    pacientes.flatMap(({ consultas }) => consultas).map((d) => d.diagnostico)
  ),
]
console.log('Diagnósticos únicos en el sistema:', diagnosticosUnicos)

// F) Pacientes sin seguro que han gastado más de $50
const pacientesSinSeguroGasto50 = pacientes.filter((paciente) => {
  const gastoTotal = paciente.consultas.reduce((acc, { costo }) => {
    acc += costo
    return acc
  }, 0)
  return !paciente.seguro && gastoTotal > 50
})

console.log(
  'Pacientes sin seguro que han gastado más de $50:',
  pacientesSinSeguroGasto50
)

// G) Total de ingresos del hospital
const totalIngresos1 = pacientes.reduce((acc_pacientes, { consultas }) => {
  acc_pacientes += consultas.reduce((acc_consulta, { costo }) => {
    acc_consulta += costo
    return acc_consulta
  }, 0)
  return acc_pacientes
}, 0)

console.log('Total de ingresos del hospital:', totalIngresos1)

// H) Paciente más joven con al menos 2 consultas
const pacienteMasJoven2Consultas = pacientes
  .filter((paciente) => paciente.consultas.length >= 2)
  .reduce((acc, paciente) => {
    if (!acc || paciente.edad < acc.edad) {
      return paciente
    }
    return acc
  }, null)

console.log(
  'Paciente más joven con al menos 2 consultas:',
  pacienteMasJoven2Consultas
)
