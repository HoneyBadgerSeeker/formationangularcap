import { WeatherInfos } from './weatherInfos';

export class WeatherByCity {
  constructor(private city: string, public weathersInfos: WeatherInfos[]) { }
}
