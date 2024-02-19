import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "rotate-180": a0 });
const _c1 = a0 => ({ "slider-open": a0 });
const _c2 = ["*"];
export class ElementSliderComponent {
    constructor() {
        this.openSlider = false;
    }
    toggleSlider() {
        this.openSlider = !this.openSlider;
    }
    static { this.ɵfac = function ElementSliderComponent_Factory(t) { return new (t || ElementSliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ElementSliderComponent, selectors: [["aa-element-slider"]], inputs: { openSlider: "openSlider" }, ngContentSelectors: _c2, decls: 5, vars: 6, consts: [[1, "element-slider", "flex-group", "flex-end", "position-relative"], [1, "secondary", "material-icons", "slider-button", "animate-normal", 3, "ngClass", "click"], [1, "position-absolute", "animate-normal", "slider-content", 3, "ngClass"]], template: function ElementSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ElementSliderComponent_Template_button_click_1_listener() { return ctx.toggleSlider(); });
            i0.ɵɵtext(2, " chevron_left ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx.openSlider));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx.openSlider));
        } }, dependencies: [i1.NgClass] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementSliderComponent, [{
        type: Component,
        args: [{ selector: 'aa-element-slider', template: "<section class=\"\r\n    element-slider\r\n    flex-group \r\n    flex-end \r\n    position-relative\"\r\n>\r\n    <button \r\n        class=\"\r\n            secondary \r\n            material-icons \r\n            slider-button \r\n            animate-normal\r\n        \"\r\n        (click)=\"toggleSlider()\"\r\n        [ngClass]=\"{ 'rotate-180' : openSlider }\"\r\n    >\r\n        chevron_left\r\n    </button>\r\n    <div \r\n        class=\"position-absolute animate-normal slider-content\"\r\n        [ngClass]=\"{ 'slider-open' : openSlider }\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>" }]
    }], null, { openSlider: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ElementSliderComponent, { className: "ElementSliderComponent", filePath: "lib\\widgets\\element-slider\\element-slider.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZWxlbWVudC1zbGlkZXIvZWxlbWVudC1zbGlkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZWxlbWVudC1zbGlkZXIvZWxlbWVudC1zbGlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTVcsZUFBVSxHQUFZLEtBQUssQ0FBQztLQUt0QztJQUhRLFlBQVk7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDckMsQ0FBQzt1RkFMVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjs7WUNQbkMsa0NBS0MsZ0JBQUE7WUFRTyxtR0FBUyxrQkFBYyxJQUFDO1lBR3hCLDhCQUNKO1lBQUEsaUJBQVM7WUFDVCw4QkFHQztZQUNHLGtCQUF5QjtZQUM3QixpQkFBTSxFQUFBOztZQVRGLGNBQXlDO1lBQXpDLG9FQUF5QztZQU16QyxlQUEwQztZQUExQyxvRUFBMEM7OztpRkRickMsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsbUJBQW1CO2dCQUtwQixVQUFVO2tCQUFsQixLQUFLOztrRkFESyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWVsZW1lbnQtc2xpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWxlbWVudC1zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9lbGVtZW50LXNsaWRlci5jb21wb25lbnQuc2NzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50U2xpZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBvcGVuU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVTbGlkZXIoKSB7XHJcbiAgICB0aGlzLm9wZW5TbGlkZXIgPSAhIHRoaXMub3BlblNsaWRlclxyXG4gIH1cclxufVxyXG4iLCI8c2VjdGlvbiBjbGFzcz1cIlxyXG4gICAgZWxlbWVudC1zbGlkZXJcclxuICAgIGZsZXgtZ3JvdXAgXHJcbiAgICBmbGV4LWVuZCBcclxuICAgIHBvc2l0aW9uLXJlbGF0aXZlXCJcclxuPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICBzZWNvbmRhcnkgXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLWljb25zIFxyXG4gICAgICAgICAgICBzbGlkZXItYnV0dG9uIFxyXG4gICAgICAgICAgICBhbmltYXRlLW5vcm1hbFxyXG4gICAgICAgIFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVNsaWRlcigpXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICdyb3RhdGUtMTgwJyA6IG9wZW5TbGlkZXIgfVwiXHJcbiAgICA+XHJcbiAgICAgICAgY2hldnJvbl9sZWZ0XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBhbmltYXRlLW5vcm1hbCBzbGlkZXItY29udGVudFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnc2xpZGVyLW9wZW4nIDogb3BlblNsaWRlciB9XCJcclxuICAgID5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPiJdfQ==