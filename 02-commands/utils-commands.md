# Comandos utiles

- ls -lh: l significa "long listing format" y h significa "human-readable".
- ls -la: l significa "long listing format" y a significa "all". Incluye los archivos ocultos (los que empiezan con .).
- ls -lhs la s significa es para ordenar.
- rm nombreArchivo: borra un archivo y carpeta.
- rm -rf nombreCarpeta: borra una carpeta y todo su contenido (archivos y subcarpetas) de forma recursiva sin pedir confirmación.
- rm -r nombreCarpeta: borra una carpeta y todo su contenido (archivos y subcarpetas) de forma recursiva.
- mv nombreArchivo nuevaUbicacion: mueve o renombra un archivo o carpeta. Si la nueva ubicación es un directorio,
- cp nombreArchivo nuevaUbicacion: copia un archivo o carpeta. Si la nueva ubicación es un directorio, el archivo se copia dentro de ese directorio.
- find . -name "nombreArchivo": busca un archivo o carpeta por su nombre en el directorio actual y sus subdirectorios.
- find . -type f -name "\*.js": busca todos los archivos con extensión .js
- cat nombreArchivo: muestra el contenido de un archivo en la terminal.
- cat nombreArchivo | more: muestra el contenido de un archivo página por página (útil para archivos largos).
- cat nombreArchivo | less: muestra el contenido de un archivo página por página con más opciones de navegación (útil para archivos muy largos).
- cat nombreArchivo | most: muestra el contenido de un archivo página por página con una interfaz más amigable (útil para archivos muy largos).
- bat nombreArchivo: muestra el contenido de un archivo con resaltado de sintaxis y paginación (útil para archivos de código).
- echo "texto" > nombreArchivo: crea un archivo con el texto especificado o sobrescribe su contenido si ya existe.
