import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers() ;
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    this.http.get('https://localhost:5001/WeatherForecast').subscribe( response => {
        this.users = response;
      }, error => {
        console.log(error);
      }
      );
  }

}

