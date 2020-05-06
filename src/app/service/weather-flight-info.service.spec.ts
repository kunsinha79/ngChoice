import { TestBed } from '@angular/core/testing';

import { WeatherFlightInfoService } from './weather-flight-info.service';

describe('WeatherFlightInfoService', () => {
  let service: WeatherFlightInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFlightInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
