import { Component, Input, OnInit } from '@angular/core';
import { DraftTrack } from '../../models/core/draft-track.model';
import { DraftsService } from '../../services/drafts.service';

@Component({
  selector: 'draft-tracks',
  template: `
    <div class="position-relative">
      <ui-spinner [isInLoading]="isInLoading"></ui-spinner>

      <table class="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th>eventAt</th>
            <th>userIdentifier</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of draftTracks">
            <td>{{item.eventAt}}</td>
            <td>{{item.userIdentifier}}</td>
            <td>{{item.operation}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class DraftTracksComponent implements OnInit {

  @Input() set idDraft(value: number) {
    this.loadData(value);
  }

  public isInLoading: boolean = false;
  public draftTracks?: Array<DraftTrack>;

  constructor(
    private draftsService: DraftsService
  ) { }

  ngOnInit(): void { }

  loadData(value: number) : void{
    this.isInLoading = true;
    this.draftsService.GetDraftTracksByIdDraft(value).subscribe({
      next: (result) => {
        console.log(result);
        this.draftTracks = result;
        this.isInLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isInLoading = false;
      }
    });
  }
}
