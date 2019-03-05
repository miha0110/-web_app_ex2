import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDrComponent } from './hello-dr.component';

describe('HelloDrComponent', () => {
  let component: HelloDrComponent;
  let fixture: ComponentFixture<HelloDrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloDrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
