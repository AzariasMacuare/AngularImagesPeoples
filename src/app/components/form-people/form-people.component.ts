import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { PeoplesService } from 'src/app/services/peoples.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-form-people',
  templateUrl: './form-people.component.html',
  styleUrls: ['./form-people.component.css']
})
export class FormPeopleComponent implements OnInit {

  people: People = {
    id: 0,
    name: '',
    office: '',
    image: '',
    created_at: new Date()
  }

  true: Boolean = false;

  constructor(private peopleService: PeoplesService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activeRoute.snapshot.params;
    if(id) {
      this.true = true;
      this.peopleService.getForEdit(id)
        .subscribe(
          res => {
            this.people = res[0] as People;
          },
          err => console.error(err)
        )
    } else {
      console.log(this.true);
    }
  }

  savePeople() {
    this.peopleService.saveOnePeople(this.people)
      .subscribe(
        res => {
          console.log(res)
          this.route.navigate(['/']);
        },
        err => console.error(err)
      )
  }

  updatePeople() {
    this.peopleService.putPeople(this.people, this.people.id)
        .subscribe(
          res => {
            console.log(res)
            this.route.navigate(['/'])
          },
          err => console.error(err)
        )
  }

}
