import { Router } from "express";
import { validateAccount } from "../middleware/validationMiddleware";
import * as authController from "../controllers/authController";

const router = Router();

router.post("/register", validateAccount, authController.registerAccount);
router.post("/login", authController.loginAccount);

export default router;
