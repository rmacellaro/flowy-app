import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModellingModule } from '../modelling/modelling.module';
import { UiModule } from '../ui/ui.module';
import { ProcessDetailComponent } from './components/processes/detail.component';
import { ProcessesListComponent } from './components/processes/list.component';

import { ConsoleMainComponent } from './components/console/main.component';
import { DraftCommandCloneComponent } from './components/drafts/command-clone.component';
import { DeployCommandCloneComponent } from './components/drafts/command-deploy.component';
import { DraftsListComponent } from './components/drafts/list.component';
import { DraftTracksComponent } from './components/drafts/tracks.component';
import { InstanceChooseStateComponent } from './components/instances/choose-state.component';
import { InstanceDetsilComponent } from './components/instances/detail.component';
import { InstancesListComponent } from './components/instances/list.component';
import { InstanceStateComponent } from './components/instances/state.component';
import { InteractionDetailComponent } from './components/interactions/detail.component';
import { InteractionsListComponent } from './components/interactions/list.component';
import { InteractionTypeComponent } from './components/interactions/type.component';
import { ProcessessChooseComponent } from './components/processes/choose.component';
import { ProcessSchemaComponent } from './components/processes/schema.component';
import { ProcessingTaskComponent } from './components/processing/task.component';
import { ScopesListComponent } from './components/scopes/list.component';
import { TenantsListComponent } from './components/tenants/list.component';
import { TenantNewComponent } from './components/tenants/new.component';
import { DraftsService } from './services/drafts.service';
import { InstancesService } from './services/instances.service';
import { InteractionsService } from './services/interactions.service';
import { ProcessesService } from './services/processes.service';
import { ProcessingService } from './services/processing.service';
import { ScopesService } from './services/scopes.service';
import { TenantsService } from './services/tenants.service';

@NgModule({
  declarations: [
    TenantsListComponent,
    TenantNewComponent,
    ScopesListComponent,
    ProcessSchemaComponent,
    ProcessesListComponent,
    ProcessDetailComponent,
    ProcessessChooseComponent,
    DraftsListComponent,
    DraftTracksComponent,
    DraftCommandCloneComponent,
    DeployCommandCloneComponent,
    ConsoleMainComponent,
    InstancesListComponent,
    InstanceStateComponent,
    InstanceChooseStateComponent,
    InstanceDetsilComponent,
    ProcessingTaskComponent,
    InteractionsListComponent,
    InteractionTypeComponent,
    InteractionDetailComponent
  ],
  imports: [ 
    CommonModule,
    UiModule,
    ModellingModule
  ],
  exports: [
    TenantsListComponent,
    TenantNewComponent,
    ScopesListComponent,
    ProcessSchemaComponent,
    ProcessesListComponent,
    ProcessDetailComponent,
    ProcessessChooseComponent,
    DraftsListComponent,
    DraftTracksComponent,
    DraftCommandCloneComponent,
    DeployCommandCloneComponent,
    ConsoleMainComponent,
    InstancesListComponent,
    InstanceStateComponent,
    InstanceChooseStateComponent,
    InstanceDetsilComponent,
    ProcessingTaskComponent,
    InteractionsListComponent,
    InteractionTypeComponent,
    InteractionDetailComponent
  ],
  providers: [
    TenantsService,
    ScopesService,
    ProcessesService,
    DraftsService,
    ProcessingService,
    InstancesService,
    InteractionsService
  ],
})
export class FlowyCoreModule {}