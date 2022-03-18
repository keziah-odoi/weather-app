export interface ResponseFormat {
    timezone: string;
    current : {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        visibility: number,
        wind_speed: number,
        weather: [
            {
                main: string,
                description: string,
            }
        ]
    }
}
