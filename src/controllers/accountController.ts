import { Request, Response } from "express";
import * as accountModel from "../models/accountModel";

export async function getAccounts(req: Request, res: Response) {
  const limit = parseInt(req.query.limit as string) || 10;
  const accounts = await accountModel.getAllAccounts(limit);
  res.json(accounts);
}

export async function getAccount(req: Request, res: Response) {
  const account = await accountModel.getAccountById(parseInt(req.params.id));
  if (!account) return res.status(404).json({ message: "Account not found" });
  res.json(account);
}

export async function createAccount(req: Request, res: Response) {
  const account = await accountModel.createAccount(req.body);
  res.status(201).json(account);
}

export async function updateAccount(req: Request, res: Response) {
  const account = await accountModel.updateAccount(
    parseInt(req.params.id),
    req.body
  );
  res.json(account);
}

export async function deleteAccount(req: Request, res: Response) {
  await accountModel.deleteAccount(parseInt(req.params.id));
  res.json({ message: "Account deleted successfully" });
}
