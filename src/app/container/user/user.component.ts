import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private apiService : ApiserviceService) { }

  users : User[] = [];

  ngOnInit(): void {
    this.fatchData();
  }

  fatchData(){
    this.apiService.getAllPosts().subscribe(data => {
      this.users = data;
    });
  }
}
