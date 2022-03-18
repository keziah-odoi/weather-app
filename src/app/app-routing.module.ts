import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TemperatureDisplayComponent } from './components/temperature-display/temperature-display.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
 { path: "about", component: AboutPageComponent},
 { path: "", component: TemperatureDisplayComponent},
 { path: "contact", component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
