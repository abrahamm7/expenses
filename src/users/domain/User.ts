import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userId: Number | undefined;

  @Column({ type: "varchar" })
  userName: string | undefined;

  @Column({ type: "varchar" })
  email: string | undefined;
}
