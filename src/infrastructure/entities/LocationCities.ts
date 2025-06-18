import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LocationAreas } from "./LocationAreas";
import { LocationStates } from "./LocationStates";
import { LocationCoordinates } from "./LocationCoordinates";
import { LocationNeighborhoods } from "./LocationNeighborhoods";

@Index("location_cities_location_area_id_foreign", ["locationAreaId"], {})
@Index("location_cities_location_state_id_foreign", ["locationStateId"], {})
@Entity("location_cities", { schema: "reborn_db" })
export class LocationCities {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("bigint", { name: "activeCount" })
  activeCount: string;

  @Column("varchar", { name: "latitude", nullable: true, length: 255 })
  latitude: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 255 })
  longitude: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("bigint", { name: "location_area_id", unsigned: true })
  locationAreaId: string;

  @Column("bigint", { name: "location_state_id", unsigned: true })
  locationStateId: string;

  @ManyToOne(
    () => LocationAreas,
    (locationAreas) => locationAreas.locationCities,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "location_area_id", referencedColumnName: "id" }])
  locationArea: LocationAreas;

  @ManyToOne(
    () => LocationStates,
    (locationStates) => locationStates.locationCities,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "location_state_id", referencedColumnName: "id" }])
  locationState: LocationStates;

  @OneToMany(
    () => LocationCoordinates,
    (locationCoordinates) => locationCoordinates.locationCity
  )
  locationCoordinates: LocationCoordinates[];

  @OneToMany(
    () => LocationNeighborhoods,
    (locationNeighborhoods) => locationNeighborhoods.locationCity
  )
  locationNeighborhoods: LocationNeighborhoods[];
}
