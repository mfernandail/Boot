# Para trabajar con IA en Visual Studio Code:

## Cuentas opciones para trabajar con IA en Visual Studio Code:

- Local:
  - La IA corre en tu propia computadora. Más privado; depende de la potencia de tu equipo.
  - Se usa cuando se quiere más privacidad, sin internet o el proyecto sea sensible. Ideal para tareas pequeñas/medianas si el PC es decente.
  - Para que funcione sin internet, necesitas descargar el modelo de IA y configurarlo en tu máquina. Esto puede requerir espacio de almacenamiento y recursos computacionales, dependiendo del tamaño del modelo.
- Background:
  - La IA corre “en segundo plano” mientras tú sigues trabajando. Es para tareas que tardan más.
  - Se usa cuando la tarea tarda (generar muchas pruebas, refactor grande, buscar patrones). Así no bloqueas tu trabajo.
- Cloud:
  - La IA corre en servidores en internet. Más rápida/poderosa, pero requiere conexión y envía datos al servidor.
  - Se usa cuando necesites más potencia, respuestas más rápidas o modelos más avanzados. Útil en proyectos grandes o para generar bastante texto/código.

## Los diferentes agentes de IA en Visual Studio Code:

- Ask:
  - Modo “pregunta y respuesta”. Le haces consultas y te explica o resuelve dudas puntuales.
  - Dudas rápidas, conceptos, pequeños fragmentos de código.
  - Ideal para aclarar dudas, entender conceptos o resolver problemas específicos sin necesidad de un plan o ejecución extensa.
- Plan:
  - Modo “organizar”. La IA te propone pasos o un plan antes de escribir código.
  - Investiga el proyecto y lo que se quiere lograr, y te propone un plan de acción.
  - Muchas veces conviene usar un modelo caro para crear el plan y otro más barato o mas rapido para ejecutar el plan. Así optimizas recursos.
  - Cuando quieres que la IA organice pasos antes de tocar el código.
  - Ideal para tareas complejas o proyectos grandes donde es útil tener un plan antes de escribir código.
- Agent:
  - Modo “hace tareas”. La IA ejecuta una tarea más grande por su cuenta (buscar archivos, cambiar cosas, crear contenido), con menos intervención tuya.
  - tareas más grandes o repetitivas (revisar muchos archivos, cambios amplios).
  - Edita comandos, archivos, genera contenido, levanta servidores, etc. Puede ser útil para tareas que requieren varios pasos o para automatizar procesos.

## Tips para usar IA en Visual Studio Code:

- Para tareas rápidas, usa el modo Ask. Para tareas complejas, considera Plan o Agent.
- Si la tarea es grande, usa un modelo más potente para el Plan y uno más rápido para el Agent.
- Siempre revisa lo que la IA genera, especialmente con modelos más baratos o rápidos, para asegurarte de que es correcto y relevante.
- Experimenta con diferentes modos y modelos para encontrar lo que mejor se adapte a tu proyecto y necesidades.
- En el chat se usa el # para mencionar los diferentes archivos o partes del proyecto, como #base, #apuntes, #vsc, etc. Esto ayuda a organizar la información y a referenciarla fácilmente.
- En vsc muestra el uso del contexto, en el que tiene que ver la converasación previa para generar respuestas más relevantes. Por ejemplo, si has estado hablando sobre un proyecto específico, la IA puede usar esa información para generar respuestas más precisas relacionadas con ese proyecto. Esto es especialmente útil en el modo Plan o Agent, donde la IA necesita entender el contexto del proyecto para generar un plan o ejecutar tareas de manera efectiva. Ademas de el contexto tambien es el archivo o lineas de codigo que se le indique, para generar respuestas mas relevantes. Por ejemplo, si le indicas un archivo específico, la IA puede analizar ese archivo y generar respuestas basadas en su contenido, lo que puede ser muy útil para tareas como refactorización o generación de pruebas.
