import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {CarPart} from './car-part';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-car-part-templatedriven-form',
  templateUrl: './car-part-templatedriven-form.component.html'
})
export class CarPartTemplatedrivenFormComponent {

  constructor( private carpartDataSvc: CarpartsDataService,
               private location: Location) { }

  onSubmit(form) {
    const formData = form.value as CarPart;
    // console.log(formData);
    // alert(formData.id + ' ' + formData.name);
    this.carpartDataSvc.addCarPart(formData).subscribe(() => this.goBack() ); // 등록하고 바로 뒤로 돌아감.
  }

  goBack() {
    this.location.back();
  }

}
