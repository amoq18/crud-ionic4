import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
})
export class StudentCreatePage implements OnInit {

  data: Student;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) { 
    this.data = new Student;
   }

  ngOnInit() {  }
  
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['student-list']);
    });

  }

}
