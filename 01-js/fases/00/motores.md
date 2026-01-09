# JavaScript Engines (motores de JavaScript)

## Qué es un motor de JavaScript?

Un motor de JavaScript es el programa que ejecuta tu código JS.

👉 JavaScript no se ejecuta solo.
👉 Necesita un motor que:

- Lea el código
- Lo entienda
- Lo convierta a instrucciones de la máquina
- Lo ejecute

## 📌 JS no es interpretado puro, ni compilado puro:

Es Just-In-Time (JIT).

## De donde vienen los motores de JavaScript?

| Entorno       | Motor          |
| ------------- | -------------- |
| Chrome / Edge | V8             |
| Firefox       | SpiderMonkey   |
| Safari        | JavaScriptCore |
| Node.js       | V8             |
| Deno          | V8             |

### 📌 Cuando programas en:

- React → corre en V8 (navegador)
- Node.js → corre en V8 (servidor)

➡️ Mismo motor, distinto entorno
➡️ Diferente API disponible

### 🔹 Arquitectura general de un motor JS

Todos siguen este flujo:

```js
Código JS
   ↓
Parser
   ↓
AST (Abstract Syntax Tree)
   ↓
Bytecode
   ↓
JIT Compiler
   ↓
Machine Code
```

#### 1. Parser – “Entender el código”

El parser:

- Lee tu código como texto
- Verifica sintaxis
- Construye un AST

Ejemplo:

```js
let x = 5
```

El motor lo transforma internamete a algo asi:

```yaml
VariableDeclaration
 ├─ Identifier: x
 └─ BinaryExpression (+)
     ├─ Literal: 5
     └─ Literal: 3
```

Si hay error de sintaxis → el motor ni siquiera ejecuta.

#### 2. AST (Abstract Syntax Tree)

Es un árbol estructurado del código.

¿Por qué es importante?

Herramientas como:

- Babel
- ESLint
- Prettier
- TypeScript
- trabajan sobre el AST

📌 Cuando usas TS, NO ejecuta JS, solo analiza el AST.
