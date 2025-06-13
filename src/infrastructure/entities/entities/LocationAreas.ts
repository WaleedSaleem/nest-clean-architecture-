import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LocationClasses } from "./LocationClasses";
import { LocationCities } from "./LocationCities";

@Index("location_areas_name_index", ["name"], {})
@Index("location_areas_location_class_id_foreign", ["locationClassId"], {})
@Entity("location_areas", { schema: "reborn_db" })
export class LocationAreas {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("bigint", { name: "location_class_id", unsigned: true })
  locationClassId: string;

  @ManyToOne(
    () => LocationClasses,
    (locationClasses) => locationClasses.locationAreas,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "location_class_id", referencedColumnName: "id" }])
  locationClass: LocationClasses;

  @OneToMany(
    () => LocationCities,
    (locationCities) => locationCities.locationArea
  )
  locationCities: LocationCities[];
}
