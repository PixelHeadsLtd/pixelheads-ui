import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GridOptions, MenuItemDef, ColDef } from 'ag-grid-community';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { CustomValidationTooltipComponent } from './custom-validation-tooltip.component';
import { CustomCardComponent } from './custom-card.component';
import { AvatarComponent } from "./avatar.component";
import { EllipsisContextMenuComponent } from './ellipsis-context-menu/ellipsis-context-menu.component';

/* eslint-disable @angular-eslint/component-selector */
@Component({
  selector: "app",
  templateUrl: "./ag-grid.component.html",
})
export class AgGridComponent {
  frameworkComponents: any;
  tooltipShowDelay: number;
  gridApi: any;
  gridColumnApi: any;
  defaultColDef: any;
  rowData: any;
  headerCheckboxSelection: boolean = false;
  settingHeight: boolean = false;
  customTooltipOne: boolean = false;
  customTooltipTwo: boolean = false;
  customTooltipThree: boolean = false;
  customTooltipFour: boolean = false;
  contextMenuOne: boolean = false;
  contextMenuTwo: boolean = false;
  contextMenuThree: boolean = false;
  contextMenuFour: boolean = false;
  contextMenuFive: boolean = false;
  avatarOne: boolean = false;
  avatarTwo: boolean = false;
  avatarThree: boolean = false;
  validation: boolean = false;
  getLicence: boolean = false;
  codeCopied: boolean = false;
  autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };

  awarded: string = 'Gold';
  awardDate: string = '19-Apr-2021';
  awardVenue: string = 'Internation Swimming Awards';

  adjustHeight: number = 7;


  increaseHeight() {
    this.adjustHeight++;
    if (this.adjustHeight > 6) {
    }
  }

  descreaseHeight() {
    if (this.adjustHeight > 7) {
      this.adjustHeight--;
    }
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  // For copy and paste
  copyLicence = `export const environment = {
    production: false,
    agGridLicense:
      'Using_this_{AG_Grid}_Enterprise_key_{AG-046066}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{ANGLO_AMERICAN_SERVICES_(UK)_LTD.}_is_granted_a_{Multiple_Applications}_Developer_License_for_{50}_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_{AG_Grid}_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Grid}_Enterprise_versions_released_before_{18_February_2025}____[v3]_[01]_MTczOTgzNjgwMDAwMA==5f5940fbe3b43ac4be8c7576b5f1647a'
  };`;

  copyToClipboard(item: any): void {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', (item));
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    this.codeCopied = true;
    setTimeout(() => {
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

  // private cellClass(params) {
  //   if (params.value === 19 || params.value === '29/08/2004' || params.value === 'Gymnastics' || params.value === 0)
  //     return "error"
  // }

  private columnDefs = [
    {
      headerName: 'Hover for card tooltip',
      field: "athlete",
      width: 180,
      suppressSizeToFit: false,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      tooltipField: "athlete", // tell ag-grid to use this cell as a tooltip
      tooltipComponent: "CustomCardComponent", // pass in our custom-card.component
      cellRenderer: 'AvatarComponent', // display the image avatar in ag-grid cell
      cellRendererParams: (params: any) => { // pass in the athlete and click event
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
      field: "age",
      width: 50,
      tooltipField: "age",
      tooltipComponent: "CustomValidationTooltipComponent"
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
      cellClass: "error"
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
      // cellClass: this.cellClass

      // WRAP TEXT EXAMPLE
      // field: "bronze If the functionality AG-Grid offers is not required for your project, such as the ability to reorder columns etc, please always use a native table",
      // width: 100,
      // tooltipField: "bronze",
      // tooltipComponent: "CustomValidationTooltipComponent",
      // wrapHeaderText: true,
      // autoHeaderHeight: true,
      // maxWidth: 300,
      // headerClass: 'padding-top-0-5 padding-bottom-0-5'
    },
    {
      field: "total",
      width: 100
    },
    {
      field: "next",
      width: 100,
      cellRenderer: () => {
        const elem = document.createElement('div');
        elem.innerHTML =
          `<div class="alert-shield info">
          Information
        </div>`;
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
    components: {
      CustomTooltipComponent: CustomTooltipComponent,
      CustomCardComponent: CustomCardComponent,
      AvatarComponent: AvatarComponent,
      ellipsisContextMenuCell: EllipsisContextMenuComponent
    },
    onFirstDataRendered: (event) => event.api.autoSizeAllColumns(),
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
    const allColumnIds: any[] = [];
    this.gridColumnApi.getAllColumns().forEach(function (column: any) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://www.ag-grid.com/example-assets/olympic-winners.json"
        // "../assets/data.json"
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
