const express = require('express')
const path = require('path')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/templates/index.html'))
})


app.post('/', (req, res) => {
  //multer - handle multiple file / form data
  
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

