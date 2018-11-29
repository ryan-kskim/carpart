import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarRacesComponent} from './car-race.component';

describe('CarRaceComponent', () => {
  let component: CarRacesComponent;
  let fixture: ComponentFixture<CarRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
