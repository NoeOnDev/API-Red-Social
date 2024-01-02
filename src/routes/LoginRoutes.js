import { Router } from 'express';
import { loginUser } from '../controllers/LoginController.js';
import { loginUserValidator } from '../middlewares/LoginValidator.js';

const router = Router();

router.post('/login', loginUserValidator , loginUser);

export default router;