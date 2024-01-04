import { Router } from 'express';
import { addLikeToPoster } from '../controllers/LikeController.js';
import { checkLikeExists } from '../middlewares/LikeMiddleware.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id',authenticateToken, checkLikeExists, addLikeToPoster);

export default router;