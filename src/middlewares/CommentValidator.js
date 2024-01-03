import { body } from 'express-validator';

export const commentValidator = [
    body('content')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Content is required')
        .isLength({ min: 5 })
        .withMessage('Content must be at least 5 characters long'),
];