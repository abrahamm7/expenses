import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  expenseId: number | undefined;

  @Column("varchar")
  name: string = "";

  @Column("float")
  amount: number = 0.0;

  @Column("date")
  date: Date = new Date();

  @Column("int")
  userId: number = 0;
}
