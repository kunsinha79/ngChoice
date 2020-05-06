import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISelectPair } from '../types/choice.types';
import { CHOICE_CONTANTS } from '../constants/choice.constants';


@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html'
})
export class LocationSelectComponent {

  airports: ISelectPair[] = [
    {value: 'CDG', viewValue: 'Paris'},
    {value: 'SYD', viewValue: 'Sydney'},
    {value: 'NYC', viewValue: 'New York'}
  ];

  selected = CHOICE_CONTANTS.defaultOrigin;;

  @Output() city = new EventEmitter<string>();

  constructor() { }

  selectCity(event) {
    this.city.emit(event.source.value);
  }

}
