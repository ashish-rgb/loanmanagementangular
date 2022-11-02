import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-feedbackqueslist',
  templateUrl: './feedbackqueslist.component.html',
  styleUrls: ['./feedbackqueslist.component.scss']
})
export class FeedbackqueslistComponent implements OnInit {

  //assign default page
  page: number=1;
  filter: string='';

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  
 //Populate User Form for edit
 populateForm(user: User){
  console.log(user);
  this.usersService.formUserData=Object.assign({},user)
}

}
