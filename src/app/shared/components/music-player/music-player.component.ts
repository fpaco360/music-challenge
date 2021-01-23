import { Component, Input, OnChanges, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Howl } from "howler";
import { Subscription, timer } from 'rxjs';

import { CONSTANTS } from '../../../utils/constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Track } from '../../../utils/track';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public track: Track;
  @Output() public playerSub: EventEmitter<Howl> = new EventEmitter<Howl>();
  @Output() public prevEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() public nextEvent: EventEmitter<number> = new EventEmitter<number>();
  public currentDuration: number;
  public duration: number;
  public player: Howl;
  public playing: boolean;
  public ready: boolean;
  public timerSubscription: Subscription;

  constructor(private snackBar: MatSnackBar) {
    this.playing = false;
    this.ready = false;
    this.currentDuration = CONSTANTS.ZERO;
    this.player = null;
    this.track = null;
    this.timerSubscription = new Subscription();
  }

  public ngOnInit(): void {
    this.initSubscription();
    if (this.track.id) {
      this.prepareTrack();
    }
  }

  public ngOnChanges(): void {
    if (this.track.id) {
      this.prepareTrack();
    }
  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  public playTrack(): void {
    this.playing = !this.playing;
    if (this.playing) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  public prepareTrack(): void {
    this.player = new Howl({
      src: `assets/music/${this.track.name}.mp3`,
      html5: true,
      onload: () => {
        this.ready = true;
      },
      onloaderror: () => this.loadError(),
      onend: () => this.finishTrack(),
      onplay: () => this.onPlay(),
      onstop: () => this.onStop(),
    })
  }

  public loadError(): void {
    this.ready = false;
    this.snackBar.open('Error al cargar canción', 'Cerrar', { duration: 2000 })
  }

  public finishTrack(): void {
    this.playing = false;
  }

  public onPlay(): void {
    this.playerSub.emit(this.player);
  }

  public onStop(): void {
    this.playing = false;
    this.ready = false;
  }

  public initSubscription(): void {
    this.timerSubscription = timer(CONSTANTS.ZERO, 1000).subscribe(() => {
      if (this.player !== null) {
        const duration: number = Number(this.player.seek());
        this.currentDuration  = Math.round(duration);
      }
    });
  }

  public backTrack(): void {
    if (this.player !== null) {
      this.player.stop();
    }
    this.playing = false;
    this.prevEvent.emit(this.track.id);
  }

  public nextTrack(): void {
    if (this.player !== null) {
      this.player.stop();
    }
    this.playing = false;
    this.nextEvent.emit(this.track.id);
  }


}
