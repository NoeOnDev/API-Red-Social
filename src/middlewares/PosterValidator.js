import { body } from 'express-validator';

export const createPosterValidations = [
    body('title')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),
    body('content')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Content is required')
        .isLength({ min: 10 })
        .withMessage('Content must be at least 10 characters long'),
];