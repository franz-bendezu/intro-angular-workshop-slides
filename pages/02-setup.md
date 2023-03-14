---
transición: fade-out
---

# Node.js y NPM

- Node.js es un entorno de tiempo de ejecución de JavaScript que permite a los desarrolladores ejecutar código JavaScript fuera de un navegador web.
- NPM (Node Package Manager) es un administrador de paquetes para paquetes/módulos de Node.js, que se puede instalar y usar en sus aplicaciones de JavaScript.

  <a href="https://nodejs.org/es/download/">
  Descargar Node (incluye NPM)
  </a>

- Visual Studio Code es un editor de código fuente ligero pero potente que se ejecuta en su escritorio y está disponible para Windows, macOS y Linux.

  <a href="https://code.visualstudio.com/">
  Descargar VS Code
  </a>

- Angular Language Service, esta extensión proporciona una rica experiencia de edición para plantillas Angular, tanto plantillas en línea como externas.

  <a href="https://marketplace.visualstudio.com/items?itemName=Angular.ng-template">
  Instalar Angular Language Service
  </a>

---

# Instalación de CLI angular

- Para instalar el CLI de Angular, primero debes asegurarte de tener Node.js y NPM instalados en tu sistema. Luego, puedes abrir una terminal o línea de comando y escribir el siguiente comando:

  ```bash
  npm install -g @angular/cli

  ```

  <br/>

  > Debe ser ejecutado como admnistrador

- El indicador `-g` instala Angular CLI globalmente en su computadora, , lo que te permitirá utilizarlo para crear, desarrollar y desplegar aplicaciones Angular.

---

# Creando un nuevo proyecto Angular

- Para crear un nuevo proyecto Angular, debe abrir su símbolo del sistema/terminal y ejecutar el siguiente comando:

  ```bash
  ng new nombre-proyecto
  ```

- Esto creará un nuevo proyecto Angular llamado `nombre-proyecto` en un nuevo directorio con el mismo nombre.

- El comando `ng new` le pedirá que seleccione varias opciones, como el formato de la hoja de estilo (CSS, SCSS, etc.), si usar o no el enrutamiento, y si agregar la configuración de prueba predeterminada de Angular. También instalará todas las dependencias necesarias para que la aplicación funcione.

---

# Common comands

```bash
# creates a new Angular project
ng new [project-name]
# starts the development server and serves the project
ng serve
# generates a new component
ng generate component [component-name]
# generates a new service
ng generate service [service-name]
# generates a new module
ng generate module [module-name]
# generates a new directive
ng generate directive [directive-name]
# builds the project for production
ng build
# runs unit tests
ng test
# runs end-to-end tests
ng e2e

```
