import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeTypeComponent } from './intake-type.component';

describe('IntakeTypeComponent', () => {
  let component: IntakeTypeComponent;
  let fixture: ComponentFixture<IntakeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
