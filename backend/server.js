// Importing required modules
import express from "express";       // Express framework for building server & APIs
import mongoose from "mongoose";     // MongoDB ODM (Object Data Modeling) library
import cors from "cors";             // Middleware to handle Cross-Origin Resource Sharing
import dotenv from "dotenv";         // To load environment variables from .env file
import employeeRoutes from "./routes/employeeRoutes.js"; // Employee API routes

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());              // Enable CORS for frontend-backend communication
app.use(express.json());      // Parse incoming JSON requests

// API Routes
// All requests to /api/employees will be handled by employeeRoutes
app.use("/api/employees", employeeRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,       // Recommended option for new MongoDB connection string parser
  useUnifiedTopology: true,    // Recommended option for new MongoDB topology engine
})
.then(() => {
  console.log("MongoDB connected ✅");

  // Start server after successful DB connection
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
  );
})
.catch((err) => console.error("❌ DB Connection Error:", err));