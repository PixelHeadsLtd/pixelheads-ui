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
    onCloseTabSecondary(e) {
        e.stopPropagation();
        this.closeTabSecondary.emit(e);
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
}
TabNavigationSecondaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary',
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a \r\n          class=\"{{tabColour}}\" \r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <a \r\n          class=\"{{tabActiveColour}}\" \r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>",
                styles: [""]
            },] }
];
TabNavigationSecondaryComponent.ctorParameters = () => [];
TabNavigationSecondaryComponent.propDecorators = {
    tabNavigationItems: [{ type: ContentChildren, args: [TabNavigationSecondaryItemComponent,] }],
    autoChangeTabs: [{ type: Input }],
    displayTabContent: [{ type: Input }],
    routerOutlet: [{ type: Input }],
    ngTemplate: [{ type: Input }],
    tabColour: [{ type: Input }],
    tabActiveColour: [{ type: Input }],
    tabClicked: [{ type: Output }],
    tabChanged: [{ type: Output }],
    closeTabSecondary: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFPL0gsTUFBTSxPQUFPLCtCQUErQjtJQWlCMUM7UUFmUyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFLeEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3JFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUNyRSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBT3pDLENBQUM7SUFKaEIsSUFBSSxXQUFXOztRQUNiLE9BQU8sTUFBQSxJQUFJLENBQUMsa0JBQWtCLDBDQUFFLE1BQU0sQ0FBQyxDQUFDLGlCQUFzRCxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUlNLG1CQUFtQixDQUFDLENBQVE7UUFDakMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsS0FBVSxDQUFDO0lBRW5CLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsR0FBd0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsR0FBd0M7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXdDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLG0xQ0FBd0Q7O2FBRXpEOzs7O2lDQUVFLGVBQWUsU0FBQyxtQ0FBbUM7NkJBQ25ELEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTTtnQ0FDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10YWItbmF2aWdhdGlvbi1zZWNvbmRhcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB0YWJOYXZpZ2F0aW9uSXRlbXM6IFF1ZXJ5TGlzdDxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgYXV0b0NoYW5nZVRhYnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlUYWJDb250ZW50ID0gdHJ1ZTtcclxuICBASW5wdXQoKSByb3V0ZXJPdXRsZXQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbmdUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0YWJDb2xvdXI6IGFueTtcclxuICBASW5wdXQoKSB0YWJBY3RpdmVDb2xvdXI6IGFueTtcclxuICBAT3V0cHV0KCkgdGFiQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHRhYkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZVRhYlNlY29uZGFyeSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgY3VycmVudFRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGdldCBjb250ZW50VGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYk5hdmlnYXRpb25JdGVtcz8uZmlsdGVyKCh0YWJOYXZpZ2F0aW9uSXRlbTogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpID0+ICEhdGFiTmF2aWdhdGlvbkl0ZW0udGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgb25DbG9zZVRhYlNlY29uZGFyeShlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xvc2VUYWJTZWNvbmRhcnkuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFic1swXSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0aGlzLmNvbnRlbnRUYWJzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudGFiTmFtZSA9PT0gdGFiLnRhYk5hbWU7XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrZWQodGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJDbGlja2VkLmVtaXQodGFiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2hhbmdlVGFicykge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJCeUlkKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuY29udGVudFRhYnMuZmluZCgoeCkgPT4geC50YWJJZCA9PT0gdGFiSWQpO1xyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=