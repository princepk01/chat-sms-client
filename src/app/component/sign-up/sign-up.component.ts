import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.models';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService
  ) { }

  ngOnInit(): void {
  }
  user = new User();
  saveUser() {
    this.commonService.saveUser(this.user).subscribe((res: any) => {
      if (res.status) {
        this.user = new User();
      }
    });
    console.log(JSON.stringify(this.user));
    this.getAllUsers();
  }
  getAllUsers() {
    this.commonService.getAllUsers().subscribe((res: any) => {
      if (res.status) {
        console.log('get all user==> ', res.data);
      }
    });
  }
}
