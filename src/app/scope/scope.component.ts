import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScopesService } from 'src/modules/core/services/scopes.service';
import { AppScopeHelper } from './scope.helper';

@Component({
  selector: 'app-scope',
  template: `
  <ui-spinner [isInLoading]="isInLoading"></ui-spinner>
  <div class="w-100 h-100 d-flex flex-md-row flex-column">
    <div class="flex-grow-0" *ngIf="helper.scope">
      <layout-sidebar>
        <layout-title [shadow]="''">
          <!--<i icon class="bi bi-diagram-2 f-s-1-6"></i>-->
          <div class="text-ellipsis">{{helper.scope.name}}</div>
          <span subtitle>Scope</span>
        </layout-title>
        
        <div class="p-2">
          <ul class="nav nav-pills flex-column" *ngIf="helper.scope">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['dashboard']" [routerLinkActive]="'active'">
                <i class="bi bi-house me-2"></i>
                <span class="">Dashboard</span>
              </a>
            </li>

            <li class="px-3 f-s-08 text-muted mt-3 mb-1 opacity-50">Modellazione</li>
            <li class="nav-item" [routerLink]="['drafts']" [routerLinkActive]="'active'">
              <a class="nav-link" href="javascript:;" [routerLink]="['drafts']" [routerLinkActive]="'active'">
                <i class="bi bi-bezier me-2"></i>
                <span class="">Bozze</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['processes']" [routerLinkActive]="'active'">
                <i class="bi bi-diagram-3 me-2"></i>
                <span class="">Processi</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['interactions']" [routerLinkActive]="'active'">
                <i class="bi bi-window me-2"></i>
                <span class="">Interazioni</span>
              </a>
            </li>
            
            <li class="px-3 f-s-08 text-muted mt-1 mb-1 opacity-50">Lavorazione</li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['instances']" [routerLinkActive]="'active'">
                <i class="bi bi-list-columns me-2"></i>
                <span class="">Istanze</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['working']" [routerLinkActive]="'active'">
                <i class="bi bi-list-task me-2"></i>
                <span class="">Tasks</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;" [routerLink]="['start']" [routerLinkActive]="'active'">
                <i class="bi bi-play me-2"></i>
                <span class="">Start</span>
              </a>
            </li>
          </ul>
        </div>
      </layout-sidebar>
    </div>
    <div class="flex-grow-1"><router-outlet></router-outlet></div>
  </div> 
  `
})
export class AppScopeComponent implements OnInit {

  public isInLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public helper: AppScopeHelper,
    private scopesService: ScopesService
  ) { 
    this.route.params.subscribe(params => {
      var identifier = params['idScope'];
      if (!identifier) { return; }
      this.loadScope(parseInt(identifier));
    });
  }

  ngOnInit(): void { }

  loadScope(id: number): void {
    if (!id) { return; }
    console.log('.........', id);
    this.isInLoading = true;
    this.scopesService.GetScopeById(id).subscribe({
      next: (scope) => {
        this.isInLoading = false;
        console.log('scope', scope);
        if (scope) {
          this.helper.setScope(scope);
        } else {
          this.router.navigate(['/']);
        }
      }, 
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      }
    });
  }
}
