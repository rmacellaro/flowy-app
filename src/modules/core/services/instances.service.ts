import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { InstanceData } from '../models/core/instance-data.model';
import { InstanceTask } from '../models/core/instance-task.model';
import { InstanceTrack } from '../models/core/instance-track.model';
import { Instance } from '../models/core/instance.model';
import { Request } from '../models/search/request.model';
import { Result } from '../models/search/result.model';

@Injectable({
  providedIn: 'root'
})
export class InstancesService extends SecurityBaseService {

  public GetInstancesByIdProcess(request: Request): Observable<Result<Instance>> {
    return this.http.post(environment.api_flowy + 'Instances/GetInstancesByIdProcess', request);
  }

  public GetInstanceById(id: number): Observable<Instance> {
    var params = new HttpParams();
    params = params.set("id", id.toString());
    return this.http.get<Instance>(environment.api_flowy + 'Instances/GetInstanceById', {
      params
    });
  }

  public GetInstanceDatasByIdInstance(idInstance: number): Observable<Array<InstanceData>> {
    var params = new HttpParams();
    params = params.set("idInstance", idInstance.toString());
    return this.http.get<Array<InstanceData>>(environment.api_flowy + 'Instances/GetInstanceDatasByIdInstance', {
      params
    });
  }

  public GetInstanceTasksByIdInstance(idInstance: number): Observable<Array<InstanceTask>> {
    var params = new HttpParams();
    params = params.set("idInstance", idInstance.toString());
    return this.http.get<Array<InstanceTask>>(environment.api_flowy + 'Instances/GetInstanceTasksByIdInstance', {
      params
    });
  }

  public GetInstanceTracksByIdInstance(idInstance: number): Observable<Array<InstanceTrack>> {
    var params = new HttpParams();
    params = params.set("idInstance", idInstance.toString());
    return this.http.get<Array<InstanceTrack>>(environment.api_flowy + 'Instances/GetInstanceTracksByIdInstance', {
      params
    });
  }

}