import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap} from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import {ClassService} from'../class.Service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  
   classes=[];
   constructor(
    private Activaterouter:ActivatedRoute,
    private ClassService: ClassService,
     private router: Router,
  ) { }
  
  classForm= new FormGroup({
  name: new FormControl(''),
  room_number: new FormControl(''),
  schoolId: new FormControl(''),
  total_student: new FormControl(''),
  main_teacher: new FormControl(''),
  });
  ngOnInit() {
   this.Activaterouter.paramMap.subscribe(params => {
       console.log(params.get('id'))
       console.log(params.get('schoolId'))

      let classesId = params.get('id');
      let schoolId = params.get('schoolId');

      if( classesId != null){
        this.ClassService.getClassesById(schoolId,classesId).subscribe(data => {
          console.log(data)
          this.classForm.setValue(data);
        })
      }
    })
  }

save(){

    if(this.classForm.value.id != null){
      this.ClassService.editSchool(this.classForm.value).subscribe(data => {
        this.router.navigate(['']);
      })
    }else{
        this.ClassService.addNewSchool(this.classForm.value).subscribe(data => {
        this.router.navigate(['']);
      })
    }
}
}