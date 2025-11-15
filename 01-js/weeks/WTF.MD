# 🎪 Los "WTF" de JavaScript Explicados

## 1. 🔢 typeof null === "object"

```js
typeof null // "object" ← ¿QUÉ?
typeof undefined // "undefined" ← Esto sí tiene sentido
```

### ¿Por qué?

BUG HISTÓRICO desde 1995 que nunca se corrigió por compatibilidad.
Historia:

- En la primera versión de JavaScript, los valores se representaban con etiquetas de tipo
- Los objetos tenían etiqueta 000
- null se representaba como puntero NULL (todo ceros: 0x00)
- El motor interpretaba esos ceros como "objeto"
- Brendan Eich (creador de JS) lo reconoció como error
- Hubo propuesta de corregirlo en ES6 pero rompería millones de sitios web

## 2. 🎭 [] + [] = "" y [] + {} = "[object Object]"

```js
[] + []        // "" (string vacío)
[] + {}        // "[object Object]"
{} + []        // 0
{} + {}        // NaN (o "[object Object][object Object]" según contexto)
({} + []) // "[object Object]"
({} + {})      // "[object Object][object Object]"

// [] + []
// 1. JavaScript intenta sumar
// 2. No puede, entonces convierte a primitivos
// 3. [].toString() = ""
// 4. "" + "" = ""

// [] + {}
// 1. [].toString() = ""
// 2. {}.toString() = "[object Object]"
// 3. "" + "[object Object]" = "[object Object]"

// {} + []
// 1. El {} se interpreta como BLOQUE DE CÓDIGO vacío, al estar al inicio de la línea, diferente seria si es que estuviera entre paréntesis: ({} + [])
// 2. Queda: +[]
// 3. +[] convierte a número
// 4. Number([]) = 0

```

### ¿Por qué?

- El operador + en JavaScript tiene dos funciones: suma numérica y concatenación de strings.
- Cuando se usa con arrays u objetos, JavaScript intenta convertirlos a strings.
- Un array vacío `[]` se convierte en una cadena vacía `""`.
- Un objeto vacío `{}` se convierte en la cadena `"[object Object]"`.
- Por lo tanto:
  - `[] + []` se convierte en `"" + ""`, que es `""`.
  - `[] + {}` se convierte en `"" + "[object Object]"`, que es `"[object Object]"`.
  - `{ } + []` se interpreta como un bloque de código vacío seguido de una expresión `+ []`, que se convierte en `0`.
  - Para evitar confusiones, es recomendable usar paréntesis para dejar claro el orden de las operaciones, por ejemplo: `([]) + ({})` o `({}) + ([])`.

## 3. 🔄 0.1 + 0.2 !== 0.3

```js
0.1 + 0.2 // 0.30000000000000004
0.1 + 0.2 === 0.3 // false

// Pero...
0.1 + 0.2 === 0.30000000000000004 // true
```

### ¿Por qué?

**NO es un bug de JavaScript**, es cómo funcionan los números en **todos** los lenguajes.

**Explicación técnica:**

- JavaScript usa formato IEEE 754 (punto flotante de 64 bits)
- Algunos decimales no se pueden representar exactamente en binario
- Como 1/3 = 0.333... en decimal, algunos números son infinitos en binario

**Analogía:**

```
Decimal: 1/3 = 0.333333... (infinito)
Binario: 0.1 = 0.0001100110011... (infinito)
```

## 4. 🧮 Math.max() < Math.min()

```js
Math.max() // -Infinity
Math.min() // Infinity

Math.max() < Math.min() // true ← ¿¡QUÉ!?
```

### ¿Por qué?

- `Math.max()` sin argumentos devuelve `-Infinity` porque no hay números para comparar, y cualquier número es mayor que `-Infinity`.
- `Math.min()` sin argumentos devuelve `Infinity` porque no hay números para comparar, y cualquier número es menor que `Infinity`.
- Por lo tanto, `Math.max()` (que es `-Infinity`) es efectivamente menor que `Math.min()` (que es `Infinity`), haciendo que la expresión `Math.max() < Math.min()` sea `true`.

## ✅ Reglas de Oro:

1. Siempre usa === nunca == (excepto == null para null/undefined)
2. Siempre usa let/const, nunca var
3. Array.isArray() para verificar arrays
4. Siempre especifica la base en parseInt()
5. No uses delete con arrays, usa splice o filter
6. Siempre usa comparador con sort() para números
7. Arrow functions para preservar this
8. Number.isNaN() en vez de isNaN()
9. Array.from() o spread en vez de Array(n)
10. Usa siempre paréntesis para evitar ambigüedades con objetos y arrays en expresiones
