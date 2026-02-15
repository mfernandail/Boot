# Comandos en terminal y consola Mac

## 📋 Comandos Más Utilizados

| Comando                               | Descripción                                            | Ejemplo                             |
| ------------------------------------- | ------------------------------------------------------ | ----------------------------------- |
| `pwd`                                 | Muestra el directorio actual (print working directory) | `pwd`                               |
| `ls`                                  | Lista archivos y carpetas en el directorio actual      | `ls`                                |
| `ls -la`                              | Lista archivos incluyendo ocultos y con detalles       | `ls -la`                            |
| `ls -lh`                              | Lista archivos con detalles en un formato legible      | `ls -lh`                            |
| `cd [carpeta]`                        | Cambia al directorio especificado (change directory)   | `cd Documents`                      |
| `cd ..`                               | Sube un nivel en el árbol de directorios               | `cd ..`                             |
| `cd ~`                                | Va al directorio home del usuario                      | `cd ~`                              |
| `mkdir [nombre]`                      | Crea una nueva carpeta (make directory)                | `mkdir mi-proyecto`                 |
| `mkdir -p [ruta]`                     | Crea carpetas anidadas                                 | `mkdir -p proyecto/src/components`  |
| `touch [archivo]`                     | Crea un nuevo archivo vacío                            | `touch index.html`                  |
| `rm [archivo]`                        | Elimina un archivo (remove)                            | `rm archivo.txt`                    |
| `rm -r [carpeta]`                     | Elimina una carpeta y su contenido recursivamente      | `rm -r carpeta`                     |
| `rm -rf [carpeta]`                    | Elimina forzadamente una carpeta y su contenido        | `rm -rf node_modules`               |
| `cp [origen] [destino]`               | Copia un archivo                                       | `cp file.txt backup.txt`            |
| `cp -r [origen] [destino]`            | Copia una carpeta y su contenido                       | `cp -r src backup`                  |
| `mv [origen] [destino]`               | Mueve o renombra un archivo/carpeta                    | `mv old.txt new.txt`                |
| `cat [archivo]`                       | Muestra el contenido de un archivo                     | `cat README.md`                     |
| `head [archivo]`                      | Muestra las primeras 10 líneas de un archivo           | `head script.js`                    |
| `tail [archivo]`                      | Muestra las últimas 10 líneas de un archivo            | `tail log.txt`                      |
| `less [archivo]`                      | Permite navegar por un archivo (q para salir)          | `less README.md`                    |
| `grep [texto] [archivo]`              | Busca texto dentro de un archivo                       | `grep "function" app.js`            |
| `find [ruta] -name [patrón]`          | Busca archivos por nombre                              | `find . -name "*.js"`               |
| `which [comando]`                     | Muestra la ruta del comando                            | `which node`                        |
| `echo [texto]`                        | Imprime texto en la consola                            | `echo "Hola"`                       |
| `clear`                               | Limpia la consola                                      | `clear`                             |
| `history`                             | Muestra el historial de comandos                       | `history`                           |
| `!!`                                  | Repite el último comando ejecutado                     | `!!`                                |
| `sudo [comando]`                      | Ejecuta un comando como administrador                  | `sudo npm install -g`               |
| `open .`                              | Abre el directorio actual en Finder (Mac)              | `open .`                            |
| `open [archivo]`                      | Abre un archivo con la aplicación por defecto          | `open index.html`                   |
| `chmod [permisos] [archivo]`          | Cambia los permisos de un archivo                      | `chmod +x script.sh`                |
| `chown [usuario] [archivo]`           | Cambia el propietario de un archivo                    | `chown user file.txt`               |
| `df -h`                               | Muestra el espacio en disco disponible                 | `df -h`                             |
| `du -sh [carpeta]`                    | Muestra el tamaño de una carpeta                       | `du -sh node_modules`               |
| `ps aux`                              | Lista los procesos en ejecución                        | `ps aux`                            |
| `kill [PID]`                          | Termina un proceso por su ID                           | `kill 1234`                         |
| `killall [nombre]`                    | Termina todos los procesos con ese nombre              | `killall node`                      |
| `top`                                 | Monitor de procesos en tiempo real                     | `top`                               |
| `curl [URL]`                          | Descarga o consulta una URL                            | `curl https://api.example.com`      |
| `wget [URL]`                          | Descarga archivos de internet                          | `wget https://example.com/file.zip` |
| `zip -r [archivo.zip] [carpeta]`      | Comprime una carpeta en ZIP                            | `zip -r backup.zip src/`            |
| `unzip [archivo.zip]`                 | Descomprime un archivo ZIP                             | `unzip backup.zip`                  |
| `tar -czf [archivo.tar.gz] [carpeta]` | Comprime en TAR.GZ                                     | `tar -czf backup.tar.gz src/`       |
| `tar -xzf [archivo.tar.gz]`           | Descomprime un TAR.GZ                                  | `tar -xzf backup.tar.gz`            |
| `pbcopy`                              | Copia al portapapeles (Mac)                            | `cat file.txt \| pbcopy`            |
| `pbpaste`                             | Pega desde el portapapeles (Mac)                       | `pbpaste > file.txt`                |

