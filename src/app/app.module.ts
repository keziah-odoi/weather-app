import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TemperatureDisplayComponent } from './components/temperature-display/temperature-display.component';
import { GetForecastService } from './services/get-forecast.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureDisplayComponent,
    NavigationBarComponent,
    AboutPageComponent,
    ContactPageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [GetForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
