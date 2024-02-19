import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AccordionFancyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r0.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.iconName);
} }
function AccordionFancyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("font-awesome-icons ", ctx_r1.iconName, " ", ctx_r1.iconColour, "");
} }
function AccordionFancyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "add");
    i0.ɵɵelementEnd();
} }
function AccordionFancyComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "remove");
    i0.ɵɵelementEnd();
} }
function AccordionFancyComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class AccordionFancyComponent {
    constructor() {
        this.showBody = false;
        this.materialIcons = false;
        this.itemTitle = '';
        this.accordionId = '';
        this.iconName = '';
        this.iconColour = '';
    }
    static { this.ɵfac = function AccordionFancyComponent_Factory(t) { return new (t || AccordionFancyComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionFancyComponent, selectors: [["aa-accordion-fancy"]], inputs: { showBody: "showBody", materialIcons: "materialIcons", itemTitle: "itemTitle", accordionId: "accordionId", iconName: "iconName", iconColour: "iconColour" }, ngContentSelectors: _c0, decls: 12, vars: 8, consts: [[3, "id"], [1, "margin-0"], ["aria-controls", "accordionId", "type", "button", 1, "accordion-fancy-trigger", "box", "flex-group", "flex-align-center", "space-between", 3, "click"], [1, "flex-align-center"], [3, "class", 4, "ngIf"], [1, "aa-toggle", "flex-align-center"], ["class", "material-icons", 4, "ngIf"], ["class", "accordion-fancy-panel", 4, "ngIf"], [1, "material-icons"], [1, "accordion-fancy-panel"]], template: function AccordionFancyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "h3", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AccordionFancyComponent_Template_button_click_2_listener() { return ctx.showBody = !ctx.showBody; });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, AccordionFancyComponent_div_4_Template, 2, 4, "div", 4)(5, AccordionFancyComponent_div_5_Template, 1, 4, "div", 4);
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtemplate(9, AccordionFancyComponent_div_9_Template, 2, 0, "div", 6)(10, AccordionFancyComponent_div_10_Template, 2, 0, "div", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(11, AccordionFancyComponent_div_11_Template, 2, 0, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.accordionId);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded.true", ctx.showBody);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.materialIcons);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.itemTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showBody);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionFancyComponent, [{
        type: Component,
        args: [{ selector: 'aa-accordion-fancy', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section [id]=\"accordionId\">\r\n  <h3 class=\"margin-0\">\r\n    <button class=\"accordion-fancy-trigger box flex-group flex-align-center space-between\" (click)=\"showBody=!showBody\"\r\n        [attr.aria-expanded.true]=\"showBody\" aria-controls=\"accordionId\" type=\"button\">\r\n        <div class=\"flex-align-center\">\r\n          <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n          <div *ngIf=\"!materialIcons\" class=\"font-awesome-icons {{iconName}} {{iconColour}}\"></div>\r\n          <span>{{itemTitle}}</span>\r\n        </div>\r\n        <div class=\"aa-toggle flex-align-center\">\r\n          <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n          <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" class=\"accordion-fancy-panel\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { showBody: [{
            type: Input
        }], materialIcons: [{
            type: Input
        }], itemTitle: [{
            type: Input
        }], accordionId: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconColour: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionFancyComponent, { className: "AccordionFancyComponent", filePath: "lib\\widgets\\accordion-fancy\\accordion-fancy.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi1mYW5jeS9hY2NvcmRpb24tZmFuY3kuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvYWNjb3JkaW9uLWZhbmN5L2FjY29yZGlvbi1mYW5jeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0toRSwyQkFBaUU7SUFBQSxZQUFZO0lBQUEsaUJBQU07OztJQUF4RCxtRUFBcUM7SUFBQyxjQUFZO0lBQVoscUNBQVk7OztJQUM3RSxzQkFBeUY7OztJQUE3RCw2RkFBc0Q7OztJQUlsRiw4QkFBOEM7SUFBQSxtQkFBRztJQUFBLGlCQUFNOzs7SUFDdkQsOEJBQTZDO0lBQUEsc0JBQU07SUFBQSxpQkFBTTs7O0lBSWpFLDhCQUFvRDtJQUNsRCxrQkFBeUI7SUFDM0IsaUJBQU07OztBRFRSLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEM7UUFQUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRWpCLENBQUM7d0ZBVE4sdUJBQXVCO29FQUF2Qix1QkFBdUI7O1lDUnBDLGtDQUE0QixZQUFBLGdCQUFBO1lBRStELG9JQUE0QjtZQUUvRyw4QkFBK0I7WUFDN0Isd0VBQW1GLDJEQUFBO1lBRW5GLDRCQUFNO1lBQUEsWUFBYTtZQUFBLGlCQUFPLEVBQUE7WUFFNUIsOEJBQXlDO1lBQ3ZDLHdFQUF1RCw2REFBQTtZQUV6RCxpQkFBTSxFQUFBLEVBQUE7WUFHWiwwRUFFTTtZQUNSLGlCQUFVOztZQWxCRCxvQ0FBa0I7WUFHbkIsZUFBb0M7WUFBcEMsa0RBQW9DO1lBRTVCLGVBQW1CO1lBQW5CLHdDQUFtQjtZQUNuQixjQUFvQjtZQUFwQix5Q0FBb0I7WUFDcEIsZUFBYTtZQUFiLG1DQUFhO1lBR2IsZUFBZTtZQUFmLG9DQUFlO1lBQ2YsY0FBYztZQUFkLG1DQUFjO1lBSXRCLGNBQWM7WUFBZCxtQ0FBYzs7O2lGRFBULHVCQUF1QjtjQVBuQyxTQUFTOzJCQUNFLG9CQUFvQixtQkFHYix1QkFBdUIsQ0FBQyxNQUFNO29CQUt0QyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQVBLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYWNjb3JkaW9uLWZhbmN5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24tZmFuY3kuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkZhbmN5Q29tcG9uZW50ICB7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dCb2R5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbWF0ZXJpYWxJY29uczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1UaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uSWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpY29uQ29sb3VyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG59XHJcbiIsIjxzZWN0aW9uIFtpZF09XCJhY2NvcmRpb25JZFwiPlxyXG4gIDxoMyBjbGFzcz1cIm1hcmdpbi0wXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uLWZhbmN5LXRyaWdnZXIgYm94IGZsZXgtZ3JvdXAgZmxleC1hbGlnbi1jZW50ZXIgc3BhY2UtYmV0d2VlblwiIChjbGljayk9XCJzaG93Qm9keT0hc2hvd0JvZHlcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWQudHJ1ZV09XCJzaG93Qm9keVwiIGFyaWEtY29udHJvbHM9XCJhY2NvcmRpb25JZFwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJtYXRlcmlhbEljb25zXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB7e2ljb25Db2xvdXJ9fVwiPnt7aWNvbk5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cIiFtYXRlcmlhbEljb25zXCIgY2xhc3M9XCJmb250LWF3ZXNvbWUtaWNvbnMge3tpY29uTmFtZX19IHt7aWNvbkNvbG91cn19XCI+PC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj57e2l0ZW1UaXRsZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYS10b2dnbGUgZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCIhc2hvd0JvZHlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0JvZHlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2gzPlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93Qm9keVwiIGNsYXNzPVwiYWNjb3JkaW9uLWZhbmN5LXBhbmVsXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuIl19