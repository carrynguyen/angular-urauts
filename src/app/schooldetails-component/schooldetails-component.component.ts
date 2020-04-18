import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap} from '@angular/router';
import {SchoolService} from '../school.service';
import { FormGroup,FormControl } from '@angular/forms';
import {ClassService} from'../class.service';

@Component({
  selector: 'app-schooldetails',
  templateUrl: './schooldetails.component.html',
  styleUrls: ['./schooldetails.component.css']
})
export class SchooldetailsComponent implements OnInit {

  schoolId= null;
  schoolDetail = null;
  classes = [];
  
  classForm= new FormGroup({
  name: new FormControl(''),
  room_number: new FormControl(''),
  total_student: new FormControl(''),
  main_teacher: new FormControl(''),
  });


  constructor(
    private Activaterouter:ActivatedRoute,
    private SchoolService:SchoolService,
    private ClassService: ClassService,
     private router: Router,
  ) { }

  ngOnInit() {
    this.schoolId = this.Activaterouter.paramMap.subscribe(params => {
      this.schoolId = Number(params.get('id'));
      // lấy thông tin của trường học
      this.SchoolService.getSchoolById(this.schoolId).subscribe(data => {
        this.schoolDetail = data;
      });
      //lấy danh sách lớp học
      this.ClassService.getClassesBySchoolId(this.schoolId).subscribe(classes =>{
        this.classes = classes;
      })
    });
  }

}