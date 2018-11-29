import {Component, OnInit} from '@angular/core';
import {CarRace} from './car-race';
import {CarRaceService} from './car-race-data.service';

@Component({
  selector: 'app-car-race',
  templateUrl: './car-race.component.html',
  styleUrls: ['./car-race.component.css']
})
export class CarRacesComponent implements OnInit {
  heading = 'Ultra Racing Schedule';
  cash = 10000;
  races: CarRace[];

  constructor(private raceService: CarRaceService) { }

  ngOnInit() {
    this.raceService.getCarRaces()
      .subscribe(resData => this.races = resData['racesData']);
  }

  totalCost() {
    let sum = 0;
    let race: CarRace;
    if (this.races) {
      for (race of this.races) {
        if (race.isRacing) {
          sum += race.entryFee;
        }
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert('You don\'t have enough cash');
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }

}
