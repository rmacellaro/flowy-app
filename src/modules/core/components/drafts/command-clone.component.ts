import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Draft } from '../../models/core/draft.model';
import { DraftsService } from '../../services/drafts.service';

@Component({
  selector: 'draft-command-clone',
  template: `
    <a class="btn btn-secondary w-100 position-relative" 
      *ngIf="idDraft"
      href="javascript:;" 
      [ngClass]="{'class': true}"
      (click)="cloneDraft()">
      <ui-spinner [isInLoading]="isInLoading" [color]="'spinner-border-sm'"></ui-spinner>
      Clona Bozza
    </a>
  `
})
export class DraftCommandCloneComponent implements OnInit {

  @Input() idDraft?: number;
  @Output() onCloned: EventEmitter<Draft> = new EventEmitter();
  public isInLoading: boolean = false;

  constructor(
    private draftsService: DraftsService
  ) { }

  ngOnInit(): void { }

  cloneDraft(): void {
    if (!this.idDraft) { return; }
    this.isInLoading = true;
    console.log("dddd", this.idDraft);
    this.draftsService.CloneDraft(this.idDraft).subscribe({
      next: (result) => {
        this.isInLoading = false;
        this.onCloned.emit(result);
      },
      error: (err) => {
        this.isInLoading = false;
        console.error(err);
      }
    });
  }
}
