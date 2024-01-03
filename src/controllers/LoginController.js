import { validationResult } from 'express-validator';
import { authenticateUser } from '../services/LoginService.js';

export async function loginUser (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const token = await authenticateUser(req.body.email, req.body.password);
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
}