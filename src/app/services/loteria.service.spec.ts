import { TestBed } from '@angular/core/testing';

import { LoteriaService } from './loteria.service';

describe('LoteriaService', () => {
  let service: LoteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Los participantes deben ser 4', () => {
    expect(service.participantes.length).toEqual(4);
  });
});
