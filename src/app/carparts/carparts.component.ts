import {Component, OnInit} from '@angular/core';
import {CarPart} from './car-part';
//import {CARPARTS} from './mocks';
import {CarpartsDataService} from './carparts-data.service';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {

  carParts: CarPart[];

  constructor(private carpartsDataService: CarpartsDataService) {
    console.log('CarpartsComponent constructor called..');
  }

  ngOnInit() {
    console.log('CarpartsComponent ngOnInt called..');
    // CARPARTS를 서비스에서 호출, carparts.component -> carparts-data.service -> mocks
    this.carParts = this.carpartsDataService.getCarParts();
  }

  totalCarParts() {
    return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0); // 0은 초기값
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity++;
    }
  }

  downQuantity(carPart) {
    if (carPart.quantity !== 0) {
      carPart.quantity--;
    }
  }

  keyupQuantity(carPart, event) {
    console.log('value : ' + event.target.value);
    if (event.target.value <= carPart.inStock) {
      carPart.quantity = event.target.value;
    }
  }
}
