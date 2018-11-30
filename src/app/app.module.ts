import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SharedModule} from './shared/shared.module';
import {CarpartsModule} from './carparts/carparts.module';
import {CarRaceModule} from './car-race/car-race.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // 사용자가 추가한 거
    AppRoutingModule,
    SharedModule,
    CarpartsModule,
    CarRaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
