import { DataSource } from "typeorm";
import { User } from "../users/domain/User"; // Import your entities here
import { Expense } from "../expenses/domain/expense"; // Import your entities here

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "141509",
  database: "expenses",
  synchronize: true,
  entities: [Expense],
});

// Initialize the connection
export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};
