import { Component, HostBinding, OnInit } from '@angular/core';
import { AppIconsData } from '../app/class/app-icons-data';
import { NavData } from '../app/class/nav-data';
import { OpenLeftNavService } from './landing-page/left-nav-service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showSearch: boolean;
  showSearchResults: boolean;
  searchCleared: boolean;
  inputValue: string;
  title = 'style-guide';
  searchText = '';
  mobileMenu: boolean;
  minimizeMenu: boolean;
  menuItemClicked: boolean;
  selectedIndex: number = null;
  selectedNestedIndex: number = null;
  currentDate : any;
  hideMe: boolean;
  favIndex: number;
  toggleLoginBlade: boolean;
  toggleAppsBlade: boolean;
  @HostBinding('class.light-mode') lightTheme = true;
  @HostBinding('class.dark-mode') darkTheme = false;
  theme = 'Light';
  getComponentId: string;

  constructor(private service: OpenLeftNavService) {
    this.currentDate = new Date().getTime();
  }

  toggleTheme(): void {
    if (this.theme === 'Light') {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = 'Dark';
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = 'Light';
    }
  }

  toggleSearch() {
    document.getElementById('search-text').focus();
    this.showSearch = !this.showSearch;
  }

  openAnimationsNav() {
    this.showSearch = false;
    this.selectedIndex = 0;
  }

  openElementsNav() {
    this.showSearch = false;
    this.selectedIndex = 1;
  }

  openLayoutNav() {
    this.showSearch = false;
    this.selectedIndex = 2;
  }

  openNavigationNav() {
    this.showSearch = false;
    this.selectedIndex = 3;
  }

  openPatternsNav() {
    this.showSearch = false;
    this.selectedIndex = 4;
  }

  openWidgetsNav() {
    this.showSearch = false;
    this.selectedIndex = 5;
  }

  openModifiersNav() {
    this.showSearch = false;
    this.selectedIndex = 6;
  }

  openTypographyNav() {
    this.showSearch = false;
    this.selectedIndex = 7;
  }

  openOtherWidgetsNav() {
    this.showSearch = false;
    this.selectedIndex = 8;
  }

  openEmailTemplatesNav() {
    this.showSearch = false;
    this.selectedIndex = 9;
  }

  openQandANav() {
    this.showSearch = false;
    this.selectedIndex = 10;
  }

  openAddendumNav() {
    this.showSearch = false;
    this.selectedIndex = 11;
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
      link: 'anchor',
    },
    {
      id: 'ElementsAndInputs',
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
      link: 'box',
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

  searchTypography = [
    {
      id: 'Typography',
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'aa-green-50',
      link: 'editorial-content',
    },
    {
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'aa-green-50',
      link: 'typography',
    }
  ]

  searchOtherWidgets = [
    {
      id: 'OtherWidgets',
      heading: 'Other widgets',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ag-grid',
    },
    {
      heading: 'Other widgets',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngb-datepicker',
    },
    {
      heading: 'Other widgets',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ng-select',
    },
    {
      heading: 'Other widgets',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngx-quill',
    }
  ]

  searchEmailTemplates = [
    {
      id: 'EmailTemplates',
      heading: 'Email templates',
      icon: 'attach_email',
      iconColour: 'aa-green-50',
      link: 'html-email',
    }
  ]

  searchQandAs = [
    {
      id: 'QAndA',
      heading: 'Q&A`s',
      icon: 'help_outline',
      iconColour: 'aa-green-50',
      link: 'questions-and-answers',
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
      link: 'page-layout-examples',
    },
    {
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'unauthorised',
    }
  ]
  
  favClicked(index: number) {
    this.favIndex = index;
  }
  
  // Apps Blade
  appIconItems: AppIconsData[] = [
    {appIconClass: 'icon-agreement', appIconName: 'Agreement'},
    {appIconClass: 'icon-aspect', appIconName: 'Aspect'},
    {appIconClass: 'icon-tasks', appIconName: 'Assay Manager'},
    {appIconClass: 'icon-banc', appIconName: 'BANC'},
    {appIconClass: 'icon-block-leave', appIconName: 'Block Leave'},
    {appIconClass: 'icon-command-queue', appIconName: 'Command Queue'},
    {appIconClass: 'icon-common-app', appIconName: 'Common App'},
    {appIconClass: 'icon-compliance', appIconName: 'Compliance'},
    {appIconClass: 'icon-comp-and-train fa-check-circle', appIconName: 'Compliance & Training'},
    {appIconClass: 'icon-core fa-map-marker', appIconName: 'CORE'},
    {appIconClass: 'icon-curve-manager', appIconName: 'Curve Manager'},
    {appIconClass: 'icon-customer-onboarding', appIconName: 'Customer Onboarding'},
    {appIconClass: 'icon-customer-portal', appIconName: 'Customer Portal'},
    {appIconClass: 'icon-dashboard fa-tachometer-alt', appIconName: 'Dashboard'},
    {appIconClass: 'icon-declarations', appIconName: 'Declarations'},
    {appIconClass: 'icon-ext-data-provider', appIconName: 'External Data Provider'},
    {appIconClass: 'icon-finance fa-calculator', appIconName: 'Finance'},
    {appIconClass: 'icon-finance-integ burgundy fa-print', appIconName: 'Finance Integration'},
    {appIconClass: 'icon-financial-reporting blue fa-print', appIconName: 'Finance Reporting'},
    {appIconClass: 'icon-flash fa-bolt', appIconName: 'Flash'},
    {appIconClass: 'icon-hive fa-globe', appIconName: 'Hive Customer Portal'},
    {appIconClass: 'icon-hive', appIconName: 'Hive Trading Insights'},
    {appIconClass: 'icon-incident-reg burgundyred fa-exclamation', appIconName: 'Incident Register'},
    {appIconClass: 'icon-incident-workflow-tool fa-exclamation', appIconName: 'Incident Workflow Tool'},
    {appIconClass: 'icon-integration fa-project-diagram', appIconName: 'Integration'},
    {appIconClass: 'icon-invoicing fa-file-invoice', appIconName: 'Invoicing'},
    {appIconClass: 'icon-monitoring', appIconName: 'Monitoring'},
    {appIconClass: 'icon-live-reporting', appIconName: 'Live Reporting'},
    {appIconClass: 'icon-logistics-portal fa-atlas', appIconName: 'Logistics Portal'},
    {appIconClass: 'icon-market-analytics fa-chart-area', appIconName: 'Market Analytics'},
    {appIconClass: 'icon-market-data fa-chart-bar', appIconName: 'Market Data'},
    {appIconClass: 'icon-market-risk fa-chart-line', appIconName: 'Market Risk'},
    {appIconClass: 'icon-master-data fa-database ', appIconName: 'Master Data'},
    {appIconClass: 'icon-mine-visit fa-book-open ', appIconName: 'Mine Visit'},
    {appIconClass: 'icon-op-risk', appIconName: 'Op Risk'},
    {appIconClass: 'icon-operations', appIconName: 'Operations'},
    {appIconClass: 'icon-optimove-logo', appIconName: 'Optimove'},
    {appIconClass: 'icon-organisation fa-sitemap ', appIconName: 'Organisation'},
    {appIconClass: 'icon-performance-reports fa-list-ol ', appIconName: 'Performance reports'},
    {appIconClass: 'icon-receive-discount burgundyred fa-handshake', appIconName: 'Receivable Discounting'},
    {appIconClass: 'icon-reporting apple fa-chart-line', appIconName: 'Reporting'},
    {appIconClass: 'icon-reporting fa-chart-pie ', appIconName: 'Reporting (legacy)'},
    {appIconClass: 'icon-report-problem', appIconName: 'Report Problem'},
    {appIconClass: 'icon-reporting-portal fa-file-signature ', appIconName: 'Reporting Portal'},
    {appIconClass: 'icon-risk fa-square-root-alt', appIconName: 'Risk'},
    {appIconClass: 'icon-security-amp fa-users-cog ', appIconName: 'Security AMP'},
    {appIconClass: 'icon-search', appIconName: 'Search'},
    {appIconClass: 'icon-shipping fa-ship', appIconName: 'Shipping'},
    {appIconClass: 'icon-supply-chain', appIconName: 'Supply Chain Manager'},
    {appIconClass: 'icon-system-health fa-heartbeat', appIconName: 'System Health'},
    {appIconClass: 'icon-tag', appIconName: 'Tag'},
    {appIconClass: 'icon-thermal-coal fa-fire-alt', appIconName: 'Thermal Coal'},
    {appIconClass: 'icon-trader-analytics rust fa-chart-area', appIconName: 'Trader Analytics'},
    {appIconClass: 'icon-trader-dashboard darkblue fa-chart-line', appIconName: 'Traders Dashboard'},
    {appIconClass: 'icon-trading-trans', appIconName: 'Trading Transactions'},
    {appIconClass: 'icon-travel-safety fa-route purple', appIconName: 'Travel Safety'},
    {appIconClass: 'icon-cash-manager', appIconName: 'Treasury Cash Manager'},
    {appIconClass: 'icon-workflow fa-check-circle', appIconName: 'Workflow'}
  ];

  setIndex(index: number) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = null;
    }
  }

  setSelectedItem(nestedMenuItem: NavData) {
    this.navDataItems.forEach(parent=>{
      if(parent.nestedItems != null) {
        parent.nestedItems.forEach(child=>{
          child.isSelected = (child === nestedMenuItem);
        });
      }
    });
  }
  
  navDataItems:NavData[] = [
    // AMIMATIONS
    {color:'red', iconName:'motion_photos_paused', title:'Animations', nestedItems:
    [
      {iconName:'rotate_right', title:'Loading spinner inline', routerLink:'/loading-spinner'},
      {iconName:'rotate_right', title:'Loading spinner page', routerLink:'/loading-spinner-page'}
    ]},
    // ELEMENTS AND INPUTS
    {color:'green', iconName:'check_box', title:'Elements and inputs', nestedItems:
    [
      {iconName:'insert_link', title:'Anchor', routerLink:'/anchor'},
      {iconName:'gamepad', title:'Button', routerLink:'/buttons'},
      {iconName:'check_box', title:'Checkbox', routerLink:'/checkbox'},
      {iconName:'chat', title:'Comments', routerLink:'/comments'},
      {iconName:'view_stream', title:'Field', routerLink:'/field'},
      {iconName:'web', title:'Fieldset', routerLink:'/fieldset'},
      {iconName:'backup', title:'File upload', routerLink:'/file-upload'},
      {iconName:'wysiwyg', title:'Input', routerLink:'/input'},
      {iconName:'radio_button_checked', title:'Radio', routerLink:'/input-radio'},
      {iconName:'rule', title:'Select', routerLink:'/select'},
      {iconName:'toggle_off', title:'Slider', routerLink:'/slider'},
      {iconName:'grid_on', title:'Table', routerLink:'/tables'},
      {iconName:'subject', title:'Textarea', routerLink:'/input-textarea'},
      {iconName:'fact_check', title:'Validation', routerLink:'/validation'}
    ]},
    // LAYOUT
    {color:'blue', iconName:'dashboard', title:'Layout', nestedItems:
    [
      {iconName:'border_right', title:'Blade', routerLink:'/blade'},
      {iconName:'border_bottom', title:'Blade bottom', routerLink:'/blade-bottom'},
      {iconName:'border_top', title:'Blade top', routerLink:'/blade-top'},
      {iconName:'check_box_outline_blank', title:'Custom wrapper', routerLink:'/custom-wrapper'},
      {iconName:'filter_alt', title:'Filter', routerLink:'/filter'},
      {iconName:'view_week', title:'Flex', routerLink:'/flex'},
      {iconName:'call_to_action', title:'Footer', routerLink:'/footer'},
      {customClass:'flip-y', iconName:'call_to_action', title:'Header', routerLink:'/header'},
      {iconName:'block', title:'UI block', routerLink:'/ui-block'}
    ]},
    // NAVIGATION
    {color:'orange', iconName:'menu_open', title:'Navigation', nestedItems:
    [
      {iconName:'more_vert', title:'Context menu', routerLink:'/context-menu'},
      {iconName:'menu_open', title:'Nav context', routerLink:'/nav-context'},
      {iconName:'linear_scale', title:'Progress indicator', routerLink:'/progress-indicator'},
      {iconName:'format_list_numbered_rtl', title:'Progress indicator LH', routerLink:'/progress-indicator-lh'},
      {iconName:'start', title:'Stepper', routerLink:'/stepper'},
      {iconName:'pivot_table_chart', title:'Tab navigation', routerLink:'/tab-navigation'},
      {iconName:'account_tree', title:'Tree menu', routerLink:'/tree-menu'}
    ]},
    // PATTERNS
    {color:'plum', iconName:'apps', title:'Patterns', nestedItems:
    [
      {iconName:'rocket_launch', title:'Actions summary', routerLink:'/actions-summary'},
      {iconName:'add_alert', title:'Alert', routerLink:'/alerts'},
      {iconName:'remove_moderator', title:'Alert shield', routerLink:'/alert-shields'},
      {iconName:'check_box_outline_blank', title:'Box', routerLink:'/box'},
      {iconName:'palette', title:'Colour', routerLink:'/colours'},
      {iconName:'looks_4', title:'Counter', routerLink:'/counter'},
      {iconName:'insert_emoticon', title:'Icons', routerLink:'/icons'},
      {iconName:'history_toggle_off', title:'Progress bar', routerLink:'/progress-bar'},
      {iconName:'forward_10', title:'Progress circle', routerLink:'/progress-circle'},
      {iconName:'check_circle', title:'Status indicator', routerLink:'/status-indicator'},
      {iconName:'loyalty', title:'Tags', routerLink:'/tags'}
    ]},
    // WIDGETS
    {color:'light-blue', iconName:'touch_app', title:'Widgets', nestedItems:
    [
      {iconName:'reorder', title:'Accordion', routerLink:'/accordion'},
      {iconName:'view_list', title:'Accordion fancy', routerLink:'/accordion-fancy'},
      {iconName:'account_box', title:'Card', routerLink:'/card'},
      {iconName:'recent_actors', title:'Carousel', routerLink:'/carousel'},
      {iconName:'star', title:'Favourites', routerLink:'/dashboard-favourites'},
      {iconName:'face', title:'Icon picker', routerLink:'/icon-picker'},
      {iconName:'fact_check', title:'Info panel', routerLink:'/info-panel'},
      {iconName:'checklist_rtl', title:'List selectable', routerLink:'/list-selectable'},
      {iconName:'border_clear', title:'Modal', routerLink:'/modal'},
      {iconName:'border_outer', title:'Overlay', routerLink:'/overlay'},
      {iconName:'sms', title:'Popover', routerLink:'/popover'},
      {iconName:'short_text', title:'Summary top', routerLink:'/summary-top'},
      {iconName:'admin_panel_settings', title:'Toastr', routerLink:'/toastr'},
      {iconName:'mode_comment', title:'Tooltip', routerLink:'/tooltip'},
      {iconName:'sentiment_satisfied_alt', title:'User feedback', routerLink:'/user-feedback'}
    ]},
    // MODIFIERS
    {color:'green reversed', iconName:'auto_fix_off', title:'Modifiers', nestedItems:
    [
      {iconName:'border_style', title:'Border', routerLink:'/border'},
      {iconName:'rounded_corner', title:'Border radius', routerLink:'/border-radius'},
      {iconName:'palette', title:'Colours', routerLink:'/colours'},
      {iconName:'margin', title:'Margin', routerLink:'/margin'},
      {iconName:'code', title:'Markup', routerLink:'/markup'},
      {iconName:'help_outline', title:'Miscellaneous', routerLink:'/misc'},
      {iconName:'padding', title:'Padding', routerLink:'/padding'},
      {iconName:'format_color_text', title:'Text', routerLink:'/text'},
      {iconName:'open_with', title:'Width', routerLink:'/widths'}
    ]},
    // TYPOGRAPHY
    {color:'green reversed', iconName:'text_fields', title:'Typography', nestedItems:
    [
      {iconName:'edit_note', title:'Editorial content', routerLink:'/editorial-content'},
      {iconName:'text_format', title:'Typography', routerLink:'/typography'}
    ]},
    // OTHER WIDGETS
    {color:'green reversed', iconName:'widgets', title:'Other widgets', nestedItems:
    [
      {iconName:'table_rows', title:'Ag grid', routerLink:'/ag-grid'},
      {iconName:'edit_calendar', title:'Ngb datepicker', routerLink:'/ngb-datepicker'},
      {iconName:'checklist', title:'Ng select', routerLink:'/ng-select'},
      {iconName:'edit_note', title:'Ngx quill', routerLink:'/ngx-quill'}
    ]},
    // EMAIL TEMPLATES
    {color:'green reversed', iconName:'attach_email', title:'Email templates', nestedItems:
    [
      {iconName:'forward_to_inbox', title:'Email templates', routerLink:'/html-email'}
    ]}, 
    // Q&A's
    {color:'green reversed', iconName:'help_outline', title:'Q&A`s', nestedItems:
    [
      {iconName:'psychology_alt', title:'Common Q&A`s', routerLink:'/questions-and-answers'}
    ]}, 
    // ADDENDUM
    {color:'green reversed', iconName:'subject', title:'Addendum', nestedItems:
    [
      {iconName:'view_comfy', title:'Elements alignment', routerLink:'/elements-alignment'},
      {iconName:'view_quilt', title:'Page layout examples', routerLink:'/page-layout-examples'},
      {iconName:'block', title:'Unauthorised', routerLink:'/unauthorised'}
    ]},
  ];

  ngOnInit() {
    this.service.updateIndex.subscribe(res=> this.selectedIndex = res)
  }
}
