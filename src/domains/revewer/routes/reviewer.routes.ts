import { Router } from 'express';
import { ReviewerController } from '../controllers/reviewer.controller.js';

const router = Router();
const controller = new ReviewerController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
