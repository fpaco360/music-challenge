import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music.component';
import { MusicRoutingModule } from './music-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { MusicPlayerModule } from '../../shared/components/music-player/music-player.module';
import { ListModule } from '../../shared/components/list/list.module';

@NgModule({
  declarations: [MusicComponent],
  imports: [MusicRoutingModule, SharedModule, MusicPlayerModule, ListModule]
})
export class MusicModule { }
