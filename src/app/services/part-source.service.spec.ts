/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartSourceService } from './part-source.service';
import { BrickLinkPartProviderService } from './brick-link-part-provider.service';

describe('Service: PartSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartSourceService, BrickLinkPartProviderService]
    });
  });

  it('should exist', inject([PartSourceService], (service: PartSourceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return one row', inject([PartSourceService], (service: PartSourceService) => {
    expect(service.GetSourcesForBrick({
      color:{num: 196, color: 'Dark Royal blue', r: 32, g: 50, b: 176, a: 1, BricklinkId: 109},
      brick:{designId: 3005, color: 196},
      part:{
        designId: 3005,
        n1: 1,
        n2: 1
      },
      startX:1,
      startY:1,
      endX:2,
      endY:1,
      designId:3005,
      angle:0
    })).toBeTruthy();

    expect(service.GetSourcesForBrick({
      color:{num: 196, color: 'Dark Royal blue', r: 32, g: 50, b: 176, a: 1, BricklinkId: 109},
      brick:{designId: 3005, color: 196},
      part:{
        designId: 3005,
        n1: 1,
        n2: 1
      },
      startX:1,
      startY:1,
      endX:2,
      endY:1,
      designId:3005,
      angle:0
    }).length).toBe(1);
  }));
});
