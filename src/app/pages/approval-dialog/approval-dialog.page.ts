import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DropDownModel } from './../new-job-dialog/newjobmodel';
import { JobcreationService } from './../../services/jobcreation/jobcreation.service';
import { StoreService } from '../../services/store/store.service';
@Component({
  selector: 'app-approval-dialog',
  templateUrl: './approval-dialog.page.html',
  styleUrls: ['./approval-dialog.page.css']
})
export class ApprovalDialogPage implements OnInit {
  private statusDropDown: DropDownModel[];
  private status: number;
  private comments: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ApprovalDialogPage>,
              private jobcreationService: JobcreationService,
              private storeService: StoreService) {}
  ngOnInit() {
    this.statusDropDown = [
      {key: 1, value: 'Approve' },
      {key: 0, value: 'Reject' }
    ];
    this.status = 1;
    this.comments = '';
  }

  updateJobInfo() {
    let data = {
      status : 1,
      comments: '',
      recruitementId : this.data.jobinfo.recruitment_id
    };
    data.comments = this.comments;
    data.status = this.status;
    this.jobcreationService.updateJobInfo(data).subscribe(res => {
      this.closeDailog();
    });
  }
  closeDailog(): void {
    this.dialogRef.close();
  }
}
