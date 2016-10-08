import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorService } from "./services/color.service";
import { BrickService } from "./services/brick.service";
import { PartService } from "./services/part.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ColorService, BrickService, PartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
