const usuarios = [
  {
    id: 1,
    username: 'ana_dev',
    seguidores: [2, 3, 4],
    siguiendo: [2, 5],
    posts: [
      {
        id: 101,
        likes: 50,
        comentarios: ['Genial!', 'Me encanta'],
        fecha: '2024-01-15',
      },
      { id: 102, likes: 30, comentarios: ['Interesante'], fecha: '2024-02-01' },
    ],
  },
  {
    id: 2,
    username: 'carlos_code',
    seguidores: [1, 3, 5],
    siguiendo: [1, 4],
    posts: [
      {
        id: 201,
        likes: 100,
        comentarios: ['Wow', 'Increíble', 'Gran post'],
        fecha: '2024-01-20',
      },
    ],
  },
  {
    id: 3,
    username: 'maria_tech',
    seguidores: [1, 2],
    siguiendo: [1, 2, 4, 5],
    posts: [
      { id: 301, likes: 75, comentarios: ['Excelente'], fecha: '2024-01-25' },
      { id: 302, likes: 60, comentarios: [], fecha: '2024-02-10' },
    ],
  },
  {
    id: 4,
    username: 'pedro_js',
    seguidores: [2, 5],
    siguiendo: [1, 3],
    posts: [],
  },
  {
    id: 5,
    username: 'lucia_py',
    seguidores: [1, 3, 4],
    siguiendo: [2, 3],
    posts: [
      {
        id: 501,
        likes: 200,
        comentarios: ['Amazing', 'Best post'],
        fecha: '2024-02-05',
      },
    ],
  },
]

// A) Usuario con más seguidores

// B) Usuario con más likes totales (suma de todos sus posts)

// C) Total de posts en la plataforma

// D) ¿Todos los usuarios siguen a alguien?

// E) Promedio de seguidores por usuario

// F) Post con más likes

// G) Usuarios que no han publicado nada

// H) Total de comentarios en la plataforma

// I) Usuario con mejor ratio: (total likes / cantidad posts)
// (Ignora usuarios sin posts)

// J) ¿Hay alguna relación de seguimiento mutuo?
// (A sigue a B Y B sigue a A)
