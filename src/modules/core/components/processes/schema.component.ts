import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BpmnViewerComponent } from 'src/modules/modelling/components/bpmn-viewer/viewer.component';
import { ProcessesService } from '../../services/processes.service';

@Component({
  selector: 'process-schema',
  template: `
    <div style="height: 400px;">
      <bpmn-viewer
        #viewer
        [showDeploymentsLink]="true"
        [schema]="schema">
      </bpmn-viewer>  
    </div>
  `
})
export class ProcessSchemaComponent implements OnInit {

  @ViewChild('viewer', { static: false}) viewer?: BpmnViewerComponent;
  
  @Input() set idProcess(value: number){
    this.loadSchema(value);
  }
  public schema?: string;
  public isInLoading: boolean = false;
  
  constructor(
    private processesService: ProcessesService
  ) { }

  ngOnInit(): void { }


  loadSchema(idProcess: number): void {
    this.isInLoading = true;
    this.processesService.GetSchemaByIdProcess(idProcess).subscribe({
      next: (result) => {
        this.isInLoading = false;
        this.schema = result;
      },
      error: (err) => {
        this.isInLoading = false;
        console.error(err);
      }
    });
  }

  addBadge(
    type: 'active' | 'canceled' | 'incidents' | 'completed',
    elementId: string,
    tot: number
  ): void {
    console.log('addBadge', type, elementId, tot);
    var color = '';
    if ( type == 'active') { color = 'success'; }
    else if ( type == 'canceled') { color = 'danger'; }
    else if ( type == 'incidents') { color = 'warning'; }
    else if ( type == 'completed') { color = 'info'; }

    var html = '<div class="border border-2 border-' + color + ' text-' + color + ' rounded p-0 px-1 bg-body-tertiary f-s-07 fw-bold">' + tot + '</div>';
    this.viewer?.addOverlay(elementId, html);
  }

  clear(): void {
    this.viewer?.clearOverlay();
  }
}
