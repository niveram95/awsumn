export class Item {
  constructor(public description: string,
    public pros: string,
    public cons: string,
    public material_id: number,
    public image: string,
    public long_description: string,
    public place_one: string,
    public place_one_lat: number,
    public place_one_long: number,
    public place_two: string,
    public place_two_lat: number,
    public place_two_long: number,
    public place_three: string,
    public place_three_lat: number,
    public place_three_long: number
  ) {}
}
