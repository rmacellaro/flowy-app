import { Component, OnInit, ViewChild } from '@angular/core';
import { InteractionsListComponent } from 'src/modules/core/components/interactions/list.component';
import { Interaction } from 'src/modules/core/models/core/interaction.model';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-interactions',
  template: `
    <div class="d-flex flex-md-row flex-column w-100 h-100">
    
      <div class="flex-grow-0 w-40 overflow-auto border-end">

        <layout-title>
          <i icon class="bi bi-window f-s-1-6 text-primary-gradient"></i>
          <span>Interazioni</span>
          <span subtitle>Lista delle interazioni processo-utente per questo ambito</span>
        </layout-title>

        <div class="p-4" *ngIf="helper.scope && helper.scope.id">
          <interactions-list #interactionsList 
            [idScope]="helper.scope.id" 
            (onSelect)="interaction = $event">
          </interactions-list>        
        </div>
      </div>

      <div class="flex-grow-1 bg-body-tertiary" *ngIf="!interaction">
        <layout-flowy [style]="'background'"></layout-flowy>
      </div>

      <div class="flex-grow-1 overflow-auto" *ngIf="interaction && interaction.id">

        <layout-title>
          <interaction-type icon *ngIf="interaction.type" [type]="interaction.type"></interaction-type>     
          <span>{{interaction.name}}</span>
          <span subtitle>{{interaction.description}}</span>
        </layout-title>
        
        <div class="border-bottom p-4">
          <div class="row m-0">
            <!--<div class="col-md-6 mb-3">
              <draft-command-clone [idDraft]="draft.id" (onCloned)="onCloned($event)"></draft-command-clone>
            </div>
            <div class="col-md-6 mb-3">
              <draft-command-deploy [idDraft]="draft.id"></draft-command-deploy>
            </div>-->
            <div class="col-md-6 mb-3">
              <a class="btn btn-secondary w-100" href="javascript:;"
                  [routerLink]="['/','flowy', helper.scope?.id,'interactions', interaction.id]">
                  Modifica
              </a>
            </div>
          </div>
        </div>
        <!--<draft-tracks [idDraft]="draft.id"></draft-tracks>-->
        
      </div>

    </div>
  `
})
export class AppScopeInteractionsComponent implements OnInit {
  
  @ViewChild('interactionsList', { static: false}) draftList?: InteractionsListComponent;
  public interaction?: Interaction;

  constructor(
    public helper: AppScopeHelper
  ) { }

  ngOnInit(): void { }
}
