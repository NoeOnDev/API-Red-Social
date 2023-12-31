import { Router } from 'express';
import userRoutes from './UserRoutes.js';

const router = Router();

router.use('/user', userRoutes);

export default router;