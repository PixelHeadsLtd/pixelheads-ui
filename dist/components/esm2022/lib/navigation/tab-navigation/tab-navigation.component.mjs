import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TabNavigationComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 3)(1, "ul");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} }
const _c0 = (a0, a1) => ({ "margin-left": a0, "margin-top": a1 });
const _c1 = a0 => ({ "min-width": a0 });
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14)(1, "span", 15)(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(10, _c0, tab_r5.tooltipXPos, tab_r5.tooltipYPos));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("feature-box ", tab_r5.iconColour, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1, tab_r5.tooltipWidth));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nowrap ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabTooltipTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tab_r5.tabTooltipBody);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_span_3_Template, 6, 15, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("material-icons ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.iconName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableTooltip);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("tab-count ", tab_r5.countColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const tab_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onCloseTab($event, tab_r5.tabId)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("anchor-close ", tab_r5.closeColour, "");
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_1_ng_container_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const tab_r5 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onTabClicked(tab_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_Template, 4, 5, "span", 9)(3, TabNavigationComponent_nav_1_ng_container_2_a_2_span_3_Template, 2, 4, "span", 10)(4, TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template, 1, 3, "a", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("flex-group flex-align-center flex-start ", tab_r5.textColour, "");
    i0.ɵɵclassProp("active", ctx_r6.isActive(tab_r5));
    i0.ɵɵproperty("id", tab_r5.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r5.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableIcons);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableClose);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("material-icons ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.iconName);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("tab-count ", tab_r5.countColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_span_3_span_2_Template, 2, 4, "span", 10)(3, TabNavigationComponent_nav_1_ng_container_2_span_3_span_3_Template, 2, 4, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r5.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableIcons);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 17);
} }
const _c2 = a0 => ({ "tab-disabled": a0 });
function TabNavigationComponent_nav_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_a_2_Template, 5, 10, "a", 6)(3, TabNavigationComponent_nav_1_ng_container_2_span_3_Template, 4, 3, "span", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, TabNavigationComponent_nav_1_ng_container_2_li_4_Template, 1, 0, "li", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, tab_r5.tabDisabled));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !tab_r5.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.showRightDivider);
} }
function TabNavigationComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 3)(1, "ul");
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_Template, 5, 6, "ng-container", 4);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.contentTabs);
} }
function TabNavigationComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.toggleFullscreen = !ctx_r33.toggleFullscreen); });
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.toggleFullscreen = !ctx_r35.toggleFullscreen); });
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_div_2_ng_container_7_a_2_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_7_a_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_7_a_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c3 = a0 => ({ "active": a0 });
function TabNavigationComponent_div_2_ng_container_7_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 26);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_ng_container_7_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r44); const tab_r37 = i0.ɵɵnextContext().$implicit; const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.onTabClicked(tab_r37)); });
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_7_a_2_1_Template, 1, 0, null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(tab_r37.activeColor);
    i0.ɵɵpropertyInterpolate("title", tab_r37.tabName);
    i0.ɵɵproperty("id", tab_r37.tabId)("ngClass", i0.ɵɵpureFunction1(7, _c3, ctx_r38.isActive(tab_r37)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tab_r37.templateRefHeader);
} }
function TabNavigationComponent_div_2_ng_container_7_span_3_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_7_span_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_7_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TabNavigationComponent_div_2_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_7_span_3_1_Template, 1, 0, null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", tab_r37.tabName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tab_r37.templateRefHeader);
} }
function TabNavigationComponent_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵtemplate(2, TabNavigationComponent_div_2_ng_container_7_a_2_Template, 2, 9, "a", 24)(3, TabNavigationComponent_div_2_ng_container_7_span_3_Template, 2, 2, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r37 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, tab_r37.tabDisabled));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !tab_r37.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r37.tabDisabled);
} }
function TabNavigationComponent_div_2_ng_container_8_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_8_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_8_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TabNavigationComponent_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_8_1_Template, 1, 0, null, 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.currentTab.templateRef);
} }
const _c4 = a0 => ({ "minimize": a0 });
function TabNavigationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "nav", 18)(2, "div", 19)(3, "div", 20);
    i0.ɵɵtemplate(4, TabNavigationComponent_div_2_button_4_Template, 2, 0, "button", 21)(5, TabNavigationComponent_div_2_button_5_Template, 2, 0, "button", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "ul", 22);
    i0.ɵɵtemplate(7, TabNavigationComponent_div_2_ng_container_7_Template, 4, 5, "ng-container", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, TabNavigationComponent_div_2_ng_container_8_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c4, ctx_r2.toggleFullscreen));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r2.toggleFullscreen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.toggleFullscreen);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.contentTabs);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.displayTabContent && ctx_r2.currentTab);
} }
function TabNavigationComponent_nav_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r53.toggleFullscreen = !ctx_r53.toggleFullscreen); });
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_nav_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r55.toggleFullscreen = !ctx_r55.toggleFullscreen); });
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_nav_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 18)(1, "div", 19)(2, "div", 20);
    i0.ɵɵtemplate(3, TabNavigationComponent_nav_3_button_3_Template, 2, 0, "button", 29)(4, TabNavigationComponent_nav_3_button_4_Template, 2, 0, "button", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "ul", 22);
    i0.ɵɵprojection(6, 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c4, ctx_r3.toggleFullscreen));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r3.toggleFullscreen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.toggleFullscreen);
} }
const _c5 = [[["", "list-items", ""]], "*", [["", "tabs", ""]]];
const _c6 = ["[list-items]", "*", "[tabs]"];
export class TabNavigationComponent {
    get contentTabs() {
        return this.tabNavigationItems?.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabInfo = false;
        this.routerOutlet = false;
        this.ngTemplate = false;
        this.tabInfoRouterOutlet = false;
        this.toggleFullscreen = false;
        this.standardTabs = false;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTab = new EventEmitter();
    }
    ngOnInit() {
        if (this.defaultTabId) {
            setTimeout((_) => {
                this.changeTabById(this.defaultTabId);
            }, 100);
        }
    }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab?.tabName === tab.tabName;
    }
    isDividerTab() {
        return true;
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
    onCloseTab(e, tabId) {
        e.stopPropagation();
        this.closeTab.emit(tabId);
    }
    static { this.ɵfac = function TabNavigationComponent_Factory(t) { return new (t || TabNavigationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationComponent, selectors: [["aa-tab-navigation"]], contentQueries: function TabNavigationComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavigationItems = _t);
        } }, inputs: { autoChangeTabs: "autoChangeTabs", displayTabContent: "displayTabContent", tabInfo: "tabInfo", routerOutlet: "routerOutlet", ngTemplate: "ngTemplate", defaultTabId: "defaultTabId", tabInfoRouterOutlet: "tabInfoRouterOutlet", toggleFullscreen: "toggleFullscreen", standardTabs: "standardTabs" }, outputs: { tabClicked: "tabClicked", tabChanged: "tabChanged", closeTab: "closeTab" }, ngContentSelectors: _c6, decls: 4, vars: 4, consts: [["class", "tab-navigation", 4, "ngIf"], [4, "ngIf"], ["class", "tab-navigation-info", 3, "ngClass", 4, "ngIf"], [1, "tab-navigation"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "class", "id", "active", "click", 4, "ngIf"], ["class", "divider-tab", 4, "ngIf"], [3, "id", "click"], ["class", "tab-tooltip flex-align-center", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [1, "tab-tooltip", "flex-align-center"], ["class", "aa-tooltip position-fixed z-index-10", 3, "ngStyle", 4, "ngIf"], [1, "aa-tooltip", "position-fixed", "z-index-10", 3, "ngStyle"], [3, "ngStyle"], [3, "click"], [1, "divider-tab"], [1, "tab-navigation-info", 3, "ngClass"], [1, "float-right", "flex-group"], [1, "flex-align-center"], ["class", "transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0", 3, "click", 4, "ngIf"], [1, "flex-group", "flex-center"], [1, "transparent", "small", "material-icons", "aa-blue-100", "padding-left-0-5", "padding-right-0", 3, "click"], [3, "class", "title", "id", "ngClass", "click", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "title", "id", "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "title"], ["class", "material-icons", 3, "click", 4, "ngIf"], [1, "material-icons", 3, "click"]], template: function TabNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5);
            i0.ɵɵtemplate(0, TabNavigationComponent_nav_0_Template, 3, 0, "nav", 0)(1, TabNavigationComponent_nav_1_Template, 4, 1, "nav", 0)(2, TabNavigationComponent_div_2_Template, 9, 7, "div", 1)(3, TabNavigationComponent_nav_3_Template, 7, 5, "nav", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.routerOutlet);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.ngTemplate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabInfo);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabInfoRouterOutlet);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation', template: "<!-- ROUTER-OUTLET ONLY -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a\r\n          *ngIf=\"!tab.tabDisabled\"\r\n          class=\"flex-group flex-align-center flex-start {{tab.textColour}}\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\"\r\n        >\r\n          {{ tab.tabName }}\r\n          <span class=\"tab-tooltip flex-align-center\" *ngIf=\"tab.enableIcons\">\r\n            <span class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n            <span \r\n              *ngIf=\"tab.enableTooltip\" \r\n              class=\"aa-tooltip position-fixed z-index-10\"\r\n              [ngStyle]=\"{\r\n                'margin-left' : tab.tooltipXPos,\r\n                'margin-top' : tab.tooltipYPos\r\n              }\"\r\n            >\r\n              <span \r\n                class=\"feature-box {{tab.iconColour}}\"\r\n                [ngStyle]=\"{\r\n                  'min-width' : tab.tooltipWidth\r\n                }\"\r\n              >\r\n                <h3 class=\"nowrap {{tab.iconColour}}\">{{tab.tabTooltipTitle}}</h3>\r\n                <p>{{tab.tabTooltipBody}}</p>\r\n              </span>\r\n            </span>\r\n          </span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n          <a *ngIf=\"tab.enableClose\" (click)=\"onCloseTab($event, tab.tabId)\"  class=\"anchor-close {{tab.closeColour}}\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n\r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n" }]
    }], () => [], { tabNavigationItems: [{
            type: ContentChildren,
            args: [TabNavigationItemComponent]
        }], autoChangeTabs: [{
            type: Input
        }], displayTabContent: [{
            type: Input
        }], tabInfo: [{
            type: Input
        }], routerOutlet: [{
            type: Input
        }], ngTemplate: [{
            type: Input
        }], defaultTabId: [{
            type: Input
        }], tabInfoRouterOutlet: [{
            type: Input
        }], toggleFullscreen: [{
            type: Input
        }], standardTabs: [{
            type: Input
        }], tabClicked: [{
            type: Output
        }], tabChanged: [{
            type: Output
        }], closeTab: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationComponent, { className: "TabNavigationComponent", filePath: "lib\\navigation\\tab-navigation\\tab-navigation.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7O0lDQWxHLDhCQUFpRCxTQUFBO0lBRTdDLGtCQUErQztJQUNqRCxpQkFBSyxFQUFBOzs7OztJQWtCSyxnQ0FPQyxlQUFBLFNBQUE7SUFPeUMsWUFBdUI7SUFBQSxpQkFBSztJQUNsRSx5QkFBRztJQUFBLFlBQXNCO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7SUFaL0IsNkZBR0U7SUFHQSxjQUFzQztJQUF0QyxnRUFBc0M7SUFDdEMsMEVBRUU7SUFFRSxjQUFpQztJQUFqQywyREFBaUM7SUFBQyxjQUF1QjtJQUF2Qiw0Q0FBdUI7SUFDMUQsZUFBc0I7SUFBdEIsMkNBQXNCOzs7SUFqQi9CLGdDQUFvRSxXQUFBO0lBQ2xCLFlBQWdCO0lBQUEsaUJBQU87SUFDdkUsMkdBaUJPO0lBQ1QsaUJBQU87OztJQW5CQyxjQUF5QztJQUF6QyxtRUFBeUM7SUFBQyxjQUFnQjtJQUFoQixxQ0FBZ0I7SUFFN0QsY0FBdUI7SUFBdkIsMkNBQXVCOzs7SUFrQjVCLDRCQUFvRTtJQUFBLFlBQWdCO0lBQUEsaUJBQU87OztJQUE3RCwrREFBcUM7SUFB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O3VGQXBFVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjt3Q0FDaEIsMEJBQTBCOzs7Ozs7WUNSN0MsdUVBSU0sMERBQUEsMERBQUEsMERBQUE7O1lBSkEsdUNBQWtCO1lBT2xCLGNBQWdCO1lBQWhCLHFDQUFnQjtZQWlEaEIsY0FBYTtZQUFiLGtDQUFhO1lBNEJiLGNBQXlCO1lBQXpCLDhDQUF5Qjs7O2lGRDdFbEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsbUJBQW1CO29CQUtnQixrQkFBa0I7a0JBQTlELGVBQWU7bUJBQUMsMEJBQTBCO1lBQ2xDLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0ksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNOztrRkFiSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1uYXZpZ2F0aW9uLWl0ZW0vdGFiLW5hdmlnYXRpb24taXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10YWItbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWItbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKFRhYk5hdmlnYXRpb25JdGVtQ29tcG9uZW50KSB0YWJOYXZpZ2F0aW9uSXRlbXM/OiBRdWVyeUxpc3Q8VGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGF1dG9DaGFuZ2VUYWJzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNwbGF5VGFiQ29udGVudCA9IHRydWU7XHJcbiAgQElucHV0KCkgdGFiSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJvdXRlck91dGxldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5nVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkZWZhdWx0VGFiSWQ6IGFueTtcclxuICBASW5wdXQoKSB0YWJJbmZvUm91dGVyT3V0bGV0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9nZ2xlRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHN0YW5kYXJkVGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSB0YWJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgdGFiQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGN1cnJlbnRUYWI/OiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudDtcclxuXHJcbiAgZ2V0IGNvbnRlbnRUYWJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFiTmF2aWdhdGlvbkl0ZW1zPy5maWx0ZXIoKHRhYk5hdmlnYXRpb25JdGVtOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkgPT4gISF0YWJOYXZpZ2F0aW9uSXRlbS50ZW1wbGF0ZVJlZik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlZmF1bHRUYWJJZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KChfOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmNoYW5nZVRhYkJ5SWQodGhpcy5kZWZhdWx0VGFiSWQpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudFRhYnMgJiYgdGhpcy5jb250ZW50VGFic1swXSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0aGlzLmNvbnRlbnRUYWJzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWI/LnRhYk5hbWUgPT09IHRhYi50YWJOYW1lO1xyXG4gIH1cclxuXHJcbiAgaXNEaXZpZGVyVGFiKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrZWQodGFiOiBUYWJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkge1xyXG4gICAgdGhpcy50YWJDbGlja2VkLmVtaXQodGFiKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2hhbmdlVGFicykge1xyXG4gICAgICB0aGlzLmNoYW5nZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYjogVGFiTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUYWJCeUlkKHRhYklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuY29udGVudFRhYnM/LmZpbmQoKHgpID0+IHgudGFiSWQgPT09IHRhYklkKTtcclxuICAgIGlmICh0YWIpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VUYWIodGFiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xvc2VUYWIoZTogRXZlbnQsIHRhYklkOiBhbnkpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsb3NlVGFiLmVtaXQodGFiSWQpO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIFJPVVRFUi1PVVRMRVQgT05MWSAtLT5cclxuPG5hdiAqbmdJZj1cInJvdXRlck91dGxldFwiIGNsYXNzPVwidGFiLW5hdmlnYXRpb25cIj5cclxuICA8dWw+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbGlzdC1pdGVtc11cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC91bD5cclxuPC9uYXY+XHJcblxyXG48IS0tIE5HLVRFTVBMQVRFIE9OTFkgLS0+XHJcbjxuYXYgKm5nSWY9XCJuZ1RlbXBsYXRlXCIgY2xhc3M9XCJ0YWItbmF2aWdhdGlvblwiPlxyXG4gIDx1bD5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiBjb250ZW50VGFic1wiPlxyXG4gICAgICA8bGkgW25nQ2xhc3NdPVwieyAndGFiLWRpc2FibGVkJyA6IHRhYi50YWJEaXNhYmxlZCB9XCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICpuZ0lmPVwiIXRhYi50YWJEaXNhYmxlZFwiXHJcbiAgICAgICAgICBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1hbGlnbi1jZW50ZXIgZmxleC1zdGFydCB7e3RhYi50ZXh0Q29sb3VyfX1cIlxyXG4gICAgICAgICAgW2lkXT1cInRhYi50YWJJZFwiXHJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlzQWN0aXZlKHRhYilcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uVGFiQ2xpY2tlZCh0YWIpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyB0YWIudGFiTmFtZSB9fVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWItdG9vbHRpcCBmbGV4LWFsaWduLWNlbnRlclwiICpuZ0lmPVwidGFiLmVuYWJsZUljb25zXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMge3t0YWIuaWNvbkNvbG91cn19XCI+e3t0YWIuaWNvbk5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJ0YWIuZW5hYmxlVG9vbHRpcFwiIFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWEtdG9vbHRpcCBwb3NpdGlvbi1maXhlZCB6LWluZGV4LTEwXCJcclxuICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQnIDogdGFiLnRvb2x0aXBYUG9zLFxyXG4gICAgICAgICAgICAgICAgJ21hcmdpbi10b3AnIDogdGFiLnRvb2x0aXBZUG9zXHJcbiAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmVhdHVyZS1ib3gge3t0YWIuaWNvbkNvbG91cn19XCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgJ21pbi13aWR0aCcgOiB0YWIudG9vbHRpcFdpZHRoXHJcbiAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJub3dyYXAge3t0YWIuaWNvbkNvbG91cn19XCI+e3t0YWIudGFiVG9vbHRpcFRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e3t0YWIudGFiVG9vbHRpcEJvZHl9fTwvcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGFiLmVuYWJsZUNvdW50XCIgY2xhc3M9XCJ0YWItY291bnQge3t0YWIuY291bnRDb2xvdXJ9fVwiPnt7dGFiLnRhYkNvdW50fX08L3NwYW4+XHJcbiAgICAgICAgICA8YSAqbmdJZj1cInRhYi5lbmFibGVDbG9zZVwiIChjbGljayk9XCJvbkNsb3NlVGFiKCRldmVudCwgdGFiLnRhYklkKVwiICBjbGFzcz1cImFuY2hvci1jbG9zZSB7e3RhYi5jbG9zZUNvbG91cn19XCI+PC9hPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cInRhYi50YWJEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgdGFiLnRhYk5hbWUgfX1cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGFiLmVuYWJsZUljb25zXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB7e3RhYi5pY29uQ29sb3VyfX1cIj57e3RhYi5pY29uTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YWIuZW5hYmxlQ291bnRcIiBjbGFzcz1cInRhYi1jb3VudCB7e3RhYi5jb3VudENvbG91cn19XCI+e3t0YWIudGFiQ291bnR9fTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSAqbmdJZj1cInRhYi5zaG93UmlnaHREaXZpZGVyXCIgY2xhc3M9XCJkaXZpZGVyLXRhYlwiPjwvbGk+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L3VsPlxyXG48L25hdj5cclxuXHJcbjwhLS0gSU5GTy1QQU5FTCBORy1URU1QTEFURSAtLT5cclxuPGRpdiAqbmdJZj1cInRhYkluZm9cIj5cclxuICA8bmF2IGNsYXNzPVwidGFiLW5hdmlnYXRpb24taW5mb1wiIFtuZ0NsYXNzXT1cInsnbWluaW1pemUnOiB0b2dnbGVGdWxsc2NyZWVufVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IGZsZXgtZ3JvdXBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlRnVsbHNjcmVlbj0hdG9nZ2xlRnVsbHNjcmVlblwiICpuZ0lmPVwiIXRvZ2dsZUZ1bGxzY3JlZW5cIiBjbGFzcz1cInRyYW5zcGFyZW50IHNtYWxsIG1hdGVyaWFsLWljb25zIGFhLWJsdWUtMTAwIHBhZGRpbmctbGVmdC0wLTUgcGFkZGluZy1yaWdodC0wXCI+Y2xvc2VfZnVsbHNjcmVlbjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUZ1bGxzY3JlZW49IXRvZ2dsZUZ1bGxzY3JlZW5cIiAqbmdJZj1cInRvZ2dsZUZ1bGxzY3JlZW5cIiBjbGFzcz1cInRyYW5zcGFyZW50IHNtYWxsIG1hdGVyaWFsLWljb25zIGFhLWJsdWUtMTAwIHBhZGRpbmctbGVmdC0wLTUgcGFkZGluZy1yaWdodC0wXCI+b3Blbl9pbl9mdWxsPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiBjb250ZW50VGFic1wiPlxyXG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJ7ICd0YWItZGlzYWJsZWQnIDogdGFiLnRhYkRpc2FibGVkIH1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwie3t0YWIuYWN0aXZlQ29sb3J9fVwiIHRpdGxlPVwie3sgdGFiLnRhYk5hbWUgfX1cIiAqbmdJZj1cIiF0YWIudGFiRGlzYWJsZWRcIiBbaWRdPVwidGFiLnRhYklkXCIgKGNsaWNrKT1cIm9uVGFiQ2xpY2tlZCh0YWIpXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpc0FjdGl2ZSh0YWIpfVwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIudGVtcGxhdGVSZWZIZWFkZXJcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gdGl0bGU9XCJ7eyB0YWIudGFiTmFtZSB9fVwiICpuZ0lmPVwidGFiLnRhYkRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInRhYi50ZW1wbGF0ZVJlZkhlYWRlclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3VsPlxyXG4gIDwvbmF2PlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzcGxheVRhYkNvbnRlbnQgJiYgY3VycmVudFRhYlwiPlxyXG4gICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VycmVudFRhYi50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBJTkZPIFBBTkVMIFJPVVRFUi1PVVRMRVQgLS0+XHJcbjxuYXYgKm5nSWY9XCJ0YWJJbmZvUm91dGVyT3V0bGV0XCIgY2xhc3M9XCJ0YWItbmF2aWdhdGlvbi1pbmZvXCIgW25nQ2xhc3NdPVwieydtaW5pbWl6ZSc6IHRvZ2dsZUZ1bGxzY3JlZW59XCI+XHJcbiAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IGZsZXgtZ3JvdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVGdWxsc2NyZWVuPSF0b2dnbGVGdWxsc2NyZWVuXCIgKm5nSWY9XCIhdG9nZ2xlRnVsbHNjcmVlblwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZV9mdWxsc2NyZWVuPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUZ1bGxzY3JlZW49IXRvZ2dsZUZ1bGxzY3JlZW5cIiAqbmdJZj1cInRvZ2dsZUZ1bGxzY3JlZW5cIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+b3Blbl9pbl9mdWxsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8dWwgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtY2VudGVyXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFic11cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC91bD5cclxuPC9uYXY+XHJcbiJdfQ==