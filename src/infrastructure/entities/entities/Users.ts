import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FavoriteProperties } from "./FavoriteProperties";
import { Notes } from "./Notes";
import { Shortlists } from "./Shortlists";
import { UserSaveSearches } from "./UserSaveSearches";

@Index("users_email_deleted_at_unique", ["email", "deletedAt"], {
  unique: true,
})
@Index("users_username_deleted_at_unique", ["username", "deletedAt"], {
  unique: true,
})
@Entity("users", { schema: "reborn_db" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "email_verified_at", nullable: true })
  emailVerifiedAt: Date | null;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "phone_number", nullable: true, length: 255 })
  phoneNumber: string | null;

  @Column("varchar", {
    name: "real_estate_number",
    nullable: true,
    length: 255,
  })
  realEstateNumber: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("varchar", { name: "company_name", nullable: true, length: 255 })
  companyName: string | null;

  @Column("varchar", { name: "job_title", nullable: true, length: 255 })
  jobTitle: string | null;

  @Column("varchar", { name: "application_url", nullable: true, length: 255 })
  applicationUrl: string | null;

  @Column("timestamp", { name: "last_login_at", nullable: true })
  lastLoginAt: Date | null;

  @Column("varchar", { name: "user_ip", nullable: true, length: 255 })
  userIp: string | null;

  @Column("varchar", { name: "avatar", nullable: true, length: 255 })
  avatar: string | null;

  @Column("smallint", { name: "type", unsigned: true, default: () => "'2'" })
  type: number;

  @Column("varchar", { name: "remember_token", nullable: true, length: 100 })
  rememberToken: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(
    () => FavoriteProperties,
    (favoriteProperties) => favoriteProperties.user
  )
  favoriteProperties: FavoriteProperties[];

  @OneToMany(() => Notes, (notes) => notes.user)
  notes: Notes[];

  @OneToMany(() => Shortlists, (shortlists) => shortlists.user)
  shortlists: Shortlists[];

  @OneToMany(
    () => UserSaveSearches,
    (userSaveSearches) => userSaveSearches.user
  )
  userSaveSearches: UserSaveSearches[];
}
