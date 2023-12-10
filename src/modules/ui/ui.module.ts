import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiButtonInfoComponent } from './components/button-info.component';
import { UiCamundaLogoComponent } from './components/camunda-logo.component';
import { UiEaselComponent } from './components/easel.component';
import { UiEmptyComponent } from './components/empty.component';
import { UiSpinnerComponent } from './components/spinner.component';

@NgModule({
  declarations: [
    UiSpinnerComponent,
    UiEmptyComponent,
    UiButtonInfoComponent,
    UiEaselComponent,
    UiCamundaLogoComponent
  ],
  imports: [ 
    CommonModule 
  ],
  exports: [
    UiSpinnerComponent,
    UiEmptyComponent,
    UiButtonInfoComponent,
    UiEaselComponent,
    UiCamundaLogoComponent
  ]
})
export class UiModule {}