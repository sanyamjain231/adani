import {
  Account,
  createAccount,
  getAccountByEmail,
} from "../models/accountModel";
import { hashPassword, comparePassword } from "../utils/encryption";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function register(account: Account) {
  const existingAccount = await getAccountByEmail(account.email);
  if (existingAccount) throw new Error("Email already exists");
  account.password = await hashPassword(account.password);
  return createAccount(account);
}

export async function login(email: string, password: string) {
  const account = await getAccountByEmail(email);
  if (!account) throw new Error("Account not found");
  const validPassword = await comparePassword(password, account.password);
  if (!validPassword) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: account.id, email: account.email },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );
  return { token };
}
