import { Component, ContentChild, Input } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';
import * as i0 from "@angular/core";
export class TabNavigationSecondaryItemComponent {
    constructor() {
        this.tabName = '';
        this.tabRoute = '';
        this.tabDisabled = false;
        this.enableCloseSecondary = false;
        this.routerLink = '';
        this.routerLinkActive = false;
    }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
    static { this.ɵfac = function TabNavigationSecondaryItemComponent_Factory(t) { return new (t || TabNavigationSecondaryItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationSecondaryItemComponent, selectors: [["aa-tab-navigation-secondary-item"]], contentQueries: function TabNavigationSecondaryItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationSecondaryContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefDirective = _t.first);
        } }, inputs: { tabId: "tabId", tabName: "tabName", tabRoute: "tabRoute", tabDisabled: "tabDisabled", enableCloseSecondary: "enableCloseSecondary", routerLink: "routerLink", routerLinkActive: "routerLinkActive" }, decls: 0, vars: 0, template: function TabNavigationSecondaryItemComponent_Template(rf, ctx) { } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationSecondaryItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-secondary-item', template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">{{ tabName }}</a>\r\n    <span *ngIf=\"tabDisabled\">{{ tabName }}</span>\r\n  </li>\r\n</ng-container> -->\r\n" }]
    }], null, { templateRefDirective: [{
            type: ContentChild,
            args: [TabNavigationSecondaryContentDirective]
        }], tabId: [{
            type: Input
        }], tabName: [{
            type: Input
        }], tabRoute: [{
            type: Input
        }], tabDisabled: [{
            type: Input
        }], enableCloseSecondary: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationSecondaryItemComponent, { className: "TabNavigationSecondaryItemComponent", filePath: "lib\\navigation\\tab-navigation-secondary-item\\tab-navigation-secondary-item.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQU90RyxNQUFNLE9BQU8sbUNBQW1DO0lBTGhEO1FBUVcsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QyxlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7S0FZNUM7SUFQQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztJQUN4RixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQztvR0FuQlUsbUNBQW1DO29FQUFuQyxtQ0FBbUM7d0NBQ2hDLHNDQUFzQzs7Ozs7O2lGQUR6QyxtQ0FBbUM7Y0FML0MsU0FBUzsyQkFDRSxrQ0FBa0M7Z0JBS1Usb0JBQW9CO2tCQUF6RSxZQUFZO21CQUFDLHNDQUFzQztZQUMzQyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7O2tGQVJLLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnktaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBAQ29udGVudENoaWxkKFRhYk5hdmlnYXRpb25TZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlKSB0ZW1wbGF0ZVJlZkRpcmVjdGl2ZT86IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlDb250ZW50RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIHRhYklkOiBhbnk7XHJcbiAgQElucHV0KCkgdGFiTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGFiUm91dGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRhYkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlQ2xvc2VTZWNvbmRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXSA9ICcnO1xyXG4gIEBJbnB1dCgpIHJvdXRlckxpbmtBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgdGVtcGxhdGVSZWZIZWFkZXI/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUgJiYgdGhpcy50ZW1wbGF0ZVJlZkRpcmVjdGl2ZS50ZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGdldCByb3V0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckxpbmsgfHwgdGhpcy50YWJSb3V0ZTtcclxuICB9XHJcbn1cclxuIl19