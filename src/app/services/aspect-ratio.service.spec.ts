/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AspectRatioService } from './aspect-ratio.service';
import { BrickOptionsService } from './brick-options.service';
import { ColorService } from './color.service'

describe('Service: AspectRatio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AspectRatioService, BrickOptionsService, ColorService]
    });
  });

  it('should exist', inject([AspectRatioService], (service: AspectRatioService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an aspect ratio structure', inject([AspectRatioService], (service: AspectRatioService) => {
    expect(service.getCurrentAspectRatio()).toBeTruthy();
  }));
});
