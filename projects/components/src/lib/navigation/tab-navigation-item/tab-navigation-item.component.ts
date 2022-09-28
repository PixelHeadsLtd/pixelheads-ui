import { AfterContentChecked, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';

@Component({
  selector: 'aa-tab-navigation-item',
  templateUrl: './tab-navigation-item.component.html',
  styleUrls: ['./tab-navigation-item.component.scss']
})
export class TabNavigationItemComponent implements OnInit, AfterContentChecked {
  @ContentChild(TabNavigationContentDirective) templateRefDirective: TabNavigationContentDirective;
  @ContentChild(TabNavigationHeaderContentDirective) templateRefHeaderDirective: TabNavigationHeaderContentDirective;
  @Input() tabId: any;
  @Input() tabName: string;
  @Input() activeColor: string;
  @Input() enableIcons: boolean;
  @Input() iconName: string;
  @Input() iconColour: string;
  @Input() enableCount: boolean;
  @Input() tabCount: number;
  @Input() countColour: string;
  @Input() tabRoute: string;
  @Input() tabDisabled: boolean;
  @Input() showRightDivider: boolean;
  @Input() routerLink: string | any[];
  @Input() routerLinkActive: boolean;
  templateRef: TemplateRef<any>;
  templateRefHeader: TemplateRef<any>;

  ngOnInit() {}

  ngAfterContentChecked() {
    this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
    this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
  }

  get route() {
    return this.routerLink || this.tabRoute;
  }
}
