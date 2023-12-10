import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../ui/ui.module';
import { BpmnModelerComponent } from './components/bpmn-modeler/modeler.component';
import { BpmnViewerComponent } from './components/bpmn-viewer/viewer.component';
import { FormEditorComponent } from './components/form-editor/form-editor.component';
import { FormPlaygroundComponent } from './components/form-playground/form-playground.component';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';

@NgModule({
  declarations: [
    BpmnModelerComponent,
    BpmnViewerComponent,
    FormEditorComponent,
    FormViewerComponent,
    FormPlaygroundComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    UiModule
  ],
  exports: [
    BpmnModelerComponent,
    BpmnViewerComponent,
    FormEditorComponent,
    FormViewerComponent,
    FormPlaygroundComponent
  ],
  providers: [
  ],
})
export class ModellingModule {}