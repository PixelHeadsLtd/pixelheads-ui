import { Component, OnInit, HostListener, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { OpenLeftNavService } from '../_services/left-nav-service';
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
  showLeftNav: boolean;
  showHeading: boolean;
  showBlade: boolean;
  bladeHeading: string;
  showReleaseNotes: boolean;
  showDesignPrinciples: boolean;
  showSupportedBrowsers: boolean;

  chrome="./assets/images/browsers/chrome.png"
  firefox="./assets/images/browsers/firefox.png"
  edge="./assets/images/browsers/edge.png"
  safari="./assets/images/browsers/safari.png"
  ios="./assets/images/browsers/ios.png"
  android="./assets/images/browsers/android.png"

  public constructor(
    private changeDetector: ChangeDetectorRef,
    private service: OpenLeftNavService
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
  
  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }
  
  toggleSearchInput() {
    this.showSearch = ! this.showSearch;
    if(this.showSearch) {
      document.getElementById('search-text').focus();
    }
  }

  openAnimationsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(0);
    console.log("Well something happened so....");
  }

  openElementsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(1);
  }

  openLayoutNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(2);
  }

  openNavigationNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(3);
  }

  openPatternsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(4);
  }

  openWidgetsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(5);
  }

  openModifiersNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(6);
  }

  openOtherWidgetsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(7);
  }

  goToPageTemplatesNav() {
    this.showSearch = false;
    this.service.updateIndex.next(8);
  }

  openAddendumNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(9);
  }

  searchAnimations = [
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-aa-red-100',
      link: 'loading-spinner',
    },
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-aa-red-100',
      link: 'loading-spinner-page',
    }
  ]

  searchElements = [
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'anchor',
    },
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'buttons',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'checkbox',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'comments',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'field',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'fieldset',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'file-upload',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input-radio',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'select',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'slider',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'tables',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input-textarea',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'validation',
    }
  ]

  searchLayout = [
   {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade-bottom',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade-top',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'custom-wrapper',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'filter',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'flex',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'footer',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'header',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'ui-block',
    }
  ]

  searchNavigation = [
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'context-menu',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'nav-context',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'progress-indicator',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'progress-indicator-lh',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'stepper',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'tab-navigation',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'tree-menu',
    }
  ]

  searchPatterns = [
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'actions-summary',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'alerts',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'alert-shields',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'feature-box',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'colours',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'counter',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'icons',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'progress-bar',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'progress-circle',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'status-indicator',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'tags',
    }
  ]

  searchWidgets = [
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'accordion',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'accordion-fancy',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'card',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'carousel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'tooltip-dynamic',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'favourites',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'icon-picker',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'info-panel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'list-selectable',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'modal',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'overlay',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'popover',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'summary-top',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'toastr',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'tooltip',
    },
    {
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'user-feedback',
    }
  ]

  searchModifiers = [
    {
      id: 'Modifiers',
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'border',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'border-radius',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'colours',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'margin',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'markup',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'misc',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'padding',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'text',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'widths',
    }
  ]

  searchThirdPartyComponents = [
    {
      id: 'OtherWidgets',
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ag-grid',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngb-datepicker',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ng-select',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngx-quill',
    }
  ]

  searchPageTemplates = [
    {
      heading: 'Page templates',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'page-templates',
    }
  ]

  searchAddendum = [
    {
      id: 'Addendum',
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'elements-alignment',
    },
    {
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'unauthorised',
    }
  ]

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

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
