import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonDiceMasListadoComponent } from './simon-dice-mas-listado.component';

describe('SimonDiceMasListadoComponent', () => {
  let component: SimonDiceMasListadoComponent;
  let fixture: ComponentFixture<SimonDiceMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonDiceMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonDiceMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
