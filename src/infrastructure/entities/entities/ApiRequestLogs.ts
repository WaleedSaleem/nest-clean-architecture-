import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("api_request_logs", { schema: "reborn_db" })
export class ApiRequestLogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "end_point", nullable: true, length: 255 })
  endPoint: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("longtext", { name: "request", nullable: true })
  request: string | null;

  @Column("longtext", { name: "response", nullable: true })
  response: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
