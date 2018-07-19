import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";

@NgModule( {
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
} )

export class AppModule {  }
