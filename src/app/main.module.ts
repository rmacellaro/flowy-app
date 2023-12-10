import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../modules/layout/layout.module';
import { UiModule } from '../modules/ui/ui.module';

import { FlowyCoreModule } from 'src/modules/core/core.module';
import { AppDashboardComponent } from './common/dashboard.component';
import { AppTenantsComponent } from './common/tenants.component';
import { AppMainComponent } from './main.component';


const routes: Routes = [
  { path: '', component: AppMainComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: AppDashboardComponent },
    { path: 'tenants', component: AppTenantsComponent },
    { path: ':idScope', loadChildren: () => import('./scope/scope.module').then(m => m.AppScopeModule)}
    /*{ path: ':idProcess', component: PageMainProcesComponent, children: [
      { path: '', redirectTo: 'processing', pathMatch: 'full'},
      { path: 'modelling', loadChildren: () => import('./process/process.module').then(m => m.PageModellingModule)},
      { path: 'processing', loadChildren: () => import('./processing/processing.module').then(m => m.PageProcessingModule)}
    ]}*/
  ]}
];

@NgModule({
  declarations: [
    AppDashboardComponent,
    AppMainComponent,
    AppTenantsComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    HttpClientModule,
    UiModule,
    FlowyCoreModule
  ],
  providers: [
  ]
})
export class FlowyPagesMainModule {}
