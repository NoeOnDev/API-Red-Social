import { Router } from 'express';
import { loginUser } from '../controllers/LoginController.js';

const router = Router();

router.post('/login', loginUser);

export default router;