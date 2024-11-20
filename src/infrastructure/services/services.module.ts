import { Module } from '@nestjs/common';
import { AwsS3ImageService } from './aws-s3-image.service';
import { IMAGE_SERVICE } from '../../domain/services/image.service';

@Module({
  providers: [
    {
      provide: IMAGE_SERVICE,
      useClass: AwsS3ImageService,
    },
  ],
  exports: [
    {
      provide: IMAGE_SERVICE,
      useClass: AwsS3ImageService,
    },
  ],
})
export class ServicesModule {}
