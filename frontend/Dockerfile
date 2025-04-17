# 1. Usar imagen de Node.js
FROM node:18
# 2. Crear el directorio de trabajo
WORKDIR /app
# 3. Copiar archivos del frontend
COPY package.json package-lock.json ./
# 4. Instalar dependencias
RUN npm install
COPY . ./
# 5. Exponer el puerto
EXPOSE 5173
# 6. Comando para ejecutar React
CMD ["npm", "run", "dev", "--", "--host"]