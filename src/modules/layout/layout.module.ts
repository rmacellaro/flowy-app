import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFlowyComponent } from './components/flowy.component';
import { LayoutInfobarComponent } from './components/infobar.component';
import { LayoutMainbarComponent } from './components/main-bar.component';
import { LayoutSidebarComponent } from './components/sidebar.component';
import { LayoutTitleComponent } from './components/title.component';

@NgModule({
  declarations: [
    LayoutInfobarComponent,
    LayoutMainbarComponent,
    LayoutSidebarComponent,
    LayoutTitleComponent,
    LayoutFlowyComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutInfobarComponent,
    LayoutMainbarComponent,
    LayoutSidebarComponent,
    LayoutTitleComponent,
    LayoutFlowyComponent
  ]
})
export class LayoutModule {}