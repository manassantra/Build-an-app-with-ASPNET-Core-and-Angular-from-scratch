import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    console.log(this.model);
  }

  // tslint:disable-next-line:typedef
  cancle() {
    console.log('canceled');
  }

}
