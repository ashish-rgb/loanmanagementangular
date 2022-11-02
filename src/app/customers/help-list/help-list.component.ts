import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss']
})
export class HelpListComponent implements OnInit {

  filter: string=''; 
  page: number=1;

  constructor(public usersService : UsersService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

}
