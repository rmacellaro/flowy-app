export class DataResponseArgs<T> {
  public offset: number = 0;
  public size: number = 10;
  public total: number = 0;
  public items?: Array<T>;
  public orderBy: string = 'Id';
  public orderDir: string = 'ASC';
}