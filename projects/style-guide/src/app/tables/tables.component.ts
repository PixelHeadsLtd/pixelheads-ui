import { Component, OnInit } from '@angular/core';

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
  tableStatus: boolean;
  tableProgress: boolean;
  tableFeature: boolean;
  toggleBlade: boolean;
  expandedIndex: number = null;
  expandedIndexTwo: number = null;
  multiTables: boolean;
  colOneMarker: boolean;
  colTwoMarker: boolean;
  colThreeMarker: boolean;
  colFourMarker: boolean;
  colFiveMarker: boolean;
  colSixMarker: boolean;
  colSevenMarker: boolean;
  colEightMarker: boolean;

  setExpandedIndex(index: number) {
    if(index !== this.expandedIndex) {
      this.expandedIndex = index;
    } else {
      this.expandedIndex = null;
    }
  }

  setExpandedIndexTwo(index: number) {
    if(index !== this.expandedIndexTwo) {
      this.expandedIndexTwo = index;
    } else {
      this.expandedIndexTwo = null;
    }
  }
  
  approvals = [
    {
      createdBy: 'Michael',
      modifiedBy: 'Anusha', 
      statusClass: 'success', 
      status: 'Approved', 
      approver: 'Michael', 
      created: '19 Oct 2019', 
      modified: '21 Oct 2019'
    },
    {
      createdBy: 'Michael', 
      modifiedBy: 'Anusha', 
      statusClass: 'pending', 
      status: 'Pending', 
      approver: 'Martin', 
      created: '27 Nov 2019', 
      modified: '7 Dec 2019'
    },
    {
      createdBy: 'Martin', 
      modifiedBy: 'Anusha', 
      statusClass: 'error', 
      status: 'Void', 
      approver: 'HR', 
      created: '28 Nov 2019', 
      modified: '08 Dec 2019'
    },
    {
      createdBy: 'Michael', 
      modifiedBy: 'Anusha', 
      statusClass: 'success', 
      status: 'Approved', 
      approver: 'Martin', 
      created: '28 Dec 2019', 
      modified: '08 Jan 2020'
    },
    {
      createdBy: 'Michael', 
      modifiedBy: 'Anusha', 
      statusClass: 'success', 
      status: 'Approved', 
      approver: 'Michael', 
      created: '19 Oct 2019', 
      modified: '21 Oct 2019'
    },
    {
      createdBy: 'Michael', 
      modifiedBy: 'Anusha', 
      statusClass: 'pending', 
      status: 'Pending', 
      approver: 'Martin', 
      created: '27 Nov 2019', 
      modified: '7 Dec 2019'
    },
    {
      createdBy: 'Martin', 
      modifiedBy: 'Anusha', 
      statusClass: 'error', 
      status: 'Void', 
      approver: 'HR', 
      created: '28 Nov 2019', 
      modified: '08 Dec 2019'
    },
    {
      createdBy: 'Michael', 
      modifiedBy: 'Anusha', 
      statusClass: 'success', 
      status: 'Approved', 
      approver: 'Martin', 
      created: '28 Dec 2019', 
      modified: '08 Jan 2020'
    }
  ];

  // points to *ngFor in the component itself
  currentStatus = [
    {
      iconClass: 'material-icons', 
      iconStatus: 'done', 
      iconName: 'check_circle', 
      iconTitle: 'Done'
    },
    {
      iconClass: 'material-icons', 
      iconStatus: 'error', 
      iconName: 'error', 
      iconTitle: 'Error'
    },
    {
      iconClass: 'material-icons', 
      iconStatus: 'loading', 
      iconName: 'watch_later', 
      iconTitle: 'Loading'
    },
    {
      iconClass: 'material-icons', 
      iconStatus: 'pending', 
      iconName: 'pending', 
      iconTitle: 'Pending'
    },
    {
      iconClass: 'material-icons', 
      iconStatus: 'not-started', 
      iconName: 'expand_circle_down', 
      iconTitle: 'Not started'
    },
  ]

  myProgress = [
    {
      approver: '31 Oct 2022',
      CMT: 'Base metals',
      iconClass: 'material-icons', 
      iconStatusOne: 'loading', 
      iconNameOne: 'watch_later', 
      iconStatusTwo: 'pending', 
      iconNameTwo: 'pending', 
      iconStatusThree: 'done', 
      iconNameThree: 'check_circle', 
      iconStatusFour: 'done', 
      iconNameFour: 'check_circle', 
      iconStatusFive: 'loading', 
      iconNameFive: 'watch_later', 
      iconStatusSix: 'pending', 
      iconNameSix: 'pending', 
      iconStatusSeven: 'done', 
      iconNameSeven: 'check_circle', 
      iconStatusEight: 'error', 
      iconNameEight: 'error',
      colOneMarker: true,
      colTwoMarker: false,
      colThreeMarker: false,
      colFourMarker: true,
      colFiveMarker: false,
      colSixMarker: false,
      colSevenMarker: true,
      colEightMarker: false
    },
    {
      approver: '30 Oct 2022',
      CMT: 'Energy Sol',
      iconClass: 'material-icons', 
      iconStatusOne: 'done', 
      iconNameOne: 'check_circle', 
      iconStatusTwo: 'done', 
      iconNameTwo: 'check_circle', 
      iconStatusThree: 'pending', 
      iconNameThree: 'pending', 
      iconStatusFour: 'error', 
      iconNameFour: 'error', 
      iconStatusFive: 'loading', 
      iconNameFive: 'watch_later', 
      iconStatusSix: 'pending', 
      iconNameSix: 'pending', 
      iconStatusSeven: 'done', 
      iconNameSeven: 'check_circle', 
      iconStatusEight: 'error', 
      iconNameEight: 'error',
      colOneMarker: false,
      colTwoMarker: true,
      colThreeMarker: true,
      colFourMarker: false,
      colFiveMarker: true,
      colSixMarker: false,
      colSevenMarker: false,
      colEightMarker: false
    },
    {
      approver: '28 Sep 2022',
      CMT: 'Iron Ore',
      iconClass: 'material-icons', 
      iconStatusOne: 'error', 
      iconNameOne: 'error', 
      iconStatusTwo: 'loading', 
      iconNameTwo: 'watch_later', 
      iconStatusThree: 'pending', 
      iconNameThree: 'pending', 
      iconStatusFour: 'done', 
      iconNameFour: 'check_circle', 
      iconStatusFive: 'error', 
      iconNameFive: 'error', 
      iconStatusSix: 'pending', 
      iconNameSix: 'pending', 
      iconStatusSeven: 'pending', 
      iconNameSeven: 'pending', 
      iconStatusEight: 'loading', 
      iconNameEight: 'watch_later',
      colOneMarker: false,
      colTwoMarker: false,
      colThreeMarker: false,
      colFourMarker: false,
      colFiveMarker: false,
      colSixMarker: true,
      colSevenMarker: false,
      colEightMarker: false
    },
    {
      approver: '27 Sep 2022',
      CMT: 'PGM',
      iconClass: 'material-icons', 
      iconStatusOne: 'error', 
      iconNameOne: 'error', 
      iconStatusTwo: 'error', 
      iconNameTwo: 'error', 
      iconStatusThree: 'loading', 
      iconNameThree: 'watch_later', 
      iconStatusFour: 'pending', 
      iconNameFour: 'pending', 
      iconStatusFive: 'error', 
      iconNameFive: 'error', 
      iconStatusSix: 'done', 
      iconNameSix: 'check_circle', 
      iconStatusSeven: 'done', 
      iconNameSeven: 'check_circle', 
      iconStatusEight: 'error', 
      iconNameEight: 'error',
      colOneMarker: true,
      colTwoMarker: true,
      colThreeMarker: false,
      colFourMarker: false,
      colFiveMarker: true,
      colSixMarker: false,
      colSevenMarker: false,
      colEightMarker: false
    }
  ];


  myTableStatus = [
    {
      appName: 'Aurora', 
      appURL: 'https://dev.core.angloamerican.com/aurora', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    },
    {
      appName: 'Aurora Curve Manager', 
      appURL: 'https://dev.core.angloamerican.com/curvemanager', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    },
    {
      appName: 'Aurora Intraday Reporting', 
      appURL: 'https://dev.core.angloamerican.com/intradayreporting/exposure', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    },
    {
      appName: 'Aurora Option Pricer', 
      appURL: 'https://dev.core.angloamerican.com/tradingview/pricer', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    },
    {
      appName: 'BANC', 
      appURL: 'https://dev.core.angloamerican.com/banc', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    },
    {
      appName: 'Command Queue', 
      appURL: 'https://dev.core.angloamerican.com/cq/activity', 
      statusOne: 'bg-aa-green-100', 
      statusTwo: 'bg-aa-green-100', 
      statusThree: 'bg-aa-orange-50', 
      statusFour: 'bg-aa-red-100', 
      statusFive: 'bg-aa-green-100'
    }
  ];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
