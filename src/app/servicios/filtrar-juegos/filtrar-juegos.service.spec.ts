import { TestBed, inject } from '@angular/core/testing';

import { FiltrarJuegosService } from './filtrar-juegos.service';

describe('FiltrarJuegosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltrarJuegosService]
    });
  });

  it('should be created', inject([FiltrarJuegosService], (service: FiltrarJuegosService) => {
    expect(service).toBeTruthy();
  }));
});
