import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LocationCities } from "./LocationCities";

@Index("location_states_name_index", ["name"], {})
@Entity("location_states", { schema: "reborn_db" })
export class LocationStates {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => LocationCities,
    (locationCities) => locationCities.locationState
  )
  locationCities: LocationCities[];
}
