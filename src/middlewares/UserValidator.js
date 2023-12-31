import { body } from 'express-validator';
import User from '../models/UserModel.js';

export const registerUserValidations = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom(async (value) => {
            try {
                const user = await User.findOne({ where: { email: value } });
                if (user) {
                    return Promise.reject('Email already in use');
                }
            } catch (error) {
                console.log(error);
            }
        }),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
]