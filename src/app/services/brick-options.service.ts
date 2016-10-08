import { Injectable } from '@angular/core';
import { ColorService } from './color.service'

import {IPart} from '../models/ipart';
import {IColor} from '../models/icolor';
import {IBrick} from '../models/ibrick';

export interface IPlacedBrick {
  color: IColor;
  brick: IBrick;
  part: IPart;
  startX : number;
  startY : number;
  endX :number;
  endY :number;
  designId:number;
  angle:number;
}

export interface IHeightWidth {
  width:number;
  height:number;
}

export interface IBrickOptions {
  dimensions:IHeightWidth;
  addBorder:boolean;
  selectedBorder:number;
  filterColors:any;
  sourceImageDataUri:string;
  brickMap:IColor[][];
  brickList: IPlacedBrick[];
}

@Injectable()
export class BrickOptionsService {

  constructor(colors : ColorService) {
    this.currentOptions = {
      dimensions: {
        width: this.defaultWidth,
        height: this.defaultHeight
      },
      filterColors: {},
      addBorder: this.defaultAddBorder,
      selectedBorder: this.defaultBorder,
      sourceImageDataUri:null,
      brickMap:null,
      brickList:null
    };
    _.each(colors.colors, (color:IColor)=> {
      this.currentOptions.filterColors[color.num] = true;
    });
  }

  public getCurrentOptions():IBrickOptions {
    return this.currentOptions;
  }

  private currentOptions:IBrickOptions;
  private defaultWidth = 44;
  private defaultHeight = 34;
  private defaultBorder = 24;
  private defaultAddBorder = true;
}
