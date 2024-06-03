import { Router } from "express";
import passport from "passport";
import { validateAccount } from "../middleware/validationMiddleware";
import * as authController from "../controllers/authController";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);

router.post("/register", validateAccount, authController.registerAccount);
router.post("/login", authController.loginAccount);

export default router;
