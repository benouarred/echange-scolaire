import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveComponent } from './eleve.component';

describe('EleveComponent', () => {
  let component: EleveComponent;
  let fixture: ComponentFixture<EleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
