import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CHOICE_CONTANTS } from '../constants/choice.constants';
import { IWeather, IWeatherList, IFlightsInfoList, IFlightsInfo } from '../types/choice.types';

@Injectable({
  providedIn: 'root'
})
export class WeatherFlightInfoService {

  private currentDate: string;
  private nextDate: string;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), CHOICE_CONTANTS.dateFormat);
    this.nextDate = this.datePipe.transform((this.addMonths(new Date(), 3)), CHOICE_CONTANTS.dateFormat);
  }

  getCityWeather(value: String): Observable<IWeather> {
    return this.httpClient
          .get(`${CHOICE_CONTANTS.apiWeatherUrl}${value}${CHOICE_CONTANTS.apiWeatherUrlPredicate}${CHOICE_CONTANTS.apiWeatherKey}`)
          .pipe(
            map((res: IWeatherList) => res.list[0])
          );
  }

  getCityFlightDetails(fromValue:string, toValue: string): Observable<IFlightsInfo> {

    return this.httpClient.
            get(`${CHOICE_CONTANTS.apiFlightUrl}fly_from=${fromValue}&fly_to=${toValue}&date_from=${this.currentDate}&date_to=${this.nextDate}${CHOICE_CONTANTS.apiFlightUrlPredicate}`)
            .pipe (
              map((res: IFlightsInfoList) => res.data[0] )
            );
  }

  private addMonths(date: Date, months: number): Date {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  }

}
