import { Column, Entity, Index } from "typeorm";

@Index("addr_cityname", ["addrCityname"], {})
@Index("addr_pcode", ["addrPcode"], {})
@Index("addr_province", ["addrProvince"], {})
@Index(
  "address",
  [
    "addrStreetnum",
    "addrStrtPrefix",
    "addrStrtName",
    "addrStrtType",
    "addrStrtSuffix",
  ],
  {}
)
@Index("ao_id", ["aoId"], {})
@Index("baths", ["baths"], {})
@Index("beds", ["beds"], {})
@Index("block_id", ["blockId"], {})
@Index("consolidated_subdivisions_id", ["consolidatedSubdivisionsId"], {})
@Index("csid", ["csid"], {})
@Index("disseminations_id", ["disseminationsId"], {})
@Index("division_id", ["divisionId"], {})
@Index("last_list_date", ["lastListDate"], {})
@Index("last_sale_date", ["lastSaleDate"], {})
@Index("location_id", ["locationId"], {})
@Index("metro_id", ["metroId"], {})
@Index("nbh_id", ["nbhId"], {})
@Index("pcode_city", ["pcodeCity"], {})
@Index("place_id", ["placeId"], {})
@Index("population_centres_id", ["populationCentresId"], {})
@Index("prop_type", ["propType"], {})
@Index("provinces_id", ["provincesId"], {})
@Index("sqftbuilding", ["sqftbuilding"], {})
@Index("sqftlot", ["sqftlot"], {})
@Index("subdivision_id", ["subdivisionId"], {})
@Index("tract_id", ["tractId"], {})
@Index("yearbuilt", ["yearbuilt"], {})
@Index("fencing_features", ["fencingFeatures"], {})
@Index("est_price", ["estPrice"], {})
@Entity("properties_empty", { schema: "reborn_db" })
export class PropertiesEmpty {
  @Column("bigint", { primary: true, name: "property_id" })
  propertyId: string;

  @Column("bigint", { name: "location_id" })
  locationId: string;

  @Column("bigint", { name: "ao_id", nullable: true })
  aoId: string | null;

  @Column("bigint", { name: "csid", nullable: true })
  csid: string | null;

  @Column("bigint", { name: "block_id", nullable: true })
  blockId: string | null;

  @Column("bigint", { name: "disseminations_id", nullable: true })
  disseminationsId: string | null;

  @Column("bigint", { name: "nbh_id", nullable: true })
  nbhId: string | null;

  @Column("bigint", { name: "subdivision_id", nullable: true })
  subdivisionId: string | null;

  @Column("bigint", { name: "consolidated_subdivisions_id", nullable: true })
  consolidatedSubdivisionsId: string | null;

  @Column("bigint", { name: "division_id", nullable: true })
  divisionId: string | null;

  @Column("bigint", { name: "tract_id", nullable: true })
  tractId: string | null;

  @Column("bigint", { name: "metro_id", nullable: true })
  metroId: string | null;

  @Column("bigint", { name: "population_centres_id", nullable: true })
  populationCentresId: string | null;

  @Column("bigint", { name: "place_id", nullable: true })
  placeId: string | null;

  @Column("bigint", { name: "provinces_id", nullable: true })
  provincesId: string | null;

  @Column("decimal", { name: "lat", nullable: true, precision: 11, scale: 8 })
  lat: string | null;

  @Column("decimal", { name: "lon", nullable: true, precision: 11, scale: 8 })
  lon: string | null;

  @Column("varchar", { name: "parcelnum", nullable: true, length: 45 })
  parcelnum: string | null;

  @Column("varchar", { name: "addr_streetnum", nullable: true, length: 10 })
  addrStreetnum: string | null;

  @Column("char", { name: "addr_strt_prefix", nullable: true, length: 2 })
  addrStrtPrefix: string | null;

  @Column("varchar", { name: "addr_strt_name", nullable: true, length: 70 })
  addrStrtName: string | null;

  @Column("char", { name: "addr_strt_type", nullable: true, length: 12 })
  addrStrtType: string | null;

  @Column("char", { name: "addr_strt_suffix", nullable: true, length: 2 })
  addrStrtSuffix: string | null;

  @Column("varchar", { name: "addr_unit_num", nullable: true, length: 11 })
  addrUnitNum: string | null;

  @Column("varchar", { name: "addr_unit_type", nullable: true, length: 10 })
  addrUnitType: string | null;

  @Column("varchar", { name: "addr_cityname", nullable: true, length: 55 })
  addrCityname: string | null;

  @Column("char", { name: "addr_province", nullable: true, length: 2 })
  addrProvince: string | null;

  @Column("varchar", { name: "addr_pcode", nullable: true, length: 6 })
  addrPcode: string | null;

  @Column("varchar", { name: "pcode_city", nullable: true, length: 100 })
  pcodeCity: string | null;

  @Column("smallint", { name: "prop_type", nullable: true, unsigned: true })
  propType: number | null;

