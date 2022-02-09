import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blade-bottom',
  templateUrl: './blade-bottom.component.html',
  styleUrls: ['./blade-bottom.component.scss']
})
export class BladeBottomComponent {

  public isPinned: boolean;
  public isOpen : boolean;
  public toggleTable: boolean;
  public fullScreenPos: string;
  public splitScreenPos: string;
  public closedPos: string;

  bladeIsClosed(closed: boolean) {
    this.isOpen = closed;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.isPinned = togglePinned;
  }

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  rowData;

  constructor(public http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        width: 150,
        suppressSizeToFit: true
      },
      {
        field: 'age',
        width: 90,
        minWidth: 50,
        maxWidth: 100
      },
      {
        field: 'country',
        width: 120
      },
      {
        field: 'year',
        width: 90
      },
      {
        field: 'date',
        width: 110
      },
      {
        field: 'sport',
        width: 110
      },
      {
        field: 'gold',
        width: 100
      },
      {
        field: 'silver',
        width: 100
      },
      {
        field: 'bronze',
        width: 100
      },
      {
        field: 'total',
        width: 100
      }
    ];
    this.defaultColDef = { resizable: true, sortable: true };
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
  
  bladeBottomHTML =
  `<aa-blade-bottom 
  closedPos="calc(100% - 2.1rem)"
  fullScreenPos="7.25rem"
  splitScreenPos="50%"
  (bladePinned)="bladeIsPinned($event)"
  (bladeOpen)="bladeIsClosed($event)"
  (bladeFullScreen)="bladeIsFullScreen($event)"
  [disablePinning]="false"
  [innitiallyPinned]="true"
  headerBgColor="bg-aa-orange-50"
  controlsColor="aa-blue-100"
>
  <ng-container custom-header>
      <div class="material-icons margin-right-0-5 aa-blue-100">monetization_on</div>
      <h2 class="aa-blue-100">Costs</h2>
  </ng-container>
  <ng-container custom-content>
    <CUSTOM CONTENT>
  </ng-container>
</aa-blade-bottom>`;
  
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
