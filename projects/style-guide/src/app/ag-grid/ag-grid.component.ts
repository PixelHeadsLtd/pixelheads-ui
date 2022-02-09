import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GridOptions, MenuItemDef } from 'ag-grid-community';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { CustomCardComponent } from './custom-card.component';
import { AvatarComponent } from "./avatar.component";
import { EllipsisContextMenuComponent } from './ellipsis-context-menu/ellipsis-context-menu.component';

@Component({
  selector: "app",
  templateUrl: "./ag-grid.component.html",
})
export class AgGridComponent {
  frameworkComponents;
  tooltipShowDelay;
  gridApi;
  gridColumnApi;
  defaultColDef;
  rowData;
  headerCheckboxSelection:boolean;
  
  awarded: string = 'Gold';
  awardDate: string = '19-Apr-2021';
  awardVenue: string = 'Internation Swimming Awards';

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  constructor(public http: HttpClient) {
    this.defaultColDef = { 
      resizable: true, 
      sortable: true, 
      editable: true,
    };
    this.tooltipShowDelay = 0;
  }

  private columnDefs = [
    {
      headerName: 'Hover for card tooltip',
      field: "athlete",
      width: 180,
      suppressSizeToFit: false,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      cellClass: "text-medium link-grid-primary anchor-underline",
      tooltipField: "age", // tell ag-grid to use this cell as a tooltip
      tooltipComponent: "CustomCardComponent", // pass in our custom-card.component
      cellRenderer: 'AvatarComponent', // display the image avatar in ag-grid cell
      cellRendererParams: params => { // pass in the athlete and click event
        return {
          onClick: this.avatarClicked.bind(this),
          link: params.data.athlete
        };
      }
    },
    {
      field: "Context menu",
      width: 110,
      cellRenderer: 'ellipsisContextMenuCell'
    },
    {
      headerName: 'Age',
      colId: 'action',
      field: "age",
      width: 140,
      editable: true,
    },
    {
      field: "year",
      width: 90,
    },
    {
      field: "date",
      width: 110,
    },
    {
      headerName: 'Hover for custom tooltip',
      field: "sport",
      width: 110,
      tooltipField: "sport",
      tooltipComponent: "CustomTooltipComponent",
    },
    {
      field: "gold",
      width: 100,
    },
    {
      field: "silver",
      width: 100,
    },
    {
      field: "bronze",
      width: 100,
    },
    {
      field: "total",
      width: 100,
    },
    {
      field: "next",
      width: 100,
      cellRenderer: () => {
        let elem = document.createElement('div');
        elem.innerHTML = 
          `<button class="primary next">Next</button>`;
        return elem;
      }
    },
  ];

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true
    },
    frameworkComponents: {
      CustomTooltipComponent: CustomTooltipComponent, 
      CustomCardComponent: CustomCardComponent, 
      AvatarComponent: AvatarComponent,
      ellipsisContextMenuCell: EllipsisContextMenuComponent
    },
    onFirstDataRendered: (event) => event.columnApi.autoSizeAllColumns(),
    getContextMenuItems: (params): (string | MenuItemDef)[] => [
      {
        name: 'Add',
        action: () => console.log("You clicked Add")
      },
      {
        name: 'Edit',
        action: () => console.log("You clicked Edit")
      },
      {
        name: 'Delete',
        action: () => console.log("You clicked Delete")
      }
    ]
  };

  // subscribing to the avatar.component.ts onClick($event)
  avatarClicked() {
    console.log("This avatarClicked() event subscribes to the onClick($event) inside avatar.component.ts");
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
        //"../assets/data.json"
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
