import { Router } from 'express';
import { addCommentToPoster, getCommentsFromPoster, updateComment, deleteComment } from '../controllers/CommentController.js';
import { commentValidator } from '../middlewares/CommentValidator.js';
import { commentExists } from '../middlewares/CommentMiddeware.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id', authenticateToken, commentValidator, addCommentToPoster);
router.put('/:id', authenticateToken, commentExists, commentValidator, updateComment);
router.delete('/:id', authenticateToken, commentExists, deleteComment);
router.get('/:posterId', getCommentsFromPoster);

export default router;