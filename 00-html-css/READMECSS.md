# CSS (Cascading Style Sheets)

## Varialbles CSS ( Custom Properties )

Las variables CSS son una forma de almacenar valores que pueden ser reutilizados en múltiples lugares dentro de una hoja de estilos. Se definen utilizando la sintaxis `--nombre-variable: valor;` y se acceden mediante la función `var(--nombre-variable)`. Las variables tienen que estar definidas dentro de un selector, comúnmente se usan `:root` para definir variables globales.

### Ejemplo de uso de variables CSS

```css
:root {
  --color-primario: #3498db;
  --color-secundario: #2ecc71;
  --padding-general: 16px;
}
body {
  background-color: var(--color-primario);
  color: white;
  padding: var(--padding-general);
}
h1 {
  color: var(--color-secundario);
}
```

## Unidades de medida en css

Las unidades de medida en CSS son esenciales para definir tamaños, distancias y otros aspectos visuales de los elementos en una página web. Algunas de las unidades más comunes incluyen:

- **px (píxeles)**: Unidad absoluta que representa un punto en la pantalla. Es fija y no cambia con el tamaño de la pantalla.
- **em**: Unidad relativa que se basa en el tamaño de la fuente del elemento padre. Por ejemplo, si el tamaño de la fuente del padre es 16px, entonces 1em será igual a 16px.
- **rem (root em)**: Similar a em, pero se basa en el tamaño de la fuente del elemento raíz (generalmente el `<html>`). Esto permite una mayor consistencia en el diseño, ya que todas las medidas relativas a rem se basan en un solo valor.
- **% (porcentaje)**: Unidad relativa que se basa en el tamaño del elemento contenedor. Por ejemplo, un ancho del 50% hará que el elemento ocupe la mitad del ancho de su contenedor padre.
- **vw (viewport width)**: Unidad relativa que representa un porcentaje del ancho de la ventana gráfica (viewport). 1vw es igual al 1% del ancho de la ventana.
- **vh (viewport height)**: Similar a vw, pero representa un porcentaje de la altura de la ventana gráfica. 1vh es igual al 1% de la altura de la ventana.
  Estas unidades permiten a los desarrolladores web crear diseños flexibles y adaptativos que pueden ajustarse a diferentes tamaños de pantalla y resoluciones.

## Media Queries

### Ejemplo de Media Queries

```css
/* Estilos para pantallas con un ancho máximo de 600px */
@media (max-width: 600px) {
  body {
    font-size: 14px;
    background-color: lightgray;
  }
}
```

## Las pseudoclases en CSS

Las pseudoclases en CSS mas importantes son:

- `:hover`: Aplica estilos cuando el usuario pasa el cursor sobre un elemento.
- `:focus`: Aplica estilos cuando un elemento recibe el foco, como al hacer clic en un campo de formulario.
- `:active`: Aplica estilos cuando un elemento está siendo activado, como al hacer clic en un botón.
- `:nth-child(n)`: Selecciona el enésimo hijo de un elemento padre, donde n puede ser un número, una palabra clave o una fórmula.
- `:first-child`: Selecciona el primer hijo de un elemento padre.
- `:last-child`: Selecciona el último hijo de un elemento padre.
- `:not(selector)`: Selecciona todos los elementos que no coinciden con el selector especificado.
- `:visited`: Aplica estilos a los enlaces que han sido visitados por el usuario.
- `:checked`: Aplica estilos a los elementos de formulario que están seleccionados o marcados, como casillas de verificación o botones de opción.
- `:disabled`: Aplica estilos a los elementos de formulario que están deshabilitados y no pueden ser interactuados por el usuario.
- `:enabled`: Aplica estilos a los elementos de formulario que están habilitados y pueden ser interactuados por el usuario.
- `:before` y `:after`: Permiten insertar contenido antes o después del contenido de un elemento, respectivamente.

## Selectores en CSS

- Selector de hijo directo (`>`): Selecciona elementos que son hijos directos de un elemento padre específico.
- Ejemplo: `ul > li` selecciona todos los elementos li que son hijos directos de un ul.
- Selector de atributo (`[atributo="valor"]`): Selecciona elementos que tienen un atributo específico con un valor determinado.
- Ejemplo: `input[type="text"]` selecciona todos los elementos input que tienen el atributo type con el valor "text".

## Clases anidadas en CSS

Las clases anidadas en CSS permiten aplicar estilos a elementos que están dentro de otros elementos con clases específicas. Esto es útil para mantener una estructura clara y organizada en el código CSS, especialmente cuando se trabaja con componentes complejos.

```css
.header {
  background-color: #f8f8f8;
  padding: 20px;

  .nav {
    display: flex;
    justify-content: space-around;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: #007bff;
      }
    }
  }
}
```
