import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { Tenant } from '../models/core/tenant.model';
import { Request } from '../models/search/request.model';
import { Result } from '../models/search/result.model';

@Injectable({ providedIn: 'root' })
export class TenantsService extends SecurityBaseService {

  public search(request: Request): Observable<Result<Tenant>> {
    return this.http.post<Result<Tenant>>(environment.api_flowy + "Tenants/Search", request);
  }
}