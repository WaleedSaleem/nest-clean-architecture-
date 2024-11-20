import { Injectable } from '@nestjs/common';
import { IImageService } from '../../domain/services/image.service';

@Injectable()
export class AwsS3ImageService implements IImageService {
  // private s3: S3;
  private bucketName: string;

  constructor() {
    // this.s3 = new S3({
    //   region: process.env.AWS_REGION,
    //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // });
    this.bucketName = process.env.AWS_S3_BUCKET_NAME || 'bucket-name';
  }

  async getImagesForListings(
    listingIds: string[],
  ): Promise<Record<string, string[]>> {
    const dummyData: Record<string, string[]> = {
      listing1: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
      listing2: [
        'https://example.com/image3.jpg',
        'https://example.com/image4.jpg',
      ],
      listing3: ['https://example.com/image5.jpg'],
    };

    // Filter dummy data to return only the requested listing IDs
    const result: Record<string, string[]> = {};
    listingIds.forEach((id) => {
      result[id] = dummyData[id] || []; // Return an empty array if no images exist for a listing ID
    });

    return result;
  }
}
