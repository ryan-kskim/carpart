import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


// Data Service 사용을 위해서는 @Injectable 데코레이터를 반드시 추가
// https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
//  => Tree Shakable Providers
@Injectable({
  providedIn: 'root'
})
export class CarpartsDataService {

  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService constructor called..');
  }

  // Observable 사용
  getCarParts(): Observable<any> {
    // return CARPARTS;
    return this.httpClient.get('assets/car-part.json', {responseType: 'json'});
  }
}
