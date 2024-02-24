import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to the MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000!!");
});

app.use("/api/user/", userRoutes);
app.post("api/auth/", authRoutes);
