/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BricktifyService } from './bricktify.service';
import {CanvasContextService} from './canvas-context.service';
import {BricksService} from './bricks.service'
import { BrickOptionsService } from './brick-options.service';
import { ColorService } from './color.service';
import { PartsService } from './parts.service';
import { PartSourceService } from './part-source.service';
import { BrickLinkPartProviderService } from './brick-link-part-provider.service';

describe('Service: Bricktify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BricktifyService, CanvasContextService, BricksService, BrickOptionsService, ColorService, PartsService, PartSourceService, BrickLinkPartProviderService]
    });
  });

  it('should ...', inject([BricktifyService], (service: BricktifyService) => {
    expect(service).toBeTruthy();
  }));
});
