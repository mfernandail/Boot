# ¿Que es?

- LLM (Large Language Model) es un modelo de lenguaje a gran escala entrenado con una gran cantidad de texto para generar respuestas coherentes y contextuales.
- Se basa en la arquitectura Transformer, que permite procesar secuencias de texto de manera eficiente y generar texto de alta calidad.
- Redes neuronales profundas con millones o incluso miles de millones de parámetros, lo que les permite aprender patrones complejos en el lenguaje.

## Fases de un LLM

1. **Pre-entrenamiento**: El modelo se entrena con grandes cantidades de texto para aprender el lenguaje y sus patrones. Qui se utilizan las GPU para acelerar el proceso de entrenamiento, ya que el modelo tiene millones o miles de millones de parámetros que necesitan ser ajustados. Durante esta fase, el modelo aprende a predecir la siguiente palabra en una secuencia de texto, lo que le permite entender la estructura y el contexto del lenguaje.
2. **Fine-tuning**: El modelo se ajusta con datos específicos para tareas particulares, como traducción, resumen o generación de texto. Mejora la estructura y el contexto del lenguaje, lo que le permite generar respuestas más precisas y relevantes para tareas específicas.
3. **Inferencia**: El modelo se utiliza para generar texto o responder preguntas basándose en lo que ha aprendido durante el entrenamiento.

## Parametros

- Los parámetros son los valores que el modelo ajusta durante el entrenamiento para aprender a generar texto. Cuantos más parámetros tenga un modelo, más complejo y capaz de entender el lenguaje puede ser. Sin embargo, también requiere más recursos computacionales para entrenar y utilizar el modelo.
- Cuanto mas parámetros tenga un modelo, mejor será su capacidad para entender y generar texto, pero también requerirá más recursos computacionales para entrenar y utilizar el modelo. Por ejemplo, GPT-3 tiene 175 mil millones de parámetros, lo que le permite generar texto de alta calidad y comprender contextos complejos.
- Los mas pequeños son mas rapidos y requieren menos recursos, pero pueden no ser tan precisos o capaces de entender contextos complejos. Los mas grandes son mas lentos y requieren mas recursos, pero pueden generar texto de alta calidad y comprender contextos complejos.
- Cuando en un modelo indica 20B, se refiere a que tiene 20 mil millones de parámetros. Esto significa que el modelo tiene una gran capacidad para entender y generar texto, pero también requerirá más recursos computacionales para entrenar y utilizar el modelo. Un modelo con 20B parámetros puede generar respuestas de alta calidad y comprender contextos complejos, pero también puede ser más lento y requerir más recursos para generar respuestas en comparación con modelos más pequeños. En palabras simples, es como si el LLM tuviera unos diales que se pueden ajustar para controlar cómo responde a las preguntas o solicitudes que se le hacen. Cada uno de esos diales son los parámetros del modelo. El system prompt es como configurar esos diales para guiar el comportamiento del modelo, mientras que el prompt message es la entrada específica que se le da al modelo para generar una respuesta.

## Tokens

- Un token es una unidad de texto que el modelo utiliza para procesar y generar respuestas. Puede ser una palabra, un fragmento de palabra o incluso un carácter, dependiendo del modelo y su tokenización. Por ejemplo, la frase "Hola, ¿cómo estás?" podría tokenizarse en los siguientes tokens: ["Hola", ",", "¿", "cómo", "estás", "?"]
- Lo que la IA cobra no son las palabras, sino los tokens.
- Cada modelo calcula el numero de tokens de manera diferente.
-

## El context windows

- El context window se refiere a la cantidad de texto que un modelo de lenguaje puede procesar y entender a la vez. Es el número máximo de tokens (palabras o fragmentos de palabras) que el modelo puede considerar al generar una respuesta.
- Un context window más grande permite al modelo entender mejor el contexto y generar respuestas más coherentes, pero también requiere más recursos computacionales. Por ejemplo, GPT-3 tiene un context window de 2048 tokens, lo que le permite procesar y entender textos largos, pero también puede hacer que el modelo sea más lento y requiera más recursos para generar respuestas.

## El system prompt

- El system prompt es una instrucción o conjunto de instrucciones que se le da a un modelo de lenguaje para guiar su comportamiento y generar respuestas específicas. Es una forma de controlar cómo el modelo responde a las preguntas o solicitudes que se le hacen.
- El system prompt puede incluir información sobre el tono, el estilo, el formato o el contenido de las respuestas que se esperan del modelo. Por ejemplo, un system prompt podría ser: "Responde a esta pregunta de manera concisa y profesional" o "Genera un resumen de este texto en formato de lista". El system prompt ayuda a dirigir la generación de texto del modelo y a obtener respuestas más relevantes y útiles para el usuario.
- Es como configurar el modelo.

## Promp message

- El prompt message es el mensaje o la pregunta que se le da a un modelo de lenguaje para generar una respuesta. Es la entrada que el modelo utiliza para comprender lo que se le está pidiendo y generar una respuesta adecuada.
- El prompt message puede ser una pregunta, una solicitud de información, una instrucción o cualquier otro tipo de texto que el modelo pueda interpretar. Por ejemplo, un prompt message podría ser: "¿Cuál es la capital de Francia?" o "Escribe un poema sobre la naturaleza". El prompt message es la base para que el modelo genere una respuesta relevante y coherente basada en su entrenamiento y el system prompt configurado.

## Los creditos

- Mientras los modelos se pagan por token, los agentes se pagan por tarea. Esto significa que el costo de usar un agente de IA puede variar dependiendo de la complejidad y el tiempo que tome completar la tarea asignada al agente. Por ejemplo, si un agente de IA está diseñado para realizar una tarea simple que requiere pocos recursos computacionales, el costo puede ser relativamente bajo. Sin embargo, si el agente está diseñado para realizar una tarea más compleja que requiere más recursos computacionales, el costo puede ser significativamente mayor. Es importante tener en cuenta estos costos al utilizar agentes de IA para asegurarse de que se ajusten a su presupuesto y necesidades.

## Agentes de IA

- Es un LLM que se le asigna herammientas y un bucle de ejecucion, que hasta que no termina la tarea no se detiene. Va a decidir que herramientas usar, como usarlas y cuando usarlas, para completar la tarea asignada.
- Herramientas -> Bucle -> Autonomo
- Decide, observa y repite hasta completar la tarea asignada.
- Un LLM es reactivo, responde a lo que se le pregunta. Un agente de IA es autonomo, toma decisiones por su cuenta para completar una tarea asignada.
