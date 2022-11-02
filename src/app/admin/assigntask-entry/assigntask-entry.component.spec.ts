import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntaskEntryComponent } from './assigntask-entry.component';

describe('AssigntaskEntryComponent', () => {
  let component: AssigntaskEntryComponent;
  let fixture: ComponentFixture<AssigntaskEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntaskEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntaskEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
