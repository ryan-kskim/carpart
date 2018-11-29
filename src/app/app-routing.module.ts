import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {CarRacesComponent} from './car-race/car-race.component';

export const ROUTERS: Routes = [
  { path: '', component: AboutComponent },
  { path: 'carpart', component: CarpartsComponent },
  { path: 'car-race', component: CarRacesComponent }
];

@NgModule({
  // imports, exports -> 's'가 붙이면 배열 []
  imports : [RouterModule.forRoot(ROUTERS)],
  exports : [RouterModule]
})
export class AppRoutingModule {

}
