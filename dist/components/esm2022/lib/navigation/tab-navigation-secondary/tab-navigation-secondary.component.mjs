import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TabNavigationSecondaryComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1)(1, "ul");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const tab_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onCloseTabSecondary($event, tab_r3.tabId)); });
    i0.ɵɵelementEnd();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13); const tab_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onTabClicked(tab_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template, 1, 0, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r4.tabColour, " flex-group flex-align-center flex-start");
    i0.ɵɵclassProp("active", ctx_r4.isActive(tab_r3));
    i0.ɵɵproperty("id", tab_r3.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.enableCloseSecondary);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const tab_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onCloseTabSecondary($event, tab_r3.tabId)); });
    i0.ɵɵelementEnd();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r21); const tab_r3 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.onTabClicked(tab_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template, 1, 0, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r5.tabActiveColour, " flex-group flex-align-center flex-start");
    i0.ɵɵclassProp("active", ctx_r5.isActive(tab_r3));
    i0.ɵɵproperty("id", tab_r3.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.enableCloseSecondary);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r3.tabName);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template, 3, 8, "a", 3)(3, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template, 3, 8, "a", 3)(4, TabNavigationSecondaryComponent_nav_1_ng_container_2_span_4_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isActive(tab_r3) && !tab_r3.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isActive(tab_r3) && !tab_r3.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.tabDisabled);
} }
function TabNavigationSecondaryComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1)(1, "ul");
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_Template, 5, 3, "ng-container", 2);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.contentTabs);
} }
const _c0 = [[["", "list-items", ""]], "*"];
const _c1 = ["[list-items]", "*"];
export class TabNavigationSecondaryComponent {
    get contentTabs() {
        return this.tabNavigationItems?.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.routerOutletSecondary = false;
        this.ngTemplate = false;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTabSecondary = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab?.tabName === tab.tabName;
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
        const tab = this.contentTabs?.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
    onCloseTabSecondary(e, tabId) {
        e.stopPropagation();
        this.closeTabSecondary.emit(tabId);
    }
    static { this.ɵfac = function TabNavigationSecondaryComponent_Factory(t) { return new (t || TabNavigationSecondaryComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationSecondaryComponent, selectors: [["aa-tab-navigation-secondary"]], contentQueries: function TabNavigationSecondaryComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationSecondaryItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavigationItems = _t);
        } }, inputs: { autoChangeTabs: "autoChangeTabs", displayTabContent: "displayTabContent", routerOutletSecondary: "routerOutletSecondary", ngTemplate: "ngTemplate", tabColour: "tabColour", tabActiveColour: "tabActiveColour" }, outputs: { tabClicked: "tabClicked", tabChanged: "tabChanged", closeTabSecondary: "closeTabSecondary" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["class", "tab-navigation-secondary", 4, "ngIf"], [1, "tab-navigation-secondary"], [4, "ngFor", "ngForOf"], [3, "class", "id", "active", "click", 4, "ngIf"], ["class", "tab-disabled", 4, "ngIf"], [3, "id", "click"], ["class", "anchor-close", 3, "click", 4, "ngIf"], [1, "anchor-close", 3, "click"], [1, "tab-disabled"]], template: function TabNavigationSecondaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, TabNavigationSecondaryComponent_nav_0_Template, 3, 0, "nav", 0)(1, TabNavigationSecondaryComponent_nav_1_Template, 4, 1, "nav", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.routerOutletSecondary);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.ngTemplate);
        } }, dependencies: [i1.NgForOf, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationSecondaryComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-secondary', template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutletSecondary\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a\r\n          class=\"{{tabColour}} flex-group flex-align-center flex-start\"\r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <a\r\n          class=\"{{tabActiveColour}} flex-group flex-align-center flex-start\"\r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n" }]
    }], () => [], { tabNavigationItems: [{
            type: ContentChildren,
            args: [TabNavigationSecondaryItemComponent]
        }], autoChangeTabs: [{
            type: Input
        }], displayTabContent: [{
            type: Input
        }], routerOutletSecondary: [{
            type: Input
        }], ngTemplate: [{
            type: Input
        }], tabColour: [{
            type: Input
        }], tabActiveColour: [{
            type: Input
        }], tabClicked: [{
            type: Output
        }], tabChanged: [{
            type: Output
        }], closeTabSecondary: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationSecondaryComponent, { className: "TabNavigationSecondaryComponent", filePath: "lib\\navigation\\tab-navigation-secondary\\tab-navigation-secondary.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5L3RhYi1uYXZpZ2F0aW9uLXNlY29uZGFyeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7SUNDL0gsOEJBQW9FLFNBQUE7SUFFaEUsa0JBQStDO0lBQ2pELGlCQUFLLEVBQUE7Ozs7SUFlRyw0QkFBMEc7SUFBdEUsb1BBQVMsZUFBQSxnREFBc0MsQ0FBQSxJQUFDO0lBQXNCLGlCQUFJOzs7O0lBUGhILDRCQUs4QjtJQUE1QiwwT0FBUyxlQUFBLDRCQUFpQixDQUFBLElBQUM7SUFDM0IsWUFDQTtJQUFBLHFHQUE4RztJQUNoSCxpQkFBSTs7OztJQVBGLDJGQUE2RDtJQUc3RCxpREFBOEI7SUFEOUIsaUNBQWdCO0lBR2hCLGNBQ0E7SUFEQSwrQ0FDQTtJQUFJLGNBQThCO0lBQTlCLGtEQUE4Qjs7OztJQVNsQyw0QkFBMEc7SUFBdEUscVBBQVMsZUFBQSxpREFBc0MsQ0FBQSxJQUFDO0lBQXNCLGlCQUFJOzs7O0lBUGhILDRCQUs4QjtJQUE1QiwwT0FBUyxlQUFBLDRCQUFpQixDQUFBLElBQUM7SUFDM0IsWUFDQTtJQUFBLHFHQUE4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RSw2QkFBNkI7b0JBS2Usa0JBQWtCO2tCQUF2RSxlQUFlO21CQUFDLG1DQUFtQztZQUMzQyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0ksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07O2tGQVZJLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi1zZWNvbmRhcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTmF2aWdhdGlvblNlY29uZGFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpIHRhYk5hdmlnYXRpb25JdGVtcz86IFF1ZXJ5TGlzdDxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD47XHJcbiAgQElucHV0KCkgYXV0b0NoYW5nZVRhYnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlUYWJDb250ZW50ID0gdHJ1ZTtcclxuICBASW5wdXQoKSByb3V0ZXJPdXRsZXRTZWNvbmRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuZ1RlbXBsYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGFiQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgdGFiQWN0aXZlQ29sb3VyOiBhbnk7XHJcbiAgQE91dHB1dCgpIHRhYkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50PigpO1xyXG4gIEBPdXRwdXQoKSB0YWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uU2Vjb25kYXJ5SXRlbUNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2VUYWJTZWNvbmRhcnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBjdXJyZW50VGFiPzogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQ7XHJcblxyXG4gIGdldCBjb250ZW50VGFicygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhYk5hdmlnYXRpb25JdGVtcz8uZmlsdGVyKCh0YWJOYXZpZ2F0aW9uSXRlbTogVGFiTmF2aWdhdGlvblNlY29uZGFyeUl0ZW1Db21wb25lbnQpID0+ICEhdGFiTmF2aWdhdGlvbkl0ZW0udGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRUYWJzICYmIHRoaXMuY29udGVudFRhYnNbMF0pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGhpcy5jb250ZW50VGFic1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGFiPy50YWJOYW1lID09PSB0YWIudGFiTmFtZTtcclxuICB9XHJcblxyXG4gIG9uVGFiQ2xpY2tlZCh0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnRhYkNsaWNrZWQuZW1pdCh0YWIpO1xyXG4gICAgaWYgKHRoaXMuYXV0b0NoYW5nZVRhYnMpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGFiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVRhYih0YWI6IFRhYk5hdmlnYXRpb25TZWNvbmRhcnlJdGVtQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcbiAgICB0aGlzLnRhYkNoYW5nZWQuZW1pdCh0YWIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiQnlJZCh0YWJJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0YWIgPSB0aGlzLmNvbnRlbnRUYWJzPy5maW5kKCh4KSA9PiB4LnRhYklkID09PSB0YWJJZCk7XHJcbiAgICBpZiAodGFiKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlVGFiU2Vjb25kYXJ5KGU6IEV2ZW50LCB0YWJJZDogYW55KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbG9zZVRhYlNlY29uZGFyeS5lbWl0KHRhYklkKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbjwhLS0gUk9VVEVSLU9VVExFVCAtLT5cclxuPG5hdiAqbmdJZj1cInJvdXRlck91dGxldFNlY29uZGFyeVwiIGNsYXNzPVwidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5XCI+XHJcbiAgPHVsPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xpc3QtaXRlbXNdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvdWw+XHJcbjwvbmF2PlxyXG5cclxuPCEtLSBORy1URU1QTEFURSBPTkxZIC0tPlxyXG48bmF2ICpuZ0lmPVwibmdUZW1wbGF0ZVwiIGNsYXNzPVwidGFiLW5hdmlnYXRpb24tc2Vjb25kYXJ5XCI+XHJcbiAgPHVsPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIGNvbnRlbnRUYWJzXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3M9XCJ7e3RhYkNvbG91cn19IGZsZXgtZ3JvdXAgZmxleC1hbGlnbi1jZW50ZXIgZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAqbmdJZj1cIiFpc0FjdGl2ZSh0YWIpICYmICF0YWIudGFiRGlzYWJsZWRcIlxyXG4gICAgICAgICAgW2lkXT1cInRhYi50YWJJZFwiXHJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlzQWN0aXZlKHRhYilcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uVGFiQ2xpY2tlZCh0YWIpXCI+XHJcbiAgICAgICAgICB7eyB0YWIudGFiTmFtZSB9fVxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJ0YWIuZW5hYmxlQ2xvc2VTZWNvbmRhcnlcIiAoY2xpY2spPVwib25DbG9zZVRhYlNlY29uZGFyeSgkZXZlbnQsIHRhYi50YWJJZClcIiBjbGFzcz1cImFuY2hvci1jbG9zZVwiPjwvYT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwie3t0YWJBY3RpdmVDb2xvdXJ9fSBmbGV4LWdyb3VwIGZsZXgtYWxpZ24tY2VudGVyIGZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc0FjdGl2ZSh0YWIpICYmICF0YWIudGFiRGlzYWJsZWRcIlxyXG4gICAgICAgICAgW2lkXT1cInRhYi50YWJJZFwiXHJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlzQWN0aXZlKHRhYilcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uVGFiQ2xpY2tlZCh0YWIpXCI+XHJcbiAgICAgICAgICB7eyB0YWIudGFiTmFtZSB9fVxyXG4gICAgICAgICAgPGEgKm5nSWY9XCJ0YWIuZW5hYmxlQ2xvc2VTZWNvbmRhcnlcIiAoY2xpY2spPVwib25DbG9zZVRhYlNlY29uZGFyeSgkZXZlbnQsIHRhYi50YWJJZClcIiBjbGFzcz1cImFuY2hvci1jbG9zZVwiPjwvYT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YWIudGFiRGlzYWJsZWRcIiBjbGFzcz1cInRhYi1kaXNhYmxlZFwiPnt7IHRhYi50YWJOYW1lIH19PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC91bD5cclxuPC9uYXY+XHJcbiJdfQ==