import { Component, OnInit } from '@angular/core';
import {BricktifyService} from "../services/bricktify.service";
import {StepService} from "../services/step.service";
import {IBrickOptions, BrickOptionsService} from "../services/brick-options.service";


@Component({
  selector: 'steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.css']
})
export class StepsListComponent implements OnInit {

  constructor(public bricktifyService:BricktifyService, public stepService:StepService, public brickOptions:BrickOptionsService) {
    this.bricktifyService.brickifyFinished$.subscribe(()=> {
      this.stepNum = 1;
      this.abbreviatedSteps = this.stepService.getAbbreviatedStepList();
    });

    this.currentDocument = brickOptions.getCurrentOptions();
  }

  nextStep() {
    this.stepNum++;
  }

  previousStep() {
    this.stepNum--;
  }

  setStep(step:number) {
    this.stepNum = step;
  }

  public get stepNum() {
    return this._stepNum;
  };

  public set stepNum(value:number) {
    this._stepNum = value;
    if (this._stepNum) {
      this.stepDescription = this.stepService.getStepText(this._stepNum);
    }
  }
  private _stepNum:number;
  private abbreviatedSteps:string[];
  private stepDescription:string;
  private currentDocument:IBrickOptions;

  ngOnInit() {
  }

}
