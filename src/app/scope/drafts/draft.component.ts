import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Draft } from 'src/modules/core/models/core/draft.model';
import { DraftsService } from 'src/modules/core/services/drafts.service';
import { BpmnModelerComponent } from 'src/modules/modelling/components/bpmn-modeler/modeler.component';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-draft',
  template: `
    <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
    <div class="w-100 h-100 d-flex flex-column" *ngIf="draft">
      <div class="flex-grow-0">
        <layout-title>
          <i icon class="bi bi-bezier2 f-s-1-6 text-primary-gradient"></i>       
          <span>{{draft.name}}</span>
          <span subtitle>{{draft.description}}</span>

          <div commands class="row m-0 align-items-center">
            <div class="col"></div>
            <div class="col-auto">
              <a class="btn btn-secondary p-2 text-primary" href="javascript:;" (click)="save()">
                <i class="bi bi-save me-2"></i>
                <span>Salva</span>
              </a>
            </div>
            <div class="col-auto">
              <a class="btn btn-secondary p-2" href="javascript:;" [routerLink]="['..']">
                <i class="bi bi-chevron-left me-2"></i>
                <span class="">Bozze</span>
              </a>
            </div>
          </div>
        </layout-title>
      </div>
      <div class="flex-grow-1 overflow-auto" *ngIf="schema">
        <bpmn-modeler 
          #bpmnModeler
          [schema]="schema">
        </bpmn-modeler>
      </div>
    </div>
  `
})
export class AppScopeDraftComponent implements OnInit {
  
  @ViewChild('bpmnModeler', { static: false }) private bpmnModeler?: BpmnModelerComponent;

  public draft?: Draft;
  public isInLoading: boolean = false;
  public schema?: string;

  constructor(
    private route: ActivatedRoute,
    private helper: AppScopeHelper,
    private draftsService: DraftsService
  ) { 
    this.route.params.subscribe(params => {
      var idDraftParam = params['idDraft'];
      console.log('DRAFT', idDraftParam);
      this.loadDraft(parseInt(idDraftParam));
    });
  }

  ngOnInit(): void { }

  loadDraft(idDraft: number) : void {
    if (!idDraft) { return; }
    this.isInLoading = true;
    this.draftsService.GetDraftById(idDraft).subscribe({
      next: (result) => {
        this.draft = result;
        this.isInLoading = false;
        this.schema = result.schema;
        console.log('result', result);
      },
      error: (error) => {
        console.error(error);
        this.isInLoading = false;
      }
    });
  }

  save(): void {
    if (!this.bpmnModeler) { return; }
    this.isInLoading = true;
    this.bpmnModeler?.getXml().subscribe({
      next: (result: string) => {
        this.isInLoading = false;
        console.log(result);
        if (!this.draft) { return; }
        this.draft.schema = result;
        this.isInLoading = true;
        this.draftsService.UpdateDraftSchema(this.draft).subscribe({
          next: (result) => {
            this.isInLoading = false;
            console.log(result);
          },
          error: (error) => {
            this.isInLoading = false;
            console.error(error);
          }
        });
      },
      error: (err) => {
        this.isInLoading = false;
        console.error(err);
      }
    });
  }
}
