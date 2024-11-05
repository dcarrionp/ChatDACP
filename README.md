# BlurChat / ChatDACP

Aplicación de chat con frontend en Angular y backend en Node.js, configurada para ejecutarse en Docker.

## Requisitos

- Docker instalado

## Cómo construir y ejecutar la aplicación

### Paso 1: Descargar la imagen de Docker Hub

Ejecuta el siguiente comando para descargar la imagen:
```bash
docker pull dcarrionp/blurchat
```
### Paso 1: Descargar la imagen de Docker Hub
```bash
docker run -p 3000:3000 dcarrionp/blurchat
```

### Probar la funcionalidad del chat
1. Abre http://localhost:3000 en tu navegador.
2. Ingresa un mensaje en el chat y verifica que se muestra en pantalla.
3. Abre otra ventana o pestaña de navegador en la misma dirección y verifica que los mensajes se sincronizan en tiempo real entre ambas ventanas, demostrando la funcionalidad de WebSocket.

## Notas de la Versión
### Versión 1.0: Lanzamiento inicial de BlurChat.
### Versión 2.0: Mejoras en el frontend

## Créditos
Este proyecto fue desarrollado por Diego Andres Carrion Portilla. Todos los derechos reservados.
