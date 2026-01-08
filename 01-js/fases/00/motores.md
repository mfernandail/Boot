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
