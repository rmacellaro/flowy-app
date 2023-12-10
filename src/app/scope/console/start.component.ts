import { Component, OnInit } from '@angular/core';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-console-start',
  template: `
    <layout-title>
      <span>Start</span>
      <span subtitle>Avvia la lavorazione di una nuova istanza</span>
    </layout-title>
    <div class="p-5">
      <console-main [idScope]="helper.scope?.id"></console-main>
    </div>
  `
})
export class AppScopeConsoleStartComponent implements OnInit {
  
  constructor(
    public helper: AppScopeHelper
  ) { }

  ngOnInit(): void { }
}
