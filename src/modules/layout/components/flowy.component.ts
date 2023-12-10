import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-flowy',
  template: `
    <div *ngIf="style == 'normal'">
      <ng-container *ngTemplateOutlet="tmpFlowy"></ng-container>    
    </div>

    <div *ngIf="style == 'background'" class="text-center m-5 p-5 opacity-25">
      <ng-container *ngTemplateOutlet="tmpFlowy"></ng-container>    
    </div>

    <ng-template #tmpFlowy>
      <div class="fs-1 text-flowy">
        <span class="text-muted opacity-75">Flo</span>
        <span class="text-flowy-color">w</span>
        <span class="text-muted opacity-75">y</span>
      </div>
      <div class="fw-light f-s-09 opacity-50">Workflow Management</div>  
    </ng-template>    
  `
})
export class LayoutFlowyComponent implements OnInit {

  @Input() style: 'normal' | 'background' = 'normal';

  constructor() { }

  ngOnInit(): void { }
}
