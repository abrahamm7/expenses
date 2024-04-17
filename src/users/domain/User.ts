import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number | undefined;

  @Column({ type: "varchar" })
  name: string | undefined;

  @Column({ type: "varchar" })
  email: string | undefined;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | undefined;
}
