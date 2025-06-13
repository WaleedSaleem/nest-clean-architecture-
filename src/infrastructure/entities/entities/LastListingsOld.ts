import { Column, Entity, Index } from "typeorm";

@Index("ao_id", ["aoId"], {})
@Index("location_id", ["locationId"], {})
@Index("MLS", ["mls"], {})
@Index("last_listings_listing_id_IDX", ["listingId"], {})
@Index("last_listings_is_idx_IDX", ["isIdx"], {})
@Index("lat", ["lat"], {})
@Index("lon", ["lon"], {})
@Index("prop_type", ["propType"], {})
@Index("listing_id", ["listingId"], {})
@Index("brokerage_name", ["brokerageName"], {})
@Index("sqftbuilding", ["sqftbuilding"], {})
@Index("yearbuilt", ["yearbuilt"], {})
@Index("beds", ["beds"], {})
@Index("baths", ["baths"], {})
@Index("last_list_price", ["prevListPrice"], {})
@Index("addr_cityname", ["addrCityname"], {})
@Index("standard_status", ["standardStatus"], {})
@Index("listing_update_timestamp", ["listingUpdateTimestamp"], {})
@Index("nbh_name", ["nbhName"], {})
@Index("view_count", ["viewCount"], {})
@Index("street_id", ["streetId"], {})
@Entity("last_listings_old", { schema: "reborn_db" })
export class LastListingsOld {
  @Column("bigint", { primary: true, name: "property_id", unsigned: true })
  propertyId: string;

  @Column("varchar", { name: "listing_id", nullable: true, length: 20 })
  listingId: string | null;

  @Column("varchar", { name: "MLS", nullable: true, length: 10 })
  mls: string | null;

  @Column("varchar", { name: "mls_table", nullable: true, length: 50 })
  mlsTable: string | null;

  @Column("bigint", { name: "mls_table_row_id", nullable: true })
  mlsTableRowId: string | null;

  @Column("varchar", { name: "ao_id", nullable: true, length: 20 })
  aoId: string | null;

  @Column("decimal", {
    name: "location_id",
    nullable: true,
    precision: 20,
    scale: 0,
  })
  locationId: string | null;

  @Column("tinyint", { name: "is_idx", nullable: true, width: 1 })
  isIdx: boolean | null;

  @Column("varchar", { name: "standard_status", nullable: true, length: 30 })
  standardStatus: string | null;

