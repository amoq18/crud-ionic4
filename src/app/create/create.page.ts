import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  name: string;
  age: string;
  salary: string;

  constructor(public api: RestApiService) {  }

  ngOnInit() { }

  createStudent() {
    this.api.postClassroom({ "name": "test", "salary": "123", "age": "23" });
    console.log(this.name);
  }
}
