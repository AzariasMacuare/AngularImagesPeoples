import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  allPeoples: People[];
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPeoples() {
    return this.http.get(this.url);
  }

  saveOnePeople(people: People) {
    return this.http.post(this.url, people)
  }

  getForEdit(id: String) {
    return this.http.get(this.url + '/' + id);
  }

  putPeople(people: People, id: String | Number) {
    return this.http.put(this.url + '/' + id, people)
  }

  deletePeople(id) {
    return this.http.delete(this.url + '/' + id)
  }

}
