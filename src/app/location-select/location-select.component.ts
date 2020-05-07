import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ISelectPair } from '../types/choice.types';
import { CHOICE_CONTANTS } from '../constants/choice.constants';
import { MatSelect } from '@angular/material/select';


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
  @ViewChild(MatSelect) public matSelect: MatSelect;

  constructor() { }

  selectCity(event) {
    this.city.emit(event.source.value);
  }
}
