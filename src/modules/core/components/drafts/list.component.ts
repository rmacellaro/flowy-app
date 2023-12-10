import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Draft } from '../../models/core/draft.model';
import { DraftsService } from '../../services/drafts.service';

@Component({
  selector: 'drafts-list',
  template: `
    <div class="position-relative">
      <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
      
      <ui-empty *ngIf="!drafts || !drafts.length">
        
      </ui-empty>

      <div class="card mb-3" *ngIf="drafts && drafts.length">
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" 
            *ngFor="let item of drafts" 
            href="javascript:;"
            (click)="select(item)"
            >
            
            <div class="row m-0 align-items-center">
              <div class="col-auto">
                <i icon="" class="bi bi-bezier2 f-s-1-6"></i>
              </div>
              <div class="col">
                <div>{{item.name}}</div>
                <div class="fst-italic f-s-09 text-muted">{{item.description}}</div>
              </div>
            </div>
            
          </a>
        </div>
      </div>
    </div>
  `
})
export class DraftsListComponent implements OnInit {
  
  @Output() onSelect: EventEmitter<Draft> = new EventEmitter();
  @Input() set idScope(value: number) {
    this.loadData(value);
  }

  public isInLoading: boolean = false;
  public drafts?: Array<Draft>;
  public draft?: Draft;

  constructor(
    private draftsService: DraftsService
  ) { }

  ngOnInit(): void { }

  loadData(idScope: number) : void {
    if (!idScope) { return; }
    this.isInLoading = true;
    this.draftsService.GetDraftsByIdScope(idScope).subscribe({
      next: (response) => {
        this.drafts = response;
        this.isInLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      } 
    });
  }

  select(item: Draft): void {
    this.draft = item;
    this.onSelect.emit(item);
  }
}
