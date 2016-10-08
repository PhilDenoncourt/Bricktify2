import {Injectable} from '@angular/core';
import {IPart} from '../models/ipart';

@Injectable()
export class PartsService {

  public parts: [IPart];

  constructor() {
    this.parts = [{designId: 3006, n1: 10, n2: 2}, {designId: 3007, n1: 8, n2: 2}, {
      designId: 3001,
      n1: 4,
      n2: 2
    }, {designId: 3002, n1: 3, n2: 2}, {designId: 3003, n1: 2, n2: 2}, {designId: 3008, n1: 8, n2: 1}, {
      designId: 3009,
      n1: 6,
      n2: 1
    }, {designId: 3010, n1: 4, n2: 1}, {designId: 3622, n1: 3, n2: 1}, {designId: 3004, n1: 2, n2: 1}, {
      designId: 3005,
      n1: 1,
      n2: 1
    }];
  }

}
