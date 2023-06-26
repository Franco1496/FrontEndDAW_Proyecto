import { TestBed } from '@angular/core/testing';

import { PropiedadAsesorService } from './propiedad-asesor.service';

describe('PropiedadAsesorService', () => {
  let service: PropiedadAsesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropiedadAsesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
