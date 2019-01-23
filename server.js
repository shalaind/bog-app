const express = require('express')
const app = express()
// const router = require('./routes/index')
// app.use('/', router)
  app.use(express.static(__dirname + '/client/build/'));
  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})