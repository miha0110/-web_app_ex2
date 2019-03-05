import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenListComponent } from './when-list.component';

describe('WhenListComponent', () => {
  let component: WhenListComponent;
  let fixture: ComponentFixture<WhenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
