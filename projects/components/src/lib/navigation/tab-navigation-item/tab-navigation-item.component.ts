import { AfterContentChecked, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';

@Component({
  selector: 'ph-tab-navigation-item',
  templateUrl: './tab-navigation-item.component.html',
  styleUrls: ['./tab-navigation-item.component.scss']
})
export class TabNavigationItemComponent implements AfterContentChecked {
  @ContentChild(TabNavigationContentDirective) templateRefDirective!: TabNavigationContentDirective;
  @ContentChild(TabNavigationHeaderContentDirective) templateRefHeaderDirective!: TabNavigationHeaderContentDirective;
  @Input() destroyOnHide: boolean = false;
  @Input() tabId: any;
  @Input() tabName: string  = '';
  @Input() activeColor: string = '';
  @Input() enableIcons: boolean = false;
  @Input() iconName: string = '';
  @Input() iconColour: string = '';
  @Input() textColour: string = '';
  @Input() closeColour: string = '';
  @Input() enableCount: boolean = false;
  @Input() enableClose: boolean = false;
  @Input() tabCount: number = 0;
  @Input() tabRoute: string = '';
  @Input() tabDisabled: boolean = false;
  @Input() countColour: string = '';
  @Input() showRightDivider: boolean = false;
  @Input() routerLink: string | any[]  = '';
  @Input() routerLinkActive: boolean = false;
  @Input() enableTooltip: boolean = false;
  @Input() tabTooltipTitle: string = '';
  @Input() tabTooltipBody: string = '';
  @Input() tooltipXPos: any;
  @Input() tooltipYPos: any;
  @Input() tooltipWidth: any;
  public templateRef!: TemplateRef<any>;
  public templateRefHeader!: TemplateRef<any>;
  public isVisible: boolean = false; 

  ngAfterContentChecked() {
    this.templateRef = this.templateRefDirective?.templateRef;
    this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
  }

  setVisible(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  get route() {
    return this.routerLink || this.tabRoute;
  }
}
