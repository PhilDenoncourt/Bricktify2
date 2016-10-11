import { Component, OnInit } from '@angular/core';
import {IBrickOptions, BrickOptionsService} from "../services/brick-options.service";
import {BricksService} from '../services/bricks.service';
import {AspectRatioService,IAspectRatio } from '../services/aspect-ratio.service';
import {IColor} from "../models/icolor";
import {BricktifyService} from "../services/bricktify.service";

@Component({
  selector: 'brickify-panel',
  templateUrl: './brickify-panel.component.html',
  styleUrls: ['./brickify-panel.component.css']
})
export class BrickifyPanelComponent implements OnInit {

  private showBorder:boolean;
  private keepAspectRatio:boolean;
  private showFilterColors:boolean;

  private currentDocument: IBrickOptions;
  private brickColors:IColor[];
  private aspectRatio:IAspectRatio;


  constructor(public brickOptions:BrickOptionsService, public brickService:BricksService, public aspectRatioService:AspectRatioService, public bricktifyService:BricktifyService) { }

  ngOnInit() {
    this.currentDocument = this.brickOptions.getCurrentOptions();
    this.brickColors = this.brickService.getAllColors();
    this.aspectRatio = this.aspectRatioService.getCurrentAspectRatio();

    this.keepAspectRatio = true;
  }

  toggleBorder() {
    this.showBorder = !this.showBorder;
  }

  toggleFilterColors() {
    this.showFilterColors = !this.showFilterColors;
  }

  bricktify() {
    var borderColor = null;
    if (this.currentDocument.addBorder) {
      borderColor = _.find(this.brickColors, (c:IColor)=> {
        return c.num == this.currentDocument.selectedBorder
      });
    }
    var validColors:IColor[] = [];
    _.each(this.currentDocument.filterColors, (v:boolean, k:string)=> {
      if (v) {
        validColors.push(_.find(this.brickColors, {num: parseInt(k)}));
      }
    });

    this.bricktifyService.bricktify('source', 'brck', validColors, borderColor, this.currentDocument.dimensions.width, this.currentDocument.dimensions.height);

    //this._rootScope.$broadcast('bricktified');
  }

  hexify(color:IColor) {
    return '#' + color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
  }

}