## 🔧 Comandos de Desarrollo

| Comando                     | Descripción                                        | Ejemplo                                      |
| --------------------------- | -------------------------------------------------- | -------------------------------------------- |
| `node [archivo]`            | Ejecuta un archivo JavaScript con Node.js          | `node app.js`                                |
| `npm init`                  | Inicializa un proyecto Node.js                     | `npm init -y`                                |
| `npm install [paquete]`     | Instala un paquete npm                             | `npm install react`                          |
| `npm install`               | Instala todas las dependencias del package.json    | `npm install`                                |
| `npm start`                 | Ejecuta el script "start" definido en package.json | `npm start`                                  |
| `npm run [script]`          | Ejecuta un script definido en package.json         | `npm run build`                              |
| `git init`                  | Inicializa un repositorio Git                      | `git init`                                   |
| `git clone [URL]`           | Clona un repositorio                               | `git clone https://github.com/user/repo.git` |
| `git status`                | Muestra el estado del repositorio                  | `git status`                                 |
| `git add .`                 | Añade todos los cambios al staging area            | `git add .`                                  |
| `git commit -m "[mensaje]"` | Crea un commit con un mensaje                      | `git commit -m "Initial commit"`             |
| `git push`                  | Sube los cambios al repositorio remoto             | `git push origin main`                       |
| `git pull`                  | Descarga cambios del repositorio remoto            | `git pull`                                   |
| `git branch`                | Lista las ramas locales                            | `git branch`                                 |
| `git checkout [rama]`       | Cambia a una rama                                  | `git checkout develop`                       |
| `git log`                   | Muestra el historial de commits                    | `git log --oneline`                          |
| `code .`                    | Abre el directorio actual en VS Code               | `code .`                                     |

## ⌨️ Atajos de Teclado en Terminal

| Atajo      | Descripción                            |
| ---------- | -------------------------------------- |
| `Ctrl + C` | Cancela el comando actual              |
| `Ctrl + D` | Cierra la terminal (EOF)               |
| `Ctrl + L` | Limpia la pantalla (igual que `clear`) |
| `Ctrl + A` | Mueve el cursor al inicio de la línea  |
| `Ctrl + E` | Mueve el cursor al final de la línea   |
| `Ctrl + U` | Borra desde el cursor hasta el inicio  |
| `Ctrl + K` | Borra desde el cursor hasta el final   |
| `Ctrl + W` | Borra la palabra anterior              |
| `Ctrl + R` | Busca en el historial de comandos      |
| `Tab`      | Autocompletado de archivos/comandos    |
| `↑` / `↓`  | Navega por el historial de comandos    |

## 💡 Operadores Útiles

| Operador | Descripción                                                 | Ejemplo                           |
| -------- | ----------------------------------------------------------- | --------------------------------- |
| `>`      | Redirige la salida a un archivo (sobrescribe)               | `echo "texto" > archivo.txt`      |
| `>>`     | Redirige la salida a un archivo (añade)                     | `echo "más texto" >> archivo.txt` |
| `\|`     | Pasa la salida de un comando a otro (pipe)                  | `ls \| grep ".js"`                |
| `&&`     | Ejecuta el siguiente comando solo si el anterior tuvo éxito | `npm install && npm start`        |
| `\|\|`   | Ejecuta el siguiente comando solo si el anterior falló      | `git pull \|\| echo "Error"`      |
| `&`      | Ejecuta el comando en segundo plano                         | `node server.js &`                |
| `;`      | Ejecuta comandos secuencialmente                            | `cd src; ls`                      |

## 📚 Variables de Entorno

| Comando            | Descripción                          | Ejemplo                      |
| ------------------ | ------------------------------------ | ---------------------------- |
| `export VAR=valor` | Define una variable de entorno       | `export NODE_ENV=production` |
| `echo $VAR`        | Muestra el valor de una variable     | `echo $PATH`                 |
| `env`              | Lista todas las variables de entorno | `env`                        |
| `printenv`         | Lista todas las variables de entorno | `printenv`                   |
| `source [archivo]` | Ejecuta comandos desde un archivo    | `source ~/.zshrc`            |
