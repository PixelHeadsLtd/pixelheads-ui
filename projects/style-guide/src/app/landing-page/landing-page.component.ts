import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  isSticky: boolean = false;
  
  showSearch: boolean;
  showSearchResults: boolean;
  inputValue: string;
  searchText = '';
  rotateIcon: boolean;
  showOverlay: boolean;
  showEmailTemplates: boolean;
  bladeHeading: string;
  
  stepOne = "./assets/images/samples/email-templates/step1.png";
  stepTwo = "./assets/images/samples/email-templates/step2.png";
  stepThree = "./assets/images/samples/email-templates/step3.png";
  stepFour = "./assets/images/samples/email-templates/step4.png";
  stepFive = "./assets/images/samples/email-templates/step5.png";

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

  constructor() { }

    // update when a new components is added...
    components = [
      'loading-spinner',
      'loading-spinner-page',
      'field',
      'field-validation',
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
      'context-menu',
      'dashboard-favourites',
      'info-panel',
      'modal',
      'popover',
      'stepper',
      'summary-top',
      'tags',
      'toastr',
      'tooltip',
      'tree-menu',
      'user-feedback',
      'ag-grid',
      'ngb-datepicker',
      'ng-select',
      'html-email',
      'elements-alignment',
      'slider'
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

  ngOnInit() {
  }

}
