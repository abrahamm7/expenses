import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userId: number | undefined;

  @Column({ type: "varchar" })
  userName: string | undefined;

  @Column({ type: "varchar" })
  email: string | undefined;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | undefined;
}
