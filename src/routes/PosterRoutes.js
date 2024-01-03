import { Router } from 'express';
import { createPoster, getPostersPublic, getPostersForUser } from '../controllers/PosterController.js';
import { createPosterValidations } from '../middlewares/PosterValidator.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/create', authenticateToken, createPosterValidations, createPoster);
router.get('/public', getPostersPublic);
router.get('/user', authenticateToken, getPostersForUser);

export default router;