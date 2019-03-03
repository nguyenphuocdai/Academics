import { TestBed } from '@angular/core/testing';

import { Srv1Service } from './srv1.service';

describe('Srv1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Srv1Service = TestBed.get(Srv1Service);
    expect(service).toBeTruthy();
  });
});
