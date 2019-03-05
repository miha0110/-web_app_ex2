import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeAmountComponent } from './intake-amount.component';

describe('IntakeAmountComponent', () => {
  let component: IntakeAmountComponent;
  let fixture: ComponentFixture<IntakeAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
