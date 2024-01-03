import { Router } from 'express';
import { addCommentToPoster, getCommentsFromPoster } from '../controllers/CommentController.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id', authenticateToken, addCommentToPoster);
router.get('/:posterId', getCommentsFromPoster);

export default router;