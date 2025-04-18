# 1. Usar la imagen oficial de Node.js
FROM node:18
# 2. Crear y establecer el directorio de trabajo
WORKDIR /app
# 3. Copiar los archivos del backend
COPY package.json ./
COPY server.js ./
COPY specialty.json ./
# 4. Instalar dependencias
RUN npm install
# 5. Exponer el puerto
EXPOSE 5000
# 6. Comando para ejecutar el servidor
CMD ["node", "server.js"]