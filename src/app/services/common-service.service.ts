import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.models';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'user/save-user'}`, JSON.stringify(user), httpOptions);
  }
  getAllUsers() {
    return this.httpClient.get(`${environment.baseUrl}/${'user/get-all-users'}`);
  }

  getUserByUserUniqueId(userUniqueId:number){
    return this.httpClient.get(`${environment.baseUrl}/${'user/get-user-by-user-unique-id/'+userUniqueId}`);
  }
}
