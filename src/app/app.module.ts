import { Component, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { RouterModule, Routes } from '@angular/router';
import { Dropdown } from 'bootstrap';
registerLocaleData(localeIt);

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(){
    console.log('Bootstrap version', Dropdown.VERSION);
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'flowy', pathMatch: 'full'},
  { path: 'flowy', loadChildren: () => import('./main.module').then(m => m.FlowyPagesMainModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }