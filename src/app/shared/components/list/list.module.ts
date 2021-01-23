import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [SharedModule, FormsModule]
})
export class ListModule { }
