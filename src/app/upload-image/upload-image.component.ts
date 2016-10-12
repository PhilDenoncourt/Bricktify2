import {Component, OnInit, ElementRef, NgZone, Input} from '@angular/core';

import { CanvasContextService } from '../services/canvas-context.service';
import { AspectRatioService } from '../services/aspect-ratio.service';

import * as _ from "lodash";
import {BricktifyService} from "../services/bricktify.service";
declare var $:JQueryStatic;

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(public element:ElementRef, public canvasContext: CanvasContextService, public zone:NgZone, public aspectRatio:AspectRatioService, public bricktifyService:BricktifyService) { }

  ngOnInit() {
    this.domCanvas = <HTMLCanvasElement>$('canvas',this.element.nativeElement)[0]; //TODO Refactor this reference
    let uploadCtrl = $('input[type="file"]',this.element.nativeElement); //TODO Refactor this reference
    this.ctx = this.domCanvas.getContext('2d');
    let img = <HTMLImageElement> $('img', this.element.nativeElement)[0]; //TODO Refactor this reference
    var width;
    var height;

    this.canvasContext.setContext(this.context, this.ctx);

    uploadCtrl.bind('change', (e:any) => {
      var reader = new FileReader();
      reader.onload = (readerEvent:any) => {

        img.onload = () => {
          $(this.domCanvas).css('width','100%').css('height','100%');
          var w = this.domCanvas.offsetWidth;
          var h = this.domCanvas.offsetHeight;
          this.domCanvas.width = w;
          this.domCanvas.height = h;
          width=img.width;
          height=img.height;

          height = (height/width) * this.domCanvas.width;
          width = this.domCanvas.width;

          if (width > this.domCanvas.width) {
            var ratio = (this.domCanvas.width / width);
            width = ratio * width;
            height = ratio * height;
          }
          if (height > this.domCanvas.height) {
            ratio = (this.domCanvas.height / height);
            width = ratio * width;
            height = ratio * height;
          }
          this.domCanvas.width = width;
          this.domCanvas.height = height;
          this.ctx.drawImage(img, 0, 0, width, height);
          this.domCanvas.style.width=null;
          this.domCanvas.style.height=null;
          this.zone.run(()=> {
            this.aspectRatio.getCurrentAspectRatio().setRatio(height/width);
            this.aspectRatio.getCurrentAspectRatio().hasBeenUploaded = true;
          });
        };
        this.imageDataUrl = readerEvent.target.result;
        img.src=this.imageDataUrl;
        this.bricktifyService.suggestBricktify();
      };
      reader.readAsDataURL(e.target.files[0]);
    });

  }

  @Input() public imageDataUrl:string;
  @Input() public context:string;

  private domCanvas:HTMLCanvasElement;
  private ctx:CanvasRenderingContext2D;

  rotateImage = function() {
    var tempCanvas = <HTMLCanvasElement>$('<canvas />')[0];
    var tempCtx = tempCanvas.getContext('2d');

    //noinspection JSSuspiciousNameCombination
    tempCanvas.width = this.domCanvas.height;
    //noinspection JSSuspiciousNameCombination
    tempCanvas.height = this.domCanvas.width;

    tempCtx.save();
    tempCtx.translate(tempCanvas.width/2,tempCanvas.height/2);
    tempCtx.rotate(90 * Math.PI/180);
    tempCtx.translate(-this.domCanvas.width/2,-this.domCanvas.height/2);
    tempCtx.drawImage(this.domCanvas,0,0);
    tempCtx.restore();

    this.domCanvas.width = tempCanvas.width;
    this.domCanvas.height = tempCanvas.height;

    this.ctx.save();
    this.ctx.drawImage(tempCanvas,0,0);
    this.ctx.restore();

    this.aspectRatio.getCurrentAspectRatio().setRatio(this.domCanvas.height/this.domCanvas.width);
    this.bricktifyService.suggestBricktify();
  };

}
