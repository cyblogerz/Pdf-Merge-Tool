const express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const {mergePDFs} = require('./merge')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/templates/index.html'))
})

app.use('/static',express.static('public'))

app.post('/merge', upload.array('pdfs',2),async (req, res,next) => {
  console.log(req.files);
  await mergePDFs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
  res.redirect(`http://localhost:${port}/static/merged.pdf`);
  //multer - handle multiple file / form data
  
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

