import { Component, OnInit } from '@angular/core';
import { Process } from 'src/modules/core/models/core/process.model';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-processes',
  template: `
  <div class="d-flex flex-md-row flex-column w-100 h-100">
    
    <div class="flex-grow-0 w-35 overflow-auto border-end">

      <layout-title>
        <i icon class="bi bi-diagram-3 f-s-1-6 text-primary-gradient"></i>
        <span>Processi</span>
        <span subtitle>Lista dei processi distribuiti per l'ambito</span>
      </layout-title>

      <div class="p-4" *ngIf="helper.scope">
        <processes-list [idScope]="helper.scope.id" (onSelect)="process = $event"></processes-list>
      </div>
    </div>


    <div class="flex-grow-1 bg-body-tertiary" *ngIf="!process">
        <layout-flowy [style]="'background'"></layout-flowy>
    </div>

    <div class="flex-grow-1 overflow-auto" *ngIf="process && process.id">

      <layout-title>
        <div icon class="f-s-1-6 text-primary-gradient">
          V. {{process.version}}
        </div>        
        <span>{{process.name}}</span>
        <span subtitle>{{process.key}}</span>
      </layout-title>
      
      <process-detail [idProcess]="process.id"></process-detail>
      
    </div>
  </div>
  `
})
export class AppScopeProcessesComponent implements OnInit {

  public process?: Process;

  constructor(
    public helper: AppScopeHelper
  ) { }

  ngOnInit(): void { }
}
