import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {AboutComponent} from './about/about.component';
import {CarRacesComponent} from './car-race/car-race.component';


@NgModule({
  declarations: [
    AppComponent,
    CarpartsComponent,
    AboutComponent,
    CarRacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
