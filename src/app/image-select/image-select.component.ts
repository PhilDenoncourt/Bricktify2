import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public imageDataUrl:string;

}
