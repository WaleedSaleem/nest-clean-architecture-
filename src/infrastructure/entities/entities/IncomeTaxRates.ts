import { Column, Entity } from "typeorm";

@Entity("income_tax_rates", { schema: "reborn_db" })
export class IncomeTaxRates {
  @Column("varchar", { primary: true, name: "tax_type", length: 12 })
  taxType: string;

  @Column("tinyint", { primary: true, name: "province_id" })
  provinceId: number;

  @Column("double", { primary: true, name: "rate", precision: 22 })
  rate: number;

  @Column("bigint", { name: "lower_income_threshold" })
  lowerIncomeThreshold: string;

  @Column("bigint", { primary: true, name: "upper_income_threshold" })
  upperIncomeThreshold: string;
}
