import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowyCoreModule } from 'src/modules/core/core.module';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { ModellingModule } from 'src/modules/modelling/modelling.module';
import { UiModule } from 'src/modules/ui/ui.module';
import { AppScopeConsoleStartComponent } from './console/start.component';
import { AppScopeDashboardComponent } from './dashboard/dashboard.component';
import { AppScopeDraftComponent } from './drafts/draft.component';
import { AppScopeDraftsComponent } from './drafts/drafts.component';
import { AppScopeInstanceComponent } from './instances/instance.component';
import { AppScopeInstancesComponent } from './instances/instances.component';
import { AppScopeInteractionComponent } from './interactions/interaction.component';
import { AppScopeInteractionsComponent } from './interactions/interactions.component';
import { AppScopeProcessesComponent } from './processes/processes.component';
import { AppScopeComponent } from './scope.component';
import { AppScopeHelper } from './scope.helper';
import { AppScopeTaskComponent } from './tasks/task.component';
import { AppScopeTasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  { path: '', component: AppScopeComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: AppScopeDashboardComponent},
    { path: 'processes', component: AppScopeProcessesComponent },
    { path: 'drafts', component: AppScopeDraftsComponent },
    { path: 'drafts/:idDraft', component: AppScopeDraftComponent },
    { path: 'start', component: AppScopeConsoleStartComponent},
    { path: 'instances', component: AppScopeInstancesComponent },
    { path: 'instances/:idInstance', component: AppScopeInstanceComponent },
    { path: 'tasks', component: AppScopeTasksComponent },
    { path: 'tasks/:idTask', component: AppScopeTaskComponent },
    { path: 'interactions', component: AppScopeInteractionsComponent },
    { path: 'interactions/:idInteraction', component: AppScopeInteractionComponent },
  ]}
];

@NgModule({
  declarations: [
    AppScopeDashboardComponent,
    AppScopeComponent,
    AppScopeProcessesComponent,
    AppScopeDraftsComponent,
    AppScopeDraftComponent,
    AppScopeConsoleStartComponent,
    AppScopeInstancesComponent,
    AppScopeInstanceComponent,
    AppScopeInteractionsComponent,
    AppScopeInteractionComponent,
    AppScopeTasksComponent,
    AppScopeTaskComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    UiModule,
    FlowyCoreModule,
    ModellingModule
  ],
  exports: [

  ],
  providers: [
    AppScopeHelper
  ],
})
export class AppScopeModule {}