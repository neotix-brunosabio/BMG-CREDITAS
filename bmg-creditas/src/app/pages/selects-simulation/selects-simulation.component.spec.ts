import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsSimulationComponent } from './selects-simulation.component';

describe('SelectsSimulationComponent', () => {
  let component: SelectsSimulationComponent;
  let fixture: ComponentFixture<SelectsSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectsSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
