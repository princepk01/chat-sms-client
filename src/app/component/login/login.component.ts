import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from 'src/app/model/login.model';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private commonServiceService: CommonServiceService,
    private router: Router,
   
  ) { }

  ngOnInit(): void {
  }

  loginModel = new LoginModel();
  loginUser() {
    this.commonServiceService.loginUser(this.loginModel).subscribe((res: any) => {
      if(res.status){
        localStorage.setItem('loginUserUniqueId',res.data);
        console.log('loginUserUniqueId==login==> ',res.data)
        this.router.navigate(['']);

       
      }
    });
  }
}
