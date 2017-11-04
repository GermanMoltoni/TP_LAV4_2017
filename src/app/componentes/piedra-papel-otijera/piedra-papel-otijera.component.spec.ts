import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelOtijeraComponent } from './piedra-papel-otijera.component';

describe('PiedraPapelOtijeraComponent', () => {
  let component: PiedraPapelOtijeraComponent;
  let fixture: ComponentFixture<PiedraPapelOtijeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelOtijeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelOtijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
