import { Component, HostBinding } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
dynamicTable: boolean;
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
@HostBinding('style.width.px')
width: number | null = null;

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

get nameColumn(): any {
  let nameColumn = null;
  this.columns.forEach(column => {
    if (column.isName) {
      nameColumn = column;
    }
  });
  return nameColumn;
}

columns = [
  {
    key: 'id', // in rows array
    text: 'id'
  },
  {
    key: 'userName', // in rows array
    text: 'User',
    isName: true
  },
  {
    key: 'status', // in rows array
    text: 'Status'
  },
  {
    key: 'createdDate', // in rows array
    text: 'Created date'
  },
  {
    key: 'modifiedDate', // in rows array
    text: 'Modified date'
  },
];

rows = [
  {
    id:'1',
    userName:'Michael King',
    status:'Active',
    statusClass: 'success',
    createdDate:'21 Jan 2023',
    modifiedDate:'08 Feb 2023'
  },
  {
    id:'2',
    userName:'Claire Burns',
    status:'Active',
    statusClass: 'success',
    createdDate:'15 Jan 2023',
    modifiedDate:'21 Jan 2023'
  },
  {
    id:'3',
    userName:'Will Osborn',
    status:'Active',
    statusClass: 'success',
    createdDate:'22 Feb 2023',
    modifiedDate:'15 Mar 2023'
  },
  {
    id:'4',
    userName:'Bill Gates',
    status:'Inactive',
    statusClass: 'info',
    createdDate:'02 Mar 2023',
    modifiedDate:'04 Mar 2023'
  },
  {
    id:'5',
    userName:'Rishi Sunak',
    status:'Inactive',
    statusClass: 'info',
    createdDate:'19 Dec 2022',
    modifiedDate:'22 Dec 2022'
  },
  {
    id:'6',
    userName:'David Jones',
    status:'Inactive',
    statusClass: 'info',
    createdDate:'18 Dec 2022',
    modifiedDate:'21 Mar 2022'
  },
  {
    id:'7',
    userName:'Hugh Edwards',
    status:'Inactive',
    statusClass: 'info',
    createdDate:'11 Dec 2022',
    modifiedDate:'12 Mar 2022'
  }
];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  dropRow(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }

  onResize(width: any) {
    this.width = width;
  }

  dataList = [
    {
      employeeId: 101,
      employeeName: 'Cristiano Jr',
      employeeAge: 23,
      employeeDOB: '09/03/1997'

    }, {
      employeeId: 102,
      employeeName: 'Neymar Jr',
      employeeAge: 20,
      employeeDOB: '03/08/2000'

    },
    {
      employeeId: 103,
      employeeName: 'Toni Kroos',
      employeeAge: 25,
      employeeDOB: '01/04/1995'

    },
    {
      employeeId: 104,
      employeeName: 'Mark John',
      employeeAge: 20,
      employeeDOB: '03/03/2000'

    }, {
      employeeId: 105,
      employeeName: 'Simon Robert',
      employeeAge: 24,
      employeeDOB: '03/08/1996'

    }
  ]
}
