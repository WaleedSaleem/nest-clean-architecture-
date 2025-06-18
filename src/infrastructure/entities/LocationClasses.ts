import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LocationAreas } from "./LocationAreas";

@Entity("location_classes", { schema: "reborn_db" })
export class LocationClasses {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => LocationAreas,
    (locationAreas) => locationAreas.locationClass
  )
  locationAreas: LocationAreas[];
}
