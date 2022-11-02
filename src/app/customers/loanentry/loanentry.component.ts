import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-loanentry',
  templateUrl: './loanentry.component.html',
  styleUrls: ['./loanentry.component.scss']
})
export class LoanentryComponent implements OnInit {

  fullName:string="Sanjay";

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.usersService.bindGetAllRoles();
  }

   //submit
   onSubmit(form: NgForm){
    console.log(form.value);
    //INSERT =0 or UPDATE >=1
    let insertId=this.usersService.formUserData.userId;

    //checking for Insert or Update 
    if(insertId==0 || insertId==null){
      //INSERT
      this.insertUserRecord(form);
    }else{
      //UPDATE
      this.updateUserRecord(form);
    }
  }

  //Insert method
  insertUserRecord(form?:NgForm){
    console.log("Inserting a record");
    console.log(form.value);
    this.usersService.insertUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("User record has been inserted",'UserApp v2022');
        window.location.reload();
      }
    );
  }

  //Update method
  updateUserRecord(form?:NgForm){
    console.log("Updating a record");
    console.log(form.value);
    this.usersService.updateUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("User record has been updated",'UserApp v2022');
        //window.location.reload();
      }
    );
  }

}
