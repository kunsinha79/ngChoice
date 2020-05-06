import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherFlightInfoService } from './service/weather-flight-info.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationSelectComponent } from './location-select/location-select.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationCardComponent,
    LocationSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [WeatherFlightInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
