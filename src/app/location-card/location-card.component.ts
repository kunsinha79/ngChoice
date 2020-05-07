import { Component, OnInit } from '@angular/core';

import { WeatherFlightInfoService } from '../service/weather-flight-info.service';
import { IChoice, IWeather } from '../types/choice.types';
import { CHOICE_CONTANTS } from '../constants/choice.constants';
import cities from '../data/choice.data';
import { forkJoin, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  data: IChoice[] = cities;
  weather: Observable<Array<IWeather>>;

  selected = CHOICE_CONTANTS.defaultOrigin;
  isLoading: boolean;

  unsubscribeWeather$ = new Subject();
  unsubscribeFlightInfo$ = new Subject();

  constructor(private weatherFlightInfoService: WeatherFlightInfoService) {}

  ngOnInit() {
    this.getFlightsInfo();
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    forkJoin(
      this.weatherFlightInfoService.getCityWeather(CHOICE_CONTANTS.locationKeyAmsterdam),
      this.weatherFlightInfoService.getCityWeather(CHOICE_CONTANTS.locationKeyMadrid),
      this.weatherFlightInfoService.getCityWeather(CHOICE_CONTANTS.locationKeyBelarus)
    ).pipe(
      takeUntil(this.unsubscribeWeather$)
    ).subscribe(([res1, res2, res3]) => {
      this.data[0].weather = res1;
      this.data[1].weather = res2;
      this.data[2].weather = res3;
    });
  }

  getFlightsInfo() {
    this.isLoading = true;

    forkJoin (
      this.weatherFlightInfoService.getCityFlightDetails(this.selected, CHOICE_CONTANTS.airportAmsterdam),
      this.weatherFlightInfoService.getCityFlightDetails(this.selected, CHOICE_CONTANTS.airportMadrid),
      this.weatherFlightInfoService.getCityFlightDetails(this.selected, CHOICE_CONTANTS.airportBelarus)
    ).pipe(
      takeUntil(this.unsubscribeFlightInfo$)
    ).subscribe(([res1, res2, res3]) => {
      this.data[0].flights = res1;
      this.data[1].flights = res2;
      this.data[2].flights = res3;
      this.isLoading = false;
    },
    () => this.isLoading = false);

  }

  changeCity(city: string) {
    this.selected = city;
    this.getFlightsInfo();
  }

  ngOnDestroy(): void {
    this.unsubscribeWeather$.next();
    this.unsubscribeWeather$.complete();
    this.unsubscribeFlightInfo$.next();
    this.unsubscribeFlightInfo$.complete();
  }
}
