import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-easel',
  template: `
    <div class="w-100 text-center opacity-50">
      <div class="f-s-3 text-muted">
        <i class="bi bi-easel"></i>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class UiEaselComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { }
}
