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
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    showRightDivider: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFtQnJDLFFBQVEsS0FBSSxDQUFDO0lBRWIscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDO0lBQzFHLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHVqQkFBbUQ7O2FBRXBEOzs7bUNBRUUsWUFBWSxTQUFDLDZCQUE2Qjt5Q0FDMUMsWUFBWSxTQUFDLG1DQUFtQztvQkFDaEQsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24taGVhZGVyLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiTmF2aWdhdGlvbkNvbnRlbnREaXJlY3RpdmUpIHRlbXBsYXRlUmVmRGlyZWN0aXZlOiBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkKFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlKSB0ZW1wbGF0ZVJlZkhlYWRlckRpcmVjdGl2ZTogVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgdGFiSWQ6IGFueTtcclxuICBASW5wdXQoKSB0YWJOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBlbmFibGVJY29uczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSBlbmFibGVDb3VudDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0YWJDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRhYlJvdXRlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFiRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1JpZ2h0RGl2aWRlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHRlbXBsYXRlUmVmSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlUmVmRGlyZWN0aXZlICYmIHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyID0gdGhpcy50ZW1wbGF0ZVJlZkhlYWRlckRpcmVjdGl2ZSAmJiB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvdXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyTGluayB8fCB0aGlzLnRhYlJvdXRlO1xyXG4gIH1cclxufVxyXG4iXX0=