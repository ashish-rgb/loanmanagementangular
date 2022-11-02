import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-feedbackquestion-list',
  templateUrl: './feedbackquestion-list.component.html',
  styleUrls: ['./feedbackquestion-list.component.scss']
})
export class FeedbackquestionListComponent implements OnInit {

   //assign default page
   page: number=1;
   filter: string=''; 

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

}
