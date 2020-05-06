import { Component, OnInit } from '@angular/core';

import { WeatherFlightInfoService } from '../service/weather-flight-info.service';
import { IChoice } from '../types/choice.types';
import { CHOICE_CONTANTS } from '../constants/choice.constants';
import cities from '../data/choice.data';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  data: IChoice[] = cities;

  selected = CHOICE_CONTANTS.defaultOrigin;
  isLoading: boolean;

  constructor(private weatherFlightInfoService: WeatherFlightInfoService) {}

  ngOnInit() {
    this.getFlightsInfo();
    this.weatherFlightInfoService.getWeather()
    .subscribe(([res1, res2, res3]) => {
      this.data[0].weather = res1.list[0];
      this.data[1].weather = res2.list[0];
      this.data[2].weather = res3.list[0];
    });
  }

  getFlightsInfo() {
    this.isLoading = true;

    this.weatherFlightInfoService.getFlightPrice(this.selected)
    .subscribe(([res1, res2, res3]) => {
      this.data[0].flights = res1?.data;
      this.data[1].flights = res2?.data;
      this.data[2].flights = res3?.data;
      this.isLoading = false;
    },
    () => this.isLoading = false);
  }

  changeCity(city: string) {
    this.selected = city;
    this.getFlightsInfo();

  }
}
