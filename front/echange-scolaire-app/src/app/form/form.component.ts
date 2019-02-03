import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-echange-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() person;
  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;
  isUpdateMode: boolean;

  constructor() {
    this.isUpdateMode = false;
    this.person = {contactInfoPro: {}, contactInfoPerso: {}};
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }

  ngOnInit() {
  }


  cancel() {
    this.cancel$.emit();
  }

  submit() {
    this.submit$.emit(this.person);
  }

}
