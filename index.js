const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('test')
});

require('./app/routes/usuario.routes.js')(app);

app.listen(port, console.log(`Puerto 8080`));
