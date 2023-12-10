import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-mainbar',
  template: `
    <div class="border-end bg-body-secondary d-flex flex-row flex-md-column w-100 h-100 align-items-center">

      <div class="flex-grow-0 border-bottom p-1">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link p-2 text-center f-s-1-3" 
              title="Dashboard"
              [routerLink]="['/']"
              [routerLinkActive]="'active-b'"
              [routerLinkActiveOptions]="{exact: true}">
              <span class="text-flowy text-primary-gradient d-block" style="height: 35px; line-height: 42px;">w</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="flex-grow-0 p-1">
        <ng-content></ng-content>
      </div>

      <div class="flex-grow-1">

      </div>
      <div class="flex-grow-0">
        <ng-content select="[bottom]"></ng-content>        
      </div>
    </div>
  `,
  styles: [``]
})
export class LayoutMainbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
