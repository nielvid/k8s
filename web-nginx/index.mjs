import express from 'express'
import fetch from 'node-fetch'
import os from 'os'
const app = express()

app.get('/', (req, res) => {
  const message = `This is web to nginx server, serving request from ${os.hostname}`
  console.log(message)
  res.send(message)
})

app.get('/nginx', async(req, res) => {
  const url = 'http://nginx'
  const response = await fetch(url)
  const data = await response.text()
  console.log(data)
  res.send(data)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
