import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller.js';

const router = Router();
const controller = new ReviewController();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Retrieve a list of reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: A list of reviews.
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Review data
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - reviewerId
 *               - visitId
 *             properties:
 *               reviewerId: { type: integer }
 *               visitId: { type: integer }
 *               foodRating: { type: number }
 *               beverageRating: { type: number }
 *               serviceRating: { type: number }
 *               valueRating: { type: number }
 *               ambianceRating: { type: number }
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/reviews/{id}:
 *   patch:
 *     summary: Update a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               foodRating: { type: number }
 *               beverageRating: { type: number }
 *               serviceRating: { type: number }
 *               valueRating: { type: number }
 *               ambianceRating: { type: number }
 *     responses:
 *       200:
 *         description: Updated
 */
router.patch('/:id', controller.update);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted
 */
router.delete('/:id', controller.delete);

export default router;
