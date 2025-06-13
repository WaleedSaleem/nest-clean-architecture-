import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mls_id", ["mlsId"], {})
@Index("listed", ["listed"], {})
@Index("purpose", ["purpose"], {})
@Index("event_type", ["eventType"], {})
@Index("event_date", ["eventDate"], {})
@Index("asking_price", ["askingPrice"], {})
@Index("sold_price", ["soldPrice"], {})
@Index("price_diff", ["priceDiff"], {})
@Index("property_id", ["propertyId"], {})
@Entity("property_histories", { schema: "reborn_db" })
export class PropertyHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("bigint", { name: "property_id", nullable: true })
  propertyId: string | null;

  @Column("varchar", { name: "mls_id", nullable: true, length: 15 })
  mlsId: string | null;

  @Column("date", { name: "listed", nullable: true })
  listed: string | null;

  @Column("varchar", { name: "purpose", nullable: true, length: 50 })
  purpose: string | null;

  @Column("varchar", { name: "event_type", nullable: true, length: 50 })
  eventType: string | null;

  @Column("date", { name: "event_date", nullable: true })
  eventDate: string | null;

  @Column("bigint", { name: "asking_price", nullable: true })
  askingPrice: string | null;

  @Column("bigint", { name: "sold_price", nullable: true })
  soldPrice: string | null;

  @Column("bigint", { name: "price_diff", nullable: true })
  priceDiff: string | null;
}
