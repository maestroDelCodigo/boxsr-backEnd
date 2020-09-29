const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const coleccionController = require('./app/routes/coleccion.routes.js');
const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('test')
});

require('./app/routes/usuario.routes.js')(app);
require('./app/routes/coleccion.routes.js')(app);
require('./app/routes/cliente.routes.js')(app);
require('./app/routes/categoria.routes.js')(app);
require('./app/routes/product.routes.js')(app);
require('./app/routes/pedidos.routes.js')(app);

app.listen(port, console.log(`Puerto 8080`));
