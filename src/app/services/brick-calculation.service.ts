import { Injectable } from '@angular/core';
import { BrickOptionsService } from './brick-options.service';
import { PartSourceService } from './part-source.service';

import * as _ from "lodash";

@Injectable()
export class BrickCalculationService {

  constructor(public brickOptions:BrickOptionsService, public partsSource:PartSourceService) { }
  public calculateBricks() {
              var brickMap = this.brickOptions.getCurrentOptions().brickList;
              var brickList = [];
            _.each(brickMap, (b:IPlacedBrick)=> {

              var neededBrick = _.find(brickList,{designId:b.designId, color:b.color.num});
              if (!neededBrick) {
                neededBrick = {
                  placedBrick: b,
                  designId:b.designId,
                  color:b.color.num,
                  description:b.color.color + ' ' + b.part.n1.toString(10) + 'x' + b.part.n2.toString(10),
                  qty:0
                };
                brickList.push(neededBrick);
              }

              neededBrick.qty++;
            });

            _.each(brickList, (neededBrick:INeededBrick)=> {
              neededBrick.srcs = this.partsSource.GetSourcesForBrick(neededBrick.placedBrick);
            });
            return brickList;
          }

}
