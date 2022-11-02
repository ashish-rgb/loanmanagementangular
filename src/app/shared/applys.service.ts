import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apply } from './apply';
import { Loantype } from './loantype';

@Injectable({
  providedIn: 'root'
})
export class ApplysService {

  formApplyData:Apply = new Apply();

  appls:Apply[]
  loanTypes:Loantype[]

  constructor(private httpClient:HttpClient) { }

  getAllApplies() : Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/applies');
  }

  bindGetAllAppliesList(){
    this.httpClient.get(environment.apiUrl + '/api/applies')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.appls = response as Apply[]
      },
    );
  }

  bindGetAllLoanTypes(){
    this.httpClient.get(environment.apiUrl + "/api/loantypes")
    .toPromise()
    .then(
      data=>{
        console.log(data);
        this.loanTypes=data as Loantype[]
      }
    );
  }
}
