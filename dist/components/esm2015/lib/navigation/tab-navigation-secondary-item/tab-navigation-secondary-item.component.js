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
                template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">{{ tabName }}</a>\r\n    <span *ngIf=\"tabDisabled\">{{ tabName }}</span>\r\n  </li>\r\n</ng-container>\r\n",
                styles: [""]
            },] }
];
TabNavigationSecondaryItemComponent.propDecorators = {
    templateRefDirective: [{ type: ContentChild, args: [TabNavigationSecondaryContentDirective,] }],
    tabId: [{ type: Input }],
    tabName: [{ type: Input }],
    tabRoute: [{ type: Input }],
    tabDisabled: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBT3RHLE1BQU0sT0FBTyxtQ0FBbUM7SUFXOUMsUUFBUSxLQUFJLENBQUM7SUFFYixxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztJQUN4RixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxpVkFBNkQ7O2FBRTlEOzs7bUNBRUUsWUFBWSxTQUFDLHNDQUFzQztvQkFDbkQsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1jb250ZW50LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBAQ29udGVudENoaWxkKFRhYk5hdmlnYXRpb25TZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlKSB0ZW1wbGF0ZVJlZkRpcmVjdGl2ZTogVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbnRlbnREaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgdGFiSWQ6IGFueTtcclxuICBASW5wdXQoKSB0YWJOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFiUm91dGU6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWJEaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHRlbXBsYXRlUmVmSGVhZGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlUmVmRGlyZWN0aXZlICYmIHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBnZXQgcm91dGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJMaW5rIHx8IHRoaXMudGFiUm91dGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==