import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.getUserUniqueIdFromLocalStorage();
  }
  loginUserUniqueId:string='';
  getUserUniqueIdFromLocalStorage() {
    var userUniqueId = localStorage.getItem('loginUserUniqueId');
    if (userUniqueId != null && userUniqueId != ''){
          this.loginUserUniqueId = userUniqueId;
          console.log('loginUserUniqueId==>home==> ',this.loginUserUniqueId);
    }
}
}
