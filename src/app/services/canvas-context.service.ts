import { Injectable } from '@angular/core';

@Injectable()
export class CanvasContextService {
  private contextDictionary={};

  constructor() { }

  setContext = (name,ctx) => {
      this.contextDictionary[name]=ctx;
  };

  getContext = (name) => {
      return this.contextDictionary[name];
  }
}
