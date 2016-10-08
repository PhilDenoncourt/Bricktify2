import { Injectable } from '@angular/core';

import { IPartSource } from '../models/IPartSource';
import { IPlacedBrick } from './brick-options.service';
import { IBrickSrc } from '../models/ibrick-src';

@Injectable()
export class BrickLinkPartProviderService implements IPartSource {

  constructor() { }
  GetSourcesForBrick(brick:IPlacedBrick):IBrickSrc[] {
        return [{
          desc:'Bricklink',
          url:'http://www.bricklink.com/search.asp?viewFrom=sa&colorID=' + brick.color.BricklinkId + '&q=' + brick.part.designId +'&searchSort=P&sz=25'
        }];
      }

}
