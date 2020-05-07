import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CHOICE_CONTANTS } from '../constants/choice.constants';
import { IWeather, IWeatherList, IFlightsInfoList, IFlightsInfo } from '../types/choice.types';

@Injectable({
  providedIn: 'root'
})
export class WeatherFlightInfoService {

  constructor(private httpClient: HttpClient) { }

  getCityWeather(value: String): Observable<IWeather> {
    return this.httpClient
          .get(`${CHOICE_CONTANTS.apiWeatherUrl}${value}${CHOICE_CONTANTS.apiWeatherUrlPredicate}${CHOICE_CONTANTS.apiWeatherKey}`)
          .pipe(
            map((res: IWeatherList) => res.list[0])
          );
  }

  getCityFlightDetails(fromValue:string, toValue: string): Observable<IFlightsInfo> {
    return this.httpClient.
            get(`${CHOICE_CONTANTS.apiFlightUrl}fly_from=${fromValue}&fly_to=${toValue}${CHOICE_CONTANTS.apiFlightUrlPredicate}`)
            .pipe (
              map((res: IFlightsInfoList) => res.data[0] )
            );
  }

}
