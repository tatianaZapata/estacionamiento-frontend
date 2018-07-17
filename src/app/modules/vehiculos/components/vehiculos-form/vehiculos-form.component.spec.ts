import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosFormComponent } from './vehiculos-form.component';

describe('VehiculosFormComponent', () => {
  let component: VehiculosFormComponent;
  let fixture: ComponentFixture<VehiculosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
