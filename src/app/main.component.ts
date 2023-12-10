import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-main',
  template: `
    <div class="d-flex flex-column flex-md-row h-100 w-100" data-sp-theme="flowy">
      <div class="flex-grow-0">
        <layout-mainbar>
          <ul class="nav nav-pills flex-md-column">
            <li class="nav-item mt-2">
              <a class="nav-link p-2 py-1 text-center f-s-1-3" 
                title="Tutti i tenants" 
                [routerLink]="['/','flowy', 'tenants']"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-layers"></i>
              </a>
            </li>
            <li class="nav-item mt-2">
              <a class="nav-link p-2 py-1 text-center f-s-1-3" 
                title="Report"
                [routerLink]="['/','flowy','reports']"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-bar-chart"></i>
              </a>
            </li>
            <li class="nav-item mt-2">
              <a class="nav-link p-2 py-1 text-center f-s-1-3" 
                title="Monitor"
                [routerLink]="['/','flowy','reports']"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-tv"></i>
              </a>
            </li>
            <li class="nav-item mt-2">
              <a class="nav-link p-2 py-1 text-center f-s-1-3" 
                title="Admin"
                [routerLink]="['/','flowy','reports']"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-shield"></i>
              </a>
            </li>
            <li class="nav-item mt-2">
              <a class="nav-link p-2 py-1 text-center f-s-1-3" 
                title="Configurazioni"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-gear"></i>
              </a>
            </li>
          </ul>
        </layout-mainbar>
      </div>
      <div class="flex-grow-1">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void { }
}
