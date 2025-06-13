import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LocationCities } from "./LocationCities";
import { LocationNeighborhoods } from "./LocationNeighborhoods";

@Index("location_coordinates_location_city_id_foreign", ["locationCityId"], {})
@Index(
  "location_coordinates_location_neighborhood_id_foreign",
  ["locationNeighborhoodId"],
  {}
)
@Entity("location_coordinates", { schema: "reborn_db" })
export class LocationCoordinates {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "latitude", nullable: true, length: 255 })
  latitude: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 255 })
  longitude: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("bigint", {
    name: "location_city_id",
    nullable: true,
    unsigned: true,
  })
  locationCityId: string | null;

  @Column("bigint", {
    name: "location_neighborhood_id",
    nullable: true,
    unsigned: true,
  })
  locationNeighborhoodId: string | null;

  @ManyToOne(
    () => LocationCities,
    (locationCities) => locationCities.locationCoordinates,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "location_city_id", referencedColumnName: "id" }])
  locationCity: LocationCities;

  @ManyToOne(
    () => LocationNeighborhoods,
    (locationNeighborhoods) => locationNeighborhoods.locationCoordinates,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "location_neighborhood_id", referencedColumnName: "id" },
  ])
  locationNeighborhood: LocationNeighborhoods;
}
