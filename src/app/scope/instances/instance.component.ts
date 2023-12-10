import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstanceTask } from 'src/modules/core/models/core/instance-task.model';
import { Instance } from 'src/modules/core/models/core/instance.model';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-instance',
  template: `
    <div class="w-100 h-100 overflow-auto" *ngIf="idInstance">
    
      <layout-title>
        <i icon class="bi bi-list-columns f-s-1-6 text-primary-gradient"></i>
        <div>
          <span>Istanza:</span> 
          <span *ngIf="instance" class="mx-2 fw-bold">{{instance.reference}}</span> 
        </div>
        <span subtitle>Dettaglio istanza</span>

        <div commands *ngIf="instance">
          <instance-state [state]="instance.state"></instance-state>
        </div>
      </layout-title>

      <div>
        <instance-detail 
          [idInstance]="idInstance" 
          (onInstance)="instance = $event"
          (onRunTask)="onRunTask($event)">
        </instance-detail>
      </div>
      
    </div>
  `
})
export class AppScopeInstanceComponent implements OnInit {
  
  public idInstance?: number;
  public instance?: Instance;

  constructor(
    public helper: AppScopeHelper,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      var idInstance = params["idInstance"];
      console.log(idInstance);
      if (idInstance) {
        this.idInstance = parseInt(idInstance);
      }
    });
  }

  onRunTask(task: InstanceTask): void {
    this.router.navigate(['../..','tasks',task.id], { relativeTo: this.route})
  }
}
