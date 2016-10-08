/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanvasContextService } from './canvas-context.service';

describe('Service: CanvasContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasContextService]
    });
  });

  it('should exist', inject([CanvasContextService], (service: CanvasContextService) => {
    expect(service).toBeTruthy();
  }));

  it('return something that was set', inject([CanvasContextService], (service: CanvasContextService) => {
    service.setContext('somecontext','somevalue')
    expect(service.getContext('somecontext')).toBe('somevalue');
  }));
});
