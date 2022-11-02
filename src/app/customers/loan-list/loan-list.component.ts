import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  filter: string=''; 
  page: number=1;
  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
//subscrice getAllUsers
getAllUsersList(){
  //call service
  this.usersService.getAllUsers().subscribe(
    (response) => {
      console.log("Retrieving from List");
      console.log(response);
    },
    (error) => {
      console.log('something wrong');
      console.log(error);
    }
  );
}

//Update a User
updateUser(userId : number){
  console.log(userId);
  //this.usersService.formUserData=
}

//Delete a User
deleteUser(userId : number){
  console.log("Deleting a record...");
  if(confirm('Are you sure to DELETE this record?')){
    this.usersService.deleteUser(userId).subscribe(
      (result)=> {
        console.log(result);
        this.toastrService.error("Record has been DELETED successfully",'UserApp v2022');
        this.usersService.bindGetAllUsersList();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}


//Populate User Form for edit
populateForm(user: User){
  console.log(user);
  this.usersService.formUserData=Object.assign({},user)
}
}
