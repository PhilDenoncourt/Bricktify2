import { Injectable } from '@angular/core';
import { BrickLinkPartProviderService } from './brick-link-part-provider.service';

import { IPlacedBrick } from './brick-options.service';
import { IBrickSrc } from '../models/ibrick-src';

@Injectable()
export class PartSourceService {

  constructor(public brickLinkPartProvider:BrickLinkPartProviderService) { }

  GetSourcesForBrick(brick:IPlacedBrick):IBrickSrc[] {
      var rslt=[];

      Array.prototype.push.apply(rslt, this.brickLinkPartProvider.GetSourcesForBrick(brick));

      return rslt;
    }

}
