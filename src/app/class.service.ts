import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'https://5e9ab820bc561b0016af3f57.mockapi.io/hotels';
@Injectable()
export class ClassService {

  constructor(private http:HttpClient) {}

    getClassesByhotelsId(hotelId): Observable<any>{
    let url = `${apiURL}/${hotelId}/classes`;
    return this.http.get<any>(url);
  }
   getClassesById(hotelsId, classesId): Observable<any>{
    let url = `${apiURL}/${hotelsId}/classes/${classesId}`;
    return this.http.get<any>(url);
  }
  addNewHotels( obj): Observable<any>{
    return this.http.post<any>('${apiURL}/${hotelsId}/classes', obj);
  }
  editHotel(obj): Observable<any>{
    return this.http.put<any> ('${apiURL}/${hotelsId}/classes/${obj.id}', obj);
  }

  }

