import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {CarRacesComponent} from './car-race/car-race.component';
import {CarPartTemplatedrivenFormComponent} from './carparts/car-part-templatedriven-form.component';
import {CarPartReactiveFormComponent} from './carparts/car-part-reactive-form.component';

export const ROUTERS: Routes = [
  { path: '', component: AboutComponent },
  { path: 'carpart', component: CarpartsComponent },
  { path: 'carpartTemplateForm', component: CarPartTemplatedrivenFormComponent },
  { path: 'carpartReactiveForm', component: CarPartReactiveFormComponent },
  { path: 'car-race', component: CarRacesComponent }
];

@NgModule({
  // imports, exports -> 's'가 붙이면 배열 []
  imports : [RouterModule.forRoot(ROUTERS)],
  exports : [RouterModule]
})
export class AppRoutingModule {

}
