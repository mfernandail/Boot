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
