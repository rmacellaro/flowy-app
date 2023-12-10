import { Component, OnInit, ViewChild } from '@angular/core';
import { DraftsListComponent } from 'src/modules/core/components/drafts/list.component';
import { Draft } from 'src/modules/core/models/core/draft.model';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-drafts',
  template: `
    <div class="d-flex flex-md-row flex-column w-100 h-100">
    
      <div class="flex-grow-0 w-40 overflow-auto border-end">

        <layout-title>
          <i icon class="bi bi-bezier f-s-1-6 text-primary-gradient"></i>
          <span>Bozze</span>
          <span subtitle>Lista delle bozze di processo bpmn per questo ambito</span>
        </layout-title>

        <div class="p-4" *ngIf="helper.scope && helper.scope.id">
          <drafts-list #draftList [idScope]="helper.scope.id" (onSelect)="draft = $event"></drafts-list>        
        </div>
      </div>

      <div class="flex-grow-1 bg-body-tertiary" *ngIf="!draft">
        <layout-flowy [style]="'background'"></layout-flowy>
      </div>

      <div class="flex-grow-1 overflow-auto" *ngIf="draft && draft.id">

        <layout-title>
          <i icon class="bi bi-bezier2 f-s-1-6 text-primary-gradient"></i>       
          <span>{{draft.name}}</span>
          <span subtitle>{{draft.description}}</span>
        </layout-title>
        
        <div class="border-bottom p-4">
          <div class="row m-0">
            <div class="col-md-6 mb-3">
              <draft-command-clone [idDraft]="draft.id" (onCloned)="onCloned($event)"></draft-command-clone>
            </div>
            <div class="col-md-6 mb-3">
              <draft-command-deploy [idDraft]="draft.id"></draft-command-deploy>
            </div>
            <div class="col-md-6 mb-3">
              <a class="btn btn-secondary w-100" href="javascript:;"
                  [routerLink]="['/','flowy', helper.scope?.id,'drafts', draft.id]">
                  Modifica schema
              </a>
            </div>
          </div>
        </div>
        <draft-tracks [idDraft]="draft.id"></draft-tracks>
        
      </div>

    </div>
  `
})
export class AppScopeDraftsComponent implements OnInit {

  @ViewChild('draftList', { static: false}) draftList?: DraftsListComponent;
  public draft?: Draft;

  constructor(
    public helper: AppScopeHelper
  ) { }

  ngOnInit(): void { }
  
  onCloned(draft: Draft): void {
    if (!this.helper.scope || !this.helper.scope.id) { return; }
    this.draftList?.loadData(this.helper.scope.id);
    this.draft = draft;
  }
}
