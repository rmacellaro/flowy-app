import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tenant-new',
  template: `
    <a commands class="btn btn-secondary" href="javascript:;" (click)="add()">
      <i class="bi bi-plus-lg me-2"></i>
      <span>Nuovo</span>
    </a>
  `
})
export class TenantNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  add(): void {

  }
}
