import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("replier_api_threadings", { schema: "reborn_db" })
export class ReplierApiThreadings {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "api_url", length: 255 })
  apiUrl: string;

  @Column("text", { name: "query_string" })
  queryString: string;

  @Column("varchar", { name: "unixTimestamp", length: 255 })
  unixTimestamp: string;

  @Column("int", { name: "sleep", nullable: true })
  sleep: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
