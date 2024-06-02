import { openDb } from "../utils/database";

export interface Account {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password: string;
  birthday?: string;
  created_at?: string;
  last_modified?: string;
}

export async function createAccount(account: Account) {
  const db = await openDb();
  const result = await db.run(
    `INSERT INTO accounts 
    (first_name, last_name, email, phone, password, birthday) 
    VALUES (?, ?, ?, ?, ?, ?)`,
    account.first_name,
    account.last_name,
    account.email,
    account.phone,
    account.password,
    account.birthday
  );
  return { id: result.lastID, ...account };
}

export async function getAccountByEmail(email: string) {
  const db = await openDb();
  return db.get("SELECT * FROM accounts WHERE email = ?", email);
}

export async function getAccountById(id: number) {
  const db = await openDb();
  return db.get("SELECT * FROM accounts WHERE id = ?", id);
}

export async function getAllAccounts(limit: number) {
  const db = await openDb();
  return db.all("SELECT * FROM accounts LIMIT ?", limit);
}

export async function updateAccount(id: number, account: Account) {
  const db = await openDb();
  await db.run(
    `UPDATE accounts 
    SET first_name = ?, last_name = ?, email = ?, phone = ?, password = ?, birthday = ?, last_modified = CURRENT_TIMESTAMP 
    WHERE id = ?`,
    account.first_name,
    account.last_name,
    account.email,
    account.phone,
    account.password,
    account.birthday,
    id
  );
  return getAccountById(id);
}

export async function deleteAccount(id: number) {
  const db = await openDb();
  await db.run("DELETE FROM accounts WHERE id = ?", id);
  return { message: "Account deleted successfully" };
}
