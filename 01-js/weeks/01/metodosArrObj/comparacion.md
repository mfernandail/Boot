| Método            | Rendimiento (general)     | Costo por iteración                | Se puede “romper” (break) | Crea nuevo array | Mutación                   | Nivel de legibilidad | Caso típico comparable a `reduce()`                                   |
| ----------------- | ------------------------- | ---------------------------------- | ------------------------- | ---------------- | -------------------------- | -------------------- | --------------------------------------------------------------------- |
| **for (clásico)** | ⭐⭐⭐⭐⭐ **Más rápido** | Muy bajo                           | ✔ Sí                      | ❌ No            | ✔ Puedes mutar             | Alta                 | Cualquier reducción / operación                                       |
| **for…of**        | ⭐⭐⭐⭐                  | Bajo                               | ✔ Sí                      | ❌ No            | ✔                          | Muy alta             | Transformaciones secuenciales                                         |
| **reduce()**      | ⭐⭐⭐                    | Medio (callback en cada iteración) | ❌ No                     | ❌ No            | ✔ Acumulador suele mutarse | Media                | Agrupar, transformar, sumar                                           |
| **forEach()**     | ⭐⭐                      | Medio                              | ❌ No                     | ❌ No            | ✔                          | Alta                 | Cuando solo recorres, pero no reduces                                 |
| **map()**         | ⭐⭐                      | Medio                              | ❌ No                     | ✔ Sí             | ❌ No (debería no mutarse) | Alta                 | Cuando quieres un array transformado (reduce puede hacer eso también) |
| **filter()**      | ⭐⭐                      | Medio                              | ❌ No                     | ✔ Sí             | ❌ No                      | Alta                 | Cuando reduces a un subconjunto                                       |
| **flat()**        | ⭐⭐                      | Medio-Alto                         | ❌ No                     | ✔ Sí             | ❌ No                      | Alta                 | Aplanar arrays (reduce también puede)                                 |
| **flatMap()**     | ⭐⭐                      | Medio-Alto                         | ❌ No                     | ✔ Sí             | ❌ No                      | Alta                 | Map + flat → reduce también puede                                     |
| **some()**        | ⭐⭐⭐⭐                  | Bajo                               | ✔ Sí                      | ❌ No            | ❌ No                      | Alta                 | Búsqueda condicional                                                  |
| **every()**       | ⭐⭐⭐⭐                  | Bajo                               | ✔ Sí                      | ❌ No            | ❌ No                      | Alta                 | Validaciones                                                          |

Interpretación del rendimiento

1. Más rápido → for
   **¿Por qué?**

- No necesita llamar una función por cada elemento.
- No crea closures.
- El motor de JS puede optimizarlo mucho.
- No crea estructuras intermedias.
- Para operaciones muy grandes (100.000+ elementos), for es significativamente más rápido.

2. Reduce, map, filter tienen costo extra
   **Porque por cada elemento:**

- Se hace una llamada a callback
- Se crea un scope
- Se manejan valores de retorno
- En map/filter se debe crear un nuevo array
- Esto los hace un poco más lentos que un for.

3. forEach() es como reduce pero sin retorno

- Misma cantidad de callbacks
- No puede romperse
- No devuelve nada

4. some() y every() pueden romper el loop

- Esto los hace más rápidos cuando encuentran la condición temprano.

🔍 Ejemplo de rendimiento relativo
| Método | Tiempo relativo | Observaciones |
| --------- | --------------- | ----------------------------- |
| `for` | 1x (baseline) | Más rápido |
| `for…of` | ~1.1x | Muy cercano |
| `reduce` | ~1.3x – 1.5x | Callback overhead |
| `forEach` | ~1.4x | Similar a reduce |
| `map` | ~1.5x – 1.7x | Crea nuevo array |
| `filter` | ~1.6x – 1.8x | También crea array |
| `flatMap` | ~2x | Hace dos operaciones internas |
| `some` / `every` | ~1.1x – 1.3x | Puede ser más rápido si rompe temprano |

🔥 Conclusiones importantes

- ✔ Reduce es eficiente y suficientemente rápido para 99% de los casos.
  - La diferencia con un for es pequeña a menos que proceses cientos de miles de elementos.
- ✔ Reduce NO es el método más rápido para transformar arrays.
- ✔ Reduce es útil cuando:
  - Quieres expresar transformación declarativa
  - Quieres reducir a un solo valor
  - Quieres evitar variables externas

❌ Reduce NO es ideal cuando:

- Necesitas romper el loop
- La lógica es muy larga
- El rendimiento es crítico en arrays gigantes

## Regla de oro (version simple)

✔ Usa reduce cuando el resultado final sea una sola cosa:

- un número
- un objeto
- un array
- un mapa
- un valor combinado

❌ No uses reduce cuando:

- El objetivo sea recorrer, transformar 1→1, filtrar, o buscar.
