import { body } from 'express-validator';
import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUserValidator = [
    body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .custom(async (password, { req }) => {
            const user = await User.findOne({ where: { email: req.body.email }});
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('Invalid email or password');
                }

                const token = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );

                req.token = token;
            }
            return true;
        }),
    body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .custom(async (password, { req }) => {
            const user = await User.findOne({ where: { email: req.body.email }});
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('Invalid email or password');
                }
            }
            return true;
        })
];