import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blade-bottom',
  templateUrl: './blade-bottom.component.html',
  styleUrls: ['./blade-bottom.component.scss']
})
export class BladeBottomComponent implements AfterContentChecked  {

  isPinned: boolean;
  isOpen : boolean;
  toggleTable: boolean;
  fullScreenPos: string;
  splitScreenPos: string;
  closedPos: string;
  toggleBlade: boolean;
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  rowData;

  constructor(
    public http: HttpClient,
    private changeDetector: ChangeDetectorRef,
    ) {
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

  bladeIsClosed(closed: boolean) {
    this.isOpen = closed;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.isPinned = togglePinned;
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

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
