import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service'
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css']
})
export class ListPeoplesComponent implements OnInit {

  constructor(public peopleService: PeoplesService) { }

  ngOnInit(): void {
    this.getPeoples()
  }

  getPeoples() {
    this.peopleService.getPeoples()
      .subscribe(
        res => {
          this.peopleService.allPeoples = res as People[];
        },
        err => console.error(err)
      )
  }

  deletePeople(id) {
    this.peopleService.deletePeople(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPeoples();
        },
        err => console.error(err)
      )
  }

}
