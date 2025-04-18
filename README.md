# M8-EP2
1. Integración de Docker en el Proyecto
- Se crea un backend con Node.js donde se cargan datos des de un json para servir como API
- Se crea un frontend con React donde se muestran los datos del backend
- Se crea un Dockerfile para construir el backend
- Se crea un Dockerfile para construir el frontend
- se crea un docker-compose para levantar ambos servicios
2. Implementación de Pruebas Automatizadas
- Se crea una prueba unitaria en el frontend con Jest
- La prueba se ejecuta con éxito
3. Configuración de CI/CD con GitHub Actions
- Se crea un workflow que instala las dependencias del frontend y del backend, ejecuta las pruebas unitarias y levanta ambos servicios con Docker Compose
- Se configura una acción de GitHub que ejecuta el workflow cada vez que se realiza un push en el repositorio
4. Gestión de Ramas en la Nube
- Se agrega una rama llamada "develop" a la existente "master"
- Se realizan cambios en front end en la rama "develop" y se pide un pull request a la rama "master". Se revisa el pull request y se acepta.