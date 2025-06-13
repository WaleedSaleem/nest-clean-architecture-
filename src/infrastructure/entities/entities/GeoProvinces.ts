import { Column, Entity } from "typeorm";

@Entity("geo_provinces", { schema: "reborn_db" })
export class GeoProvinces {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("varchar", { name: "label", nullable: true, length: 30 })
  label: string | null;

  @Column("double", { name: "land_area", nullable: true, precision: 22 })
  landArea: number | null;

  @Column("decimal", {
    name: "centroid_lon",
    nullable: true,
    precision: 11,
    scale: 8,
  })
  centroidLon: string | null;

  @Column("decimal", {
    name: "centroid_lat",
    nullable: true,
    precision: 11,
    scale: 8,
  })
  centroidLat: string | null;

  @Column("int", { name: "ttl_props", nullable: true })
  ttlProps: number | null;

  @Column("int", { name: "ttl_pop", nullable: true })
  ttlPop: number | null;

  @Column("double", { name: "median_age", nullable: true, precision: 22 })
  medianAge: number | null;

  @Column("int", { name: "median_total_income", nullable: true })
  medianTotalIncome: number | null;

  @Column("int", { name: "hh_median_income", nullable: true })
  hhMedianIncome: number | null;

  @Column("int", { name: "hh_owned", nullable: true })
  hhOwned: number | null;

  @Column("int", { name: "hh_rented", nullable: true })
  hhRented: number | null;

  @Column("double", {
    name: "unemployment_rate",
    nullable: true,
    precision: 22,
  })
  unemploymentRate: number | null;

  @Column("int", { name: "commute_less_than_15_mins", nullable: true })
  commuteLessThan_15Mins: number | null;

  @Column("int", { name: "commute_between_15_29_mins", nullable: true })
  commuteBetween_15_29Mins: number | null;

  @Column("int", { name: "commute_between_30_44_mins", nullable: true })
  commuteBetween_30_44Mins: number | null;

  @Column("int", { name: "commute_between_45_59_mins", nullable: true })
  commuteBetween_45_59Mins: number | null;

  @Column("int", { name: "commute_greater_than_60_mins", nullable: true })
  commuteGreaterThan_60Mins: number | null;

  @Column("double", { name: "hai", nullable: true, precision: 22 })
  hai: number | null;

  @Column("double", { name: "med_price", nullable: true, precision: 22 })
  medPrice: number | null;

  @Column("double", { name: "sales_rate", nullable: true, precision: 22 })
  salesRate: number | null;

  @Column("double", { name: "ttl_sales", nullable: true, precision: 22 })
  ttlSales: number | null;

  @Column("double", { name: "ttl_listings", nullable: true, precision: 22 })
  ttlListings: number | null;

  @Column("double", { name: "listing_rate", nullable: true, precision: 22 })
  listingRate: number | null;

  @Column("double", { name: "mos", nullable: true, precision: 22 })
  mos: number | null;

  @Column("double", { name: "dom", nullable: true, precision: 22 })
  dom: number | null;

  @Column("double", { name: "bas", nullable: true, precision: 22 })
  bas: number | null;

  @Column("double", { name: "ownership_rate", nullable: true, precision: 22 })
  ownershipRate: number | null;

  @Column("double", {
    name: "price_growth_6mos",
    nullable: true,
    precision: 22,
  })
  priceGrowth_6mos: number | null;

  @Column("double", { name: "price_growth_1yr", nullable: true, precision: 22 })
  priceGrowth_1yr: number | null;

  @Column("double", { name: "price_growth_2yr", nullable: true, precision: 22 })
  priceGrowth_2yr: number | null;

  @Column("double", { name: "price_growth_5yr", nullable: true, precision: 22 })
  priceGrowth_5yr: number | null;

  @Column("double", { name: "listed_sold_rate", nullable: true, precision: 22 })
  listedSoldRate: number | null;

  @Column("datetime", {
    name: "update_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDt: Date | null;
}
