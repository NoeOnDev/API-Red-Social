import { Router } from 'express';
import { addLikeToPoster } from '../controllers/LikeController.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id',authenticateToken, addLikeToPoster);

export default router;