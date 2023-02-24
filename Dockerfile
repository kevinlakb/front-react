# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /usr/app

# Copia el código fuente
COPY . .

# Instalar las dependencias 
RUN npm ci
RUN chmod -x /usr/app/entrypoint.sh

ENTRYPOINT [ "/usr/app/entrypoint.sh" ]

# Contruir la aplicación
RUN npm run build

# Exponer el puerto 3000
EXPOSE 3000

# Compila el código TypeScript en tiempo real
CMD ["npm", "start"]