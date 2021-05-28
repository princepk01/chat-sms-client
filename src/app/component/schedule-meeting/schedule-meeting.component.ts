import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleMeetingModel } from 'src/app/model/schedule-meeting.model';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  constructor(
    private commonServiceService: CommonServiceService
  ) { }

  ngOnInit(): void {

  }
  scheduleMeetingModel = new ScheduleMeetingModel();

  scheduleMeeting() {
    this.commonServiceService.scheduleMeeting(this.scheduleMeetingModel).subscribe((res: any) => {
      if (res.status) {
        this.scheduleMeetingModel = new ScheduleMeetingModel();
        console.log(res.data);
      }
    });
    console.log('schedule meeting===>', JSON.stringify(this.scheduleMeetingModel));
  }
}
