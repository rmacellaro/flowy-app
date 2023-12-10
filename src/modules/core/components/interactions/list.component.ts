import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interaction } from '../../models/core/interaction.model';
import { InteractionsService } from '../../services/interactions.service';

@Component({
  selector: 'interactions-list',
  template: `
    <div class="position-relative">
      <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
      
      <ui-empty *ngIf="!interactions || !interactions.length">
        
      </ui-empty>

      <div class="card mb-3" *ngIf="interactions && interactions.length">
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" 
            *ngFor="let item of interactions" 
            href="javascript:;"
            (click)="select(item)"
            >
            
            <div class="row m-0 align-items-center">
              <div class="col-auto" *ngIf="item.type">
                <interaction-type [type]="item.type"></interaction-type>
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
export class InteractionsListComponent implements OnInit {
  
  @Output() onSelect: EventEmitter<Interaction> = new EventEmitter();
  @Input() set idScope(value: number) {
    this.loadData(value);
  }

  public isInLoading: boolean = false;
  public interactions?: Array<Interaction>;
  public interaction?: Interaction;

  constructor(
    private interactionsService: InteractionsService
  ) { }

  ngOnInit(): void { }

  loadData(idScope: number) : void {
    if (!idScope) { return; }
    this.isInLoading = true;
    this.interactionsService.GetInteractionsByIdScope(idScope).subscribe({
      next: (response) => {
        this.interactions = response;
        this.isInLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      } 
    });
  }

  select(item: Interaction): void {
    this.interaction = item;
    this.onSelect.emit(item);
  }
}
