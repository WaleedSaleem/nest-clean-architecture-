import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("user_save_searches_user_id_foreign", ["userId"], {})
@Index("user_save_searches_keyword_index", ["keyword"], {})
@Entity("user_save_searches", { schema: "reborn_db" })
export class UserSaveSearches {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("bigint", { name: "user_id", unsigned: true })
  userId: string;

  @Column("varchar", { name: "search_name", length: 255 })
  searchName: string;

  @Column("varchar", { name: "keyword", length: 255 })
  keyword: string;

  @Column("varchar", { name: "keyword_object", length: 255 })
  keywordObject: string;

  @Column("text", { name: "filter_payload", nullable: true })
  filterPayload: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.userSaveSearches, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
