
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('September 23')
})
.get('newpaltz', (req, res) => {
    res.sent("hello New Paltz")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})