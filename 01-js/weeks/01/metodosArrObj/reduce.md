# Array methods: reduce

## Ventajas de reduce()

1. Muy flexible y poderoso
   Puedes resolver transformaciones complejas en una sola expresión.

2. Elimina variables globales
   Todo vive dentro del acumulador.

3. Funciona bien para pipelines funcionales
   Especialmente cuando se combinan operaciones (map + filter + group).

4. Permite crear estructuras complejas
   Ideal para:

   - Agrupar datos
   - Transformar listas en objetos
   - Hacer sumatorias
   - Contar ocurrencias
   - Aplanar arrays
   - Crear índices

5. Perfecto para lógica declarativa
   El qué hacer > cómo recorrer.

## Desventajas de reduce()

1. Puede ser difícil de leer
   Especialmente para quienes no están acostumbrados.

Ejemplo típico confuso:

```js
arr.reduce((a, b) => a + b)
```

2. Es peor para early exit
   No puedes “romper” un reduce fácilmente como break en un for.

## Performance (rendimiento)

- Las operaciones funcionales como reduce(), map(), filter(), etc.:
- Son rápidas y eficientes, comparables a un for.
- Pero ligeramente más lentas que un for tradicional simple, porque:
  - llaman a una función en cada iteración
  - crean un nuevo scope para cada llamada
  - no pueden ser optimizados tan agresivamente como un loop simple
  -
- Sin embargo:
  - Para la mayoría de los casos la diferencia es insignificante.
  - Solo importa en arrays gigantes (100.000+ elementos).

## Resumen corto

- reduce() sirve para reducir/transfomar un array en cualquier valor.
- Es poderoso pero poco intuitivo al principio.
- Rendimiento: bueno, ligeramente peor que un for.
- Ideal para estructurar datos, agrupar, sumar, transformar.
- Evitar cuando la lógica es larga o cuando se necesita romper el loop.
- Mantener siempre un valor inicial y un acumulador claro.
