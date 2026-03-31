import { Router } from 'express';
import { RevewController } from '../controllers/revew.controller.js';

const router = Router();
const controller = new RevewController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
