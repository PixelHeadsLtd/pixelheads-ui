import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dl-apps-blade',
  templateUrl: './dl-apps-blade.component.html',
  styleUrl: './dl-apps-blade.component.scss'
})
export class DlAppsBladeComponent {
  coreAppIndex?: number;
  searchText = '';
  appsBlade: boolean = false;
  private appsBladeSubscription: Subscription;

  constructor(private toggleService: ToggleService) {
    this.appsBladeSubscription = this.toggleService.appsBlade$.subscribe(appsBlade => {
      this.appsBlade = appsBlade;
    });
  }

  coreAppClicked(index: number) {
    this.coreAppIndex = index;
  }
  
  coreApps = [] = [
    { coreAppIconName: 'handshake', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Agreement' },
    { coreAppIconName: 'question_answer', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Ai Assistant' },
    { coreAppIconName: 'insights', coreIconClass: 'bg-aa-ochre-100', coreAppName: 'Aspect' },
    { coreAppIconName: 'dns', coreIconClass: 'bg-aa-plum-80', coreAppName: 'Assay Manager' },
    { coreAppIconName: 'view_in_ar', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'BANC' },
    { coreAppIconName: 'perm_contact_calendar', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Block Leave' },
    { coreAppIconName: 'route', coreIconClass: 'bg-aa-green-80', coreAppName: 'Command Queue' },
    { coreAppIconName: 'adjust', coreIconClass: 'bg-aa-blue-70', coreAppName: 'Common App' },
    { coreAppIconName: 'playlist_add_check', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Compliance' },
    { coreAppIconName: 'school', coreIconClass: 'bg-aa-plum-100', coreAppName: 'Compliance & Training' },
    { coreAppIconName: 'hub', coreIconClass: 'bg-aa-light-blue-80', coreAppName: 'CORE' },
    { coreAppIconName: 'multiline_chart', coreIconClass: 'bg-aa-light-blue-80', coreAppName: 'Curve Manager' },
    { coreAppIconName: 'people', coreIconClass: 'bg-aa-plum-80', coreAppName: 'Customer Onboarding' },
    { coreAppIconName: 'support_agent', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Customer Portal' },
    { coreAppIconName: 'speed', coreIconClass: 'bg-aa-ochre-100', coreAppName: 'Dashboard' },
    { coreAppIconName: 'plagiarism', coreIconClass: 'bg-aa-brown-100', coreAppName: 'Declarations' },
    { coreAppIconName: 'storage', coreIconClass: 'bg-aa-green-80', coreAppName: 'External Data Provider' },
    { coreAppIconName: 'keyboard_alt', coreIconClass: 'bg-aa-green-80', coreAppName: 'Finance' },
    { coreAppIconName: 'calculate', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Finance Integration' },
    { coreAppIconName: 'calculate', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Finance Reporting' },
    { coreAppIconName: 'report_problem', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Finance Reporting Invoice Error' },
    { coreAppIconName: 'bolt', coreIconClass: 'bg-aa-blue-sky-100 icon-upscale', coreAppName: 'Flash' },
    { coreAppIconName: 'hive', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Hive Customer Portal' },
    { coreAppIconName: 'hive', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Hive Trading Insights' },
    { coreAppIconName: 'pending_actions', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Incident Register' },
    { coreAppIconName: 'switch_access_shortcut_add', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Incident Workflow Tool' },
    { coreAppIconName: 'fitbit', coreIconClass: 'bg-aa-yellow-100 aa-blue-100', coreAppName: 'Integration' },
    { coreAppIconName: 'feed', coreIconClass: 'bg-aa-green-80', coreAppName: 'Invoicing' },
    { coreAppIconName: 'event_repeat', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Live Reporting' },
    { coreAppIconName: 'language', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Logistics Portal' },
    { coreAppIconName: 'bubble_chart', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Market Analytics' },
    { coreAppIconName: 'insert_chart', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Market Data' },
    { coreAppIconName: 'auto_graph', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Market Risk' },
    { coreAppIconName: 'wb_cloudy', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Master Data' },
    { coreAppIconName: 'engineering', coreIconClass: 'bg-aa-ochre-100', coreAppName: 'Mine Visit' },
    { coreAppIconName: 'query_stats', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Monitoring' },
    { coreAppIconName: 'pan_tool', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Op Risk' },
    { coreAppIconName: 'construction', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Operations' },
    { coreAppIconName: 'data_usage', coreIconClass: 'bg-aa-blue-70', coreAppName: 'Optimove' },
    { coreAppIconName: 'groups', coreIconClass: 'bg-aa-plum-80', coreAppName: 'Organisation' },
    { coreAppIconName: 'assignment', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Performance reports' },
    { coreAppIconName: 'savings', coreIconClass: 'bg-aa-green-80', coreAppName: 'Receivable Discounting' },
    { coreAppIconName: 'feedback', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Report Problem' },
    { coreAppIconName: 'speaker_notes', coreIconClass: 'bg-aa-lime-100', coreAppName: 'Reporting' },
    { coreAppIconName: 'try', coreIconClass: 'bg-aa-grey-25', coreAppName: 'Reporting (legacy)' },
    { coreAppIconName: 'perm_phone_msg', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Reporting Portal' },
    { coreAppIconName: 'local_fire_department', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Risk' },
    { coreAppIconName: 'search', coreIconClass: 'bg-aa-green-80', coreAppName: 'Search' },
    { coreAppIconName: 'manage_accounts', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Security AMP' },
    { coreAppIconName: 'directions_boat_filled', coreIconClass: 'bg-aa-blue-sky-100', coreAppName: 'Shipping' },
    { coreAppIconName: 'all_inclusive', coreIconClass: 'bg-aa-ochre-100', coreAppName: 'Supply Chain Manager' },
    { coreAppIconName: 'favorite_border', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'System Health' },
    { coreAppIconName: 'sell', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Tag' },
    { coreAppIconName: 'whatshot', coreIconClass: 'bg-aa-burgundy-80', coreAppName: 'Thermal Coal' },
    { coreAppIconName: 'stacked_line_chart', coreIconClass: 'bg-aa-light-blue-80', coreAppName: 'Trader Analytics' },
    { coreAppIconName: 'dashboard', coreIconClass: 'bg-aa-plum-80', coreAppName: 'Traders Dashboard' },
    { coreAppIconName: 'compare_arrows', coreIconClass: 'bg-aa-green-80', coreAppName: 'Trading Transactions' },
    { coreAppIconName: 'airline_seat_recline_extra', coreIconClass: 'bg-aa-blue-70', coreAppName: 'Travel Safety' },
    { coreAppIconName: 'monetization_on', coreIconClass: 'bg-aa-green-80', coreAppName: 'Treasury Cash Manager' },
    { coreAppIconName: 'loop', coreIconClass: 'bg-aa-orange-100', coreAppName: 'Workflow' }
  ];

  ngOnDestroy(): void {
    this.appsBladeSubscription.unsubscribe();
  }

  closeAppsBlade(): void {
    this.toggleService.toggleAppsBlade(); // Toggle the blade state
  }

}
