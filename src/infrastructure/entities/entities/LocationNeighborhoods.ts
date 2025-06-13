import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LocationCoordinates } from "./LocationCoordinates";
import { LocationCities } from "./LocationCities";

@Index(
  "location_neighborhoods_location_city_id_foreign",
  ["locationCityId"],
  {}
)
@Entity("location_neighborhoods", { schema: "reborn_db" })
export class LocationNeighborhoods {
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

  @Column("bigint", { name: "location_city_id", unsigned: true })
  locationCityId: string;

  @OneToMany(
    () => LocationCoordinates,
    (locationCoordinates) => locationCoordinates.locationNeighborhood
  )
  locationCoordinates: LocationCoordinates[];

  @ManyToOne(
    () => LocationCities,
    (locationCities) => locationCities.locationNeighborhoods,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "location_city_id", referencedColumnName: "id" }])
  locationCity: LocationCities;
}
