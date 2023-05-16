import { Component, ContentChild, Input } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';
export class TabNavigationSecondaryItemComponent {
    ngOnInit() { }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
}
TabNavigationSecondaryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tab-navigation-secondary-item',
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">{{ tabName }}</a>\r\n    <span *ngIf=\"tabDisabled\">{{ tabName }}</span>\r\n  </li>\r\n</ng-container> -->\r\n",
                styles: [""]
            },] }
];
TabNavigationSecondaryItemComponent.propDecorators = {
    templateRefDirective: [{ type: ContentChild, args: [TabNavigationSecondaryContentDirective,] }],
    tabId: [{ type: Input }],
    tabName: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    enableCloseSecondary: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBT3RHLE1BQU0sT0FBTyxtQ0FBbUM7SUFZOUMsUUFBUSxLQUFJLENBQUM7SUFFYixxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztJQUN4RixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QywwVkFBNkQ7O2FBRTlEOzs7bUNBRUUsWUFBWSxTQUFDLHNDQUFzQztvQkFDbkQsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUpIHRlbXBsYXRlUmVmRGlyZWN0aXZlOiBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSB0YWJJZDogYW55O1xyXG4gIEBJbnB1dCgpIHRhYk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJSb3V0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRhYkRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUNsb3NlU2Vjb25kYXJ5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHJvdXRlckxpbms6IHN0cmluZyB8IGFueVtdO1xyXG4gIEBJbnB1dCgpIHJvdXRlckxpbmtBY3RpdmU6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgdGVtcGxhdGVSZWZIZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUgJiYgdGhpcy50ZW1wbGF0ZVJlZkRpcmVjdGl2ZS50ZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGdldCByb3V0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckxpbmsgfHwgdGhpcy50YWJSb3V0ZTtcclxuICB9XHJcbn1cclxuIl19