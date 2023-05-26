// Importando Express
import express from 'express';
// Importando http-status
import httpStatus from 'http-status';
import path from 'path';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';
import NotFoundRouter from './routes/NotFound.route.js';

// Importando ROOT_DIR
import { ROOT_DIR } from './helpers/paths.js';


// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware para
// Servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR,'public')));

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
// Se agrega ruta shop
app.use(NotFoundRouter);

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"
// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);});