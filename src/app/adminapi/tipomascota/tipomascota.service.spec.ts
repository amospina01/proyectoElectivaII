import { TestBed } from '@angular/core/testing';

import { TipomascotaService } from './tipomascota.service';

describe('TipomascotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipomascotaService = TestBed.get(TipomascotaService);
    expect(service).toBeTruthy();
  });
});
