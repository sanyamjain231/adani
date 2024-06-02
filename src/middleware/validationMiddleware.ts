import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateAccount = [
  body("first_name")
    .isLength({ min: 1, max: 100 })
    .withMessage("First name is required and must be less than 100 characters"),
  body("last_name")
    .isLength({ min: 1, max: 100 })
    .withMessage("Last name is required and must be less than 100 characters"),
  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ max: 100 })
    .withMessage("Email must be less than 100 characters"),
  body("phone")
    .isLength({ max: 16 })
    .withMessage("Phone number must be less than or equal to 16 characters"),
  body("password")
    .isLength({ min: 6, max: 50 })
    .withMessage("Password must be between 6 and 50 characters"),
  body("birthday")
    .optional()
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("Invalid date format. Use YYYY-MM-DD format for birthday"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
