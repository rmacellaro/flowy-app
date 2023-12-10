import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { DraftTrack } from '../models/core/draft-track.model';
import { Draft } from '../models/core/draft.model';

@Injectable({
  providedIn: 'root'
})
export class DraftsService extends SecurityBaseService {

  public GetDraftsByIdScope(idScope: number): Observable<Array<Draft>> {
    var params: HttpParams = new HttpParams();
    params = params.set('idScope', idScope.toString());
    return this.http.get<Array<Draft>>(environment.api_flowy + 'Drafts/GetDraftsByIdScope',{
      params
    });
  }

  public GetDraftById(idDraft: number): Observable<Draft> {
    var params: HttpParams = new HttpParams();
    params = params.set('idDraft', idDraft.toString());
    return this.http.get<Draft>(environment.api_flowy + 'Drafts/GetDraftById',{
      params
    });
  }

  public GetDraftTracksByIdDraft(idDraft: number): Observable<Array<DraftTrack>> {
    var params: HttpParams = new HttpParams();
    params = params.set('idDraft', idDraft.toString());
    return this.http.get<Array<DraftTrack>>(environment.api_flowy + 'Drafts/GetDraftTracksByIdDraft',{
      params
    });
  }

  public UpdateDeployment(draft: Draft): Observable<any> {
    return this.http.post(
      environment.api_flowy + 'Drafts/UpdateDraftSchema',
      draft
    );
  }

  public UpdateDraftSchema(draft: Draft): Observable<any> {
    return this.http.post(
      environment.api_flowy + 'Drafts/UpdateDraftSchema',
      draft
    );
  }

  public UpdateDraftInfo(draft: Draft): Observable<any> {
    return this.http.post(
      environment.api_flowy + 'Drafts/UpdateDraftInfo',
      draft
    );
  }

  public CloneDraft(idDraft: number): Observable<Draft> {
    var params: HttpParams = new HttpParams();
    params = params.set('idDraft', idDraft.toString());
    return this.http.put<Draft>(environment.api_flowy + 'Drafts/CloneDraft',{},{
      params
    });
  }

  public NewDraft(draft: Draft): Observable<Draft> {
    return this.http.post(
      environment.api_flowy + 'Drafts/NewDraft',
      draft
    );
  }

  public DeployDraft(idDraft: number): Observable<any> {
    var params: HttpParams = new HttpParams();
    params = params.set('idDraft', idDraft.toString());
    return this.http.put<any>(environment.api_flowy + 'Drafts/DeployDraft',{},{
      params
    });
  }

}