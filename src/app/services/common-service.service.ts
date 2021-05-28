import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.models';
import { environment } from '../../environments/environment';
import { ScheduleMeetingModel } from '../model/schedule-meeting.model';
import { LoginModel } from '../model/login.model';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveUser(userModel: UserModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'user/save-user'}`, JSON.stringify(userModel), httpOptions);
  }
  getAllUsers() {
    return this.httpClient.get(`${environment.baseUrl}/${'user/get-all-users'}`);
  }

  getUserByUserUniqueId(userUniqueId:number){
    return this.httpClient.get(`${environment.baseUrl}/${'user/get-user-by-user-unique-id/'+userUniqueId}`);
  }

  scheduleMeeting(scheduleMeetingModel : ScheduleMeetingModel){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'schedule-meeting/save-schedule-meeting'}`, JSON.stringify(scheduleMeetingModel), httpOptions);
  }

  loginUser(loginModel: LoginModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${environment.baseUrl}/${'login/login-user'}`, JSON.stringify(loginModel), httpOptions);
 
  }
}
