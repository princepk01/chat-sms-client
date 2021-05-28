import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.models';
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
  userModel = new UserModel();
  saveUser() {
    this.commonService.saveUser(this.userModel).subscribe((res: any) => {
      if (res.status) {
        this.userModel = new UserModel();
      }
    });
    console.log(JSON.stringify(this.userModel));
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
