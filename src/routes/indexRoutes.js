import { Router } from 'express';
import userRoutes from './UserRoutes.js';
import loginRoutes from './LoginRoutes.js';
import posterRoutes from './PosterRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/auth', loginRoutes);
router.use('/poster', posterRoutes);

export default router;