export const IMAGE_SERVICE = 'ImageService';

export interface IImageService {
  getImagesForListings(listingIds: string[]): Promise<Record<string, string[]>>;
}
