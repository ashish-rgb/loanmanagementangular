import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackquestionListComponent } from './feedbackquestion-list.component';

describe('FeedbackquestionListComponent', () => {
  let component: FeedbackquestionListComponent;
  let fixture: ComponentFixture<FeedbackquestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackquestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackquestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
