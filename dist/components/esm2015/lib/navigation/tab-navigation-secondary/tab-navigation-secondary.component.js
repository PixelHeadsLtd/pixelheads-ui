import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';
export class TabNavigationSecondaryComponent {
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTabSecondary = new EventEmitter();
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
    onCloseTabSecondary(e, tabId) {
        e.stopPropagation();
        this.closeTabSecondary.emit(tabId);
    }
}
TabNavigationSecondaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary',
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutletSecondary\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a \r\n          class=\"{{tabColour}}\" \r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <a \r\n          class=\"{{tabActiveColour}}\" \r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n",
                styles: [""]
            },] }
];
TabNavigationSecondaryComponent.ctorParameters = () => [];
TabNavigationSecondaryComponent.propDecorators = {
    tabNavigationItems: [{ type: ContentChildren, args: [TabNavigationSecondaryItemComponent,] }],
    autoChangeTabs: [{ type: Input }],
    displayTabContent: [{ type: Input }],
    routerOutletSecondary: [{ type: Input }],
    ngTemplate: [{ type: Input }],
    tabColour: [{ type: Input }],
    tabActiveColour: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }],
    closeTabSecondary: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFPL0gsTUFBTSxPQUFPLCtCQUErQjtJQWlCMUM7UUFmUyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFLeEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3JFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUNyRSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBT3ZDLENBQUM7SUFKaEIsSUFBSSxXQUFXOztRQUNiLE9BQU8sTUFBQSxJQUFJLENBQUMsa0JBQWtCLDBDQUFFLE1BQU0sQ0FBQyxDQUFDLGlCQUFzRCxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUlELFFBQVEsS0FBVSxDQUFDO0lBRW5CLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsR0FBd0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsR0FBd0M7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXdDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBUSxFQUFFLEtBQVU7UUFDdEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxzM0NBQXdEOzthQUV6RDs7OztpQ0FFRSxlQUFlLFNBQUMsbUNBQW1DOzZCQUNuRCxLQUFLO2dDQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3lCQUNOLE1BQU07Z0NBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkgdGFiTmF2aWdhdGlvbkl0ZW1zOiBRdWVyeUxpc3Q8VGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGF1dG9DaGFuZ2VUYWJzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNwbGF5VGFiQ29udGVudCA9IHRydWU7XHJcbiAgQElucHV0KCkgcm91dGVyT3V0bGV0U2Vjb25kYXJ5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5nVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGFiQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgdGFiQWN0aXZlQ29sb3VyOiBhbnk7XHJcbiAgQE91dHB1dCgpIHRhYkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSB0YWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2VUYWJTZWNvbmRhcnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBjdXJyZW50VGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudDtcclxuXHJcbiAgZ2V0IGNvbnRlbnRUYWJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFiTmF2aWdhdGlvbkl0ZW1zPy5maWx0ZXIoKHRhYk5hdmlnYXRpb25JdGVtOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkgPT4gISF0YWJOYXZpZ2F0aW9uSXRlbS50ZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFic1swXSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0aGlzLmNvbnRlbnRUYWJzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudGFiTmFtZSA9PT0gdGFiLnRhYk5hbWU7XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrZWQodGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJDbGlja2VkLmVtaXQodGFiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2hhbmdlVGFicykge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJCeUlkKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuY29udGVudFRhYnMuZmluZCgoeCkgPT4geC50YWJJZCA9PT0gdGFiSWQpO1xyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbG9zZVRhYlNlY29uZGFyeShlOiBFdmVudCwgdGFiSWQ6IGFueSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xvc2VUYWJTZWNvbmRhcnkuZW1pdCh0YWJJZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==