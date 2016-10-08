import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorService } from "./services/color.service";
import { BricksService } from "./services/bricks.service";
import { PartsService } from "./services/parts.service";
import { BrickOptionsService } from "./services/brick-options.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ColorService, BricksService, PartsService, BrickOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
