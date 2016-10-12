import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {IColor} from "../models/icolor";
import {BrickOptionsService} from "../services/brick-options.service";
import {BricktifyService} from "../services/bricktify.service";
declare var $:JQueryStatic;

@Component({
  selector: 'detailed-brick-image',
  templateUrl: './detailed-brick-image.component.html',
  styleUrls: ['./detailed-brick-image.component.css']
})
export class DetailedBrickImageComponent implements OnInit {

  constructor( public element: ElementRef, public brickOptions:BrickOptionsService, public bricktifyService:BricktifyService ) { }

  ngOnInit() {
    this.canvas = this.element.nativeElement.children[0];
    this.bricktifyService.brickifyFinished$.subscribe(()=> {
      this.maxSteps = this.brickOptions.getCurrentOptions().brickList.length;
    });
  }

  @Input() public set step(value:number) {
    this._step=value;
    if (this._step) {
      this.drawBricks(this._step);
    }
  }

  public get step() {
    return this._step;
  }

  private _step:number;
  private canvas:HTMLCanvasElement;
  private maxSteps:number;

  public static drawBrick(ctx, x:number, y:number, color:IColor, width:number, height:number,rowWidth:number, colHeight:number) {
    var pixelsPerXBrick = ctx.canvas.width / rowWidth ;
    var pixelsPerYBrick = ctx.canvas.height / colHeight ;
    var startX = x * pixelsPerXBrick;
    var startY = y * pixelsPerYBrick;

    ctx.fillStyle = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
    ctx.fillRect(startX, startY, pixelsPerXBrick*width, pixelsPerYBrick*height);

    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="Black";
    ctx.rect(startX, startY, pixelsPerXBrick*width, pixelsPerYBrick*height);
    ctx.stroke();
  }

  drawBricks(numberOfSteps) {
    var ctx = this.canvas.getContext('2d');
    var grid = this.brickOptions.getCurrentOptions().brickMap;
    var bricks = this.brickOptions.getCurrentOptions().brickList;
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    _.each(bricks, (brick, idx)=> {
      if (idx < numberOfSteps) {
        DetailedBrickImageComponent.drawBrick(ctx, brick.startX, brick.startY, brick.color, brick.endX - brick.startX + 1, brick.endY - brick.startY + 1, grid.length, grid[0].length);
      }
    });
  }
}
