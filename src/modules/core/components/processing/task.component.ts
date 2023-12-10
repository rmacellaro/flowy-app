import { Component, Input, OnInit } from '@angular/core';
import { InstanceTask } from '../../models/core/instance-task.model';
import { Interaction } from '../../models/core/interaction.model';
import { ProcessingService } from '../../services/processing.service';

@Component({
  selector: 'processing-task',
  template: `
    <div class="position-relative">
      <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
      <div>Processing Task</div>
    </div>
  `
})
export class ProcessingTaskComponent implements OnInit {

  @Input() idTask?: number;

  public isInLoading: boolean = false;
  public task?: InstanceTask;
  public interaction?: Interaction;

  constructor(
    private processingService: ProcessingService
  ) { }

  ngOnInit(): void { 
    this.loadTask();
  }

  loadTask(): void {
    if (!this.idTask){ return; }
    this.isInLoading = true;
    this.processingService.GetInstanceTaskById(this.idTask).subscribe({
      next: (result) => {
        console.log('task', result);
        this.task = result;
        this.isInLoading = false;
        this.loadInteraction();
      },
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      }
    });
  }

  loadInteraction(): void {
    if (!this.idTask){ return; }
    this.isInLoading = true;
    this.processingService.GetInteractionByIdTask(this.idTask).subscribe({
      next: (result) => {
        console.log('interaction', result);
        this.interaction = result;
        this.isInLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      }
    });
  }
  
}
