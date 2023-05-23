// Importando Express
import express from 'express';
// Importando http-status
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

//Registrando middleware para
// el error 404
app.use((req, res)=>{
  res.status(httpStatus.NOT_FOUND).send(`
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error 404 - Página no encontrada</title>
  <style>
    body {
      background-color: #f0f4f8;
      color: #333;
      font-family: Arial, sans-serif;
      text-align: center;
      padding-top: 100px;
    }
    h1 {
      color: #3498db;
      font-size: 36px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      margin-bottom: 30px;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>Error 404 - Página no encontrada</h1>
  <p>Lo sentimos, la página que estás buscando no existe.</p>
  <p>Por favor, verifica la URL o <a href="/">regresa a la página principal</a>.</p>
</body>
</html>
  `)
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"
// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);});