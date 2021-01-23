import { Component, OnInit, OnDestroy } from '@angular/core';
import { Howl } from 'howler';

import { CONSTANTS } from 'src/app/utils/constants';
import { Track } from '../../utils/track';
import { tracks } from '../../utils/tracks';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, OnDestroy {

  public tracks: Track[];
  public selectedTrack: Track;
  public currentPlayer: Howl;
  constructor() {
    this.tracks = tracks
    this.selectedTrack = new Track();
    this.currentPlayer = null;
  }

  public ngOnInit(): void { }

  public ngOnDestroy(): void {
    if (this.currentPlayer !== null) {
      this.currentPlayer.stop();
    }
  }

  public selectTrack(track: Track): void {
    if (this.currentPlayer !== null) {
      this.currentPlayer.stop();
    }
    this.selectedTrack = track;
  }

  public currentTrack(player: Howl): void {
    this.currentPlayer = player;
  }

  public prevTrack(id: number): void {
    if (id === CONSTANTS.ZERO || id === CONSTANTS.ONE) {
      this.selectedTrack = this.tracks[this.tracks.length - CONSTANTS.ONE];
    } else {
      const newId = id - CONSTANTS.ONE;
      this.selectedTrack = this.tracks.find((track: Track) => {
        return track.id === newId;
      });
    }
  }

  public nextTrack(id: number): void {
    const foundTrack = this.tracks.find((track: Track) => {
      return track.id === id + CONSTANTS.ONE;
    });
    if (!foundTrack) {
      this.selectedTrack = this.tracks[CONSTANTS.ZERO];
    } else {
      this.selectedTrack = foundTrack;
    }
  }

}
