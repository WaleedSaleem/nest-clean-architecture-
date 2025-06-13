import { Column, Entity, Index } from "typeorm";

@Index("school_id", ["schoolId"], {})
@Entity("school_data_old", { schema: "reborn_db" })
export class SchoolDataOld {
  @Column("bigint", { name: "school_id" })
  schoolId: string;

  @Column("double", { name: "official_code", nullable: true, precision: 22 })
  officialCode: number | null;

  @Column("text", { name: "school_name", nullable: true })
  schoolName: string | null;

  @Column("text", { name: "school_level", nullable: true })
  schoolLevel: string | null;

  @Column("text", { name: "school_type", nullable: true })
  schoolType: string | null;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("double", { name: "lat", nullable: true, precision: 22 })
  lat: number | null;

  @Column("double", { name: "lon", nullable: true, precision: 22 })
  lon: number | null;

  @Column("double", { name: "blocks_geo_id", nullable: true, precision: 22 })
  blocksGeoId: number | null;

  @Column("double", {
    name: "disseminations_geo_id",
    nullable: true,
    precision: 22,
  })
  disseminationsGeoId: number | null;

  @Column("double", { name: "nbh_id", nullable: true, precision: 22 })
  nbhId: number | null;

  @Column("double", { name: "tracts_geo_id", nullable: true, precision: 22 })
  tractsGeoId: number | null;

  @Column("double", { name: "places_geo_id", nullable: true, precision: 22 })
  placesGeoId: number | null;

  @Column("double", {
    name: "subdivision_geo_id",
    nullable: true,
    precision: 22,
  })
  subdivisionGeoId: number | null;

  @Column("double", { name: "metros_geo_id", nullable: true, precision: 22 })
  metrosGeoId: number | null;

  @Column("double", {
    name: "population_centres_geo_id",
    nullable: true,
    precision: 22,
  })
  populationCentresGeoId: number | null;

  @Column("double", { name: "division_geo_id", nullable: true, precision: 22 })
  divisionGeoId: number | null;

  @Column("double", { name: "provinces_geo_id", nullable: true, precision: 22 })
  provincesGeoId: number | null;

  @Column("text", { name: "phone_number", nullable: true })
  phoneNumber: string | null;

  @Column("text", { name: "fax_number", nullable: true })
  faxNumber: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("int", { name: "enrolment", nullable: true })
  enrolment: number | null;

  @Column("text", { name: "grades_available", nullable: true })
  gradesAvailable: string | null;

  @Column("text", { name: "school_website", nullable: true })
  schoolWebsite: string | null;

  @Column("text", { name: "board_name", nullable: true })
  boardName: string | null;

  @Column("decimal", {
    name: "quality_index",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  qualityIndex: string | null;

  @Column("decimal", {
    name: "fraser_ranking",
    nullable: true,
    precision: 5,
    scale: 1,
  })
  fraserRanking: string | null;
}
