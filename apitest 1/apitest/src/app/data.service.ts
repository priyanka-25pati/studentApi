import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError ,tap} from 'rxjs';
import { Router } from '@angular/router';
import { User } from './shared/user.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient,private router:Router) {}

  getData(): Observable<User[]> {
    const url = 'https://65a8cabc219bfa37186797da.mockapi.io/api/v1/proj';
    return this.http.get<User[]>(url); 
  }
 
  postDataStudent( name: string, avatar: string, email:string, subject1:number,subject2:number,subject3:number,subject4:number,subject5:number): Observable<User[]> {
    const params = {  name, avatar,email,subject1,subject2,subject3,subject4,subject5};
    const apiUrl = `https://65a8cabc219bfa37186797da.mockapi.io/api/v1/proj`;
    
     return this.http.post<User[]>(apiUrl, params);
   
  }
  
  getUserData(id: number): Observable<User[]> {
   
    const url = `https://65a8cabc219bfa37186797da.mockapi.io/api/v1/proj${id}`;
  
    return this.http.get<User[]>(url)
      .pipe(
        tap(data => console.log("User data fetched:", data)), 
        catchError(error => {
          console.error("Error fetching user data:", error);
          return ([]); 
        })
      );
  }
  
}
