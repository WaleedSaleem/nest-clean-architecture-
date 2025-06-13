import { Column, Entity, Index } from "typeorm";

@Index("prop_type", ["propType"], {})
@Index("prop_type_conf", ["propTypeConf"], {})
@Index("beds", ["beds"], {})
@Index("beds_conf", ["bedsConf"], {})
@Index("baths", ["baths"], {})
@Index("baths_conf", ["bathsConf"], {})
@Index("yearbuilt", ["yearbuilt"], {})
@Index("yearbuilt_conf", ["yearbuiltConf"], {})
@Index("sqftlot", ["sqftlot"], {})
@Index("sqftlot_conf", ["sqftlotConf"], {})
@Index("property_id", ["propertyId"], {})
@Index("property_id_2", ["propertyId"], {})
@Entity("synth_properties_old", { schema: "reborn_db" })
export class SynthPropertiesOld {
  @Column("bigint", { primary: true, name: "property_id" })
  propertyId: string;

  @Column("int", { name: "prop_type", unsigned: true })
  propType: number;

  @Column("int", { name: "prop_type_conf", unsigned: true })
  propTypeConf: number;

  @Column("int", { name: "beds", unsigned: true })
  beds: number;

  @Column("int", { name: "beds_conf", unsigned: true })
  bedsConf: number;

  @Column("int", { name: "baths", unsigned: true })
  baths: number;

  @Column("int", { name: "baths_conf", unsigned: true })
  bathsConf: number;

  @Column("int", { name: "yearbuilt", unsigned: true })
  yearbuilt: number;

  @Column("int", { name: "yearbuilt_conf", unsigned: true })
  yearbuiltConf: number;

  @Column("bigint", { name: "sqftlot", unsigned: true })
  sqftlot: string;

  @Column("int", { name: "sqftlot_conf", unsigned: true })
  sqftlotConf: number;

  @Column("bigint", { name: "sqftbuilding", unsigned: true })
  sqftbuilding: string;

  @Column("int", { name: "sqftbuilding_conf", unsigned: true })
  sqftbuildingConf: number;

  @Column("datetime", { name: "update_dt", default: () => "CURRENT_TIMESTAMP" })
  updateDt: Date;

  @Column("datetime", { name: "insert_dt", default: () => "CURRENT_TIMESTAMP" })
  insertDt: Date;
}
