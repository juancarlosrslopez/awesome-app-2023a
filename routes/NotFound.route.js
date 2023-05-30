// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();

// GET /404
router.get('/404', (req, res)=>{
  console.log("📢 Sirviendo el error");
  res.sendFile(path.resolve('views','error404.hbs'));
  res.render('add-product');
});

export default router;