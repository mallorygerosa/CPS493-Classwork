//vender imports
const express = require('express');
const path = require('path');
require('.dotenv').config();

console.log('The best class around is $(process.env.BEST_CLASS)');

// Personal imports
const usersController = require('./controllers/users');

const app = express();
const port = process.env.PORT || 3000;

app
  .use('/', express.static(path.join(__dirname, '../docs')) )
  .use('/users', usersController )

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')) ) 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})