const persona_f = {
  nombre: 'María',
  saludar() {
    setTimeout(function () {
      console.log(this.nombre)
    }, 1000)
  },
}

persona_f.saludar() // undefined 😵‍💫 ❌ this apunta a window, no a persona

/*
Arrow functions (regla clave)
👉 Las arrow functions NO tienen su propio this
👉 Heredan el this del scope externo
*/

const persona_af = {
  nombre: 'María',
  saludar() {
    setTimeout(() => {
      console.log(this.nombre)
    }, 1000)
  },
}

persona_af.saludar() // "María" ✅

// call, apply, bind

function saludar(ciudad) {
  console.log(`${this.nombre} vive en ${ciudad}`)
}

/**
 * call
 * Ejecuta la función inmediatamente
 * Pasas los argumentos uno por uno
 */
const persona = { nombre: 'María' }
saludar.call(persona, 'Santiago') // María vive en Santiago

/**
 * apply
 * Ejecuta la función inmediatamente
 * Pasas los argumentos como un array
 */
saludar.apply(persona, ['Santiago']) // María vive en Santiago

/**
 * bind
 * No ejecuta la función inmediatamente
 * Devuelve una nueva función con el this vinculado
 */
const saludarPersona = saludar.bind(persona, 'Santiago')
saludarPersona() // María vive en Santiago
