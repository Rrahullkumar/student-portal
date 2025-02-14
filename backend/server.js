import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Root Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Backend is running successfully on Vercel! ");
});

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app for Vercel Serverless Functions
export default app;
