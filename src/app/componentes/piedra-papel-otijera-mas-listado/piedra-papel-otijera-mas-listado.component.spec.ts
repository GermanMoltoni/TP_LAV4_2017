import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelOtijeraMasListadoComponent } from './piedra-papel-otijera-mas-listado.component';

describe('PiedraPapelOtijeraMasListadoComponent', () => {
  let component: PiedraPapelOtijeraMasListadoComponent;
  let fixture: ComponentFixture<PiedraPapelOtijeraMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelOtijeraMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelOtijeraMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
