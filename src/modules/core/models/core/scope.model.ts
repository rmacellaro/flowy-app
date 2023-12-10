import { Tenant } from './tenant.model';

export class Scope {
  public id?: number;
  public idTenant?: number;
  public tenant?: Tenant;
  public name?: string;
  public description?: string;
}