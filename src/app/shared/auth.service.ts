import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged = false;

  constructor(private httpClient:HttpClient,
    private router:Router) { }

    //Ger UserName and Password
    getUserNameAndPassword(user:User):Observable<any>{
      console.log(user.userName);
      console.log(user.password);
      return this.httpClient.get(environment.apiUrl+"/api/user-list/"+user.userName+"&"+user.password);
    }
    
    //LogOut
    public logOut(){
      this.logged=false;
      localStorage.removeItem("USERNAME");
      localStorage.removeItem("ACCESSROLE");
    }
}

