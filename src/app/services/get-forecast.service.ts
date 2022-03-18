import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseFormat } from '../models/response-format';


@Injectable({
  providedIn: 'root'
})
export class GetForecastService {
  private apiKey = environment.API_KEY;
  

  constructor(private httpClient : HttpClient) { }

  
  errorHandler(error:any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
    }
    else {
      errorMessage =
      `Error code: ${error.status} \nMessage: ${error.message}`
    }
    // console.log(errorMessage)
    return throwError(()=> {
      new Error("error message")
    })

  }
  getWeatherData(): Observable<ResponseFormat>{
    return this.httpClient.get<ResponseFormat>(`https://api.openweathermap.org/data/2.5/onecall?lat=5.56&lon=-0.18&exclude=hourly,daily&units=imperial&appid=${this.apiKey}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

 

  
    
}
