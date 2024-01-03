import { Router } from 'express';
import { registerUser} from '../controllers/UserController.js';
import { registerUserValidations } from '../middlewares/UserValidator.js';

const router = Router();

router.post('/register', registerUserValidations ,registerUser);

export default router;