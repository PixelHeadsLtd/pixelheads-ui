import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';
export class TabNavigationSecondaryComponent {
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
                template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a \r\n          class=\"{{tabColour}}\" \r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n        </a>\r\n        <a \r\n          class=\"{{tabActiveColour}}\" \r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\" \r\n          [id]=\"tab.tabId\" \r\n          [class.active]=\"isActive(tab)\" \r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>",
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
    tabChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFPL0gsTUFBTSxPQUFPLCtCQUErQjtJQWlCMUM7UUFmUyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFLeEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3JFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztJQVFoRSxDQUFDO0lBSmhCLElBQUksV0FBVzs7UUFDYixhQUFPLElBQUksQ0FBQyxrQkFBa0IsMENBQUUsTUFBTSxDQUFDLENBQUMsaUJBQXNELEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7SUFDdEksQ0FBQztJQUlELFFBQVEsS0FBVSxDQUFDO0lBRW5CLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsR0FBd0M7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsR0FBd0M7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQXdDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLHFtQ0FBd0Q7O2FBRXpEOzs7O2lDQUVFLGVBQWUsU0FBQyxtQ0FBbUM7NkJBQ25ELEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkgdGFiTmF2aWdhdGlvbkl0ZW1zOiBRdWVyeUxpc3Q8VGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGF1dG9DaGFuZ2VUYWJzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNwbGF5VGFiQ29udGVudCA9IHRydWU7XHJcbiAgQElucHV0KCkgcm91dGVyT3V0bGV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5nVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGFiQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgdGFiQWN0aXZlQ29sb3VyOiBhbnk7XHJcbiAgQE91dHB1dCgpIHRhYkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSB0YWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD4oKTtcclxuXHJcbiAgY3VycmVudFRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGdldCBjb250ZW50VGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYk5hdmlnYXRpb25JdGVtcz8uZmlsdGVyKCh0YWJOYXZpZ2F0aW9uSXRlbTogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpID0+ICEhdGFiTmF2aWdhdGlvbkl0ZW0udGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnNbMF0pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGhpcy5jb250ZW50VGFic1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGFiLnRhYk5hbWUgPT09IHRhYi50YWJOYW1lO1xyXG4gIH1cclxuXHJcbiAgb25UYWJDbGlja2VkKHRhYjogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMudGFiQ2xpY2tlZC5lbWl0KHRhYik7XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0NoYW5nZVRhYnMpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGFiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYih0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcbiAgICB0aGlzLnRhYkNoYW5nZWQuZW1pdCh0YWIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiQnlJZCh0YWJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0YWIgPSB0aGlzLmNvbnRlbnRUYWJzLmZpbmQoKHgpID0+IHgudGFiSWQgPT09IHRhYklkKTtcclxuICAgIGlmICh0YWIpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGFiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19