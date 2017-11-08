import { TestBed, inject } from '@angular/core/testing';

import { FiltradoJugadoresService } from './filtrado-jugadores.service';

describe('FiltradoJugadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltradoJugadoresService]
    });
  });

  it('should be created', inject([FiltradoJugadoresService], (service: FiltradoJugadoresService) => {
    expect(service).toBeTruthy();
  }));
});
