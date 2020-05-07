export interface IChoice {
  name: string,
  weather: IWeather,
  description: string,
  selection: boolean,
  flights: IFlightsInfo
};

export interface IWeather {
    main: {
      temp: number
    },
    weather: [
      {
        main: string
      }
    ]
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

export interface IWeatherList {
  list: IWeather[]
}

export interface IFlightsInfoList {
  data: IFlightsInfo
}
