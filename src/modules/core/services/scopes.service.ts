import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { Scope } from '../models/core/scope.model';
import { Request } from '../models/search/request.model';
import { Result } from '../models/search/result.model';

@Injectable({
  providedIn: 'root'
})
export class ScopesService extends SecurityBaseService {

  public Search(request: Request): Observable<Result<Scope>> {
    return this.http.post(environment.api_flowy + 'Scopes/Search', request);
  }

  public GetScopeById(id: number): Observable<Scope> {
    var params: HttpParams = new HttpParams();
    params = params.set('id', id.toString());
    return this.http.get(environment.api_flowy + 'Scopes/GetScopeById',{
      params
    });
  }
}