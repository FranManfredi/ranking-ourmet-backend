import { Router } from 'express';
import { RestaurantController } from '../controllers/restaurant.controller.js';

const router = Router();
const controller = new RestaurantController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
