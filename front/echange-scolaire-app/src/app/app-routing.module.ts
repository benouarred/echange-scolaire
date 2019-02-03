import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EleveComponent} from './eleve/eleve.component';
import{HomeComponent} from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'eleve', component: EleveComponent},
  {path: 'home', component: HomeComponent},
  {path:'edit/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
