import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  filter: string='';

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

}
