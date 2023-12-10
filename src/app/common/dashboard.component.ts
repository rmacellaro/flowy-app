import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <layout-title>
      <span>Dashboard</span>
      <span subtitle>Benvenuto nel sistema Flowy, workflow management!</span>
    </layout-title>
    <div class="p-5">
      <div class="row">
        <div class="col">
          <div class="fs-1 text-flowy">
            <span class="text-muted opacity-75">Flo</span>
            <span class="text-primary-gradient">w</span>
            <span class="text-muted opacity-75">y</span>
          </div>
          <div class="fw-light f-s-09 opacity-50">Workflow Management</div>
        </div>
      </div>
    </div>
  `
})
export class AppDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
