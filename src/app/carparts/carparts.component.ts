import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carparts',
  templateUrl: './carparts.component.html',
  styleUrls: ['./carparts.component.css']
})
export class CarpartsComponent implements OnInit {

  carParts = [
    {
      'id': 1,
      'name': 'Super Tires',
      'description': 'These tires are the very best',
      'price': 4.99,
      'inStock': 5
    },
    {
      'id': 2,
      'name': 'Reinforced Shocks',
      'description': 'Shocks made from kryptonite',
      'price': 9.99,
      'inStock': 4
    },
    {
      'id': 3,
      'name': 'Padded Seats',
      'description': 'Super soft seats for a smooth ride',
      'price': 24.99,
      'inStock': 0
    }
  ];

  totalCarParts() {
    return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0); // 0은 초기값
  }


  constructor() { }

  ngOnInit() {}

}
