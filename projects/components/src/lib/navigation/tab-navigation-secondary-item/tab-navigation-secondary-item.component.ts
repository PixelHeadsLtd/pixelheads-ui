import { AfterContentChecked, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';

@Component({
  selector: 'ph-tab-navigation-secondary-item',
  templateUrl: './tab-navigation-secondary-item.component.html',
  styleUrls: ['./tab-navigation-secondary-item.component.scss']
})
export class TabNavigationSecondaryItemComponent implements AfterContentChecked {
  @ContentChild(TabNavigationSecondaryContentDirective) templateRefDirective?: TabNavigationSecondaryContentDirective;
  @Input() tabId: any;
  @Input() tabName: string = '';
  @Input() tabRoute: string = '';
  @Input() tabDisabled: boolean = false;
  @Input() enableCloseSecondary: boolean = false;
  @Input() routerLink: string | any[] = '';
  @Input() routerLinkActive: boolean = false;
  templateRef?: TemplateRef<any>;
  templateRefHeader?: TemplateRef<any>;


  ngAfterContentChecked() {
    this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
  }

  get route() {
    return this.routerLink || this.tabRoute;
  }
}
