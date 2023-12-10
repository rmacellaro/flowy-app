import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityBaseService } from 'src/modules/security/services/base.service';
import { InstanceTask } from '../models/core/instance-task.model';
import { Instance } from '../models/core/instance.model';
import { Interaction } from '../models/core/interaction.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService extends SecurityBaseService {

  public Start(idProcess: number): Observable<Instance> {
    var params: HttpParams = new HttpParams();
    params = params.set('idProcess', idProcess.toString());
    return this.http.post(environment.api_flowy + 'Processing/Start', {

    }, { params});
  }

  public GetInstanceTaskById(idTask: number): Observable<InstanceTask> {
    var params: HttpParams = new HttpParams();
    params = params.set('idTask', idTask.toString());
    return this.http.get(environment.api_flowy + 'Processing/GetInstanceTaskById', { params });
  }

  public GetInteractionByIdTask(idTask: number): Observable<Interaction> {
    var params: HttpParams = new HttpParams();
    params = params.set('idTask', idTask.toString());
    return this.http.get(environment.api_flowy + 'Processing/GetInteractionByIdTask', { params });
  }
}