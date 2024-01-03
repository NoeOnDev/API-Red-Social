import { Router } from 'express';
import userRoutes from './UserRoutes.js';
import loginRoutes from './LoginRoutes.js';
import posterRoutes from './PosterRoutes.js';
import commentRoutes from './CommentRoutes.js';
import likeRoutes from './LikeRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/auth', loginRoutes);
router.use('/poster', posterRoutes);
router.use('/comment', commentRoutes);
router.use('/like', likeRoutes);

export default router;