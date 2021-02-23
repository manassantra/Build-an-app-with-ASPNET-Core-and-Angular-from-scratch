import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = 'Home';
  registerMode = false;


  // tslint:disable-next-line:typedef
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

}

