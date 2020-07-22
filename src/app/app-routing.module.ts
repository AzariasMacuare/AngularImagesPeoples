import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component'
import { FormPeopleComponent } from './components/form-people/form-people.component'

const routes: Routes = [
  {path: '', redirectTo: '/peoples', pathMatch: 'full'},
  {path: 'peoples', component: ListPeoplesComponent},
  {path: 'add', component: FormPeopleComponent},
  {path: 'edit/:id', component: FormPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
