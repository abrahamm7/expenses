import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("EXPENSES", {
  host: "LAPTOP-3Q354RTQ\\SQLEXPRESS",
  dialect: "mssql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
