import { Component, OnInit, HostListener, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { TabData } from '../class/tab-data';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterContentChecked  {
  
  isSticky: boolean = false;
  showSearch: boolean;
  showSearchResults: boolean;
  inputValue: string;
  searchText = '';
  rotateIcon: boolean;
  showOverlay: boolean;
  showEmailTemplates: boolean;
  bladeHeading: string;
  openPageBuilder: boolean;
  showLeftNav: boolean;
  showIconPicker: boolean;
  toggleDataType: boolean;
  showHeaderPicker: boolean;
  showHeading: boolean;
  showBlade: boolean;
  selectedColor = 'aa-light-blue-100';
  
  stepOne = "./assets/images/samples/email-templates/step1.png";
  stepTwo = "./assets/images/samples/email-templates/step2.png";
  stepThree = "./assets/images/samples/email-templates/step3.png";
  stepFour = "./assets/images/samples/email-templates/step4.png";
  stepFive = "./assets/images/samples/email-templates/step5.png";

  public constructor(
    private changeDetector: ChangeDetectorRef,
  ) {}
  
  public activeTab: TabNavigationItemComponent;

  public toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
  
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 350;
  }

  selectColor(event: any) {
    this.selectedColor = event.target.value;
    this.toggleDataType = false;
  }

  tabDataItems = [
    new TabData('orange', 'Total team', '60', '6/10', true, true, 'Some other text'),
    new TabData('green', 'Unchanged', '40', '4/10',  true, true, 'Some text for the tooltip'),
    new TabData('blue', 'Joiners', '60', '6/10',  true, true, 'Some text for the tooltip'),
    new TabData('red', 'Leavers', '80', '8/10',  true, true, 'Some text for the tooltip'),
    new TabData('light-blue', 'Movers', '90', '9/10', true, true, 'Some text for the tooltip'),
  ];
  
  myTabData = this.tabDataItems[0];
  
  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }
  
  // update when a new components is added...
  components = [
    'loading-spinner',
    'loading-spinner-page',
    'field',
    'validation',
    'checkbox',
    'fieldset',
    'file-upload',
    'radio',
    'input',
    'input-textarea',
    'anchor',
    'buttons',
    'select',
    'tables',
    'blade',
    'blade-bottom',
    'blade-top',
    'border',
    'border-radius',
    'box',
    'filter',
    'flex',
    'footer',
    'margin',
    'markup',
    'padding',
    'widths',
    'nav-context',
    'nav-core',
    'tab-navigation',
    'progress-indicator',
    'progress-indicator-lh',
    'alerts',
    'shields',
    'colours',
    'icon-picker',
    'icons',
    'input-textarea',
    'page-layout-examples',
    'progress-bar',
    'progress-circle',
    'editorial-content',
    'typography',
    'accordion',
    'accordion-fancy',
    'card',
    'carousel',
    'context-menu',
    'dashboard-favourites',
    'info-panel',
    'modal',
    'popover',
    'stepper',
    'summary-top',
    'tags',
    'text',
    'toastr',
    'tooltip',
    'tree-menu',
    'user-feedback',
    'ag-grid',
    'ngb-datepicker',
    'ng-select',
    'ngx-quill',
    'html-email',
    'elements-alignment',
    'slider',
    'comments'
  ];
  
  toggleSearchInput() {
    this.showSearch = ! this.showSearch;
    if(this.showSearch) {
      document.getElementById('search-text').focus();
    } else {
      this.searchText = '';
    }
  }

  tourCount: number = null;

  incrementTourCount() {
    this.tourCount++;
  }
  
  setTourCount(step:number) {
    this.tourCount = step;
    this.toggleBlade = false;
  }

  componentMenu = [
    "control-bar",
    "blade-bottom",
    "filter",
    "table",
    "tab-navigation",
    "h2",
    "h2",
    "h2",
    "input",
    "input",
    "input",
    "input",
    "input",
    "select",
    "select",
    "select",
    "select",
    "select"
  ];

  pageTemplate = [];

  onDrop(event: CdkDragDrop<string []>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  myRadios:boolean;
  filterInputs = [];
  bladeInputs = [];
  tableCellInputs = [];
  tableRowInputs = [];
  navItemsInputs = [];
  tabNavInputs = [];
  pickerIcons = [];
  // filter
  removeFilterInput(i) {
    this.filterInputs.splice(i);
  }
  addFilterInput(type:string) {
    this.filterInputs.push({input: "" , type });
  }
  // blade
  removeBladeInput(i) {
    this.bladeInputs.splice(i);
  }
  addBladeInput(type:string) {
    this.bladeInputs.push({input: "" , type });
  }
  // table cl
  removeTableCellInput(i) {
    this.tableCellInputs.splice(i);
  }
  addTableCellInput(type:string) {
    this.tableCellInputs.push({input: "" , type });
  }
  // table row
  removeTableRowInput(i) {
    this.tableRowInputs.splice(i);
  }
  addTableRowInput(type:string) {
    this.tableRowInputs.push({input: "" , type });
  }
  // nav items
  removeNavItemsInput(i) {
    this.navItemsInputs.splice(i);
  }
  addNavItemsInput(type:string) {
    this.navItemsInputs.push({input: "" , type });
  }
  // tab-navigation
  removeTabNavInputs(i) {
    this.tabNavInputs.splice(i);
  }
  addTabNavInputs(type:string) {
    this.tabNavInputs.push({input: "" , type });
  }

  savedFiles = [
    { id: 1, name: 'My saved file' },
    { id: 2, name: 'Another' },
    { id: 3, name: 'Mikes quick mock' },
    { id: 4, name: 'Mockup' },
    { id: 5, name: 'AMP screen' }
  ];

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
