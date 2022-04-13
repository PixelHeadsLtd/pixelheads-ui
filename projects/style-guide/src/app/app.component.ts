import { Component, HostBinding } from '@angular/core';
import { AppIconsData } from '../app/class/app-icons-data';
import { NavData } from '../app/class/nav-data';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSearch: boolean;
  showSearchResults: boolean;
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

  constructor() {
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
    'page-layout-examples',
    'progress-indicator',
    'progress-indicator-lh',
    'alerts',
    'shields',
    'colours',
    'icon-picker',
    'icons',
    'input-textarea',
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
    'overlay',
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
  
  favClicked(index: number) {
    this.favIndex = index;
  }
  
  appIconItems: AppIconsData[] = [
    new AppIconsData('icon-agreement', 'Agreement'),
    new AppIconsData('icon-aspect', 'Aspect'),
    new AppIconsData('icon-block-leave', 'Block Leave'),
    new AppIconsData('icon-command-queue', 'Command Queue'),
    new AppIconsData('icon-common-app', 'Common App'),
    new AppIconsData('icon-compliance', 'Compliance'),
    new AppIconsData('icon-comp-and-train fa-check-circle', 'Compliance & Training'),
    new AppIconsData('icon-core fa-map-marker', 'CORE'),
    new AppIconsData('icon-customer-onboarding', 'Customer Onboarding'),
    new AppIconsData('icon-customer-portal', 'Customer Portal'),
    new AppIconsData('icon-dashboard fa-tachometer-alt', 'Dashboard'),
    new AppIconsData('icon-declarations', 'Declarations'),
    new AppIconsData('icon-ext-data-provider', 'External Data Provider'),
    new AppIconsData('icon-finance fa-calculator', 'Finance'),
    new AppIconsData('icon-finance-integ burgundy fa-print', 'Finance Integration'),
    new AppIconsData('icon-financial-reporting blue fa-print', 'Finance Reporting'),
    new AppIconsData('icon-flash fa-bolt', 'Flash'),
    new AppIconsData('icon-hive fa-globe', 'Hive Customer Portal'),
    new AppIconsData('icon-hive', 'Hive Trading Insights'),
    new AppIconsData('icon-incident-reg burgundyred fa-exclamation', 'Incident Register'),
    new AppIconsData('icon-incident-workflow-tool fa-exclamation', 'Incident Workflow Tool'),
    new AppIconsData('icon-integration fa-project-diagram', 'Integration'),
    new AppIconsData('icon-invoicing fa-file-invoice', 'Invoicing'),
    new AppIconsData('icon-live-reporting', 'Live Reporting'),
    new AppIconsData('icon-logistics-portal fa-atlas', 'Logistics Portal'),
    new AppIconsData('icon-market-analytics fa-chart-area', 'Market Analytics'),
    new AppIconsData('icon-market-data fa-chart-bar', 'Market Data'),
    new AppIconsData('icon-market-risk fa-chart-line', 'Market Risk'),
    new AppIconsData('icon-master-data fa-database ', 'Master Data'),
    new AppIconsData('icon-mine-visit fa-book-open ', 'Mine Visit'),
    new AppIconsData('icon-op-risk', 'Op Risk'),
    new AppIconsData('icon-operations', 'Operations'),
    new AppIconsData('icon-optimove-logo', 'Optimove'),
    new AppIconsData('icon-organisation fa-sitemap ', 'Organisation'),
    new AppIconsData('icon-performance-reports fa-list-ol ', 'Performance reports'),
    new AppIconsData('icon-receive-discount burgundyred fa-handshake', 'Receivable Discounting'),
    new AppIconsData('icon-reporting apple fa-chart-line', 'Reporting'),
    new AppIconsData('icon-reporting fa-chart-pie ', 'Reporting (legacy)'),
    new AppIconsData('icon-reporting-portal fa-file-signature ', 'Reporting Portal'),
    new AppIconsData('icon-risk fa-square-root-alt', 'Risk'),
    new AppIconsData('icon-security-amp fa-users-cog ', 'Security AMP'),
    new AppIconsData('icon-shipping fa-ship', 'Shipping'),
    new AppIconsData('icon-supply-chain', 'Supply Chain Manager'),
    new AppIconsData('icon-system-health fa-heartbeat', 'System Health'),
    new AppIconsData('icon-tag', 'Tag'),
    new AppIconsData('icon-thermal-coal fa-fire-alt', 'Thermal Coal'),
    new AppIconsData('icon-trader-analytics rust fa-chart-area', 'Trader Analytics'),
    new AppIconsData('icon-trader-dashboard darkblue fa-chart-line', 'Traders Dashboard'),
    new AppIconsData('icon-trading-trans', 'Trading Transactions'),
    new AppIconsData('icon-travel-safety fa-route purple', 'Travel Safety'),
    new AppIconsData('icon-workflow fa-check-circle', 'Workflow'),
  ];
  
  myAppIconItems = this.appIconItems[0];

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
      {iconName:'filter_alt', title:'Filter', routerLink:'/filter'},
      {iconName:'view_week', title:'Flex', routerLink:'/flex'},
      {iconName:'call_to_action', title:'Footer', routerLink:'/footer'},
      {customClass:'rotate', iconName:'call_to_action', title:'Header', routerLink:'/header'}
    ]},
    // NAVIGATION
    {color:'orange', iconName:'menu_open', title:'Navigation', nestedItems:
    [
      {iconName:'more_vert', title:'Context menu', routerLink:'/context-menu'},
      {iconName:'menu_open', title:'Nav context', routerLink:'/nav-context'},
      {iconName:'linear_scale', title:'Progress indicator', routerLink:'/progress-indicator'},
      {iconName:'format_list_numbered_rtl', title:'Progress indicator LH', routerLink:'/progress-indicator-lh'},
      {iconName:'pivot_table_chart', title:'Tab navigation', routerLink:'/tab-navigation'},
      {iconName:'account_tree', title:'Tree menu', routerLink:'/tree-menu'}
    ]},
    // PATTERNS
    {color:'plum', iconName:'apps', title:'Patterns', nestedItems:
    [
      {iconName:'add_alert', title:'Alert', routerLink:'/alerts'},
      {iconName:'remove_moderator', title:'Alert shield', routerLink:'/shields'},
      {iconName:'check_box_outline_blank', title:'Box', routerLink:'/box'},
      {iconName:'palette', title:'Colour', routerLink:'/colours'},
      {iconName:'insert_emoticon', title:'Icons', routerLink:'/icons'},
      {iconName:'history_toggle_off', title:'Progress bar', routerLink:'/progress-bar'},
      {iconName:'forward_10', title:'Progress circle', routerLink:'/progress-circle'},
      {iconName:'loyalty', title:'Tags', routerLink:'/tags'}
    ]},
    // WIDGETS
    {color:'light-blue', iconName:'touch_app', title:'Widgets', nestedItems:
    [
      {iconName:'reorder', title:'Accordion', routerLink:'/accordion'},
      {iconName:'view_list', title:'Accordion fancy', routerLink:'/accordion-fancy'},
      {iconName:'account_box', title:'Card', routerLink:'/card'},
      {iconName:'star', title:'Faves - dashboard', routerLink:'/dashboard-favourites'},
      {iconName:'face', title:'Icon picker', routerLink:'/icon-picker'},
      {iconName:'fact_check', title:'Info panel', routerLink:'/info-panel'},
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
      {iconName:'padding', title:'Padding', routerLink:'/padding'},
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
      {iconName:'checklist', title:'Ng select', routerLink:'/ng-select'}
    ]},
    // EMAIL TEMPLATES
    {color:'green reversed', iconName:'attach_email', title:'Email templates', nestedItems:
    [
      {iconName:'forward_to_inbox', title:'Email templates', routerLink:'/html-email'}
    ]}, 
    // ADDENDUM
    {color:'green reversed', iconName:'subject', title:'Addendum', nestedItems:
    [
      {iconName:'view_comfy', title:'Elements alignment', routerLink:'/elements-alignment'},
      {iconName:'view_quilt', title:'Page layout examples', routerLink:'/page-layout-examples'}
    ]},
  ];

  setIndex(index: number) {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = null;
    }
  }

  setSelectedItem(menuIem: NavData) {
    this.navDataItems.forEach(parent=>{
      parent.nestedItems.forEach(child=>{
        child.isSelected = (child === menuIem);
      });
    });
  }
}
