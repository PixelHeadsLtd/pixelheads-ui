import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ToastrItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "local_police");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "privacy_tip");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "verified_user");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "security");
    i0.ɵɵelementEnd();
} }
const _c0 = (a0, a1, a2, a3, a4) => ({ "show-toastr": a0, "bg-aa-red-100": a1, "bg-aa-orange-100": a2, "bg-aa-green-100": a3, "bg-aa-light-blue-100": a4 });
export class ToastrItemComponent {
    onCloseClick(e) {
        e.stopPropagation();
        this.closeToastr.emit(e);
    }
    constructor() {
        this.showToastr = false;
        this.isError = false;
        this.isWarning = false;
        this.isSuccess = false;
        this.isInfo = false;
        this.closeToastr = new EventEmitter();
    }
    static { this.ɵfac = function ToastrItemComponent_Factory(t) { return new (t || ToastrItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastrItemComponent, selectors: [["aa-toastr-item"]], inputs: { showToastr: "showToastr", isError: "isError", isWarning: "isWarning", isSuccess: "isSuccess", isInfo: "isInfo", heading: "heading", message: "message" }, outputs: { closeToastr: "closeToastr" }, decls: 14, vars: 13, consts: [[1, "animate-normal", "bg-aa-red-100", "box-shadow", 3, "ngClass"], [1, "material-icons", "aa-white-100", 3, "click"], [1, "flex-group", "flex-start"], [1, "flex-align-center"], ["class", "material-icons toastr-icon aa-white-100", 4, "ngIf"], [1, "margin-0", "aa-white-100", "margin-bottom-0-25"], [1, "aa-white-100", "small"], [1, "material-icons", "toastr-icon", "aa-white-100"]], template: function ToastrItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ToastrItemComponent_Template_button_click_1_listener($event) { return ctx.onCloseClick($event); });
            i0.ɵɵtext(2, "clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "section", 3);
            i0.ɵɵtemplate(5, ToastrItemComponent_div_5_Template, 2, 0, "div", 4)(6, ToastrItemComponent_div_6_Template, 2, 0, "div", 4)(7, ToastrItemComponent_div_7_Template, 2, 0, "div", 4)(8, ToastrItemComponent_div_8_Template, 2, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section")(10, "h3", 5);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p", 6);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(7, _c0, ctx.showToastr, ctx.isError, ctx.isWarning, ctx.isSuccess, ctx.isInfo));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isWarning);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSuccess);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInfo);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.heading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
        } }, dependencies: [i1.NgClass, i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-toastr-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    class=\"animate-normal bg-aa-red-100 box-shadow\" \r\n    [ngClass]=\"{\r\n        'show-toastr': showToastr,\r\n        'bg-aa-red-100': isError,\r\n        'bg-aa-orange-100': isWarning,\r\n        'bg-aa-green-100': isSuccess,\r\n        'bg-aa-light-blue-100': isInfo\r\n    }\"\r\n>\r\n    <button (click)=\"onCloseClick($event)\" class=\"material-icons aa-white-100\">clear</button>\r\n    <div class=\"flex-group flex-start\">\r\n        <section class=\"flex-align-center\">\r\n            <div *ngIf=\"isError\" class=\"material-icons toastr-icon aa-white-100\">local_police</div>\r\n            <div *ngIf=\"isWarning\" class=\"material-icons toastr-icon aa-white-100\">privacy_tip</div>\r\n            <div *ngIf=\"isSuccess\" class=\"material-icons toastr-icon aa-white-100\">verified_user</div>\r\n            <div *ngIf=\"isInfo\" class=\"material-icons toastr-icon aa-white-100\">security</div>\r\n        </section>\r\n        <section>\r\n            <h3 class=\"margin-0 aa-white-100 margin-bottom-0-25\">{{heading}}</h3>\r\n            <p class=\"aa-white-100 small\">{{message}}</p>\r\n        </section>\r\n    </div>\r\n</article>" }]
    }], () => [], { showToastr: [{
            type: Input
        }], isError: [{
            type: Input
        }], isWarning: [{
            type: Input
        }], isSuccess: [{
            type: Input
        }], isInfo: [{
            type: Input
        }], heading: [{
            type: Input
        }], message: [{
            type: Input
        }], closeToastr: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastrItemComponent, { className: "ToastrItemComponent", filePath: "lib\\widgets\\toastr-item\\toastr-item.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9hc3RyLWl0ZW0vdG9hc3RyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9hc3RyLWl0ZW0vdG9hc3RyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ2E1Riw4QkFBcUU7SUFBQSw0QkFBWTtJQUFBLGlCQUFNOzs7SUFDdkYsOEJBQXVFO0lBQUEsMkJBQVc7SUFBQSxpQkFBTTs7O0lBQ3hGLDhCQUF1RTtJQUFBLDZCQUFhO0lBQUEsaUJBQU07OztJQUMxRiw4QkFBb0U7SUFBQSx3QkFBUTtJQUFBLGlCQUFNOzs7QURSOUYsTUFBTSxPQUFPLG1CQUFtQjtJQVl2QixZQUFZLENBQUMsQ0FBUTtRQUMxQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEO1FBZlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBSXZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQU9sQyxDQUFDO29GQWpCTixtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ1JoQyxrQ0FTQyxnQkFBQTtZQUNXLHNHQUFTLHdCQUFvQixJQUFDO1lBQXFDLHFCQUFLO1lBQUEsaUJBQVM7WUFDekYsOEJBQW1DLGlCQUFBO1lBRTNCLG9FQUF1Rix1REFBQSx1REFBQSx1REFBQTtZQUkzRixpQkFBVTtZQUNWLCtCQUFTLGFBQUE7WUFDZ0QsYUFBVztZQUFBLGlCQUFLO1lBQ3JFLDZCQUE4QjtZQUFBLGFBQVc7WUFBQSxpQkFBSSxFQUFBLEVBQUEsRUFBQTs7WUFsQnJELDJIQU1FO1lBS1ksZUFBYTtZQUFiLGtDQUFhO1lBQ2IsY0FBZTtZQUFmLG9DQUFlO1lBQ2YsY0FBZTtZQUFmLG9DQUFlO1lBQ2YsY0FBWTtZQUFaLGlDQUFZO1lBR21DLGVBQVc7WUFBWCxpQ0FBVztZQUNsQyxlQUFXO1lBQVgsaUNBQVc7OztpRkRaeEMsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsZ0JBQWdCLG1CQUdULHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVJLFdBQVc7a0JBQXBCLE1BQU07O2tGQVZJLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvYXN0ci1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3RyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0ci1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ckl0ZW1Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBzaG93VG9hc3RyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzU3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IGFueTtcclxuICBASW5wdXQoKSBtZXNzYWdlOiBhbnk7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZVRvYXN0ciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkNsb3NlQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsb3NlVG9hc3RyLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8YXJ0aWNsZSBcclxuICAgIGNsYXNzPVwiYW5pbWF0ZS1ub3JtYWwgYmctYWEtcmVkLTEwMCBib3gtc2hhZG93XCIgXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgJ3Nob3ctdG9hc3RyJzogc2hvd1RvYXN0cixcclxuICAgICAgICAnYmctYWEtcmVkLTEwMCc6IGlzRXJyb3IsXHJcbiAgICAgICAgJ2JnLWFhLW9yYW5nZS0xMDAnOiBpc1dhcm5pbmcsXHJcbiAgICAgICAgJ2JnLWFhLWdyZWVuLTEwMCc6IGlzU3VjY2VzcyxcclxuICAgICAgICAnYmctYWEtbGlnaHQtYmx1ZS0xMDAnOiBpc0luZm9cclxuICAgIH1cIlxyXG4+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsb3NlQ2xpY2soJGV2ZW50KVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYWEtd2hpdGUtMTAwXCI+Y2xlYXI8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnRcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0Vycm9yXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB0b2FzdHItaWNvbiBhYS13aGl0ZS0xMDBcIj5sb2NhbF9wb2xpY2U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzV2FybmluZ1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgdG9hc3RyLWljb24gYWEtd2hpdGUtMTAwXCI+cHJpdmFjeV90aXA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzU3VjY2Vzc1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgdG9hc3RyLWljb24gYWEtd2hpdGUtMTAwXCI+dmVyaWZpZWRfdXNlcjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNJbmZvXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB0b2FzdHItaWNvbiBhYS13aGl0ZS0xMDBcIj5zZWN1cml0eTwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWFyZ2luLTAgYWEtd2hpdGUtMTAwIG1hcmdpbi1ib3R0b20tMC0yNVwiPnt7aGVhZGluZ319PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhYS13aGl0ZS0xMDAgc21hbGxcIj57e21lc3NhZ2V9fTwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC9hcnRpY2xlPiJdfQ==