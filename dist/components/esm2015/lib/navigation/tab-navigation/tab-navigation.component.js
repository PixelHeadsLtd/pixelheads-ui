import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';
export class TabNavigationComponent {
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTab = new EventEmitter();
    }
    get contentTabs() {
        var _a;
        return (_a = this.tabNavigationItems) === null || _a === void 0 ? void 0 : _a.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    ngOnInit() { }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab.tabName === tab.tabName;
    }
    isDividerTab() {
        return true;
    }
    onTabClicked(tab) {
        this.tabClicked.emit(tab);
        if (this.autoChangeTabs) {
            this.changeTab(tab);
        }
    }
    changeTab(tab) {
        this.currentTab = tab;
        this.tabChanged.emit(tab);
    }
    changeTabById(tabId) {
        const tab = this.contentTabs.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
    onCloseTab(e) {
        e.stopPropagation();
        this.closeTab.emit(e);
    }
}
TabNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation',
                template: "\r\n<!-- ROUTER-OUTLET ONLY -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" [class.active]=\"isActive(tab)\" (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n          <a *ngIf=\"tab.enableClose\" (click)=\"onCloseTab($event)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n  \r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n",
                styles: [""]
            },] }
];
TabNavigationComponent.ctorParameters = () => [];
TabNavigationComponent.propDecorators = {
    tabNavigationItems: [{ type: ContentChildren, args: [TabNavigationItemComponent,] }],
    autoChangeTabs: [{ type: Input }],
    displayTabContent: [{ type: Input }],
    tabInfo: [{ type: Input }],
    routerOutlet: [{ type: Input }],
    ngTemplate: [{ type: Input }],
    tabInfoRouterOutlet: [{ type: Input }],
    toggleFullscreen: [{ type: Input }],
    standardTabs: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }],
    closeTab: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPbEcsTUFBTSxPQUFPLHNCQUFzQjtJQW9CakM7UUFsQlMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBT3hCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztRQUM1RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFDNUQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFRaEMsQ0FBQztJQUpoQixJQUFJLFdBQVc7O1FBQ2IsT0FBTyxNQUFBLElBQUksQ0FBQyxrQkFBa0IsMENBQUUsTUFBTSxDQUFDLENBQUMsaUJBQTZDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBSUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUErQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBK0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQStCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLENBQVE7UUFDeEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsdWlIQUE4Qzs7YUFFL0M7Ozs7aUNBRUUsZUFBZSxTQUFDLDBCQUEwQjs2QkFDMUMsS0FBSztnQ0FDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTTt1QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkgdGFiTmF2aWdhdGlvbkl0ZW1zOiBRdWVyeUxpc3Q8VGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGF1dG9DaGFuZ2VUYWJzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNwbGF5VGFiQ29udGVudCA9IHRydWU7XHJcbiAgQElucHV0KCkgdGFiSW5mbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSByb3V0ZXJPdXRsZXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbmdUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0YWJJbmZvUm91dGVyT3V0bGV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3RhbmRhcmRUYWJzOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSB0YWJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgdGFiQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY3VycmVudFRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGdldCBjb250ZW50VGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYk5hdmlnYXRpb25JdGVtcz8uZmlsdGVyKCh0YWJOYXZpZ2F0aW9uSXRlbTogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpID0+ICEhdGFiTmF2aWdhdGlvbkl0ZW0udGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnNbMF0pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGhpcy5jb250ZW50VGFic1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0YWI6IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGFiLnRhYk5hbWUgPT09IHRhYi50YWJOYW1lO1xyXG4gIH1cclxuXHJcbiAgaXNEaXZpZGVyVGFiKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrZWQodGFiOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJDbGlja2VkLmVtaXQodGFiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2hhbmdlVGFicykge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJCeUlkKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuY29udGVudFRhYnMuZmluZCgoeCkgPT4geC50YWJJZCA9PT0gdGFiSWQpO1xyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xvc2VUYWIoZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsb3NlVGFiLmVtaXQoZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==