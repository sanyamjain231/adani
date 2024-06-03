import express from "express";
import dotenv from "dotenv";
import accountRoutes from "./routes/accountRoutes";
import authRoutes from "./routes/authRoutes";
import passport from 'passport';
import session from 'express-session';
import './config/passport';
// import authRoutes from './routes/auth';

dotenv.config();

const app = express();
app.use(express.json()); // for parsing application/json
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/accounts", accountRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('api/auth/google');
  }
  res.send(`Hello, ${(req.user as any).displayName},${(req.user as any).token}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;