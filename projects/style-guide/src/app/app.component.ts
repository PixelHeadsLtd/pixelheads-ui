import { Component, Input, HostBinding } from '@angular/core';
import { AppIconsData } from '../app/class/app-icons-data';

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
  
  hideMe: boolean;
  favIndex: number;
  toggleLoginBlade: boolean;
  toggleAppsBlade: boolean;
  @Input() Ani: boolean;
  @Input() Ele: boolean;
  @Input() Inp: boolean;
  @Input() Lay: boolean;
  @Input() Nav: boolean;
  @Input() Pat: boolean;
  @Input() Typ: boolean;
  @Input() Wid: boolean;
  @Input() Oth: boolean;
  @Input() Mod: boolean;
  @Input() Ema: boolean;
  @Input() Add: boolean;
  @Input() expandAll: boolean;
  @Input() collapseAll: boolean;
  @Input() expanded: boolean;
  @HostBinding('class.light-mode') lightTheme = true;
  @HostBinding('class.dark-mode') darkTheme = false;
  theme = 'Light';

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

  areAllExpanded() {
    return (
      this.Ani &&
      this.Ele &&
      this.Ema &&
      this.Inp &&
      this.Lay &&
      this.Mod &&
      this.Nav &&
      this.Pat &&
      this.Oth &&
      this.Typ &&
      this.Wid &&
      this.Add
    );
  }

  isAnyExpanded() {
    return (
      this.Ani ||
      this.Ele ||
      this.Ema ||
      this.Inp ||
      this.Lay ||
      this.Mod ||
      this.Nav ||
      this.Pat ||
      this.Oth ||
      this.Typ ||
      this.Wid ||
      this.Add
    );
  }

  setExpandedForAllSections(expanded) {
    return (this.Ani = this.Ele = this.Ema = this.Inp = this.Lay = this.Mod = this.Nav = this.Pat = this.Oth = this.Typ = this.Wid = this.Add = this.expandAll = expanded);
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
}
