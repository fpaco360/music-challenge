import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RegisterService } from '../register/register.service';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [RegisterService]
})
export class HomeModule { }
