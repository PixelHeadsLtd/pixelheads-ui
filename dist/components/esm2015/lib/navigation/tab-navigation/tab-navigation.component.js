import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';
export class TabNavigationComponent {
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
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
}
TabNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation',
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" [class.active]=\"isActive(tab)\" (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count\">{{tab.tabCount}}</span>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n  \r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n",
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
    enableIcons: [{ type: Input }],
    enableCount: [{ type: Input }],
    tabCount: [{ type: Input }],
    iconName: [{ type: Input }],
    iconColour: [{ type: Input }],
    toggleFullscreen: [{ type: Input }],
    activeColor: [{ type: Input }],
    standardTabs: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPbEcsTUFBTSxPQUFPLHNCQUFzQjtJQXlCakM7UUF2QlMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBYXhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztRQUM1RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFRdkQsQ0FBQztJQUpoQixJQUFJLFdBQVc7O1FBQ2IsYUFBTyxJQUFJLENBQUMsa0JBQWtCLDBDQUFFLE1BQU0sQ0FBQyxDQUFDLGlCQUE2QyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFO0lBQzdILENBQUM7SUFJRCxRQUFRLEtBQVUsQ0FBQztJQUVuQixrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQStCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUErQjtRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsR0FBK0I7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscTVHQUE4Qzs7YUFFL0M7Ozs7aUNBRUUsZUFBZSxTQUFDLDBCQUEwQjs2QkFDMUMsS0FBSztnQ0FDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLW5hdmlnYXRpb24taXRlbS90YWItbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhYi1uYXZpZ2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHRhYk5hdmlnYXRpb25JdGVtczogUXVlcnlMaXN0PFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBhdXRvQ2hhbmdlVGFicyA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzcGxheVRhYkNvbnRlbnQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRhYkluZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcm91dGVyT3V0bGV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5nVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGFiSW5mb1JvdXRlck91dGxldDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlbmFibGVJY29uczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlbmFibGVDb3VudDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0YWJDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbkNvbG91cjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzdGFuZGFyZFRhYnM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHRhYkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSB0YWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudD4oKTtcclxuXHJcbiAgY3VycmVudFRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGdldCBjb250ZW50VGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYk5hdmlnYXRpb25JdGVtcz8uZmlsdGVyKCh0YWJOYXZpZ2F0aW9uSXRlbTogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpID0+ICEhdGFiTmF2aWdhdGlvbkl0ZW0udGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnNbMF0pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGhpcy5jb250ZW50VGFic1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0YWI6IFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGFiLnRhYk5hbWUgPT09IHRhYi50YWJOYW1lO1xyXG4gIH1cclxuXHJcbiAgaXNEaXZpZGVyVGFiKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrZWQodGFiOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJDbGlja2VkLmVtaXQodGFiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2hhbmdlVGFicykge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJCeUlkKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuY29udGVudFRhYnMuZmluZCgoeCkgPT4geC50YWJJZCA9PT0gdGFiSWQpO1xyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=