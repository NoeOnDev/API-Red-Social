import { body } from 'express-validator';
import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';

export const loginUserValidator = [
    body('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .normalizeEmail()
        .isEmail()
        .withMessage('Enter a valid email')
        .custom(async (email) => {
            const user = await User.findOne({ where: { email }});
            if (!user) {
                throw new Error('Invalid email or password');
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