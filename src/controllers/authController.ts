import { Request, Response } from "express";
import { register, login } from "../services/accountService";

export async function registerAccount(req: Request, res: Response) {
  try {
    const account = await register(req.body);
    res.status(201).json(account);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    res.status(400).json({ message: errMsg });
  }
}

export async function loginAccount(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json(token);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    res.status(400).json({ message: errMsg });
  }
}
