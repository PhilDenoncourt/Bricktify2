/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BricksService } from './bricks.service';

describe('Service: Bricks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BricksService]
    });
  });

  it('should exist', inject([BricksService], (service: BricksService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain bricks', inject([BricksService], (service: BricksService) => {
    expect(service.bricks).toBeTruthy();
    expect(service.bricks.length).toBeTruthy();
  }));
});
