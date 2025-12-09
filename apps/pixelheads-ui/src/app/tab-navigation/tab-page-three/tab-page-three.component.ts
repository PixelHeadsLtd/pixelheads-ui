import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-page-three',
  templateUrl: './tab-page-three.component.html',
  styleUrls: ['./tab-page-three.component.scss']
})
export class TabPageThreeComponent {

  constructor() { }

  approvals = [
    {
      createdBy: 'Rebecca',
      modifiedBy: 'Anusha',
      status: 'Approved',
      statusClass: 'success',
      approver: 'Rebecca',
      created: '19 Oct 2019',
      modified: '21 Oct 2019'
    },
    {
      createdBy: 'Simon',
      modifiedBy: 'Anusha',
      status: 'pending',
      statusClass: 'pending',
      alertShield: 'Pending',
      approver: 'Simon',
      created: '27 Nov 2019',
      modified: '7 Dec 2019'
    },
    {
      createdBy: 'David',
      modifiedBy: 'Anusha',
      status: 'error',
      statusClass: 'error',
      alertShield: 'Void',
      approver: 'HR',
      created: '28 Nov 2019',
      modified: '08 Dec 2019'
    },
    {
      createdBy: 'James',
      modifiedBy: 'Anusha',
      status: 'success',
      statusClass: 'success',
      alertShield: 'Approved',
      approver: 'James',
      created: '28 Dec 2019',
      modified: '08 Jan 2020'
    },
    {
      createdBy: 'Michael',
      modifiedBy: 'Anusha',
      status: 'success',
      statusClass: 'success',
      alertShield: 'Approved',
      approver: 'Michael',
      created: '19 Oct 2019',
      modified: '21 Oct 2019'
    },
    {
      createdBy: 'Helen',
      modifiedBy: 'Anusha',
      status: 'pending',
      statusClass: 'pending',
      alertShield: 'Pending',
      approver: 'Helen',
      created: '27 Nov 2019',
      modified: '7 Dec 2019'
    },
    {
      createdBy: 'HR',
      modifiedBy: 'Anusha',
      status: 'error',
      statusClass: 'error',
      alertShield: 'Void',
      approver: 'HR',
      created: '28 Nov 2019',
      modified: '08 Dec 2019'
    },
    {
      createdBy: 'Jayne',
      modifiedBy: 'Anusha',
      status: 'success',
      statusClass: 'success',
      alertShield: 'Approved',
      approver: 'Jayne',
      created: '28 Dec 2019',
      modified: '08 Jan 2020'
    }
  ];

}
