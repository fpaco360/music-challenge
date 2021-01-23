import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full ' },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) 
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then((m) => m.LocationModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then((m) => m.MusicModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
