import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-title',
  template: `
    <div class="{{padding}} {{shadow}} {{border}} {{margin}}">
      <div class="row m-0 align-items-center">
        <div class="col-auto">
          <ng-content select="[icon]"></ng-content>
        </div>
        <div class="col">
          <div><ng-content></ng-content></div>
          <div class="fw-light f-s-08 opacity-50"><ng-content select="[subtitle]"></ng-content></div>
        </div>
        <div class="col-auto">
          <ng-content select="[commands]"></ng-content>
        </div>
      </div>
    </div>
  `
})
export class LayoutTitleComponent implements OnInit {

  //@Input() public cssClass: string = 'py-2';
  @Input() public padding: string = 'p-2';
  @Input() public shadow: string = 'shadow-sm';
  @Input() public border: string = 'border-bottom';
  @Input() public margin: string = 'm-0';

  constructor() { }

  ngOnInit(): void { }
}
