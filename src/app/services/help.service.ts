import { Injectable } from '@angular/core';

import * as _ from "lodash";
import * as $ from "jquery";

@Injectable()
export class HelpService {

  constructor() { }

  private elements = [];

  private stepCallbacks = [];

  Start = () => {
    _.each(this.elements, (element)=> {
      (<any>$(window)).joyride('destroy');
      (<any>$(element)).joyride({
        autoStart:true,
        postRideCallback: ()=> {
          this.Stop();
        },
        preStepCallback: (idx) => {
          _.each(this.stepCallbacks, (stepCallback)=> {
            stepCallback(idx);
          });
        }
      });
    })
  };

  Stop = () => {
    (<any>$(window)).joyride('destroy');
  };

  RegisterElement = (element) => {
    this.elements.push(element);
  };

  RegisterStepCallback = (callback) =>  {
    this.stepCallbacks.push(callback);
  };

}
