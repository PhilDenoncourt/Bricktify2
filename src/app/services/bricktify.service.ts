import { Injectable } from '@angular/core';

import {CanvasContextService} from './canvas-context.service';
import {BricksService} from './bricks.service'
import { BrickOptionsService } from './brick-options.service';

import {IColor} from '../models/icolor';
import {IPart} from '../models/ipart';
import { IPlacedBrick } from './brick-options.service';

import * as _ from "lodash";
import * as $ from "jquery";

@Injectable()
export class BricktifyService {

  private lastMap:IColor[][];
  private lastBrickList:IPlacedBrick[];
  private lastPictureMap:number[][];

  constructor(public canvasContext:CanvasContextService,public bricksService:BricksService,public brickOptions:BrickOptionsService) { }

  bricktify(sourceContextName:string, destContextName:string, allowedColors:IColor[], borderColor:IColor, width:number, height:number) {

        var sourceRawContext = this.canvasContext.getContext(sourceContextName);
        var sourceContext = BricktifyService.scaleInput(sourceRawContext, width, height);

        var legoCanvas = BricktifyService.createBrickContext(width, height);
        $('body').append(legoCanvas); // Some browsers need the canvas added to the body to work from it.
        var legoContext = legoCanvas.getContext('2d');
        this.brickOptions.getCurrentOptions().brickMap =new Array(sourceContext.canvas.width);
        this.lastMap = this.brickOptions.getCurrentOptions().brickMap;

        //Find nearest lego color for each pixel in the portrait
        for (var x = 0; x < sourceContext.canvas.width; x++) {
          this.lastMap[x] = new Array(sourceContext.canvas.height);
          for (var y = 0; y < sourceContext.canvas.height; y++) {
            var colorToUse;
            if (borderColor && (x === 0 || y === 0 || x === sourceContext.canvas.width - 1 || y === sourceContext.canvas.height - 1)) {
              colorToUse = borderColor;
            } else {
              var imgd = sourceContext.getImageData(x, y, 1, 1);
              colorToUse = BricktifyService.findClosestColor(imgd.data[0], imgd.data[1], imgd.data[2], allowedColors);
            }
            var legod = legoContext.createImageData(1, 1);
            legod.data[0] = colorToUse.r;
            legod.data[1] = colorToUse.g;
            legod.data[2] = colorToUse.b;
            legod.data[3] = 255;
            this.lastMap[x][y] = colorToUse;
            legoContext.putImageData(legod, x, y);
          }
        }

        this.reduceBrickMap(sourceContext.canvas.width, sourceContext.canvas.height);

        var displayImg = this.canvasContext.getContext(destContextName);
        displayImg.attr('src', legoCanvas.toDataURL('image/png'));
        $('.removeMe').remove();
      };

  private static scaleInput(sourceRawContext, width, height) {
        let sourceCanvas = <HTMLCanvasElement>$('<canvas class="removeMe"></canvas>')[0];
        $('body').append(sourceCanvas);
        sourceCanvas.style.width = width + 'px';
        sourceCanvas.style.height = height + 'px';
        sourceCanvas.width = width;
        sourceCanvas.height = height;
        let sourceContext = sourceCanvas.getContext('2d');
        let sourceImg = new Image();
        sourceImg.src = sourceRawContext.canvas.toDataURL('image/png');
        sourceContext.drawImage(sourceImg, 0, 0, width, height);
        return sourceContext;
      }

  private static createBrickContext(width, height) {
        let brickCanvas = <HTMLCanvasElement>$('<canvas class="removeMe"></canvas>')[0];
        brickCanvas.style.width = width + 'px';
        brickCanvas.style.height = height + 'px';
        brickCanvas.width = width;
        brickCanvas.height = height;

        return brickCanvas;
  }

