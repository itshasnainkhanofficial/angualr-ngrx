import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss']
})
export class AlluserComponent implements OnInit {
  @Input() users : User[];
  constructor() { }

  ngOnInit(): void {
  }

}
