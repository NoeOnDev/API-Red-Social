import { Router } from 'express';
import { createPoster } from '../controllers/PosterController.js';
import { createPosterValidations } from '../middlewares/PosterValidator.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/create', authenticateToken, createPosterValidations, createPoster);

export default router;