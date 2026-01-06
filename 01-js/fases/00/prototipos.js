/*
Qué es un prototipo:

- Todo objeto en JS tiene un prototipo
- El prototipo es otro objeto
- Si una propiedad no existe:
- JS la busca en el prototipo
- Luego en el prototipo del prototipo
- Hasta llegar a null
- Esto se llama 👉 Prototype Chain
*/

const persona = {
  saludar() {
    console.log('Hola')
  },
}

const maria = {
  nombre: 'María',
}

Object.setPrototypeOf(maria, persona)

maria.saludar() // "Hola"
