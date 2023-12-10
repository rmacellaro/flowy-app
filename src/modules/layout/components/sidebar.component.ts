import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidebar',
  template: `
    <div *ngIf="!isShow" class="position-absolute start-0 mt-2">
      <a class="btn btn-link" href="javascript:;" (click)="toggle()">
        <i class="bi bi-list"></i>
      </a>
    </div>
    <div class="bg-body-tertiary h-100 w-sidebar border-end overflow-auto" *ngIf="isShow">
      <ng-content></ng-content>
    </div>
  `
})
export class LayoutSidebarComponent implements OnInit {

  public isShow:boolean = true; 
  
  constructor() { }

  ngOnInit(): void { }
  
  toggle(): void {
    this.isShow = !this.isShow;
  }
}
