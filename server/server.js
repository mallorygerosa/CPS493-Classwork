const express = require('express')
const usersController = require('./controllers/users');

const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('September 27')
  })
  .get('*', (req, res, next) => {
    console.log('A request came in.');
    next();
  })
  .get('/newpaltz', (req, res) => {
    res.send("hello New Paltz")
  })
  .use('/users', usersController )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})