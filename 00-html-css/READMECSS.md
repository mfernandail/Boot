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
