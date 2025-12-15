const peliculas = [
  {
    titulo: 'Inception',
    director: 'Christopher Nolan',
    año: 2010,
    generos: ['Sci-Fi', 'Thriller'],
    calificacion: 8.8,
    actores: ['Leonardo DiCaprio', 'Tom Hardy', 'Ellen Page'],
  },
  {
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    año: 2008,
    generos: ['Action', 'Crime', 'Drama'],
    calificacion: 9.0,
    actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    titulo: 'Interstellar',
    director: 'Christopher Nolan',
    año: 2014,
    generos: ['Sci-Fi', 'Drama'],
    calificacion: 8.6,
    actores: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    titulo: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    año: 1994,
    generos: ['Crime', 'Drama'],
    calificacion: 8.9,
    actores: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
  },
  {
    titulo: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    año: 1994,
    generos: ['Drama'],
    calificacion: 9.3,
    actores: ['Tim Robbins', 'Morgan Freeman'],
  },
]

// A) Películas de los últimos 15 años (>= 2010) ordenadas por calificación
const busqueda = new Date().getFullYear() - 15
const peliculasUltimos15Years = peliculas
  .filter((pelicula) => pelicula.año >= busqueda)
  .sort((a, b) => b.calificacion - a.calificacion)
console.log(
  'Películas de los últimos 15 años ordenadas por calificación:',
  peliculasUltimos15Years
)

// B) Directores únicos
const directoresUnicos = [
  ...new Set(peliculas.map((pelicula) => pelicula.director)),
]
console.log('Directores únicos:', directoresUnicos)

// C) Película mejor calificada
const peliculaMejorCalificada = peliculas.reduce((acc, el) => {
  if (!acc || acc.calificacion < el.calificacion) {
    return el
  }
  return acc
}, null)

// D) Todos los géneros únicos
const generosUnicos = [
  ...new Set(peliculas.flatMap((genero) => genero.generos)),
]
console.log('Géneros únicos:', generosUnicos)

// E) Promedio de calificación de películas de Christopher Nolan
const peliculasNolan = peliculas.filter(
  (pelicula) => pelicula.director === 'Christopher Nolan'
)
const peliculasNolanRes =
  peliculasNolan.reduce((acc, el) => {
    acc += el.calificacion
    return acc
  }, 0) / peliculasNolan.length
console.log(
  'Promedio de calificación de películas de Christopher Nolan:',
  peliculasNolanRes
)

// F) ¿Hay alguna película con calificación perfecta (10)?
const perfecta = peliculas.some((pelicula) => pelicula.calificacion === 10)
console.log('¿Hay alguna película con calificación perfecta (10)?', perfecta)

// G) Actores únicos en todo el sistema
const actoresUnicos = [...new Set(peliculas.flatMap((actor) => actor.actores))]
console.log('Actores únicos en todo el sistema:', actoresUnicos)

// H) Películas que tienen 'Drama' en sus géneros, ordenadas por año
const peliculasDrama = peliculas
  .filter((pelicula) => pelicula.generos.includes('Drama'))
  .sort((a, b) => a.año - b.año)
console.log('Películas con género Drama ordenadas por año:', peliculasDrama)

// I) Títulos de películas lanzadas antes del 2000
