import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { CHOICE_CONTANTS } from '../constants/choice.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherFlightInfoService {

  constructor(private httpClient: HttpClient) { }

  getWeather(): Observable<any[]> {
    const responseAms = this.httpClient.get(`${CHOICE_CONTANTS.apiWeatherUrl}${CHOICE_CONTANTS.locationKeyAmsterdam}?apikey=${CHOICE_CONTANTS.apiWeatherKey}`);
    const responseMad = this.httpClient.get(`${CHOICE_CONTANTS.apiWeatherUrl}${CHOICE_CONTANTS.locationKeyMadrid}?apikey=${CHOICE_CONTANTS.apiWeatherKey}`);
    const responseBel = this.httpClient.get(`${CHOICE_CONTANTS.apiWeatherUrl}${CHOICE_CONTANTS.locationKeyBelarus}?apikey=${CHOICE_CONTANTS.apiWeatherKey}`);
    return forkJoin([responseAms, responseMad, responseBel]);
  }

  getFlightPrice(value: String): Observable<any[]> {
    const responseAms = this.httpClient.get(`${CHOICE_CONTANTS.apiFlightUrl}fly_from=${value}&fly_to=${CHOICE_CONTANTS.airportAmsterdam}${CHOICE_CONTANTS.apiFlightUrlPredicate}`);
    const responseMad = this.httpClient.get(`${CHOICE_CONTANTS.apiFlightUrl}fly_from=${value}&fly_to=${CHOICE_CONTANTS.airportMadrid}${CHOICE_CONTANTS.apiFlightUrlPredicate}`);
    const responseBel = this.httpClient.get(`${CHOICE_CONTANTS.apiFlightUrl}fly_from=${value}&fly_to=${CHOICE_CONTANTS.airportBelarus}${CHOICE_CONTANTS.apiFlightUrlPredicate}`);

    return forkJoin([responseAms, responseMad, responseBel]);
  }

}
