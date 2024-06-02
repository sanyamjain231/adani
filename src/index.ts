import express from "express";
import dotenv from "dotenv";
import accountRoutes from "./routes/accountRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/accounts", accountRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
