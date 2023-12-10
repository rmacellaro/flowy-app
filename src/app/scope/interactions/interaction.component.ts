import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-interaction',
  template: `
    <div class="w-100 h-100 d-flex flex-column" *ngIf="idInteraction">
      <div class="flex-grow-0">
        <layout-title *ngIf="interactionDetail.interaction">
          <interaction-type *ngIf="interactionDetail.interaction.type" [type]="interactionDetail.interaction.type"></interaction-type>
          <span>{{interactionDetail.interaction.name}}</span>
          <span subtitle>{{interactionDetail.interaction.description}}</span>

          <div commands class="row m-0 align-items-center">
            <div class="col"></div>
            <div class="col-auto">
              <a class="btn btn-secondary p-2 text-primary" href="javascript:;" (click)="interactionDetail.save()">
                <i class="bi bi-save me-2"></i>
                <span>Salva</span>
              </a>
            </div>
            <div class="col-auto">
              <a class="btn btn-secondary p-2" href="javascript:;" [routerLink]="['..']">
                <i class="bi bi-chevron-left me-2"></i>
                <span class="">Interazioni</span>
              </a>
            </div>
          </div>
        </layout-title>
      </div>
      <div class="flex-grow-1 overflow-auto">
        <interaction-detail #interactionDetail [idInteraction]="idInteraction"></interaction-detail>
      </div>
    </div>
    <div *ngIf="!idInteraction">nessun interazione specificata</div>
  `
})
export class AppScopeInteractionComponent implements OnInit {
  
  public idInteraction?: number;

  constructor(
    private route: ActivatedRoute,
    private helper: AppScopeHelper
  ) { 
    this.route.params.subscribe(params => {
      var idInteractionParm = params['idInteraction'];
      console.log('idInteraction', idInteractionParm);
      if (idInteractionParm) {
        this.idInteraction = parseInt(idInteractionParm);
      }
    });
  }

  ngOnInit(): void { }
}
