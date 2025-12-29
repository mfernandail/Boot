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
const usuarioConMasSeguidores = usuarios.reduce((acc_usuario, el_usuario) => {
  const numeroSeguidores = el_usuario.seguidores.length

  if (!acc_usuario || numeroSeguidores > acc_usuario.seguidores.length) {
    return el_usuario
  }

  return acc_usuario
}, null)

// B) Usuario con más likes totales (suma de todos sus posts)
const b_usuarioConMasLikes = usuarios.reduce(
  (acc_usuario, el_usuario) => {
    const likes = el_usuario.posts.reduce((acc, el) => (acc += el.likes), 0)

    if (!acc_usuario || likes > acc_usuario.likesTotal) {
      return {
        nombre: el_usuario.username,
        likesTotal: likes,
      }
    }
    return acc_usuario
  },
  { nombre: '', likesTotal: 0 }
)

// C) Total de posts en la plataforma
const totalPost = usuarios.reduce((acc_post, el_post) => {
  acc_post += el_post.posts.length
  return acc_post
}, 0)

// D) ¿Todos los usuarios siguen a alguien?
const d_numeroUsuario = usuarios.every(
  (usuario) => usuario.siguiendo.length > 0
)

// E) Promedio de seguidores por usuario
const e_promedioSeguidores = usuarios.reduce(
  (acc_usuario, el_usuario) => (acc_usuario += el_usuario.seguidores.length),
  0
)

const promedioSeguidores = e_promedioSeguidores / usuarios.length

// F) Post con más likes
const f_postConMasLikes = usuarios
  .flatMap((u) => u.posts)
  .reduce((max, post) => (!max || post.likes > max.likes ? post : max), null)

// G) Usuarios que no han publicado nada
const g_usuarioSinPublicacion = usuarios.filter(
  (usuario) => usuario.posts.length === 0
)

// H) Total de comentarios en la plataforma
const h_totalComentarios = usuarios.reduce((acc_usuario, el_usuario) => {
  acc_usuario += el_usuario.posts.reduce(
    (acc_com, el_com) => (acc_com += el_com.comentarios.length),
    0
  )
  return acc_usuario
}, 0)

// I) Usuario con mejor ratio: (total likes / cantidad posts)
// (Ignora usuarios sin posts)

// J) ¿Hay alguna relación de seguimiento mutuo?
// (A sigue a B Y B sigue a A)
