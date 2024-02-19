import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TagComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "loyalty");
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "loyalty");
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.tagText);
} }
function TagComponent_section_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tagText);
} }
function TagComponent_section_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵlistener("click", function TagComponent_section_0_a_5_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onRemove($event)); });
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵlistener("click", function TagComponent_section_0_a_6_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onRemove($event)); });
    i0.ɵɵelementEnd();
} }
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "bg-aa-red-100": a0, "bg-aa-orange-100": a1, "bg-aa-green-100": a2, "bg-aa-blue-100": a3, "bg-aa-light-blue-100": a4, "bg-aa-plum-100": a5, "bg-aa-ochre-100": a6, "bg-aa-white-100": a7, "bg-aa-grey-100": a8, "bg-aa-pink-100": a9 });
function TagComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵtemplate(1, TagComponent_section_0_div_1_Template, 2, 0, "div", 3)(2, TagComponent_section_0_div_2_Template, 2, 0, "div", 4)(3, TagComponent_section_0_span_3_Template, 2, 1, "span", 5)(4, TagComponent_section_0_span_4_Template, 2, 1, "span", 6)(5, TagComponent_section_0_a_5_Template, 1, 0, "a", 7)(6, TagComponent_section_0_a_6_Template, 1, 0, "a", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(7, _c0, [ctx_r0.isRed, ctx_r0.isOrange, ctx_r0.isGreen, ctx_r0.isBlue, ctx_r0.isLightBlue, ctx_r0.isPlum, ctx_r0.isOchre, ctx_r0.isWhite, ctx_r0.isBlack, ctx_r0.isPink]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
} }
function TagComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 15)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(2, _c0, [ctx_r1.isRed, ctx_r1.isOrange, ctx_r1.isGreen, ctx_r1.isBlue, ctx_r1.isLightBlue, ctx_r1.isPlum, ctx_r1.isOchre, ctx_r1.isWhite, ctx_r1.isBlack, ctx_r1.isPink]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.tagText);
} }
export class TagComponent {
    constructor() {
        this.isShaped = false;
        this.tagText = '';
        this.isRed = false;
        this.isOrange = false;
        this.isGreen = false;
        this.isPlum = false;
        this.isBlue = false;
        this.isLightBlue = false;
        this.isWhite = false;
        this.isOchre = false;
        this.isBlack = false;
        this.isPink = false;
        this.removeTag = new EventEmitter();
    }
    onRemove(e) {
        e.stopPropagation();
        this.removeTag.emit(e);
    }
    static { this.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TagComponent, selectors: [["aa-tag"]], inputs: { isShaped: "isShaped", tagText: "tagText", isRed: "isRed", isOrange: "isOrange", isGreen: "isGreen", isPlum: "isPlum", isBlue: "isBlue", isLightBlue: "isLightBlue", isWhite: "isWhite", isOchre: "isOchre", isBlack: "isBlack", isPink: "isPink" }, outputs: { removeTag: "removeTag" }, decls: 2, vars: 2, consts: [["class", "aa-tag", 3, "ngClass", 4, "ngIf"], ["class", "aa-tag-shaped", 3, "ngClass", 4, "ngIf"], [1, "aa-tag", 3, "ngClass"], ["class", "material-icons aa-white-100", 4, "ngIf"], ["class", "material-icons aa-blue-100", 4, "ngIf"], ["class", "aa-white-100", 4, "ngIf"], ["class", "aa-blue-100", 4, "ngIf"], ["class", "anchor-close aa-white-100", 3, "click", 4, "ngIf"], ["class", "anchor-close aa-blue-100", 3, "click", 4, "ngIf"], [1, "material-icons", "aa-white-100"], [1, "material-icons", "aa-blue-100"], [1, "aa-white-100"], [1, "aa-blue-100"], [1, "anchor-close", "aa-white-100", 3, "click"], [1, "anchor-close", "aa-blue-100", 3, "click"], [1, "aa-tag-shaped", 3, "ngClass"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TagComponent_section_0_Template, 7, 18, "section", 0)(1, TagComponent_section_1_Template, 3, 13, "section", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isShaped);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isShaped);
        } }, dependencies: [i1.NgClass, i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagComponent, [{
        type: Component,
        args: [{ selector: 'aa-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n    *ngIf=\"!isShaped\" \r\n    class=\"aa-tag\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <div *ngIf=\"!isWhite\" class=\"material-icons aa-white-100\">loyalty</div>\r\n    <div *ngIf=\"isWhite\" class=\"material-icons aa-blue-100\">loyalty</div>\r\n    <span *ngIf=\"!isWhite\" class=\"aa-white-100\">{{tagText}}</span>\r\n    <span *ngIf=\"isWhite\" class=\"aa-blue-100\">{{tagText}}</span>\r\n    <a *ngIf=\"!isWhite\" class=\"anchor-close aa-white-100\" (click)=\"onRemove($event)\"></a>\r\n    <a *ngIf=\"isWhite\" class=\"anchor-close aa-blue-100\" (click)=\"onRemove($event)\"></a>\r\n</section>\r\n\r\n<section \r\n    *ngIf=\"isShaped\"\r\n    class=\"aa-tag-shaped\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <span>{{tagText}}</span>\r\n</section>" }]
    }], () => [], { isShaped: [{
            type: Input
        }], tagText: [{
            type: Input
        }], isRed: [{
            type: Input
        }], isOrange: [{
            type: Input
        }], isGreen: [{
            type: Input
        }], isPlum: [{
            type: Input
        }], isBlue: [{
            type: Input
        }], isLightBlue: [{
            type: Input
        }], isWhite: [{
            type: Input
        }], isOchre: [{
            type: Input
        }], isBlack: [{
            type: Input
        }], isPink: [{
            type: Input
        }], removeTag: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TagComponent, { className: "TagComponent", filePath: "lib\\patterns\\tag\\tag.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy90YWcvdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy90YWcvdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNnQjVGLDhCQUEwRDtJQUFBLHVCQUFPO0lBQUEsaUJBQU07OztJQUN2RSwrQkFBd0Q7SUFBQSx1QkFBTztJQUFBLGlCQUFNOzs7SUFDckUsZ0NBQTRDO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsY0FBVztJQUFYLG9DQUFXOzs7SUFDdkQsZ0NBQTBDO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsY0FBVztJQUFYLG9DQUFXOzs7O0lBQ3JELDZCQUFpRjtJQUEzQixtS0FBUyxlQUFBLHVCQUFnQixDQUFBLElBQUM7SUFBQyxpQkFBSTs7OztJQUNyRiw2QkFBK0U7SUFBM0IscUtBQVMsZUFBQSx3QkFBZ0IsQ0FBQSxJQUFDO0lBQUMsaUJBQUk7Ozs7SUFyQnZGLGtDQWVDO0lBQ0csdUVBQXVFLDBEQUFBLDREQUFBLDREQUFBLHNEQUFBLHNEQUFBO0lBTTNFLGlCQUFVOzs7SUFuQk4sc05BV0U7SUFFSSxjQUFjO0lBQWQsc0NBQWM7SUFDZCxjQUFhO0lBQWIscUNBQWE7SUFDWixjQUFjO0lBQWQsc0NBQWM7SUFDZCxjQUFhO0lBQWIscUNBQWE7SUFDaEIsY0FBYztJQUFkLHNDQUFjO0lBQ2QsY0FBYTtJQUFiLHFDQUFhOzs7SUFHckIsbUNBZUMsV0FBQTtJQUNTLFlBQVc7SUFBQSxpQkFBTyxFQUFBOzs7SUFieEIsc05BV0U7SUFFSSxlQUFXO0lBQVgsb0NBQVc7O0FEaENyQixNQUFNLE9BQU8sWUFBWTtJQWdCdkI7UUFkUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFFaEMsQ0FBQztJQUVWLFFBQVEsQ0FBQyxDQUFRO1FBQ3RCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDOzZFQXJCVSxZQUFZO29FQUFaLFlBQVk7WUNSekIsc0VBc0JVLHlEQUFBOztZQXJCTCxvQ0FBZTtZQXdCZixjQUFjO1lBQWQsbUNBQWM7OztpRkRqQk4sWUFBWTtjQU54QixTQUFTOzJCQUNFLFFBQVEsbUJBR0QsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksU0FBUztrQkFBbEIsTUFBTTs7a0ZBZEksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10YWcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhZy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBpc1NoYXBlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRhZ1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzUmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNPcmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc0dyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNQbHVtOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNCbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNMaWdodEJsdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1doaXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNPY2hyZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzQmxhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1Bpbms6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlVGFnID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIG9uUmVtb3ZlKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5yZW1vdmVUYWcuZW1pdChlKTtcclxuICB9XHJcbn1cclxuIiwiPHNlY3Rpb24gXHJcbiAgICAqbmdJZj1cIiFpc1NoYXBlZFwiIFxyXG4gICAgY2xhc3M9XCJhYS10YWdcIlxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICdiZy1hYS1yZWQtMTAwJyA6IGlzUmVkLFxyXG4gICAgICAgICdiZy1hYS1vcmFuZ2UtMTAwJyA6IGlzT3JhbmdlLFxyXG4gICAgICAgICdiZy1hYS1ncmVlbi0xMDAnIDogaXNHcmVlbixcclxuICAgICAgICAnYmctYWEtYmx1ZS0xMDAnIDogaXNCbHVlLFxyXG4gICAgICAgICdiZy1hYS1saWdodC1ibHVlLTEwMCcgOiBpc0xpZ2h0Qmx1ZSxcclxuICAgICAgICAnYmctYWEtcGx1bS0xMDAnIDogaXNQbHVtLFxyXG4gICAgICAgICdiZy1hYS1vY2hyZS0xMDAnIDogaXNPY2hyZSxcclxuICAgICAgICAnYmctYWEtd2hpdGUtMTAwJyA6IGlzV2hpdGUsXHJcbiAgICAgICAgJ2JnLWFhLWdyZXktMTAwJyA6IGlzQmxhY2ssXHJcbiAgICAgICAgJ2JnLWFhLXBpbmstMTAwJyA6IGlzUGlua1xyXG4gICAgfVwiXHJcbj5cclxuICAgIDxkaXYgKm5nSWY9XCIhaXNXaGl0ZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYWEtd2hpdGUtMTAwXCI+bG95YWx0eTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImlzV2hpdGVcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGFhLWJsdWUtMTAwXCI+bG95YWx0eTwvZGl2PlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNXaGl0ZVwiIGNsYXNzPVwiYWEtd2hpdGUtMTAwXCI+e3t0YWdUZXh0fX08L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImlzV2hpdGVcIiBjbGFzcz1cImFhLWJsdWUtMTAwXCI+e3t0YWdUZXh0fX08L3NwYW4+XHJcbiAgICA8YSAqbmdJZj1cIiFpc1doaXRlXCIgY2xhc3M9XCJhbmNob3ItY2xvc2UgYWEtd2hpdGUtMTAwXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2E+XHJcbiAgICA8YSAqbmdJZj1cImlzV2hpdGVcIiBjbGFzcz1cImFuY2hvci1jbG9zZSBhYS1ibHVlLTEwMFwiIChjbGljayk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9hPlxyXG48L3NlY3Rpb24+XHJcblxyXG48c2VjdGlvbiBcclxuICAgICpuZ0lmPVwiaXNTaGFwZWRcIlxyXG4gICAgY2xhc3M9XCJhYS10YWctc2hhcGVkXCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAnYmctYWEtcmVkLTEwMCcgOiBpc1JlZCxcclxuICAgICAgICAnYmctYWEtb3JhbmdlLTEwMCcgOiBpc09yYW5nZSxcclxuICAgICAgICAnYmctYWEtZ3JlZW4tMTAwJyA6IGlzR3JlZW4sXHJcbiAgICAgICAgJ2JnLWFhLWJsdWUtMTAwJyA6IGlzQmx1ZSxcclxuICAgICAgICAnYmctYWEtbGlnaHQtYmx1ZS0xMDAnIDogaXNMaWdodEJsdWUsXHJcbiAgICAgICAgJ2JnLWFhLXBsdW0tMTAwJyA6IGlzUGx1bSxcclxuICAgICAgICAnYmctYWEtb2NocmUtMTAwJyA6IGlzT2NocmUsXHJcbiAgICAgICAgJ2JnLWFhLXdoaXRlLTEwMCcgOiBpc1doaXRlLFxyXG4gICAgICAgICdiZy1hYS1ncmV5LTEwMCcgOiBpc0JsYWNrLFxyXG4gICAgICAgICdiZy1hYS1waW5rLTEwMCcgOiBpc1BpbmtcclxuICAgIH1cIlxyXG4+XHJcbiAgICA8c3Bhbj57e3RhZ1RleHR9fTwvc3Bhbj5cclxuPC9zZWN0aW9uPiJdfQ==