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
  tableHalfWidth: boolean;
  tableRowHeadings: boolean;
  tableFeature: boolean;
  
  approvals = [
    new Approval('Charlotte', 'Anusha', 'success', 'Approved', 'Charlotte', '19 Oct 2019', '21 Oct 2019'),
    new Approval('Charlotte', 'Anusha', 'pending', 'Pending', 'Martin', '27 Nov 2019', '7 Dec 2019'),
    new Approval('Charlotte', 'Anusha', 'error', 'Void', 'HR', '28 Nov 2019', '08 Dec 2019'),
    new Approval('Michael', 'Anusha', 'success', 'Approved', 'Martin', '28 Dec 2019', '08 Jan 2020'),
  ];
  
  myApproval = this.approvals[0];
  
  tableStandardHTML = 
  `<table>
    <thead>
      <tr>
        <th>Status</th>
        <th>Approver</th>
        <th class="align-right">Created date</th>
        <th class="align-right">Modified date</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let approval of approvals">
        <td datalabel="Status"><span class="alert-shield small" ngClass="{{ approval.statusClass }}">{{ approval.status }}</span></td>
        <td datalabel="Approver">{{ approval.approver }}</td>
        <td datalabel="Created date" class="align-right">{{ approval.created }}</td>
        <td datalabel="Modified date" class="align-right">{{ approval.modified }}</td>
      </tr>
    </tbody>
  </table>`;
  
  tableStandardScrollingHTML = 
  `<div class="scroll-panel">
  <div class="scroll-panel-content" [ngStyle]="{'max-height':'8rem'}">
    <table>
      <thead>
        <tr>
          <th><div><span>Status</span></div></th>
          <th><div><span>Approver</span></div></th>
          <th><div><span>Created date</span></div></th>
          <th><div><span>Modified date</span></div></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let approval of approvals">
          <td datalabel="Status"><span class="alert-shield small" ngClass="{{ approval.statusClass }}">{{ approval.status }}</span></td>
          <td datalabel="Approver">{{ approval.approver }}</td>
          <td datalabel="Created date" class="align-right">{{ approval.created }}</td>
          <td datalabel="Modified date" class="align-right">{{ approval.modified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;
  
  tableHalfWidthHTML = 
  `<table class="half-width">
    <thead>
      <tr>
        <th>Created by</th>
        <th>Modified by</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let approval of approvals">
        <td datalabel="Created by">{{approval.createdBy}}</td>
        <td datalabel="Modified by">{{approval.modifiedBy}}</td>
        <td datalabel="Empty cell" class="align-right">
          <button class="delete small">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>`;
  
  tableRowHeadingsHTML =
  `<table>
    <thead>
      <th></th>
      <th>Created by</th>
      <th>Modified by</th>
      <th></th>
    </thead>
    <tbody>
      <tr *ngFor="let approval of approvals">
        <th scope="row">QA team</th>
        <td datalabel="Created by">{{approval.createdBy}}</td>
        <td datalabel="Modified by">{{approval.modifiedBy}}</td>
        <td class="align-right">
          <button class="delete small">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>`;
  
  tableFeatureHTML = 
  `<section class="margin-top-1 overflow-x-scroll">
    <table class="table-feature">
      <tr>
        <td>&nbsp;</td>
        <td class="feature-cell" rowspan="6">
          <table>
            <tr>
              <td>
                <div class="flex-group space-between">
                  <h3>CMaT</h3>
                  <aa-tooltip [isInfo]="true" [setMinWidth]="'5'" [ypos]="'bottom'" [xpos]="'left'">
                    <h4>Ahoy there</h4>
                    <p>Mr Beaver had begun telling them that the<br/> White Witch wasn’t really human at all </p>
                  </aa-tooltip>
                </div>
              </td>
            </tr>
            <tr><td><input type="text" placeholder="Full legal name" /></td></tr>
            <tr><td><input type="text" placeholder="Company BRN" /></td></tr>
            <tr><td><input type="text" placeholder="Company type" /></td></tr>
            <tr><td><input type="text" placeholder="Current status" /></td></tr>
            <tr><td><div><button class="approve small">Accept</button></div></td></tr>
          </table>
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      
      <tr><td>Full legal name</td><td>&nbsp;</td><td>&nbsp;</td></tr>  
      <tr><td>Company number (BRN)</td><td>&nbsp;</td><td>&nbsp;</td></tr> 
      <tr><td>Company type</td><td>&nbsp;</td><td>&nbsp;</td></tr>
      <tr><td>Current status</td><td>&nbsp;</td><td>&nbsp;</td></tr>
      <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
    </table>
  </section>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
