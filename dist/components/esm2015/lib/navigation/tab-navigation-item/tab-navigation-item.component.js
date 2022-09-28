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
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container>\r\n",
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
    tabCount: [{ type: Input }],
    countColour: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    showRightDivider: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFvQnJDLFFBQVEsS0FBSSxDQUFDO0lBRWIscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDO0lBQzFHLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHVqQkFBbUQ7O2FBRXBEOzs7bUNBRUUsWUFBWSxTQUFDLDZCQUE2Qjt5Q0FDMUMsWUFBWSxTQUFDLG1DQUFtQztvQkFDaEQsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25Db250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2aWdhdGlvbi1oZWFkZXItY29udGVudC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10YWItbmF2aWdhdGlvbi1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQENvbnRlbnRDaGlsZChUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSkgdGVtcGxhdGVSZWZEaXJlY3RpdmU6IFRhYk5hdmlnYXRpb25Db250ZW50RGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmUpIHRlbXBsYXRlUmVmSGVhZGVyRGlyZWN0aXZlOiBUYWJOYXZpZ2F0aW9uSGVhZGVyQ29udGVudERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSB0YWJJZDogYW55O1xyXG4gIEBJbnB1dCgpIHRhYk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUljb25zOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbkNvbG91cjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUNvdW50OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRhYkNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY291bnRDb2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJSb3V0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhYkRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dSaWdodERpdmlkZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcm91dGVyTGluazogc3RyaW5nIHwgYW55W107XHJcbiAgQElucHV0KCkgcm91dGVyTGlua0FjdGl2ZTogYm9vbGVhbjtcclxuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICB0ZW1wbGF0ZVJlZkhlYWRlcjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZVJlZkRpcmVjdGl2ZSAmJiB0aGlzLnRlbXBsYXRlUmVmRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlZkhlYWRlciA9IHRoaXMudGVtcGxhdGVSZWZIZWFkZXJEaXJlY3RpdmUgJiYgdGhpcy50ZW1wbGF0ZVJlZkhlYWRlckRpcmVjdGl2ZS50ZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGdldCByb3V0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckxpbmsgfHwgdGhpcy50YWJSb3V0ZTtcclxuICB9XHJcbn1cclxuIl19