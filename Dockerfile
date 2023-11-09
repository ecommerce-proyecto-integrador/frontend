# Usa una imagen de Node.js como base
FROM node:18.18.2-alpine3.17

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios para la construcción
COPY package*.json ./
COPY .next ./.next
COPY public ./public
COPY out ./out

# Instala las dependencias de producción
RUN npm install --production

# Expone el puerto 3000
EXPOSE 3001

# Inicia la aplicación Next.js
CMD ["npm", "run", "dev"]
