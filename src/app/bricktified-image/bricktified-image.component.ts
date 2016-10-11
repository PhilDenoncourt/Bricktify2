import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { CanvasContextService } from '../services/canvas-context.service';

declare var $:JQueryStatic;
@Component({
  selector: 'bricktified-image',
  templateUrl: './bricktified-image.component.html',
  styleUrls: ['./bricktified-image.component.css']
})
export class BricktifiedImageComponent implements OnInit {

  constructor(public element:ElementRef, public canvasContext:CanvasContextService) { }

  ngOnInit() {
    var canvas = $('img', this.element.nativeElement);

    this.canvasContext.setContext(this.context, canvas);

    canvas.click(()=> {
      //Broadcast brickimageClicked...  Raise event?
    });
  }

  @Input() context:string;

}
