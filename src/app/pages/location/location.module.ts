import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';

import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [AgmCoreModule, LocationRoutingModule, SharedModule]
})
export class LocationModule { }
