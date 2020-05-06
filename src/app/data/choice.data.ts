import { IChoice } from '../types/choice.types';

let cities: IChoice[] =  [
  {
    name: 'Amsterdam',
    weather: {
      Temperature: {
        Imperial: {
          Value: 0
        }
      }
    },
    description: 'Amsterdam is one of the greatest small cities in the world.' +
                  'From Amsterdam canals to world-famous Amsterdam museums and historical Amsterdam sights,' +
                  'it is one of the most romantic and beautiful cities in Europe. Canal cruises are a popular way to see the city from the perspective of its canals.',
    selection: false,
    flights: [{
      price: 0,
      fly_duration: '',
      distance: ''
    }]
  },
  {
    name: 'Madrid',
    weather: {
      Temperature: {
        Imperial: {
          Value: 0
        }
      }
    },
    description: 'Madrid is the capital of Spain, and is home to the Spanish Royal family as well as the Spanish Government.' +
                  'It is a modern metropolitan city and an economical and industrial center of Spain, and, ' +
                  'with its population of nearly 3,5 million people, is also the biggest city in Spain',
    selection: false,
    flights: [{
      price: 0,
      fly_duration: '',
      distance: ''
    }]
  },
 {
    name: 'Budapest',
    weather: {
      Temperature: {
        Imperial: {
          Value: 0
        }
      }
    },
    description: 'Once called the “Queen of the Danube,” Budapest has long been the focal point of the nation and a lively cultural centre.' +
                  'The city straddles the Danube (Hungarian: Duna) River in the magnificent natural setting where the hills of western Hungary' +
                  ' meet the plains stretching to the east and south.',
    selection: false,
    flights: [{
      price: 0,
      fly_duration: '',
      distance: ''
    }]
  }
];

export default cities;
