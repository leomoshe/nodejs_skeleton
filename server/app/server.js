const express = require('express')
const app = express()
const mainRouter = require('./routes/main')
const port = 3000

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})