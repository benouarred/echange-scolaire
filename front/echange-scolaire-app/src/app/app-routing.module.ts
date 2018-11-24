import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EleveComponent} from './eleve/eleve.component';
import{HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'eleve', component: EleveComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
