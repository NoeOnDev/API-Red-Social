import { Router } from 'express';
import userRoutes from './UserRoutes.js';
import loginRoutes from './LoginRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/auth', loginRoutes);

export default router;