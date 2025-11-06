# HTML

- html son las siglas de HyperText Markup Language (Lenguaje de Marcado de Hipertexto).
- las etiquetas mas usadas en HTML son:
  - `<html>`: etiqueta raiz que contiene todo el contenido de la pagina web.
  - `<head>`: contiene metadatos, enlaces a hojas de estilo y scripts.
  - `<body>`: contiene el contenido visible de la pagina web.
  - `<header>`: define el encabezado de una pagina o seccion.
  - `<nav>`: define un conjunto de enlaces de navegacion.
  - `<main>`: define el contenido principal del documento.
  - `<section>`: define una seccion en un documento.
  - `<article>`: define un articulo independiente.
  - `<footer>`: define el pie de pagina de una seccion o documento.
  - `<h1>` a `<h6>`: definen los encabezados, siendo `<h1>` el mas importante y `<h6>` el menos importante.
  - `<p>`: define un parrafo.
  - `<a>`: define un hipervinculo.
  - `<img>`: define una imagen.
  - `<ul>`, `<ol>`, `<li>`: definen listas no ordenadas, ordenadas y elementos de lista respectivamente.
  - `<div>`: define una division o seccion en un documento, **utilizada** para agrupar elementos y aplicar estilos con CSS.

## Recomendaciones

- El alt en una imagen es importante para la accesibilidad y SEO.
- El title en una imagen es opcional y proporciona informacion adicional al usuario. Se activa al pasar el cursor sobre la imagen.
- Se puede poner hidden, este es booleano, por lo que si esta en el elemento este automaticamente se ocultara, no importa si tiene contenido o no. En una imagen para ocultarla visualmente pero mantenerla en el DOM para lectores de pantalla.

## head

- Dentro del head las etiquetas mas importantes son:

  - `<meta charset="UTF-8">`: define la codificacion de caracteres del documento.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: hace que el sitio web sea responsivo en dispositivos moviles.
  - `<title>`: define el titulo del documento que aparece en la pestaña del navegador. Aparece en los resultados de busqueda y es importante para el SEO.
  - `<link rel="icon" href="favicon.ico" type="image/x-icon">`: define el icono que aparece en la pestaña del navegador.
  - `<meta name="robots" content="index, follow">`: es una metaetiqueta para los motores de búsqueda (como Google, Bing, etc.) y le indica cómo deben comportarse con tu página web. Esta metaetiqueta le dice a Google y otros buscadores: “Puedes indexar esta página y también seguir los enlaces que hay en ella.”

    - name="robots" → Se dirige a los "robots" o crawlers de los buscadores (los programas que rastrean las páginas web para indexarlas).
    - content="index, follow" → Son instrucciones que le dicen al buscador qué hacer con la página:
      - index → Permite que la página sea incluida en los resultados de búsqueda.
      - follow → Permite que el robot siga los enlaces que hay dentro de esa página (para descubrir e indexar otras páginas del sitio).

    | Meta tag                                           | Significado                                       |
    | -------------------------------------------------- | ------------------------------------------------- |
    | `<meta name="robots" content="noindex, follow">`   | No indexar la página, pero sí seguir los enlaces. |
    | `<meta name="robots" content="index, nofollow">`   | Indexar la página, pero no seguir los enlaces.    |
    | `<meta name="robots" content="noindex, nofollow">` | No indexar ni seguir los enlaces.                 |

- `<meta name="theme-color" content="#4285f4">`: define el color de la barra de herramientas en navegadores moviles.
- `<link rel="stylesheet" href="styles.css">`: enlaza una hoja de estilo externa.
- `<script src="script.js" defer></script>`: enlaza un archivo JavaScript externo y lo carga de manera diferida.
- `<meta name="description" content="Descripcion del sitio web">`: proporciona una descripcion del sitio web para motores de busqueda.
- `<meta name="keywords" content="palabra1, palabra2, palabra3">`: define palabras clave relacionadas con el contenido del sitio web para motores de busqueda.
- `<meta name="author" content="Nombre del autor">`: especifica el nombre del autor del documento.
