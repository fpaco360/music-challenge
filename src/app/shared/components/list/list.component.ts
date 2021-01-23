import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

import { CONSTANTS } from '../../../utils/constants';
import { Track } from '../../../utils/track';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public tracks: Track[];
  @Output() public selectedEvent: EventEmitter<Track> = new EventEmitter<Track>();

  public selectedTrack: Track;
  public selectedOptions: Track[];
  constructor() {
    this.tracks = [];
    this.selectedOptions = [];
    this.selectedTrack = null;
  }

  public ngOnInit(): void { }

  public onChange(event: MatSelectionListChange) {
    this.selectedEvent.emit(event.options[CONSTANTS.ZERO].value);
  }

}
