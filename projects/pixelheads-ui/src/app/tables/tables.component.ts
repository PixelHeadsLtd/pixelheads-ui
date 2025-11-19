import { Component, ElementRef, OnInit } from '@angular/core';
import { TooltipDynamicPosition } from '@pixelheads/ui';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-tables',
templateUrl: './tables.component.html',
styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  // tooltip
  TooltipDynamicPosition = TooltipDynamicPosition;

  toggleBlade: boolean = false;
  tableStandard: boolean = false;
  tableStandardScrolling: boolean = false;
  tableStandardExpandable: boolean = false;
  tableHalfWidth: boolean = false;
  tableRowHeadings: boolean = false;
  tableStatus: boolean = false;
  tableProgress: boolean = false;
  tableFeature: boolean = false;
  dynamicTable: boolean = false;
  multiTables: boolean = false;
  
  expandedIndex: number|null = null;
  expandedIndexTwo: number|null = null;

  colOneMarker: boolean = false;
  colTwoMarker: boolean = false;
  colThreeMarker: boolean = false;
  colFourMarker: boolean = false;
  colFiveMarker: boolean = false;
  colSixMarker: boolean = false;
  colSevenMarker: boolean = false;
  colEightMarker: boolean = false;
  
  // dynamic table
  filterIndex: number = -1;
  sortColumn: string | null = null;
  sortOrder: 'asc' | 'desc' | null = null;
  filterValue: string = '';
  filterValues: { [key: string]: string } = {};
  storageCleared: boolean = false;

  // dynamic table: pagination settings
  enablePagination: boolean = true; 
  currentPage: number = 1;
  pageSize: number = 6;
  totalItems: number = 9;
  totalPages: number = 3;

  constructor(private elementRef: ElementRef, private http: HttpClient) {}

  clearLocalStorage() {
    localStorage.removeItem('columns');
    localStorage.removeItem('filterValues');
    localStorage.removeItem('sortOrder');
    this.storageCleared = true;
    
    if(this.storageCleared) {
      setTimeout((_: any) => {
        this.storageCleared = false;
      }, 1000);
    }
    
    // Optionally, you can perform additional actions after clearing the local storage
  }

  // dynamic table: pagination
  togglePagination(enable: boolean) {
    this.enablePagination = enable;
    if (enable) {
      this.currentPage = 1;
      this.onPageSizeChange(this.pageSize);
    }
  }

  // dynamic table: pagination
  onPageChange(page: number) {
    this.currentPage = page;
  }

  // dynamic table: pagination
  onPageSizeChange(size: number) {
    this.pageSize = size;
  }

  // dynamic table: store columns
  onColumnsChange(columns: any[]) {
    this.columns = columns;
    localStorage.setItem('columns', JSON.stringify(columns));
  }

  // dynamic table: store filtered values
  onFilterValuesChange(filterValues: { [key: string]: string }) {
    this.filterValues = filterValues;
    localStorage.setItem('filterValues', JSON.stringify(filterValues)); // Let's stash those filters in the localStorage
  }

  // dynamic table: store sorting
  onSortOrderChange(sortOrder: { sortColumn: string | null, sortOrder: 'asc' | 'desc' | null }) {
    this.sortColumn = sortOrder.sortColumn;
    this.sortOrder = sortOrder.sortOrder;
    localStorage.setItem('sortOrder', JSON.stringify(sortOrder)); // Storing sorting preferences in localStorage like a boss
  }

  // dynamic table: save to local storage settings
  ngOnInit() {
    this.loadRows();
    this.onPageSizeChange(this.pageSize);
    const savedColumns = localStorage.getItem('columns');
    const savedFilterValues = localStorage.getItem('filterValues');
    const savedSortOrder = localStorage.getItem('sortOrder');
  
    if (savedColumns) {
      this.columns = JSON.parse(savedColumns);
    }
    if (savedFilterValues) {
      this.filterValues = JSON.parse(savedFilterValues);
    }
    if (savedSortOrder) {
      const { sortColumn, sortOrder } = JSON.parse(savedSortOrder);
      this.sortColumn = sortColumn;
      this.sortOrder = sortOrder;
    }
  }

  rows: any[] = [];
  items: string[] = [];

  loadRows(): void {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.rows = data;
      this.updatePagination();
    });
  }

  updatePagination(): void {
    this.totalItems = this.rows.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    // You might also want to handle currentPage, pageSize, and other properties as needed
  }

  onButtonClick(event: { rowIndex: number, colIndex: number, rowData: any, colData: any, actionType: string }) {
    const { rowIndex, colIndex, rowData, colData, actionType } = event;

    switch(actionType) {
      case 'editId':
        this.items.push(`Edit ID button clicked in nested row ${rowIndex} (${rowData.id}), column ${colIndex} (${colData.text}) at ${new Date().toLocaleTimeString()}`);
        console.log('You clicked the `Edit id` button');
        break;
      case 'deleteUser':
        this.items.push(`Delete User button clicked in nested row ${rowIndex} (${rowData.id}), column ${colIndex} (${colData.text}) at ${new Date().toLocaleTimeString()}`);
        console.log('You clicked the `Delete user` button');
        break;
      case 'saveCreatedDate':
        this.items.push(`Save Created Date button clicked in nested row ${rowIndex} (${rowData.id}), column ${colIndex} (${colData.text}) at ${new Date().toLocaleTimeString()}`);
        console.log('You clicked the `Save created date` button');
        break;
      // Add more cases for other action types if needed
      default:
        console.warn(`Unhandled action type: ${actionType}`);
    }
  }

  columns = [
    {
      key: 'id', // in rows array
      text: 'id', // thead value
      visible: true
    },
    {
      key: 'userName', // in rows array
      text: 'User', // thead value
      visible: true
    },
    {
      key: 'userRole', // in rows array
      text: 'User role', // thead value
      visible: true
    },
    {
      key: 'alertShield.userStatus.alertShieldStatus', // in rows array
      text: 'User status', // thead value
      visible: true
    },
    {
      key: 'createdDate', // in rows array
      text: 'Created date', // thead value
      visible: true
    },
    {
      key: 'modifiedDate', // in rows array
      text: 'Modified date', // thead value
      visible: true
    },
    {
      key: 'button.actions.buttonText', // in rows array
      text: 'Actions', // thead value
      visible: true
    },
  ];

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

  myProgress = [] = [
    {
      iconName: 'error', iconClass: 'material-icons', Dept: 'PGM', productType: 'Base Metals', date: '18 Jan 2024', progressCells:
        [
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Complete', tooltipTitleColor: 'ph-green-100', tooltipBody: 'Your job has completed', iconClass: 'material-icons', iconName: ' check_circle', iconStatus: 'done', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
        ]
    },
    {
      iconName: 'error', iconClass: 'material-icons', Dept: 'Base Metals', productType: 'Base Metals', date: '27 Jan 2024', progressCells:
        [
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Complete', tooltipTitleColor: 'ph-green-100', tooltipBody: 'Your job has completed', iconClass: 'material-icons', iconName: ' check_circle', iconStatus: 'done', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
        ]
    },
    {
      iconName: 'error', iconClass: 'material-icons', Dept: 'Energy Sol', productType: 'Base Metals', date: '01 Mar 2024', progressCells:
        [
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Complete', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job has completed', iconClass: 'material-icons', iconName: ' check_circle', iconStatus: 'done', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
        ]
    },
    {
      iconName: 'error', iconClass: 'material-icons', Dept: 'Iron Ore', productType: 'Base Metals', date: '20 Feb 2024', progressCells:
        [
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Complete', tooltipTitleColor: 'ph-green-100', tooltipBody: 'Your job has completed', iconClass: 'material-icons', iconName: ' check_circle', iconStatus: 'done', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Error', tooltipTitleColor: 'ph-red-100', tooltipBody: 'Your job has an error', iconClass: 'material-icons', iconName: 'error', iconStatus: 'error', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Running', tooltipTitleColor: 'ph-light-blue-100', tooltipBody: 'Your job is currently running', iconClass: 'material-icons', iconName: 'watch_later', iconStatus: 'loading', columnMarker: true },
          { tooltipPosition: TooltipDynamicPosition.LEFT, tooltipTitle: 'Pending', tooltipTitleColor: 'ph-orange-100', tooltipBody: 'Your job is currently pending', iconClass: 'material-icons', iconName: 'pending', iconStatus: 'pending', columnMarker: false },
        ]
    }
  ]

  myTableStatus = [
    {
      appName: 'Aurora',
      appURL: 'https://dev.core.angloamerican.com/aurora',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    },
    {
      appName: 'Aurora Curve Manager',
      appURL: 'https://dev.core.angloamerican.com/curvemanager',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    },
    {
      appName: 'Aurora Intraday Reporting',
      appURL: 'https://dev.core.angloamerican.com/intradayreporting/exposure',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    },
    {
      appName: 'Aurora Option Pricer',
      appURL: 'https://dev.core.angloamerican.com/tradingview/pricer',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    },
    {
      appName: 'BANC',
      appURL: 'https://dev.core.angloamerican.com/banc',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    },
    {
      appName: 'Command Queue',
      appURL: 'https://dev.core.angloamerican.com/cq/activity',
      statusOne: 'bg-ph-green-100',
      statusTwo: 'bg-ph-green-100',
      statusThree: 'bg-ph-orange-50',
      statusFour: 'bg-ph-red-100',
      statusFive: 'bg-ph-green-100'
    }
  ];

  // Native table with fixed header and expandable rows
  setExpandedIndex(index: number) {
    if(index !== this.expandedIndex) {
      this.expandedIndex = index;
    } else {
      this.expandedIndex = null;
    }
  }
  // Native table with fixed header and expandable rows
  setExpandedIndexTwo(index: number) {
    if(index !== this.expandedIndexTwo) {
      this.expandedIndexTwo = index;
    } else {
      this.expandedIndexTwo = null;
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
