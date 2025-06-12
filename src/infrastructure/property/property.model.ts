import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('properties')
export class PropertyModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  beds: number;

  @Column()
  baths: number;

  @Column()
  price: number;

  @Column()
  sqft: number;

  @Column()
  type: string;

  @Column()
  status: string;
}
