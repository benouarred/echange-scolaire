import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private persons;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get(`${BASE_URL}/echange-scolaire/api/eleves`)
    .subscribe( (persons) => this.persons = persons);
  }

}
