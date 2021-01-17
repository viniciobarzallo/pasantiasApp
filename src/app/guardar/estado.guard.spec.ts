import { TestBed } from '@angular/core/testing';

import { EstadoGuard } from './estado.guard';

describe('EstadoGuard', () => {
  let guard: EstadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
