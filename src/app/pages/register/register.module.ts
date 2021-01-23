import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterService } from './register.service';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [RegisterRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [RegisterService]
})
export class RegisterModule { }
