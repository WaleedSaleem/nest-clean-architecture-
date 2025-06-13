import { Column, Entity } from "typeorm";

@Entity("forbidden_properties", { schema: "reborn_db" })
export class ForbiddenProperties {
  @Column("int", { primary: true, name: "property_id" })
  propertyId: number;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;
}
