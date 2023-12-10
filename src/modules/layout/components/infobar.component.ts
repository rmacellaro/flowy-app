import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-infobar',
  template: `
    <div *ngIf="!isShow" class="position-absolute end-0 mt-3">
      <a class="btn btn-link" href="javascript:;" (click)="toggle()">
        <i class="bi bi-info-circle"></i>
      </a>
    </div>
    <div class="bg-body-secondary h-100 border-start d-flex flex-column w-infobar" *ngIf="isShow">
      <div class="w-100 text-start flex-grow-0 p-2">
        <div class="row m-0 align-items-center">
          <div class="col">
            <ng-content select="[title]"></ng-content>
          </div>
          <div class="col-auto">
            <a class="btn btn-link" href="javascript:;" (click)="toggle()">
              <i class="bi bi-x-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="w-100 p-2 px-4 flex-grow-1 overflow-auto">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class LayoutInfobarComponent implements OnInit {

  @Input() public isShow:boolean = true; 
  
  constructor() { }

  ngOnInit(): void { }
  
  toggle(): void {
    this.isShow = !this.isShow;
  }
}
