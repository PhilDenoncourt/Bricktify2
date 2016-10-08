/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StepService } from './step.service';
import { BrickOptionsService } from './brick-options.service';
import { ColorService } from './color.service'

describe('Service: Step', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepService,BrickOptionsService, ColorService]
    });
  });

  it('should exist', inject([StepService], (service: StepService) => {
    expect(service).toBeTruthy();
  }));

  it('should return empty text for uninitialized bricklist', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
    expect(service.getStepText(1)).toBe('');
  }));

  it('should return empty text for step higher than count', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
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
    expect(service.getStepText(2)).toBe('');
  }));

  it('should return text for step one', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
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
    expect(service.getStepText(1)).toBe('On row 2, column 2 place a Dark Royal blue 1x1');
  }));

  it('should return text for step one angling downwards', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
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
        angle:90
      }];
    expect(service.getStepText(1)).toBe('On row 2, column 2 place a Dark Royal blue 1x1 facing downwards');
  }));

  it('should return empty abbreviated text for uninitialized bricklist', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
    expect(service.getAbbreviatedStepList.length).toBe(0);
  }));

  it('should return text for abbreviated bricklist', inject([StepService, BrickOptionsService], (service: StepService, options:BrickOptionsService) => {
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
        angle:90
      }];
    expect(service.getAbbreviatedStepList().length).toBe(1);
    expect(service.getAbbreviatedStepList()[0]).toBe('Step 1: Dark Royal blue 1x1');
  }));
});
