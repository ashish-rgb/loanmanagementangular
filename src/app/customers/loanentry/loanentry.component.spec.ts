import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanentryComponent } from './loanentry.component';

describe('LoanentryComponent', () => {
  let component: LoanentryComponent;
  let fixture: ComponentFixture<LoanentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
