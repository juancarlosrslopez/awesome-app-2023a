// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /404
router.get('/404', (req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  res.sendFile(path.resolve('views','error404.html'));
});

export default router;