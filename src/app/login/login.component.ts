import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //declare variable
   isSubmitted = false;
   loginForm: FormGroup;
   error = '';
   
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //FormControlName
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]],
    });
  }

  //check credentials
  loginCredentials() {
    //Validation
    this.isSubmitted = true;
    
    console.log(this.loginForm.value);

    //invalid form
    if (this.loginForm.invalid) return;

    //valid form
    if (this.loginForm.valid) {
      //calling method to check credentials
      console.log(this.loginForm.value);

      //Authentication
      //calling credentials by passing userName and password
      this.authService.getUserNameAndPassword(this.loginForm.value).subscribe(
        (result) => {
          this.error="";
          console.log(result);
          
          //Storing data in localStorage
          localStorage.setItem("username",result.fullName);

          //Authorization
          console.log(result.roleId);
          if(result.roleId==1){
            console.log("ADMIN");
            localStorage.setItem("ACCESSROLE",result.roleId.toString())
            this.router.navigateByUrl('/admin');
            this.authService.logged=true;
          }
          else if(result.roleId==2){
            console.log("OFFICER");
            localStorage.setItem("ACCESSROLE",result.roleId.toString())
            this.router.navigateByUrl('/fofficer');
            this.authService.logged=true;
          }
          else if(result.roleId==3){
            console.log("CUSTOMER");
            localStorage.setItem("ACCESSROLE",result.roleId.toString())
            this.router.navigateByUrl('/customers');
            this.authService.logged=true;
          }
          else{
            this.error="Sorry! Not allowed to access.... Invalid authentication";
          }
        },
        (error) => {
          this.error = 'Invalid Username and Password';
        }
      );
    }
  }

  //get all controls from loginForm
  get formControls() {
    return this.loginForm.controls;
  }

}
