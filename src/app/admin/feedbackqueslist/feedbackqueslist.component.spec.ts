import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackqueslistComponent } from './feedbackqueslist.component';

describe('FeedbackqueslistComponent', () => {
  let component: FeedbackqueslistComponent;
  let fixture: ComponentFixture<FeedbackqueslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackqueslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackqueslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
