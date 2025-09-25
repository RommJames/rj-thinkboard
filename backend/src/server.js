// const express = require(express);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors()); // Must be first middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
  });
});
