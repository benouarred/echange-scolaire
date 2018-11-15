import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'echange-sco-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {


  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
