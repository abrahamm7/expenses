const express = require("express");
import { userRouter } from "./users/user-router";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log("Listening on port 3000"));
