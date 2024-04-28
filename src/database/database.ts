import { DataSource } from "typeorm";
import { Expense } from "../expenses/domain/expense"; // Import your entities here
import dotenv from "dotenv";
import { Users } from "../users/domain/user";
dotenv.config({ path: "../../.env" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  synchronize: true,
  entities: [Expense, Users],
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
