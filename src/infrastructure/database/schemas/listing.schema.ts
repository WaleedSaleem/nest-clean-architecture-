// src/infrastructure/database/schemas/listing.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ListingDocument extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  location: string;
}

export const ListingSchema = SchemaFactory.createForClass(ListingDocument);
