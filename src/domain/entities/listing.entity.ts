export class Listing {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public location: string,
    public images?: string[],
  ) {}
}
