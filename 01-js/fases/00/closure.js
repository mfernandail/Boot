/*
Qué ocurre internamente:
- crearContador() se ejecuta
- count debería desaparecer
- Pero la función interna lo sigue usando
- JavaScript mantiene ese scope → closure
*/

function crearContador() {
  let count = 0

  return function () {
    count++
    return count
  }
}

const contador = crearContador()

contador() // 1
contador() // 2
contador() // 3
