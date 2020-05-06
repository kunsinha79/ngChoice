export interface IChoice {
  name: string,
  weather: IWeather,
  description: string,
  selection: boolean,
  flights: IFlightsInfo[]
};

export interface IWeather {

    main: {
      temp: number
    }

}

export interface IFlightsInfo {
  price: number,
  fly_duration: string,
  distance: string
}

export interface ISelectPair {
  value: string,
  viewValue: string
}
