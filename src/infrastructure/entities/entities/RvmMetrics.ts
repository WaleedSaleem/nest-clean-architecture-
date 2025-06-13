import { Column, Entity, Index } from "typeorm";

@Index("geo_id", ["geoId"], {})
@Index("geo_type", ["geoType"], {})
@Index("geo_name", ["geoName"], {})
@Index("median_error", ["medianError"], {})
@Index("within_5_prcntg_sale_price", ["within_5Prcntg"], {})
@Index("within_10_prcntg_sale_price", ["within_10Prcntg"], {})
@Index("within_20_prcntg_sale_price", ["within_20Prcntg"], {})
@Index("avg_price_est", ["avgRent"], {})
@Entity("rvm_metrics", { schema: "reborn_db" })
export class RvmMetrics {
  @Column("bigint", { name: "geo_id", nullable: true })
  geoId: string | null;

  @Column("double", { name: "geo_type", nullable: true, precision: 22 })
  geoType: number | null;

  @Column("varchar", { name: "geo_name", nullable: true, length: 50 })
  geoName: string | null;

  @Column("decimal", {
    name: "median_error",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  medianError: string | null;

  @Column("bigint", { name: "avg_rent", nullable: true })
  avgRent: string | null;

  @Column("decimal", {
    name: "within_5_prcntg",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_5Prcntg: string | null;

  @Column("decimal", {
    name: "within_10_prcntg",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_10Prcntg: string | null;

  @Column("decimal", {
    name: "within_20_prcntg",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_20Prcntg: string | null;

  @Column("datetime", {
    name: "insert_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  insertDt: Date | null;
}
