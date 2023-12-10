import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tenant } from '../../models/core/tenant.model';
import { Request } from '../../models/search/request.model';
import { Sort } from '../../models/search/sort.model';
import { TenantsService } from '../../services/tenants.service';

@Component({
  selector: 'tenant-list',
  template: `
    <div class="position-relative">
      <ui-spinner [isInLoading]="isInLoading"></ui-spinner>

      <div class="mb-3" *ngIf="tenants && !tenants.length">
        <ui-empty></ui-empty>
      </div>
      
      <div class="card mb-3" *ngIf="tenants">
        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" 
            *ngFor="let item of tenants" 
            href="javascript:;" 
            (click)="select(item)"
            [ngClass]="{'active': item.id == tenant?.id}"
            >
            <div class="row m-0 align-items-center">
              <div class="col-auto">
                <i class="bi bi-layers-half f-s-1-6"></i>
              </div>
              <div class="col">
                <div>{{item.name}}</div>
                <div class="fst-italic f-s-09 text-muted">{{item.description}}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `
})
export class TenantsListComponent implements OnInit {
  
  @Output() onSelect: EventEmitter<Tenant> = new EventEmitter();

  public isInLoading: boolean = false;
  public request: Request;
  public tenant?: Tenant;
  public tenants?: Array<Tenant>;

  constructor(
    private tenantsService: TenantsService
  ) { 
    this.request = new Request();
    this.request.offset = 0;
    this.request.size = 10;
    this.request.sort = new Sort();
    this.request.sort.column = 'Id';
    this.request.sort.method = 'DESC';
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    console.log(this.request);
    this.tenantsService.search(this.request).subscribe({
      next: (result) => {
        this.tenants = result.items;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  select(item: Tenant): void {
    this.tenant = item;
    this.onSelect.emit(this.tenant);
  }
}
