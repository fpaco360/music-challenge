import { NgModule } from '@angular/core';
import { NgxHowlerService } from 'ngx-howler';

import { MusicPlayerComponent } from './music-player.component';
import { SharedModule } from '../../shared/shared.module';
import { TrackTimePipeModule } from 'src/app/utils/pipes/track-time-pipe.module';

@NgModule({
  declarations: [MusicPlayerComponent],
  exports: [MusicPlayerComponent],
  imports: [SharedModule, TrackTimePipeModule],
  providers: [NgxHowlerService]
})
export class MusicPlayerModule { }
