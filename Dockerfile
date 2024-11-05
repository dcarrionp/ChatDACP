# Etapa 1: Construcción del Frontend
FROM node:14 AS build-frontend

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY ./FrontChat ./frontend

# Instala las dependencias de Angular
RUN cd frontend && npm install

# Compila la aplicación Angular
RUN cd frontend && npm run build --prod

# Etapa 2: Configuración del Servidor Node.js y WebSocket
FROM node:14 AS build-backend

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend al contenedor
COPY ./BackChat ./backend

# Instala las dependencias del servidor
RUN cd backend && npm install

# Copia el frontend compilado en la carpeta del backend (suponiendo que el backend sirve los archivos estáticos de Angular)
COPY --from=build-frontend /app/frontend/dist /app/backend/public

# Exponer puertos necesarios (ejemplo: 3000 para Node.js)
EXPOSE 3000

# Comando para iniciar el servidor Node.js y el servicio de WebSocket
CMD ["node", "backend/server.js"]
