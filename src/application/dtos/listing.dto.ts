import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListingDTO {
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsOptional()
  images?: string[];
}

// export class ListingDTO {
//   id: string;
//   title: string;
//   price: number;
//   location: string;
// }
