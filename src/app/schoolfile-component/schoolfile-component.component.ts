import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService} from '../school.service';

@Component({
  selector: 'app-schoolfile-component',
  templateUrl: './schoolfile-component.component.html',
  styleUrls: ['./schoolfile-component.component.css']
})
export class SchoolfileComponentComponent implements OnInit {

 
 SchoolDetail = null; 


  schoolForm = new FormGroup({
  id: new FormControl(null),
  name: new FormControl(''),
  logo: new FormControl(''),
  address: new FormControl(''),
  president: new FormControl(''),
  province: new FormControl('')

  });
  constructor(
   private activateRoute: ActivatedRoute,
   private SchoolService:SchoolService,
   private router: Router,
  ) { }

  ngOnInit() {
     this.activateRoute.paramMap.subscribe(params => {
       console.log(params.get('id'))
      let schoolId = params.get('id');
      if( schoolId != null){
        this.SchoolService.getSchoolById(schoolId).subscribe(data => {
          console.log(data)
          this.schoolForm.setValue(data);
        })
      }
    })
  }
  

save(){

    if(this.schoolForm.value.id != null){
      this.SchoolService.editSchool(this.schoolForm.value).subscribe(data => {
        this.router.navigate(['']);
      })
    }else{
        this.SchoolService.addNewSchool(this.schoolForm.value).subscribe(data => {
        this.router.navigate(['']);
      })
    }
    
  
}
delete(){
  this.SchoolService.removeSchoolById(this.schoolForm.value.id).subscribe(data => {
      this.router.navigate(['']);
    });
}

}
