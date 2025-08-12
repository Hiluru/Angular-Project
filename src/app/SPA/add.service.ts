import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:3009/UserData'

  AddUserData(data:any):Observable<any>
  {
    return this.http.post<any>(this.url,data)
  }
}
