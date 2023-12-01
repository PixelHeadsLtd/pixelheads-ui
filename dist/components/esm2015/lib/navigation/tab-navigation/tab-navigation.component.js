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
    onCloseTab(e, tabId) {
        e.stopPropagation();
        this.closeTab.emit(tabId);
    }
}
TabNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation',
                template: "\r\n<!-- ROUTER-OUTLET ONLY -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a \r\n          *ngIf=\"!tab.tabDisabled\" \r\n          class=\"flex-group flex-align-center flex-start\"\r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\"\r\n        >\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n          <a *ngIf=\"tab.enableClose\" (click)=\"onCloseTab($event, tab.tabId)\"  class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n  \r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPbEcsTUFBTSxPQUFPLHNCQUFzQjtJQW9CakM7UUFsQlMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBT3hCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztRQUM1RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFDNUQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFROUIsQ0FBQztJQUpoQixJQUFJLFdBQVc7O1FBQ2IsT0FBTyxNQUFBLElBQUksQ0FBQyxrQkFBa0IsMENBQUUsTUFBTSxDQUFDLENBQUMsaUJBQTZDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBSUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUErQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBK0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQStCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVEsRUFBRSxLQUFVO1FBQzdCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHNySEFBOEM7O2FBRS9DOzs7O2lDQUVFLGVBQWUsU0FBQywwQkFBMEI7NkJBQzFDLEtBQUs7Z0NBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxNQUFNO3lCQUNOLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLW5hdmlnYXRpb24taXRlbS90YWItbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhYi1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHRhYk5hdmlnYXRpb25JdGVtczogUXVlcnlMaXN0PFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBhdXRvQ2hhbmdlVGFicyA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzcGxheVRhYkNvbnRlbnQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRhYkluZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcm91dGVyT3V0bGV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5nVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGFiSW5mb1JvdXRlck91dGxldDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b2dnbGVGdWxsc2NyZWVuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN0YW5kYXJkVGFiczogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgdGFiQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHRhYkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZVRhYiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjdXJyZW50VGFiOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudDtcclxuXHJcbiAgZ2V0IGNvbnRlbnRUYWJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFiTmF2aWdhdGlvbkl0ZW1zPy5maWx0ZXIoKHRhYk5hdmlnYXRpb25JdGVtOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkgPT4gISF0YWJOYXZpZ2F0aW9uSXRlbS50ZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFic1swXSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0aGlzLmNvbnRlbnRUYWJzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudGFiTmFtZSA9PT0gdGFiLnRhYk5hbWU7XHJcbiAgfVxyXG5cclxuICBpc0RpdmlkZXJUYWIoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uVGFiQ2xpY2tlZCh0YWI6IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnRhYkNsaWNrZWQuZW1pdCh0YWIpO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9DaGFuZ2VUYWJzKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWIodGFiOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiO1xyXG4gICAgdGhpcy50YWJDaGFuZ2VkLmVtaXQodGFiKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYkJ5SWQodGFiSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgdGFiID0gdGhpcy5jb250ZW50VGFicy5maW5kKCh4KSA9PiB4LnRhYklkID09PSB0YWJJZCk7XHJcbiAgICBpZiAodGFiKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlVGFiKGU6IEV2ZW50LCB0YWJJZDogYW55KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbG9zZVRhYi5lbWl0KHRhYklkKTtcclxuICB9XHJcbn1cclxuIl19