import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EleveComponent} from './eleve/eleve.component';

const routes: Routes = [
  {path: 'eleve', component: EleveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
