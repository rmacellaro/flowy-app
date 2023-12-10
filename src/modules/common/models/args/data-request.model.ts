export class DataRequestArgs {
  public offset: number = 0;
  public size: number = 10;
  public query: any;
  public orderBy: string = 'Id';
  public orderDir: string = 'ASC';
}