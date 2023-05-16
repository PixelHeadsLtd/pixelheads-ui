import { Component, ContentChild, Input } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';
export class TabNavigationItemComponent {
    ngOnInit() { }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
        this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
}
TabNavigationItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-item',
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION - NOT USED -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n      <a *ngIf=\"enableClose\" (click)=\"onCloseTab($event)\" class=\"anchor-close\"></a>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container> -->\r\n",
                styles: [""]
            },] }
];
TabNavigationItemComponent.propDecorators = {
    templateRefDirective: [{ type: ContentChild, args: [TabNavigationContentDirective,] }],
    templateRefHeaderDirective: [{ type: ContentChild, args: [TabNavigationHeaderContentDirective,] }],
    tabId: [{ type: Input }],
    tabName: [{ type: Input }],
    activeColor: [{ type: Input }],
    enableIcons: [{ type: Input }],
    iconName: [{ type: Input }],
    iconColour: [{ type: Input }],
    enableCount: [{ type: Input }],
    enableClose: [{ type: Input }],
    tabCount: [{ type: Input }],
    countColour: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    showRightDivider: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFxQnJDLFFBQVEsS0FBSSxDQUFDO0lBRWIscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDO0lBQzFHLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHdxQkFBbUQ7O2FBRXBEOzs7bUNBRUUsWUFBWSxTQUFDLDZCQUE2Qjt5Q0FDMUMsWUFBWSxTQUFDLG1DQUFtQztvQkFDaEQsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLWhlYWRlci1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhYi1uYXZpZ2F0aW9uLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBAQ29udGVudENoaWxkKFRhYk5hdmlnYXRpb25Db250ZW50RGlyZWN0aXZlKSB0ZW1wbGF0ZVJlZkRpcmVjdGl2ZTogVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChUYWJOYXZpZ2F0aW9uSGVhZGVyQ29udGVudERpcmVjdGl2ZSkgdGVtcGxhdGVSZWZIZWFkZXJEaXJlY3RpdmU6IFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHRhYklkOiBhbnk7XHJcbiAgQElucHV0KCkgdGFiTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW5hYmxlSWNvbnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uQ29sb3VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW5hYmxlQ291bnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlQ2xvc2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGFiQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb3VudENvbG91cjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhYlJvdXRlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFiRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1JpZ2h0RGl2aWRlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHRlbXBsYXRlUmVmSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlUmVmRGlyZWN0aXZlICYmIHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyID0gdGhpcy50ZW1wbGF0ZVJlZkhlYWRlckRpcmVjdGl2ZSAmJiB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvdXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyTGluayB8fCB0aGlzLnRhYlJvdXRlO1xyXG4gIH1cclxufVxyXG4iXX0=