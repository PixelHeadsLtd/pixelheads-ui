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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFPL0gsTUFBTSxPQUFPLCtCQUErQjtJQWlCMUM7UUFmUyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFLeEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO1FBQ3JFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUNyRSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBT3pDLENBQUM7SUFKaEIsSUFBSSxXQUFXOztRQUNiLGFBQU8sSUFBSSxDQUFDLGtCQUFrQiwwQ0FBRSxNQUFNLENBQUMsQ0FBQyxpQkFBc0QsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRTtJQUN0SSxDQUFDO0lBSU0sbUJBQW1CLENBQUMsQ0FBUTtRQUNqQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUF3QztRQUMvQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUF3QztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsR0FBd0M7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsbTFDQUF3RDs7YUFFekQ7Ozs7aUNBRUUsZUFBZSxTQUFDLG1DQUFtQzs2QkFDbkQsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNO2dDQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1pdGVtL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25TZWNvbmRhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHRhYk5hdmlnYXRpb25JdGVtczogUXVlcnlMaXN0PFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50PjtcclxuICBASW5wdXQoKSBhdXRvQ2hhbmdlVGFicyA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzcGxheVRhYkNvbnRlbnQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJvdXRlck91dGxldDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuZ1RlbXBsYXRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRhYkNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIHRhYkFjdGl2ZUNvbG91cjogYW55O1xyXG4gIEBPdXRwdXQoKSB0YWJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgdGFiQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlVGFiU2Vjb25kYXJ5ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBjdXJyZW50VGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudDtcclxuXHJcbiAgZ2V0IGNvbnRlbnRUYWJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFiTmF2aWdhdGlvbkl0ZW1zPy5maWx0ZXIoKHRhYk5hdmlnYXRpb25JdGVtOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkgPT4gISF0YWJOYXZpZ2F0aW9uSXRlbS50ZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBvbkNsb3NlVGFiU2Vjb25kYXJ5KGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbG9zZVRhYlNlY29uZGFyeS5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50VGFicyAmJiB0aGlzLmNvbnRlbnRUYWJzWzBdKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRoaXMuY29udGVudFRhYnNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUodGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRhYi50YWJOYW1lID09PSB0YWIudGFiTmFtZTtcclxuICB9XHJcblxyXG4gIG9uVGFiQ2xpY2tlZCh0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnRhYkNsaWNrZWQuZW1pdCh0YWIpO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9DaGFuZ2VUYWJzKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWIodGFiOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiO1xyXG4gICAgdGhpcy50YWJDaGFuZ2VkLmVtaXQodGFiKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYkJ5SWQodGFiSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgdGFiID0gdGhpcy5jb250ZW50VGFicy5maW5kKCh4KSA9PiB4LnRhYklkID09PSB0YWJJZCk7XHJcbiAgICBpZiAodGFiKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==