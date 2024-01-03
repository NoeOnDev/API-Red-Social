import { Router } from 'express';
import { createPoster, getPostersPublic, getPostersForUser, getSearchedPosters } from '../controllers/PosterController.js';
import { createPosterValidations } from '../middlewares/PosterValidator.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/create', authenticateToken, createPosterValidations, createPoster);
router.get('/user', authenticateToken, getPostersForUser);
router.get('/public', getPostersPublic);
router.get('/search', getSearchedPosters);


export default router;