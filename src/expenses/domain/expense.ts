import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  expenseId: number | undefined;

  @Column("varchar")
  name: string | undefined;

  @Column("float")
  amount: number | undefined;

  @Column("date")
  date: Date = new Date();

  @Column("int")
  userId: number | undefined;
}
