/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrickCalculationService } from './brick-calculation.service';
import { BrickOptionsService } from './brick-options.service';
import { PartSourceService } from './part-source.service';
import { ColorService } from './color.service';
import { BrickLinkPartProviderService } from './brick-link-part-provider.service';

describe('Service: BrickCalculation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrickCalculationService, BrickOptionsService, PartSourceService, ColorService, BrickLinkPartProviderService]
    });
  });

  it('should exist', inject([BrickCalculationService], (service: BrickCalculationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a source', inject([BrickCalculationService, BrickOptionsService], (service: BrickCalculationService, options:BrickOptionsService) => {
    options.getCurrentOptions().brickList=[
      {
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
      }];
    expect(service.calculateBricks()).toBeTruthy();
    expect(service.calculateBricks().length).toBe(1);
  }));
});
