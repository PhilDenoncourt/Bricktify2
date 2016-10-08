import { Injectable } from '@angular/core';
import { BrickOptionsService, IPlacedBrick } from './brick-options.service';

@Injectable()
export class StepService {

  constructor(public brickOptions:BrickOptionsService) {

  }

  public getStepText(stepNum:number) : string
  {
    var brickList = this.brickOptions.getCurrentOptions().brickList;
    if (!brickList) {
      return '';
    }

    if (stepNum > brickList.length) {
      return '';
    }

    var brickToDescribe = brickList[stepNum-1];

    var message = "On row " + (brickToDescribe.startX + 1) + ", column " + (brickToDescribe.startY + 1) + " place a ";
    message += brickToDescribe.color.color;
    message += ' ' + brickToDescribe.part.n1.toString(10) + 'x' + brickToDescribe.part.n2.toString(10);
    if (brickToDescribe.angle == 90) {
      message += " facing downwards";
    }
    return message;
  }

  public getAbbreviatedStepList():string[] {
    var brickList = this.brickOptions.getCurrentOptions().brickList;

    if (!brickList) {
      return [];
    }
    var rslt = [];
    _.each(brickList, (brick:IPlacedBrick,idx )=> {
      var step = 'Step ' + (idx + 1) + ": ";
      step += brick.color.color + ' ' + brick.part.n1.toString(10) + 'x' + brick.part.n2.toString(10);
      rslt.push(step);
    });

    return rslt;
  }
}
