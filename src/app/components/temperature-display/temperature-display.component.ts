import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ResponseFormat } from 'src/app/models/response-format';
import { GetForecastService } from '../../services/get-forecast.service';

@Component({
  selector: 'app-temperature-display',
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.css']
})
export class TemperatureDisplayComponent implements OnInit {
  weather: string= "";
  degreesCelcius: number = 0;
  degreesFahrenheit : number = 0;
  displayUnit= "°C";
  temperature:number = 0;
  display: string = "";
  units = ["Fahrenheit", "Celcius"];
  weatherResponse:object = {};
  feelsLikeDegrees: number = 0;
  feelsLikeFahrenheit: number= 0;
  feelsLike: number =0;
  humidity: number = 0;;
  pressure: number =0;
  windSpeed: number = 0;



  constructor(private getForecastService:GetForecastService) { }

  getWeatherData() {
    this.getForecastService.getWeatherData().subscribe(
      data => {
        this.weatherResponse = data;
        this.weather = data.current.weather[0].description;
        this.degreesCelcius = data.current.temp
        this.temperature = Math.round(this.degreesCelcius);
        this.feelsLikeDegrees = Math.round(data.current.feels_like);
        this.humidity = Math.round(data.current.humidity);
        this.pressure = Math.round(data.current.pressure);
        this.windSpeed = Math.round(data.current.wind_speed)

    }, (error:ErrorEvent)=>{
      this.weather = "No data to display";
      this.degreesCelcius = 0
        this.temperature = 0
        this.feelsLikeDegrees = 0
        this.humidity = 0
        this.pressure = 0
        this.windSpeed = 0
        return error;

    });
    
    
  }

  toggleUnit() {
    if (this.display == this.units[0]) {
          this.displayUnit = "°F"
          this.feelsLike = Math.round(this.feelsLikeDegrees = (this.feelsLikeDegrees*(9/5)) + 32)
          this.temperature = Math.round(this.degreesFahrenheit = (this.degreesCelcius*(9/5)) + 32);
          return this.temperature;
    }
    else {
      this.displayUnit = "°C"
      this.feelsLike = Math.round(this.feelsLikeDegrees);
      return this.temperature = Math.round(this.degreesCelcius);
    }
  }




  ngOnInit(): void {
    this.getWeatherData();
  }
}
