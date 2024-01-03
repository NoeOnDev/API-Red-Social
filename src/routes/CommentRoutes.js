import { Router } from 'express';
import { addCommentToPoster, getCommentsFromPoster, updateComment } from '../controllers/CommentController.js';
import { commentCreateValidator, commentUpdateValidator } from '../middlewares/CommentValidator.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id', authenticateToken, commentCreateValidator, addCommentToPoster);
router.put('/:id', authenticateToken, commentUpdateValidator, updateComment);
router.get('/:posterId', getCommentsFromPoster);

export default router;