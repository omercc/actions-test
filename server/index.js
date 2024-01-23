require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')

const startWs = require('./ws')
const uploadRouter = require('./routers/upload')
const app = express()

const server = http.createServer(app)

startWs(server)

app.use(express.json())

app.use(cors())

app.use('/upload', uploadRouter)

const PORT = process.env.PORT || 6060
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
