import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:8080';

@Component({
  selector: 'echange-sco-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})

export class EleveComponent implements OnInit {

  @Input() person: any;

  constructor(private _http: HttpClient) {
    this.person = {};
  }

  ngOnInit() {
  }

}