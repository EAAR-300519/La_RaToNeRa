const express = require('express');
const app = express();
const port = 3000;

  app.get('/carrito', (req, res) => {
    return res.send('Carrito de Compras de RaToNeRa!');
  });
   
  app.post('/registro', (req, res) => {
    return res.send('Registro de Usuarios de RaToNeRa!');
  });
   
  app.post('/productos', (req, res) => {
    return res.send('Registro de Productos de RaToNeRa!');
  });
   
  app.delete('/baja', (req, res) => {
    return res.send('Baja de Usuarios de RaToNeRa!');
  });

  app.path('/actualizar', (req, res) => {
    return res.send('Actualizar Datos de RaToNeRa!');
  });

app.listen(port,() => {
    console.log(`Example app at http://localhost:${port}`)
})
