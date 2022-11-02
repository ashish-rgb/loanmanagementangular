import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbackquestion-entry',
  templateUrl: './feedbackquestion-entry.component.html',
  styleUrls: ['./feedbackquestion-entry.component.scss']
})
export class FeedbackquestionEntryComponent implements OnInit {
  starRating = 0; 
  constructor() { }

  ngOnInit(): void {
  }

}
