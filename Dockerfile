# Etapa 1: Construcción del Frontend
FROM node:20 AS build-frontend

WORKDIR /app
COPY ./FrontChat ./frontend
RUN cd frontend && npm install && npm run build --configuration=production

# Etapa 2: Configuración del Backend
FROM node:20 AS build-backend

WORKDIR /app
COPY ./BackChat/package*.json ./server/
COPY ./BackChat ./server
WORKDIR /app/server
RUN npm install

# Copiar el contenido del frontend (desde browser) al directorio público del backend
COPY --from=build-frontend /app/frontend/dist/front-chat/browser /app/server/public

# Exponer el puerto necesario
EXPOSE 3000

# Comando para iniciar el servidor Node.js
CMD ["node", "server/index.js"]
