import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DraftsService } from '../../services/drafts.service';

@Component({
  selector: 'draft-command-deploy',
  template: `
    <a class="btn btn-secondary w-100 position-relative" 
      *ngIf="idDraft"
      href="javascript:;" 
      [ngClass]="{'class': true}"
      (click)="deployDraft()">
      <ui-spinner [isInLoading]="isInLoading" [color]="'spinner-border-sm'"></ui-spinner>
      Distribuisci Bozza
    </a>
  `
})
export class DeployCommandCloneComponent implements OnInit {

  @Input() idDraft?: number;
  @Output() onDeployed: EventEmitter<any> = new EventEmitter();
  public isInLoading: boolean = false;

  constructor(
    private draftsService: DraftsService
  ) { }

  ngOnInit(): void { }

  deployDraft(): void {
    if (!this.idDraft) { return; }
    this.isInLoading = true;
    this.draftsService.DeployDraft(this.idDraft).subscribe({
      next: (result) => {
        this.isInLoading = false;
        this.onDeployed.emit(result);
        if (!result) { alert("Nessun processo distribuito");}
        console.log('rrr', result);
      },
      error: (err) => {
        this.isInLoading = false;
        console.error(err);
      }
    });
  }
}
