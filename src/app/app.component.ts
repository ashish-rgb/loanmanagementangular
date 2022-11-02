import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loanmanagementangular';

  //create constructor
  constructor(public authService: AuthService,
    private router:Router) { }
    
    logOut(){
      this.authService.logOut();
      this.router.navigateByUrl('/login');
    }
}
