import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroJugadoresComponent } from './filtro-jugadores.component';

describe('FiltroJugadoresComponent', () => {
  let component: FiltroJugadoresComponent;
  let fixture: ComponentFixture<FiltroJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
