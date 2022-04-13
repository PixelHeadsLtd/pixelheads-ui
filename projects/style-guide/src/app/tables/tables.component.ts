import { Component, OnInit } from '@angular/core';
import { Approval } from '../class/approval';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  
  tableStandard: boolean;
  tableStandardScrolling: boolean;
  tableStandardExpandable: boolean;
  tableHalfWidth: boolean;
  tableRowHeadings: boolean;
  tableFeature: boolean;
  toggleBlade: boolean;
  expandedIndex: number = null;

  setExpandedIndex(index: number) {
    if(index !== this.expandedIndex) {
      this.expandedIndex = index;
    } else {
      this.expandedIndex = null;
    }
  }
  
  approvals = [
    new Approval('Michael', 'Anusha', 'success', 'Approved', 'Michael', '19 Oct 2019', '21 Oct 2019'),
    new Approval('Michael', 'Anusha', 'pending', 'Pending', 'Martin', '27 Nov 2019', '7 Dec 2019'),
    new Approval('Martin', 'Anusha', 'error', 'Void', 'HR', '28 Nov 2019', '08 Dec 2019'),
    new Approval('Michael', 'Anusha', 'success', 'Approved', 'Martin', '28 Dec 2019', '08 Jan 2020'),
  ];
  
  myApproval = this.approvals[0];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
