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
    // 예전 방식 - this.carParts = this.carpartsDataService.getCarParts();
    // resData는 json 전체 데이터를 받아옮.
    this.carpartsDataService.getCarParts().subscribe(resData => this.carParts = resData['data']);
  }

  totalCarParts() {
    if (Array.isArray(this.carParts)) { // reduce는 array 함수이므로 Type체크를 해야 함.
      return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0); // 0은 초기값
    }
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
