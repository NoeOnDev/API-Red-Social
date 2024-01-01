import { body } from 'express-validator';
import User from '../models/UserModel.js';

export const registerUserValidations = [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long')
        .matches(/^[a-z]+(\s[a-z]+)?$/i)
        .withMessage('Name must only contain letters and a single space between words'),
    body('lastname')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Lastname is required')
        .isLength({ min: 3 })
        .withMessage('Lastname must be at least 3 characters long')
        .matches(/^[a-z]+(\s[a-z]+)?$/i)
        .withMessage('Lastname must only contain letters and a single space between words'),
    body('birthdate')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Birthdate is required')
        .isDate()
        .withMessage('Please enter a valid date')
        .custom((value) => {
            const birthdate = new Date(value);
            const today = new Date();
            const twelveYearsAgo = new Date(today.getFullYear() - 12, today.getMonth(), today.getDate());
            if (birthdate > twelveYearsAgo) {
                throw new Error('You must be at least 12 years old to register');
            }
        }),
    body('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .normalizeEmail()
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom(async (value) => {
            const user = await User.findOne({ where: { email: value } });
            if (user) {
                return Promise.reject('Email already in use');
            }
        }),
    body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
]