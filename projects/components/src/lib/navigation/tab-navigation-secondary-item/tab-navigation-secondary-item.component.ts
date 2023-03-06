import { AfterContentChecked, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';

@Component({
  selector: 'aa-tab-navigation-secondary-item',
  templateUrl: './tab-navigation-secondary-item.component.html',
  styleUrls: ['./tab-navigation-secondary-item.component.scss']
})
export class TabNavigationSecondaryItemComponent implements OnInit, AfterContentChecked {
  @ContentChild(TabNavigationSecondaryContentDirective) templateRefDirective: TabNavigationSecondaryContentDirective;
  @Input() tabId: any;
  @Input() tabName: string;
  @Input() tabRoute: string;
  @Input() tabDisabled: boolean;
  @Input() routerLink: string | any[];
  @Input() routerLinkActive: boolean;
  templateRef: TemplateRef<any>;
  templateRefHeader: TemplateRef<any>;

  ngOnInit() {}

  ngAfterContentChecked() {
    this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
  }

  get route() {
    return this.routerLink || this.tabRoute;
  }
}
