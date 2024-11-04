import express from 'express'
import logger from 'morgan'
import path from 'path';

const port = process.env.PORT ?? 3000

const app = express()
app.use(logger('dev'))

const angularDistPath = path.join(process.cwd(), '../FrontChat/dist/front-chat/browser')
app.use(express.static(angularDistPath))

app.get('/', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'))
})

/*app.get('/', (req, res) => {
    res.send('<h1>Chat</h1>')
})*/

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})