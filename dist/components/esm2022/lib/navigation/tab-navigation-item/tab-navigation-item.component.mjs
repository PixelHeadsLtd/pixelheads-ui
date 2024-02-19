import { Component, ContentChild, Input } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';
import * as i0 from "@angular/core";
export class TabNavigationItemComponent {
    constructor() {
        this.tabName = '';
        this.activeColor = '';
        this.enableIcons = false;
        this.iconName = '';
        this.iconColour = '';
        this.textColour = '';
        this.closeColour = '';
        this.enableCount = false;
        this.enableClose = false;
        this.tabCount = 0;
        this.tabRoute = '';
        this.tabDisabled = false;
        this.countColour = '';
        this.showRightDivider = false;
        this.routerLink = '';
        this.routerLinkActive = false;
        this.enableTooltip = false;
        this.tabTooltipTitle = '';
        this.tabTooltipBody = '';
    }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
        this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
    static { this.ɵfac = function TabNavigationItemComponent_Factory(t) { return new (t || TabNavigationItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationItemComponent, selectors: [["aa-tab-navigation-item"]], contentQueries: function TabNavigationItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationContentDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, TabNavigationHeaderContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefDirective = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefHeaderDirective = _t.first);
        } }, inputs: { tabId: "tabId", tabName: "tabName", activeColor: "activeColor", enableIcons: "enableIcons", iconName: "iconName", iconColour: "iconColour", textColour: "textColour", closeColour: "closeColour", enableCount: "enableCount", enableClose: "enableClose", tabCount: "tabCount", tabRoute: "tabRoute", tabDisabled: "tabDisabled", countColour: "countColour", showRightDivider: "showRightDivider", routerLink: "routerLink", routerLinkActive: "routerLinkActive", enableTooltip: "enableTooltip", tabTooltipTitle: "tabTooltipTitle", tabTooltipBody: "tabTooltipBody", tooltipXPos: "tooltipXPos", tooltipYPos: "tooltipYPos", tooltipWidth: "tooltipWidth" }, decls: 0, vars: 0, template: function TabNavigationItemComponent_Template(rf, ctx) { } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-item', template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION - NOT USED -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n      <a *ngIf=\"enableClose\" (click)=\"onCloseTab($event)\" class=\"anchor-close\"></a>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container> -->\r\n" }]
    }], null, { templateRefDirective: [{
            type: ContentChild,
            args: [TabNavigationContentDirective]
        }], templateRefHeaderDirective: [{
            type: ContentChild,
            args: [TabNavigationHeaderContentDirective]
        }], tabId: [{
            type: Input
        }], tabName: [{
            type: Input
        }], activeColor: [{
            type: Input
        }], enableIcons: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], textColour: [{
            type: Input
        }], closeColour: [{
            type: Input
        }], enableCount: [{
            type: Input
        }], enableClose: [{
            type: Input
        }], tabCount: [{
            type: Input
        }], tabRoute: [{
            type: Input
        }], tabDisabled: [{
            type: Input
        }], countColour: [{
            type: Input
        }], showRightDivider: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }], enableTooltip: [{
            type: Input
        }], tabTooltipTitle: [{
            type: Input
        }], tabTooltipBody: [{
            type: Input
        }], tooltipXPos: [{
            type: Input
        }], tooltipYPos: [{
            type: Input
        }], tooltipWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationItemComponent, { className: "TabNavigationItemComponent", filePath: "lib\\navigation\\tab-navigation-item\\tab-navigation-item.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi90YWItbmF2aWdhdGlvbi1pdGVtL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQU9oRyxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBU1csWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGVBQVUsR0FBb0IsRUFBRSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztLQWV0QztJQVJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQztJQUMxRyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQzsyRkFwQ1UsMEJBQTBCO29FQUExQiwwQkFBMEI7d0NBQ3ZCLDZCQUE2Qjt3Q0FDN0IsbUNBQW1DOzs7Ozs7O2lGQUZ0QywwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSx3QkFBd0I7Z0JBS1csb0JBQW9CO2tCQUFoRSxZQUFZO21CQUFDLDZCQUE2QjtZQUNRLDBCQUEwQjtrQkFBNUUsWUFBWTttQkFBQyxtQ0FBbUM7WUFDeEMsS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSzs7a0ZBekJLLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24tY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdmlnYXRpb24taGVhZGVyLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi1uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBAQ29udGVudENoaWxkKFRhYk5hdmlnYXRpb25Db250ZW50RGlyZWN0aXZlKSB0ZW1wbGF0ZVJlZkRpcmVjdGl2ZSE6IFRhYk5hdmlnYXRpb25Db250ZW50RGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmUpIHRlbXBsYXRlUmVmSGVhZGVyRGlyZWN0aXZlITogVGFiTmF2aWdhdGlvbkhlYWRlckNvbnRlbnREaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgdGFiSWQ6IGFueTtcclxuICBASW5wdXQoKSB0YWJOYW1lOiBzdHJpbmcgID0gJyc7XHJcbiAgQElucHV0KCkgYWN0aXZlQ29sb3I6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUljb25zOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRleHRDb2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsb3NlQ29sb3VyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlbmFibGVDb3VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUNsb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGFiQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgdGFiUm91dGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRhYkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY291bnRDb2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dSaWdodERpdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXSAgPSAnJztcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlVG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRhYlRvb2x0aXBUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGFiVG9vbHRpcEJvZHk6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBYUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgdG9vbHRpcFlQb3M6IGFueTtcclxuICBASW5wdXQoKSB0b29sdGlwV2lkdGg6IGFueTtcclxuICBwdWJsaWMgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZVJlZkhlYWRlciE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlUmVmRGlyZWN0aXZlICYmIHRoaXMudGVtcGxhdGVSZWZEaXJlY3RpdmUudGVtcGxhdGVSZWY7XHJcbiAgICB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyID0gdGhpcy50ZW1wbGF0ZVJlZkhlYWRlckRpcmVjdGl2ZSAmJiB0aGlzLnRlbXBsYXRlUmVmSGVhZGVyRGlyZWN0aXZlLnRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvdXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyTGluayB8fCB0aGlzLnRhYlJvdXRlO1xyXG4gIH1cclxufVxyXG4iXX0=