/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BricksService } from './bricks.service';
import { ColorService } from './color.service';
import { PartsService } from "./parts.service"

describe('Service: Bricks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BricksService, ColorService, PartsService]
    });
  });

  it('should exist', inject([BricksService], (service: BricksService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain bricks', inject([BricksService], (service: BricksService) => {
    expect(service.bricks).toBeTruthy();
    expect(service.bricks.length).toBeTruthy();
  }));

  it('getAllColors should return some colors', inject([BricksService], (service: BricksService) => {
    expect(service.getAllColors()).toBeTruthy();
    expect(service.getAllColors().length).toBeTruthy();
  }));

  it('getPartsWithMultipleStudsForColor with black should return some stud', inject([BricksService], (service: BricksService) => {
    expect(service.getPartsWithMultipleStudsForColor(26)).toBeTruthy();
    expect(service.getPartsWithMultipleStudsForColor(26).length).toBeTruthy();
  }));

  it('getPartsWithMultipleStudsForColor with non-existant color should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getPartsWithMultipleStudsForColor(-1)).toBeTruthy();
    expect(service.getPartsWithMultipleStudsForColor(-1).length).toBe(0);
  }));

  it('getOneByOneBrick with black should return some stud', inject([BricksService], (service: BricksService) => {
    expect(service.getOneByOneBrick(26)).toBeTruthy();
    expect(service.getOneByOneBrick(26).designId).toBe(3005);
  }));

  it('getOneByOneBrick with non-existant color should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getOneByOneBrick(-1)).toBeFalsy();
  }));

  it('getPart with 1x2 should return some stud', inject([BricksService], (service: BricksService) => {
    expect(service.getPart(1,2)).toBeTruthy();
    expect(service.getPart(1,2).designId).toBe(3004);
  }));

  it('getPart with 2x1 color should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getPart(2,1)).toBeTruthy();
    expect(service.getPart(2,1).designId).toBe(3004);
  }));

  it('getPart with 2x-1 color should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getPart(2,-1)).toBeFalsy();
  }));

  it('getBrick with 2x1 black should return something', inject([BricksService], (service: BricksService) => {
    expect(service.getBrick(3004,26)).toBeTruthy();
  }));

  it('getBrick with 2x-1 black should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getBrick(30040000,26)).toBeFalsy();
  }));

  it('getBrick with 2x1 unknown should return nothing', inject([BricksService], (service: BricksService) => {
    expect(service.getBrick(3004,-26)).toBeFalsy();
  }));
});
