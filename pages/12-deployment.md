# **Creación de una aplicación de Angular para producción**:

Para crear una aplicación Angular para producción, use el comando `ng build --prod` en la terminal. Esto creará una carpeta `dist` que contiene los archivos listos para producción.


# **Implementación de una aplicación Angular en un servidor web**:

Para implementar una aplicación Angular en un servidor web, copie los archivos de la carpeta `dist` al servidor. Puede usar FTP u otras herramientas de transferencia de archivos para cargar los archivos. Asegúrese de que el servidor esté configurado para servir archivos estáticos desde el directorio correcto. Como alternativa, puede utilizar un servicio de alojamiento como Firebase, Heroku o AWS para implementar su aplicación.

```bash
// Building an Angular app for production
ng build --prod

// Deploying an Angular app to a web server
// 1. Build the app using ng build --prod
// 2. Copy the content of the "dist" folder to the web server
```
