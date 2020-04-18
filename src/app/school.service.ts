import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = "https://5e97327377f543001633941b.mockapi.io/school";
@Injectable()
export class SchoolService {

  constructor(private http: HttpClient) { }

getlistSchool(): Observable<any>{
return this.http.get<any>(apiURL);
}

getSchoolById(id): Observable<any>{
    let url = `${apiURL}/${id}`;
    return this.http.get<any>(url);
  }

removeSchoolById(id): Observable<any>{
    let url = `${apiURL}/${id}`;
    return this.http.delete<any>(url);
  }

  addNewSchool(obj): Observable<any>{
    return this.http.post<any>(apiURL, obj);
  }

  editSchool(obj): Observable<any>{
    let url = `${apiURL}/${obj.id}`;
    return this.http.put<any>(url, obj);
  }
}