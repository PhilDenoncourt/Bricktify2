import { Component, OnInit } from '@angular/core';
import {BrickCalculationService, INeededBrick} from '../services/brick-calculation.service';
import {BricktifyService} from "../services/bricktify.service";

@Component({
  selector: 'parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  constructor(public brickCalculation:BrickCalculationService, public brickifyService:BricktifyService) { }

  ngOnInit() {
    this.neededParts = [];
    this.brickifyService.brickifyFinished$.subscribe(()=> {
      this.neededParts = this.brickCalculation.calculateBricks();
    })
  }

  print() {
    window.print();
  }
  public neededParts:INeededBrick[];

}
