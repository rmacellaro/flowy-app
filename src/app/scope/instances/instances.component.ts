import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Process } from 'src/modules/core/models/core/process.model';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-instances',
  template: `
    <div class="d-flex flex-md-row flex-column w-100 h-100" *ngIf="helper.scope && helper.scope.id">
    
    <div class="flex-grow-0 w-30 overflow-auto border-end">
      <layout-title>
        <i icon class="bi bi-search f-s-1-6 text-primary-gradient"></i>
        <span>Ricerca</span>
        <span subtitle>Ricerca istanze</span>
      </layout-title>

      <div class="p-3">
        <div class="mb-3">
          <processes-choose 
            [idProcess]="idProcessPreselect"
            [idScope]="helper.scope.id" 
            (onSelect)="selectProcess($event)">
          </processes-choose>
        </div>

        <div class="mb-2">
          <instance-choose-state
            [state]="statePreselect"
            (OnChoose)="selectState($event)">
          </instance-choose-state>
        </div>
      </div>
    </div>

    <div class="flex-grow-1 overflow-auto">
      <layout-title>
        <i icon class="bi bi-list-columns f-s-1-6 text-primary-gradient"></i>
        <span>Istanze</span>
        <span subtitle>Lista delle istanze di processo per questo ambito</span>
      </layout-title>

      <div class="p-3" *ngIf="process">
        <instances-list 
          [idScope]="helper.scope.id" 
          [process]="process" 
          [state]="state"
          [itemCommandsTemplate]="itemCommands">

          <ng-template #itemCommands let-item>
            <a *ngIf="item" class="btn btn-secondary" [routerLink]="['.', item.id]">Dettaglio</a>
          </ng-template>
          
        </instances-list> 
         
      </div>
    </div>
  </div>
  `
})
export class AppScopeInstancesComponent implements OnInit {

  // preselezione da quaryString
  public idProcessPreselect?: number;
  public statePreselect?: string;

  // selezioni attuali
  public state?: string;
  public process?: Process;

  constructor(
    public helper: AppScopeHelper,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      var idProcess = params["idProcess"];
      if (idProcess) { this.idProcessPreselect = parseInt(idProcess); }
      var state = params["state"];
      if (state) { this.statePreselect = state; }
    });
  }

  selectProcess(process: Process): void {
    this.process = process;
    this.addQuaryParam({ idProcess: process.id });
  }

  selectState(state: string): void {
    this.state = state;
    this.addQuaryParam({ state });
  }

  private addQuaryParam(param: any): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: param,
      queryParamsHandling: 'merge'
    });
  }
  
}
