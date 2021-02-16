import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {} ;
  loggedIn: boolean ;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
      this.accountService.login(this.model).subscribe(response => {
        console.log(response);
        this.loggedIn = true;
      }, error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.loggedIn = false;
  }

}
