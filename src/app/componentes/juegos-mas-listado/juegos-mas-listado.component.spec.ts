import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosMasListadoComponent } from './juegos-mas-listado.component';

describe('JuegosMasListadoComponent', () => {
  let component: JuegosMasListadoComponent;
  let fixture: ComponentFixture<JuegosMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
