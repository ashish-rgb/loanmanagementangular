import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  filter: string='';

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

}