  private static findClosestColor(r:number, g:number, b:number, allowableColors) {

        let candidateColor = null;
        let candidateDistance = Number.MAX_VALUE;
        for (let i = 0; i < allowableColors.length; i++) {
          let d = BricktifyService.findColorDistance(r, g, b, allowableColors[i].r, allowableColors[i].g, allowableColors[i].b);
          if (d < candidateDistance) {
            candidateColor = allowableColors[i];
            candidateDistance = d;
          }
        }

        return candidateColor;
    }

  private static findColorDistance(r:number, g:number, b:number, r1:number, g1:number, b1:number) {
        return Math.pow(((r - r1) * 0.3), 2) +
          Math.pow(((g - g1) * 0.3), 2) +
          Math.pow(((b - b1) * 0.3), 2);
      }
  private reduceBrickMap(canvasWidth:number, canvasHeight:number) {

        // See if we can use fewer bricks by using larger bricks to simplify the result.
        // This map is used to create the step by step instructions.
        let oneByOnePart = this.bricksService.getPart(1,1);

        this.brickOptions.getCurrentOptions().brickList = [];
        this.lastBrickList = this.brickOptions.getCurrentOptions().brickList;

        this.lastPictureMap = new Array(canvasWidth);
        for (let x = 0; x < canvasWidth; x++) {
          this.lastPictureMap[x] = new Array(canvasHeight);
        }
        for (let x = 0; x < canvasWidth; x++) {
          for (let y = 0; y < canvasHeight; y++) {
            if (_.isUndefined(this.lastPictureMap[x][y])) {
              let c = this.lastMap[x][y];
              let oneByOneBrick = this.bricksService.getOneByOneBrick(c.num);
              let brick = <IPlacedBrick>{
                brick: oneByOneBrick,
                startX: x,
                startY: y,
                endX: x,
                endY: y,
                designId: oneByOnePart.designId,
                angle:0,
                color:c,
                part:oneByOnePart
              };

              this.lastBrickList.push(brick);
              let otherBricks = this.bricksService.getPartsWithMultipleStudsForColor(c.num);
              if (otherBricks) {
                _.each(otherBricks, (otherSize:IPart)=> {

                  let sizeFits:boolean;
                  let angle:number;
                  let width:number;
                  let height:number;

                  sizeFits = this.seeIfBrickFits(x,y,otherSize.n1, otherSize.n2,c);
                  if (sizeFits) {
                    angle=0;
                    width=otherSize.n1;
                    height=otherSize.n2;
                  } else if (otherSize.n1 !== otherSize.n2) {
                    sizeFits = this.seeIfBrickFits(x,y,otherSize.n2,otherSize.n1,c); {
                      angle=90;
                      width=otherSize.n2;
                      height=otherSize.n1;
                    }
                  }

                  if (sizeFits) {
                    brick.angle=angle;
                    brick.brick = this.bricksService.getBrick(otherSize.designId, brick.color.num);
                    brick.part = otherSize;
                    brick.startX = x;
                    brick.startY = y;
                    brick.endX = x + width - 1;
                    brick.endY = y + height - 1;
                    brick.designId = otherSize.designId;
                    for (var x1 = x; x1 < x + width; x1++) {
                      for (var y1 = y; y1 < y + height; y1++) {
                        this.lastPictureMap[x1][y1] = this.lastBrickList.length - 1;
                      }
                    }
                  }
                });
              }
              this.lastPictureMap[x][y] = this.lastBrickList.length - 1;
            }
          }
        }
      }
  private seeIfBrickFits(startX:number, startY:number,width:number,height:number, color:IColor):boolean {
        var okToUse = true;
        for (var x1 = startX; x1 < startX + width && okToUse; x1++) {
          for (var y1 = startY; y1 < startY + height && okToUse; y1++) {
            if (x1 >= this.lastMap.length || y1 >= this.lastMap[x1].length) {
              okToUse = false;
            } else if (!_.isUndefined(this.lastPictureMap[x1][y1])) {
              okToUse = false;
            } else if (this.lastMap[x1][y1].num !== color.num) {
              okToUse = false;
            }
          }
        }

        return okToUse;
      }


}
