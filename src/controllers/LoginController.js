import { validationResult } from 'express-validator';

export async function loginUser (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        res.status(200).json({ message: 'Login successful', token: req.token });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }

}