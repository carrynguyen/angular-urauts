import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'https://5e97327377f543001633941b.mockapi.io/school';
@Injectable()
export class ClassService {

  constructor(private http:HttpClient) {}

    getClassesBySchoolId(schoolId): Observable<any>{
    let url = `${apiURL}/${schoolId}/classes`;
    return this.http.get<any>(url);
  }
   getClassesById(schoolId, classesId): Observable<any>{
    let url = `${apiURL}/${schoolId}/classes/${classesId}`;
    return this.http.get<any>(url);
  }
  addNewSchool( obj): Observable<any>{
    return this.http.post<any>('${apiURL}/${schoolId}/classes', obj);
  }
  editSchool(obj): Observable<any>{
    return this.http.put<any> ('${apiURL}/${schoolId}/classes/${obj.id}', obj);
  }

  }

