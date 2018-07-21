import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { WeatherComponent } from "./weather-widget/component/weather.component";

@NgModule( {
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CardComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
} )

export class AppModule {  }
