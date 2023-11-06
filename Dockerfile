# Use an official Node.js runtime as a parent image
FROM node:14

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación a la imagen
COPY . .

# Expone el puerto en el que la aplicación escuchará (ajusta según tus necesidades)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
