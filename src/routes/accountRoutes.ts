import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import * as accountController from "../controllers/accountController";
import { validateAccount } from "../middleware/validationMiddleware";

const router = Router();

router.get("/", authenticateToken, accountController.getAccounts);
router.get("/:id", authenticateToken, accountController.getAccount);
router.post(
  "/",
  authenticateToken,
  validateAccount,
  accountController.createAccount
);
router.put(
  "/:id",
  authenticateToken,
  validateAccount,
  accountController.updateAccount
);
router.delete("/:id", authenticateToken, accountController.deleteAccount);

export default router;
