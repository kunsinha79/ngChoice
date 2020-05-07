import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { WeatherFlightInfoService } from './weather-flight-info.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IWeather, IFlightsInfo } from '../types/choice.types';

describe('WeatherFlightInfoService', () => {
  let service: WeatherFlightInfoService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherFlightInfoService, HttpClient]
    });
    service = TestBed.inject(WeatherFlightInfoService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather of the city requested', () => {
    spyOn(http, 'get').and.returnValue(of({list: [{main: {temp: 10.0}}]}));
    service.getCityWeather('ams')
      .subscribe((x: IWeather) => {
        expect(x).toEqual({main: {temp: 10.0}});
        expect(http.get).toHaveBeenCalled();
      });
  });

  it('should return flight info of the city requested', () => {
    spyOn(http, 'get').and.returnValue(of({data: [{ price: 10, fly_duration: '', distance: ''}]}));
    service.getCityFlightDetails('syd', 'ams')
      .subscribe((x: IFlightsInfo) => {
        expect(x).toEqual({ price: 10, fly_duration: '', distance: ''});
        expect(http.get).toHaveBeenCalled();
      });
  });
});
