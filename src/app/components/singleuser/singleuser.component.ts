import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.scss']
})
export class SingleuserComponent implements OnInit {
  @Input() user : User;
  constructor() { }

  ngOnInit(): void {
  }

}
