# HTML — Guía rápida y buenas prácticas

Breve resumen de etiquetas, metaetiquetas, accesibilidad y recomendaciones para escribir HTML semántico y accesible.

---

## Contenido

- [HTML — Guía rápida y buenas prácticas](#html--guía-rápida-y-buenas-prácticas)
  - [Contenido](#contenido)
  - [Conceptos básicos](#conceptos-básicos)
  - [Recomendaciones generales](#recomendaciones-generales)
  - [Head — meta etiquetas importantes](#head--meta-etiquetas-importantes)
  - [Open Graph y Twitter Cards](#open-graph-y-twitter-cards)
  - [HTML semántico](#html-semántico)
  - [Formularios](#formularios)
  - [Imágenes](#imágenes)
  - [Recursos y etiquetas especiales](#recursos-y-etiquetas-especiales)

---

## Conceptos básicos

- HTML = HyperText Markup Language (Lenguaje de Marcado de Hipertexto).
- Estructura típica:
  - `<html>`: etiqueta raíz que contiene todo el contenido.
  - `<head>`: metadatos, enlaces a estilos y scripts.
  - `<body>`: contenido visible.

Etiquetas comunes:

- Estructura y secciones: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Estructura de texto: `<h1>` a `<h6>`, `<p>`, `<small>`, `<span>`
- Multimedios y navegación: `<a>`, `<img>`, `<video>`
- Listas: `<ul>`, `<ol>`, `<li>`
- Agrupación: `<div>`, `<figure>`, `<figcaption>`

---

## Recomendaciones generales

- Siempre usa `alt` en imágenes para accesibilidad y SEO.
- `title` en imágenes y enlaces es opcional; solo añade info adicional (se muestra al pasar el cursor).
- `hidden` es booleano: si está presente el elemento se oculta (útil para esconder visualmente contenido pero mantenerlo en el DOM).
- Prefiere etiquetas semánticas (`<button>`, `<main>`, `<nav>`, etc.) en lugar de `div` genéricos con roles, salvo cuando no haya alternativa.
- Valida tanto en cliente como en servidor; no confíes únicamente en validaciones HTML.

---

## Head — meta etiquetas importantes

Ejemplo mínimo recomendado:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi sitio web</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="canonical" href="https://www.ejemplo.com/" />
  <meta
    name="description"
    content="Descripción breve y útil para buscadores."
  />
  <meta name="robots" content="index, follow" />
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
```

Meta `robots` — opciones comunes:

| Meta tag                                           | Significado                             |
| -------------------------------------------------- | --------------------------------------- |
| `<meta name="robots" content="index, follow">`     | Indexar la página y seguir los enlaces. |
| `<meta name="robots" content="noindex, follow">`   | No indexar, pero sí seguir enlaces.     |
| `<meta name="robots" content="index, nofollow">`   | Indexar, pero no seguir enlaces.        |
| `<meta name="robots" content="noindex, nofollow">` | No indexar ni seguir enlaces.           |

Otras meta útiles:

- `<meta name="theme-color" content="#4285f4">` — color en la barra de herramientas en móviles.
- `<meta name="author" content="Nombre del autor">`
- `<meta name="keywords" content="palabra1, palabra2">` — hoy en día menos usada, pero puede servir en casos puntuales.

---

## Open Graph y Twitter Cards

Mejoran la apariencia al compartir enlaces en redes sociales.

Open Graph (OG) básico:

```html
<meta property="og:title" content="Título de la página" />
<meta property="og:description" content="Descripción atractiva" />
<meta property="og:image" content="https://www.ejemplo.com/imagen.jpg" />
<meta property="og:url" content="https://www.ejemplo.com/pagina" />
<meta property="og:type" content="website" />
```

Twitter Cards:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Título" />
<meta name="twitter:description" content="Descripción" />
<meta name="twitter:image" content="https://www.ejemplo.com/imagen.jpg" />
```

---

## HTML semántico

- `<span>`: para agrupar texto en línea sin romper flujo.
- `<div>`: para agrupar bloques. Úsalo cuando no exista una etiqueta semántica adecuada.
- `<small>`: información secundaria (ej. copyright).
- `<aside>`: contenido relacionado pero no esencial (barras laterales, enlaces relacionados).
- `<main>`: solo una por página; contiene el contenido principal.
- `<figure>` + `<figcaption>`: para imágenes o ilustraciones con su leyenda.
- `<a>` debe tener `href` válido para ser accesible. Usa `rel="noopener noreferrer"` cuando abras enlaces en una nueva pestaña (`target="_blank"`) para seguridad.
- Evita usar `div role="button"` si puedes usar `<button>`, que ya aporta accesibilidad y comportamiento esperable.
- Consulta roles ARIA en MDN: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

Nota sobre `download`: funciona para forzar descarga en enlaces que apunten a recursos del mismo dominio por razones de seguridad.

---

## Formularios

Buenas prácticas:

- Cada `<input>` debe tener su `<label>` asociado (usa `for="id"` o envuelve el input con el label).
- Botón de envío: `<button type="submit">Enviar</button>` (recomendado por flexibilidad).
- Usa `pattern` para validación simple de cliente, pero siempre valida en servidor también.

Ejemplo con datalist:

```html
<form>
  <label for="navegador">Navegador:</label>
  <input list="navegadores" id="navegador" name="navegador" />
  <datalist id="navegadores">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Safari"></option>
    <option value="Edge"></option>
  </datalist>

  <button type="submit">Enviar</button>
</form>
```

Ejemplo de `details`:

```html
<details>
  <summary>Más información</summary>
  <p>Contenido adicional que se muestra al desplegar.</p>
</details>
```

---

## Imágenes

- `alt` es obligatorio para imágenes informativas.
- `loading="lazy"` mejora rendimiento al cargar diferido.
- Usa `srcset` y `sizes` para servir imágenes adaptadas al dispositivo.
- Mantén la relación de aspecto con CSS (`aspect-ratio`) o con atributos de width/height para evitar reflows.

Ejemplo básico:

```html
<img
  src="imagen-pequena.jpg"
  srcset="
    imagen-pequena.jpg  480w,
    imagen-mediana.jpg 1024w,
    imagen-grande.jpg  1920w
  "
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 1024px, 1920px"
  alt="Descripción clara de la imagen"
  loading="lazy"
  style="width:100%; aspect-ratio:16/9;"
/>
```

---

## Recursos y etiquetas especiales

- `iframe`: usar con precaución (accesibilidad y performance). Considera `embed` o `object` según el caso.
- `<dialog>`: etiqueta nativa para diálogos (modal o no). Requiere control por JS para abrir/cerrar si no usas `open`.
  ```html
  <dialog id="miDialogo">
    <p>Este es un diálogo.</p>
    <button id="cerrar">Cerrar</button>
  </dialog>
  ```
