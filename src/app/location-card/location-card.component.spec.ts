import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { LocationCardComponent } from './location-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationSelectComponent } from '../location-select/location-select.component';
import { WeatherFlightInfoService } from '../service/weather-flight-info.service';
import { Observable, of } from 'rxjs';
import { IWeather, IFlightsInfo } from '../types/choice.types';

describe('LocationCardComponent', () => {
  let component: LocationCardComponent;
  let fixture: ComponentFixture<LocationCardComponent>;
  let weatherFlightInfoService: WeatherFlightInfoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatCardModule, BrowserAnimationsModule ],
      declarations: [ LocationCardComponent, LocationSelectComponent ],
      providers: [ WeatherFlightInfoService, DatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationCardComponent);
    component = fixture.componentInstance;
    weatherFlightInfoService = TestBed.get(WeatherFlightInfoService);

    spyOn(weatherFlightInfoService, 'getCityWeather').and.callFake((): Observable<IWeather> => (
      of({
        main: { temp: 10.0 },
        weather: [
          { main: 'cloudy'}
        ]
      })
    ));
    spyOn(weatherFlightInfoService, 'getCityFlightDetails').and.callFake((): Observable<IFlightsInfo> => (
      of({ price: 100, fly_duration: '', distance: ''})
    ));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInit should call getCityWeather', () => {
    component.ngOnInit();
    expect(weatherFlightInfoService.getCityWeather).toHaveBeenCalled();
    expect(weatherFlightInfoService.getCityFlightDetails).toHaveBeenCalled();
  });

  it('should get data for weather and flights information', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.data[0].weather.main.temp).toBe(10.0);
    expect(component.data[0].flights.price).toBe(100);
  }));

  it('should fetch flights information when changecity is invoked', () => {
    component.changeCity('a');
    expect(weatherFlightInfoService.getCityFlightDetails).toHaveBeenCalled();
    expect(component.selected).toEqual('a');
  });

});
