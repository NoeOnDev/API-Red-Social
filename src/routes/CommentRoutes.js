import { Router } from 'express';
import { addCommentToPoster } from '../controllers/CommentController.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/add/:id', authenticateToken, addCommentToPoster);

export default router;