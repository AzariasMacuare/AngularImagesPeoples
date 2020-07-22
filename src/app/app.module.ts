import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component';
import { FormPeopleComponent } from './components/form-people/form-people.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListPeoplesComponent,
    FormPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
