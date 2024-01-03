import { Router } from 'express';
import { addLikeToPoster, getLikesFromPoster, deleteLike } from '../controllers/LikeController.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id', authenticateToken, addLikeToPoster);
router.get('/get/:posterId', getLikesFromPoster);
router.delete('/delete/:id', authenticateToken, deleteLike);

export default router;