  @Column("smallint", { name: "zoning_type", nullable: true, unsigned: true })
  zoningType: number | null;

  @Column("smallint", { name: "title_type", nullable: true, unsigned: true })
  titleType: number | null;

  @Column("varchar", { name: "style_type", nullable: true, length: 50 })
  styleType: string | null;

  @Column("int", { name: "beds", nullable: true, unsigned: true })
  beds: number | null;

  @Column("int", { name: "baths", nullable: true, unsigned: true })
  baths: number | null;

  @Column("mediumint", { name: "partial_bath", nullable: true })
  partialBath: number | null;

  @Column("double", {
    name: "sqftbuilding",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  sqftbuilding: number | null;

  @Column("double", { name: "sqftlot", nullable: true, precision: 22 })
  sqftlot: number | null;

  @Column("smallint", { name: "yearbuilt", nullable: true, unsigned: true })
  yearbuilt: number | null;

  @Column("tinyint", { name: "rooms", nullable: true, unsigned: true })
  rooms: number | null;

  @Column("varchar", { name: "units", nullable: true, length: 10 })
  units: string | null;

  @Column("double", {
    name: "stories",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  stories: number | null;

  @Column("double", { name: "garage", nullable: true, precision: 22 })
  garage: number | null;

  @Column("varchar", { name: "garage_type", nullable: true, length: 20 })
  garageType: string | null;

  @Column("varchar", { name: "const_type", nullable: true, length: 150 })
  constType: string | null;

  @Column("varchar", { name: "basement", nullable: true, length: 100 })
  basement: string | null;

  @Column("text", { name: "exterior_wall", nullable: true })
  exteriorWall: string | null;

  @Column("varchar", { name: "foundation", nullable: true, length: 150 })
  foundation: string | null;

  @Column("varchar", { name: "roof_cover", nullable: true, length: 150 })
  roofCover: string | null;

  @Column("varchar", { name: "ac", nullable: true, length: 150 })
  ac: string | null;

  @Column("varchar", { name: "heating", nullable: true, length: 255 })
  heating: string | null;

  @Column("tinyint", { name: "fireplace", nullable: true, unsigned: true })
  fireplace: number | null;

  @Column("varchar", {
    name: "fireplace_features",
    nullable: true,
    length: 150,
  })
  fireplaceFeatures: string | null;

  @Column("varchar", { name: "utility_sewer", nullable: true, length: 100 })
  utilitySewer: string | null;

  @Column("char", { name: "fencing", nullable: true, length: 1 })
  fencing: string | null;

  @Column("varchar", { name: "fencing_features", nullable: true, length: 200 })
  fencingFeatures: string | null;

  @Column("varchar", { name: "features", nullable: true, length: 255 })
  features: string | null;

  @Column("int", { name: "est_price", nullable: true, unsigned: true })
  estPrice: number | null;

  @Column("int", { name: "ep_high", nullable: true })
  epHigh: number | null;

  @Column("int", { name: "ep_low", nullable: true })
  epLow: number | null;

  @Column("decimal", {
    name: "ep_conf",
    nullable: true,
    precision: 3,
    scale: 2,
  })
  epConf: string | null;

  @Column("date", { name: "ep_date", nullable: true })
  epDate: string | null;

  @Column("int", { name: "est_rent", nullable: true })
  estRent: number | null;

  @Column("int", { name: "er_high", nullable: true })
  erHigh: number | null;

  @Column("int", { name: "er_low", nullable: true })
  erLow: number | null;

  @Column("decimal", {
    name: "er_conf",
    nullable: true,
    precision: 3,
    scale: 2,
  })
  erConf: string | null;

  @Column("smallint", { name: "last_assessed", nullable: true, unsigned: true })
  lastAssessed: number | null;

  @Column("int", { name: "assessed_improved", nullable: true, unsigned: true })
  assessedImproved: number | null;

  @Column("int", { name: "assessed_land", nullable: true, unsigned: true })
  assessedLand: number | null;

  @Column("int", {
    name: "last_assessed_value",
    nullable: true,
    unsigned: true,
  })
  lastAssessedValue: number | null;

  @Column("int", {
    name: "last_assessed_taxes",
    nullable: true,
    unsigned: true,
  })
  lastAssessedTaxes: number | null;

  @Column("decimal", {
    name: "est_ptax",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  estPtax: string | null;

  @Column("date", { name: "last_list_date", nullable: true })
  lastListDate: string | null;

  @Column("int", { name: "last_list_price", nullable: true })
  lastListPrice: number | null;

  @Column("varchar", { name: "last_list_status", nullable: true, length: 50 })
  lastListStatus: string | null;

  @Column("int", { name: "last_sale_price", nullable: true })
  lastSalePrice: number | null;

  @Column("date", { name: "last_sale_date", nullable: true })
  lastSaleDate: string | null;

  @Column("datetime", {
    name: "insert_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  insertDt: Date | null;

  @Column("datetime", {
    name: "update_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDt: Date | null;
}
