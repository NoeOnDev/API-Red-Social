import { Router } from 'express';
import { addLikeToPoster, removeLikeFromPoster, getLikesFromPoster, getNumberLikesFromPoster } from '../controllers/LikeController.js';
import { checkLikeExists, likeExists } from '../middlewares/LikeMiddleware.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id',authenticateToken, checkLikeExists, addLikeToPoster);
router.delete('/remove/:id',authenticateToken, likeExists, removeLikeFromPoster);
router.get('/get/:id', getLikesFromPoster);
router.get('/count/:id', getNumberLikesFromPoster);

export default router;