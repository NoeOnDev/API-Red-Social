import { Router } from 'express';
import { loginUser } from '../controllers/LoginController.js';
import { loginUserValidator } from '../middlewares/LoginValidator.js';
import { authenticateToken } from '../middlewares/AuthorizationToken.js';

const router = Router();

router.post('/login', loginUserValidator , loginUser);
router.post('/prueba', authenticateToken, (req, res) => {
    res.status(200).json({ 
        message: 'Prueba completa',
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });
});

export default router;