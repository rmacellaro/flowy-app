import { Component, Input, OnInit } from '@angular/core';
import { Interaction } from '../../models/core/interaction.model';
import { InteractionsService } from '../../services/interactions.service';

@Component({
  selector: 'interaction-detail',
  template: `
    <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
    <form-editor *ngIf="schema" [schema]="schema"></form-editor>
  `
})
export class InteractionDetailComponent implements OnInit {

  public isInLoading: boolean = false;

  @Input() set idInteraction(value: number) {
    this.loadData(value);
  }

  public interaction?: Interaction;
  public schema?: any;

  constructor(
    private interactionsService: InteractionsService
  ) { }

  ngOnInit(): void { }

  loadData(id: number): void {
    this.isInLoading = true;
    this.interactionsService.GetInteractionById(id).subscribe({
      next: (result) => {
        this.isInLoading = false;
        this.interaction = result;
        console.log('interaction:', this.interaction);
        if(this.interaction.data) {
          this.schema = JSON.parse(this.interaction.data);
        }
      },
      error: (err) => {
        this.isInLoading = false;
        console.error(err);
      }
    });
  }

  save(): void {
    console.log("devo salvare");
  }
}
