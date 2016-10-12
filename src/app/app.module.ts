import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ColorService } from "./services/color.service";
import { BricksService } from "./services/bricks.service";
import { PartsService } from "./services/parts.service";
import { BrickOptionsService } from "./services/brick-options.service";
import { StepService } from "./services/step.service";
import { AspectRatioService } from "./services/aspect-ratio.service";
import { BrickCalculationService } from './services/brick-calculation.service';
import { BrickLinkPartProviderService } from './services/brick-link-part-provider.service';
import { BricktifyService } from './services/bricktify.service';
import { CanvasContextService } from './services/canvas-context.service';
import { PartSourceService } from './services/part-source.service';
import { HelpService } from './services/help.service';
import { ImageSelectComponent } from './image-select/image-select.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { BrickifyPanelComponent } from './brickify-panel/brickify-panel.component';
import { BricktifiedImageComponent } from './bricktified-image/bricktified-image.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { StepsListComponent } from './steps-list/steps-list.component';
import { DetailedBrickImageComponent } from './detailed-brick-image/detailed-brick-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSelectComponent,
    UploadImageComponent,
    BrickifyPanelComponent,
    BricktifiedImageComponent,
    PartsListComponent,
    StepsListComponent,
    DetailedBrickImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ColorService, BricksService, PartsService, BrickOptionsService, StepService, AspectRatioService, BrickCalculationService, BrickLinkPartProviderService,
              BricktifyService, CanvasContextService, PartSourceService, HelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
