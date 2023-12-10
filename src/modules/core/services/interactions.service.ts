import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { InteractionTrack } from '../models/core/interaction-track.model';
import { Interaction } from '../models/core/interaction.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService extends SecurityBaseService {

  public GetInteractionsByIdScope(idScope: number): Observable<Array<Interaction>> {
    var params: HttpParams = new HttpParams();
    params = params.set('idScope', idScope.toString());
    return this.http.get<Array<Interaction>>(environment.api_flowy + 'Interactions/GetInteractionsByIdScope',{
      params
    });
  }

  public GetInteractionById(id: number): Observable<Interaction> {
    var params: HttpParams = new HttpParams();
    params = params.set('id', id.toString());
    return this.http.get<Interaction>(environment.api_flowy + 'Interactions/GetInteractionById',{
      params
    });
  }

  public GetInteractionTracksByIdInteraction(idInteraction: number): Observable<Array<InteractionTrack>> {
    var params: HttpParams = new HttpParams();
    params = params.set('idInteraction', idInteraction.toString());
    return this.http.get<Array<InteractionTrack>>(environment.api_flowy + 'Interactions/GetInteractionTracksByIdInteraction',{
      params
    });
  }

  public UpdateInteractionData(interaction: Interaction): Observable<any> {
    return this.http.post(
      environment.api_flowy + 'Interactions/UpdateInteractionData',
      interaction
    );
  }

  public UpdateInteractionInfo(interaction: Interaction): Observable<any> {
    return this.http.post(
      environment.api_flowy + 'Interactions/UpdateInteractionInfo',
      interaction
    );
  }

  public CloneInteraction(idInteraction: number): Observable<Interaction> {
    var params: HttpParams = new HttpParams();
    params = params.set('idInteraction', idInteraction.toString());
    return this.http.put<Interaction>(environment.api_flowy + 'Interactions/CloneInteraction',{},{
      params
    });
  }

  public NewInteraction(interaction: Interaction): Observable<Interaction> {
    return this.http.post(
      environment.api_flowy + 'Interactions/NewInteraction',
      interaction
    );
  }
}