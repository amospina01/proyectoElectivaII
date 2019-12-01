import { TestBed } from '@angular/core/testing';

import { TipovacunaService } from './tipovacuna.service';


describe('TipovacunaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipovacunaService = TestBed.get(TipovacunaService);
    expect(service).toBeTruthy();
  });
});
