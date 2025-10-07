import { body } from 'express-validator';

export const signUpValidator = [
  body('user.username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 2, max: 20 })
    .withMessage('Username must be between 2 and 20 characters')
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/)
    .withMessage('Username can only contain letters and spaces'),

  body('user.email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('user.password', 'password does not Empty').not().isEmpty(),
  body('user.password', 'The minimum password length is 6 characters').isLength({ min: 6 }),
];
