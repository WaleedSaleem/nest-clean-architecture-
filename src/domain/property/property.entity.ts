export class Property {
  constructor(
    public readonly id: number,
    public readonly beds: number,
    public readonly baths: number,
    public readonly price: number,
    public readonly sqft: number,
    public readonly type: string,
    public readonly status: string,
  ) {}
}
