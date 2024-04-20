import express from "express";
import { userRouter } from "./users/user-router";
import "dotenv/config"; // Load .env file at the beginning
import { initializeDatabase } from "./database/database";

const app = express();

const startServer = async () => {
  await initializeDatabase();
};

app.use(express.json());
app.use("/", userRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Listening on port 3000");
  startServer();
});
