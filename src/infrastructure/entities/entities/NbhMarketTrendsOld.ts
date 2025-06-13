import { Column, Entity, Index } from "typeorm";

@Index("nbh_id", ["nbhId"], {})
@Index("dom_avg", ["domAvg"], {})
@Index("dom_median", ["domMedian"], {})
@Index("dom_min", ["domMin"], {})
@Index("dom_max", ["domMax"], {})
@Index("dom_sum", ["domSum"], {})
@Index("list_price_avg", ["listPriceAvg"], {})
@Index("list_price_median", ["listPriceMedian"], {})
@Index("list_price_min", ["listPriceMin"], {})
@Index("list_price_max", ["listPriceMax"], {})
@Index("list_price_sum", ["listPriceSum"], {})
@Index("closed_price_avg", ["closedPriceAvg"], {})
@Index("closed_price_median", ["closedPriceMedian"], {})
@Index("closed_price_min", ["closedPriceMin"], {})
@Index("closed_price_max", ["closedPriceMax"], {})
@Index("closed_price_sum", ["closedPriceSum"], {})
@Index("count_new_listings", ["countNewListings"], {})
@Index("count_closed_listings", ["countClosedListings"], {})
@Index("dt", ["dt"], {})
@Entity("nbh_market_trends_old", { schema: "reborn_db" })
export class NbhMarketTrendsOld {
  @Column("bigint", { name: "nbh_id", nullable: true })
  nbhId: string | null;

  @Column("date", { name: "dt", nullable: true })
  dt: string | null;

  @Column("varchar", { name: "prop_type", nullable: true, length: 50 })
  propType: string | null;

  @Column("int", { name: "dom_avg", nullable: true })
  domAvg: number | null;

  @Column("int", { name: "dom_median", nullable: true })
  domMedian: number | null;

  @Column("int", { name: "dom_min", nullable: true })
  domMin: number | null;

  @Column("int", { name: "dom_max", nullable: true })
  domMax: number | null;

  @Column("int", { name: "dom_sum", nullable: true })
  domSum: number | null;

  @Column("bigint", { name: "list_price_avg", nullable: true })
  listPriceAvg: string | null;

  @Column("bigint", { name: "list_price_median", nullable: true })
  listPriceMedian: string | null;

  @Column("bigint", { name: "list_price_min", nullable: true })
  listPriceMin: string | null;

  @Column("bigint", { name: "list_price_max", nullable: true })
  listPriceMax: string | null;

  @Column("bigint", { name: "list_price_sum", nullable: true })
  listPriceSum: string | null;

  @Column("bigint", { name: "closed_price_avg", nullable: true })
  closedPriceAvg: string | null;

  @Column("bigint", { name: "closed_price_median", nullable: true })
  closedPriceMedian: string | null;

  @Column("bigint", { name: "closed_price_min", nullable: true })
  closedPriceMin: string | null;

  @Column("bigint", { name: "closed_price_max", nullable: true })
  closedPriceMax: string | null;

  @Column("bigint", { name: "closed_price_sum", nullable: true })
  closedPriceSum: string | null;

  @Column("int", { name: "count_new_listings", nullable: true })
  countNewListings: number | null;

  @Column("int", { name: "count_closed_listings", nullable: true })
  countClosedListings: number | null;
}
