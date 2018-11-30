import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CarRacesComponent} from './car-race.component';
import {CarRaceService} from './car-race-data.service';

@NgModule({
  imports: [ CommonModule, FormsModule ], // ngModel 사용으로 FormsModule 추가
  declarations: [ CarRacesComponent ],
  exports: [      CarRacesComponent ],
  providers: [    CarRaceService ]
})
export class CarRaceModule{

}
