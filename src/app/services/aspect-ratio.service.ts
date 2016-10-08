import { Injectable } from '@angular/core';
import { BrickOptionsService } from './brick-options.service'

export interface IAspectRatio {
  ratio:number;
  hasBeenUploaded;
  setRatio:(newVal)=>void;
}

var _defaultWidth=44;
var _defaultHeight=34;

@Injectable()
export class AspectRatioService {

  constructor(brickOptions:BrickOptionsService) {
    var currentDocument=brickOptions.getCurrentOptions();

    this.currentAspectRatio = {
      ratio: currentDocument.dimensions.height / currentDocument.dimensions.width,
      hasBeenUploaded: false,
      setRatio: (newVal)=> {
        if (newVal < 1) {
          currentDocument.dimensions.width = Math.round(_defaultWidth);
          currentDocument.dimensions.height = Math.round(newVal * _defaultWidth);
        }
        else {
          currentDocument.dimensions.width = Math.round(_defaultHeight * (1 / newVal));
          currentDocument.dimensions.height = Math.round(_defaultHeight);
        }
        this.currentAspectRatio.ratio = newVal;
      }
    };
  }

  public getCurrentAspectRatio() {
    return this.currentAspectRatio;
  }

  private currentAspectRatio:IAspectRatio;

}
