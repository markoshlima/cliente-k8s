/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/ClienteController';
const router = express.Router();

router.get('/clientes', controller.getClientes);
router.get('/clientes/:id', controller.getCliente);

export = router;