import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GridOptions, MenuItemDef } from 'ag-grid-community';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { CustomValidationTooltipComponent } from './custom-validation-tooltip.component';
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
  settingHeight: boolean;
  customTooltipOne: boolean;
  customTooltipTwo: boolean;
  customTooltipThree: boolean;
  customTooltipFour: boolean;
  contextMenuOne: boolean;
  contextMenuTwo: boolean;
  contextMenuThree: boolean;
  contextMenuFour: boolean;
  contextMenuFive: boolean;
  validation: boolean;
  getLicence: boolean;
  codeCopied: boolean;
  
  awarded: string = 'Gold';
  awardDate: string = '19-Apr-2021';
  awardVenue: string = 'Internation Swimming Awards';

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  agGridLicence = `export const environment = {
    production: false,
    agGridLicense:
      'CompanyName=SparkDynamic GmbH_on_behalf_of_ANGLO AMERICAN SERVICES (UK) LTD.,LicensedGroup=Expertly Managed Computers,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=50,LicensedProductionInstancesCount=0,AssetReference=AG-022882,ExpiryDate=19_February_2023_[v2]_MTY3Njc2NDgwMDAwMA==946d390650835fc8398c4575b3c1c97a'
  };`;

  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    this.codeCopied = true;
    setTimeout(()=>{                         
      this.codeCopied = false;
    }, 3000);
  }

  constructor(public http: HttpClient) {
    this.defaultColDef = { 
      resizable: true, 
      sortable: true, 
      editable: true,
    };
    this.tooltipShowDelay = 0;
  }

  private cellClass(params) {
    if (params.value === 19 || params.value === '29/08/2004' || params.value === 'Gymnastics' || params.value === 0)
      return "error"
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
      cellClass: this.cellClass,
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
      cellRenderer: 'ellipsisContextMenuCell',
      cellClass: this.cellClass
    },
    {
      headerName: 'Age',
      field: "age",
      width: 50,
      tooltipField: "age",
      tooltipComponent: "CustomValidationTooltipComponent",
      cellClass: this.cellClass
    },
    {
      field: "year",
      width: 90,
    },
    {
      field: "date",
      width: 110,
      tooltipField: "date",
      tooltipComponent: "CustomValidationTooltipComponent",
      cellClass: this.cellClass
    },
    {
      headerName: 'Hover for custom tooltip',
      field: "sport",
      width: 110,
      tooltipField: "sport",
      tooltipComponent: "CustomTooltipComponent",
      cellClass: "cell-marker-orange"
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
      tooltipField: "bronze",
      tooltipComponent: "CustomValidationTooltipComponent",
      cellClass: this.cellClass
    },
    {
      field: "total",
      width: 100
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
      CustomValidationTooltipComponent: CustomValidationTooltipComponent, 
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
        // "../assets/data.json"
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
