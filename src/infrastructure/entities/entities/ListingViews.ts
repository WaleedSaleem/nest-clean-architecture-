import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("listing_views", { schema: "reborn_db" })
export class ListingViews {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "mlsNumber", length: 255 })
  mlsNumber: string;

  @Column("varchar", { name: "purpose", length: 255 })
  purpose: string;

  @Column("bigint", { name: "views_count" })
  viewsCount: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
