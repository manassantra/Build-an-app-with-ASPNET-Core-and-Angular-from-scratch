import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: any ;

  constructor(private http: HttpClient , private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser() ;
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe((response) => {
      this.users = response ;
    }, (error) => {
      console.log(error);
    });
  }

// tslint:disable-next-line:typedef
setCurrentUser() {
  const user: User = JSON.parse(localStorage.getItem('user'));
  this.accountService.setCurrentUser(user);
}
}
