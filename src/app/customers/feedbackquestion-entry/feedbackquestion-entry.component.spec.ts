import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackquestionEntryComponent } from './feedbackquestion-entry.component';

describe('FeedbackquestionEntryComponent', () => {
  let component: FeedbackquestionEntryComponent;
  let fixture: ComponentFixture<FeedbackquestionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackquestionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackquestionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
