const express = require('express')
const app = express()
const port = 3000

app.get('/tintuc', (req, res) => res.send('Hello World! halo hyung'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
