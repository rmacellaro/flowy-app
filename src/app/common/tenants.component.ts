import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scope } from 'src/modules/core/models/core/scope.model';
import { Tenant } from 'src/modules/core/models/core/tenant.model';


@Component({
  selector: 'page-main-processes',
  template: `
    <div class="d-flex flex-md-row flex-column w-100 h-100">

      <!-- List Processes -->
      <div class="flex-grow-0 w-40 overflow-auto border-end">

        <layout-title>
          <i icon class="bi bi-layers f-s-1-6 text-primary-gradient"></i>
          <span>Tenants</span>
          <span subtitle>Lista dei tenants gestiti con il sistema</span>
          <tenant-new commands></tenant-new>
        </layout-title>

        <div class="p-4">
          <tenant-list (onSelect)="selectTenant($event)"></tenant-list>
        </div>
      </div>

      <div class="flex-grow-1 bg-body-tertiary" *ngIf="!currentTenant">
        <layout-flowy [style]="'background'"></layout-flowy>
      </div>

      <!-- Form Process -->
      <div class="flex-grow-1 overflow-auto" *ngIf="currentTenant">
        <layout-title>
          <i icon class="bi bi-layers-half f-s-1-6 text-primary-gradient"></i>
          <span>{{currentTenant.name}}</span>
          <span subtitle>{{currentTenant.description}}</span>
        </layout-title>

        <div class="p-4">
          <div class="mb-3">
            <scopes-list [tenant]="currentTenant" (onSelect)="selectScope($event)"></scopes-list>
            <!--<processes-form
              [process]="newProcess"
              (onSaved)="saved($event)">
            </processes-form>-->
          </div>
        </div>
      </div>

      </div>
  `
})
export class AppTenantsComponent implements OnInit {

  public currentTenant?: Tenant;
  public currentScope?: Scope;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    //this.main.reset();
  }

  selectTenant(item?: Tenant): void {
    this.currentTenant = item;
    /*this.newProcess = undefined;
    //this.main.setProcess(item);
    //this.process = item;
    if (!item) { return; }
    this.router.navigate(['..', item.identifier], {relativeTo: this.route});*/
  }
  
  selectScope(item?: Scope): void {
    this.currentScope = item;
    this.router.navigate(['..', item?.id], {relativeTo: this.route});
  }
}
