import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../school.service';

@Component({
  selector: 'app-school-component',
  templateUrl: './school-component.component.html',
  styleUrls: ['./school-component.component.css']
})
export class SchoolComponentComponent implements OnInit {
  school=[];
  constructor(private SchoolService: SchoolService) { }

  ngOnInit() {
    this.SchoolService.getlistSchool().subscribe(data=>{
      console.log(data);
      this.school=data;
    });
  }

}