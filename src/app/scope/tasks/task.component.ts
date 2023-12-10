import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppScopeHelper } from '../scope.helper';

@Component({
  selector: 'app-scope-task',
  template: `
    <div>Task</div>
    <div *ngIf="idTask">
      <processing-task [idTask]="idTask"></processing-task>
    </div>
  `
})
export class AppScopeTaskComponent implements OnInit {

  public idTask?: number;

  constructor(
    public helper: AppScopeHelper,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      var idTask = params["idTask"];
      console.log('idTask', idTask);
      if (idTask) {
        this.idTask = parseInt(idTask);
      }
    });
  }
}
