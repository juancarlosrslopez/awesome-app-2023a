// Importando el enrutador de express
import { Router } from 'express';
import httpStatus from 'http-status';
import { error404} from '../controllers/httpError.controller.js'
// Creando una instancia del enrutador de express
const router = Router();
import path from 'path';
router.use('', error404);
export default router;


 