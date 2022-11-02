import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-fofficer',
  templateUrl: './fofficer.component.html',
  styleUrls: ['./fofficer.component.scss']
})
export class FofficerComponent implements OnInit {

  filter: string='';

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    
  }

   

}
