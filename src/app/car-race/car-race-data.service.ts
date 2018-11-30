import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarRace} from './car-race';


@Injectable(/*{
  // carparts.module.ts 에 등록해서 이 부분 주석처리. carparts 에서만 사용 가능
  providedIn: 'root' // root module에 등록하겠다. ES6 부터 적용
}*/)
export class CarRaceService {

  constructor(private httpClient: HttpClient) {
    console.log('CarRaceDataService constructor called..');
  }

  // Observable 사용
  getCarRaces(): Observable<any> {
    return this.httpClient.get('assets/car-race.json', {responseType: 'json'});
  }

  // Promise 사용
  getCarRacePromise(): Promise<CarRace[]> {
    return this.httpClient.get('assets/car-race.json')
      .toPromise()
      .then(res => res['racesData']) // 정상적인 경우
      .catch(err => console.log('Error 발생 ', err)); // 에러발생인 경우
  }
}
