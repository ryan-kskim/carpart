import {Injectable} from '@angular/core';
import {CARPARTS} from './mocks';

// Data Service 사용을 위해서는 @Injectable 데코레이터를 반드시 추가
// https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
//  => Tree Shakable Providers
@Injectable({
  providedIn: 'root',
})
export class CarpartsDataService {

  constructor() {
    console.log('CarpartsDataService constructor called..');
  }

  getCarParts() {
    return CARPARTS;
  }
}
