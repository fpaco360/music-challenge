import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { TrackTimePipe } from './track-time.pipe';

@NgModule({
  declarations: [TrackTimePipe],
  exports: [TrackTimePipe],
  imports: [CommonModule]
})
export class TrackTimePipeModule { }
