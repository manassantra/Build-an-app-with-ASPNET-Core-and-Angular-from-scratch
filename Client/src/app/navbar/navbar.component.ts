import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Link1 = "Login";
  Link2 = "Register";
  constructor() { }

  ngOnInit(): void {
  }

}
