const express = require("express");
const app = express();
const expensesRouter = require("./routes/expenses");
const usersRouter = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/expenses", expensesRouter);
app.use("/users", usersRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
