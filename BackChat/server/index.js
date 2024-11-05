import express from 'express'
import logger from 'morgan'
import path from 'path';

import { Server } from 'socket.io';
import { createServer } from 'http';

const port = process.env.PORT ?? 3000

const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('A user has connected!')

    socket.on('disconnect', () => {
        console.log('A user has disconnected!')
    })

    socket.on ('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

app.use(logger('dev'))

const angularDistPath = path.join(process.cwd(), 'public');
app.use(express.static(angularDistPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});


server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})