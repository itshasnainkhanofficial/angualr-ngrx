import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpserviceService } from './httpservice.service';
import { User } from "../models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpService : HttpserviceService) { }

  getAllPosts() : Observable<User[]>{
    return this.httpService.get("/users")
    .pipe( map(data => data as User[]));
  }

}