  @Column("tinyint", {
    name: "is_expired",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isExpired: boolean | null;

  @Column("bigint", { name: "current_price", nullable: true })
  currentPrice: string | null;

  @Column("bigint", { name: "prev_list_price", nullable: true })
  prevListPrice: string | null;

  @Column("datetime", { name: "prev_list_date", nullable: true })
  prevListDate: Date | null;

  @Column("datetime", { name: "listing_update_timestamp", nullable: true })
  listingUpdateTimestamp: Date | null;

  @Column("datetime", { name: "entry_timestamp", nullable: true })
  entryTimestamp: Date | null;

  @Column("bigint", { name: "entry_price", nullable: true })
  entryPrice: string | null;

  @Column("datetime", { name: "sold_timestamp", nullable: true })
  soldTimestamp: Date | null;

  @Column("varchar", { name: "addr_streetnum", nullable: true, length: 225 })
  addrStreetnum: string | null;

  @Column("varchar", { name: "addr_strt_prefix", nullable: true, length: 255 })
  addrStrtPrefix: string | null;

  @Column("varchar", { name: "addr_strt_name", nullable: true, length: 70 })
  addrStrtName: string | null;

  @Column("varchar", { name: "addr_strt_type", nullable: true, length: 10 })
  addrStrtType: string | null;

  @Column("varchar", { name: "addr_strt_suffix", nullable: true, length: 100 })
  addrStrtSuffix: string | null;

  @Column("varchar", { name: "addr_unit_num", nullable: true, length: 11 })
  addrUnitNum: string | null;

  @Column("varchar", { name: "addr_unit_type", nullable: true, length: 10 })
  addrUnitType: string | null;

  @Column("varchar", { name: "addr_cityname", nullable: true, length: 55 })
  addrCityname: string | null;

  @Column("varchar", { name: "nbh_name", nullable: true, length: 255 })
  nbhName: string | null;

  @Column("varchar", { name: "addr_province", nullable: true, length: 50 })
  addrProvince: string | null;

  @Column("varchar", { name: "addr_pcode", nullable: true, length: 6 })
  addrPcode: string | null;

  @Column("decimal", { name: "lat", nullable: true, precision: 11, scale: 8 })
  lat: string | null;

  @Column("decimal", { name: "lon", nullable: true, precision: 11, scale: 8 })
  lon: string | null;

  @Column("varchar", { name: "parcelnum", nullable: true, length: 100 })
  parcelnum: string | null;

  @Column("bigint", { name: "block_id", nullable: true })
  blockId: string | null;

  @Column("bigint", { name: "disseminations_id", nullable: true })
  disseminationsId: string | null;

  @Column("bigint", { name: "subdivision_id", nullable: true })
  subdivisionId: string | null;

  @Column("bigint", { name: "street_id", nullable: true })
  streetId: string | null;

  @Column("bigint", { name: "nbh_id", nullable: true })
  nbhId: string | null;

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

  @Column("varchar", { name: "unit_num", nullable: true, length: 100 })
  unitNum: string | null;

  @Column("int", { name: "rooms_total", nullable: true })
  roomsTotal: number | null;

  @Column("int", { name: "beds", nullable: true, unsigned: true })
  beds: number | null;

  @Column("int", { name: "beds_plus", nullable: true })
  bedsPlus: number | null;

  @Column("int", { name: "baths", nullable: true, unsigned: true })
  baths: number | null;

  @Column("mediumint", { name: "partial_bath", nullable: true })
  partialBath: number | null;

  @Column("bigint", { name: "sqftbuilding", nullable: true })
  sqftbuilding: string | null;

  @Column("double", { name: "sqftlot", nullable: true, precision: 22 })
  sqftlot: number | null;

  @Column("smallint", { name: "yearbuilt", nullable: true, unsigned: true })
  yearbuilt: number | null;

  @Column("smallint", { name: "prop_type", nullable: true, unsigned: true })
  propType: number | null;

  @Column("text", { name: "style_type", nullable: true })
  styleType: string | null;

  @Column("bigint", { name: "stories", nullable: true })
  stories: string | null;

  @Column("varchar", { name: "garage", nullable: true, length: 100 })
  garage: string | null;

  @Column("varchar", { name: "garage_type", nullable: true, length: 20 })
  garageType: string | null;

  @Column("varchar", { name: "const_type", nullable: true, length: 150 })
  constType: string | null;

  @Column("varchar", { name: "basement", nullable: true, length: 255 })
  basement: string | null;

  @Column("text", { name: "exterior_wall", nullable: true })
  exteriorWall: string | null;

  @Column("varchar", { name: "foundation", nullable: true, length: 150 })
  foundation: string | null;

  @Column("varchar", { name: "roof_cover", nullable: true, length: 150 })
  roofCover: string | null;

  @Column("varchar", { name: "ac", nullable: true, length: 150 })
  ac: string | null;

  @Column("varchar", { name: "heating", nullable: true, length: 150 })
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

  @Column("varchar", { name: "fencing", nullable: true, length: 100 })
  fencing: string | null;

  @Column("varchar", { name: "features", nullable: true, length: 255 })
  features: string | null;

  @Column("text", { name: "public_description", nullable: true })
  publicDescription: string | null;

  @Column("text", { name: "extras", nullable: true })
  extras: string | null;

  @Column("varchar", { name: "agent_key", nullable: true, length: 255 })
  agentKey: string | null;

  @Column("varchar", { name: "agent_address", nullable: true, length: 255 })
  agentAddress: string | null;

  @Column("varchar", { name: "agent_fullname", nullable: true, length: 255 })
  agentFullname: string | null;

  @Column("varchar", { name: "agent_phone", nullable: true, length: 255 })
  agentPhone: string | null;

  @Column("varchar", { name: "agent_email", nullable: true, length: 255 })
  agentEmail: string | null;

  @Column("varchar", { name: "agent_title", nullable: true, length: 255 })
  agentTitle: string | null;

  @Column("datetime", { name: "agent_modification_timestamp", nullable: true })
  agentModificationTimestamp: Date | null;

  @Column("varchar", { name: "agent_mls_id", nullable: true, length: 255 })
  agentMlsId: string | null;

  @Column("varchar", { name: "agent_aor", nullable: true, length: 255 })
  agentAor: string | null;

  @Column("varchar", {
    name: "agent_facebook_link",
    nullable: true,
    length: 500,
  })
  agentFacebookLink: string | null;

  @Column("varchar", {
    name: "agent_website_link",
    nullable: true,
    length: 500,
  })
  agentWebsiteLink: string | null;

  @Column("varchar", { name: "brokerage_key", nullable: true, length: 255 })
  brokerageKey: string | null;

  @Column("varchar", { name: "brokerage_name", nullable: true, length: 255 })
  brokerageName: string | null;

  @Column("varchar", { name: "brokerage_phone", nullable: true, length: 255 })
  brokeragePhone: string | null;

  @Column("varchar", { name: "brokerage_email", nullable: true, length: 255 })
  brokerageEmail: string | null;

  @Column("tinyint", { name: "images_fetched", nullable: true, width: 1 })
  imagesFetched: boolean | null;

  @Column("bigint", { name: "images_count", nullable: true })
  imagesCount: string | null;

  @Column("datetime", {
    name: "update_dt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateDt: Date | null;

  @Column("int", { name: "view_count", nullable: true, default: () => "'0'" })
  viewCount: number | null;
}
