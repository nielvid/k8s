import express from 'express'
import os from 'os'
const app = express()


app.get('/', (req, res)=>{
    const message = `I am responding to request from ${os.hostname}`
    console.log(message)
    res.send(message)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})