import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.models';
import { CommonServiceService } from 'src/app/services/common-service.service';
declare var $: any;
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService
  ) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
        });

        this.getAllUsers();
  }
  userList = [];
  getAllUsers(){
    this.commonService.getAllUsers().subscribe((res: any) => {
      if (res.status) {
        this.userList = res.data;
        console.log('getAllUsers : ',this.userList);
      }
    });
  }
user= new UserModel;
getUserByUserUniqueId(userUniqueId:number){
    this.commonService.getUserByUserUniqueId(userUniqueId).subscribe((res: any) => {
      if (res.status) {
        this.user = res.data;
        console.log(this.user);
      }
    });
  }

}
