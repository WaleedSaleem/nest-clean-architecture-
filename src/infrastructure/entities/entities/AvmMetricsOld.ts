import { Column, Entity, Index } from "typeorm";

@Index("geo_id", ["geoId"], {})
@Index("geo_type", ["geoType"], {})
@Index("geo_name", ["geoName"], {})
@Index("median_error", ["medianError"], {})
@Index("avg_price_est", ["avgPriceEst"], {})
@Index("within_5_prcntg_sale_price", ["within_5PrcntgSalePrice"], {})
@Index("within_10_prcntg_sale_price", ["within_10PrcntgSalePrice"], {})
@Index("within_20_prcntg_sale_price", ["within_20PrcntgSalePrice"], {})
@Entity("avm_metrics_old", { schema: "reborn_db" })
export class AvmMetricsOld {
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

  @Column("bigint", { name: "avg_price_est", nullable: true })
  avgPriceEst: string | null;

  @Column("decimal", {
    name: "within_5_prcntg_sale_price",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_5PrcntgSalePrice: string | null;

  @Column("decimal", {
    name: "within_10_prcntg_sale_price",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_10PrcntgSalePrice: string | null;

  @Column("decimal", {
    name: "within_20_prcntg_sale_price",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  within_20PrcntgSalePrice: string | null;

  @Column("datetime", {
    name: "insert_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  insertDt: Date | null;
}
