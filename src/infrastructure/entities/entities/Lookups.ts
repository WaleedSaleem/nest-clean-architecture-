import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("coded_value", ["codedValue"], {})
@Index("lookup", ["lookup"], {})
@Entity("lookups", { schema: "reborn_db" })
export class Lookups {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "lookup", length: 100 })
  lookup: string;

  @Column("varchar", { name: "descr", nullable: true, length: 100 })
  descr: string | null;

  @Column("varchar", { name: "coded_value", length: 100 })
  codedValue: string;
}
