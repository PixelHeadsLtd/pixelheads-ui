import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3) => ({ "green": a0, "orange": a1, "red": a2, "blue": a3 });
const _c1 = (a0, a1, a2, a3, a4, a5) => ({ "top": a0, "right": a1, "left": a2, "min-width": a3, "max-width": a4, "z-index": a5 });
const _c2 = ["*"];
export class ModalDialogComponent {
    constructor() {
        this.heading = '';
        this.message = '';
        this.green = false;
        this.orange = false;
        this.red = false;
        this.blue = false;
        this.zIndex = 0;
        this.closeMeEvent = new EventEmitter();
        this.confirmEvent = new EventEmitter();
    }
    ngOnInit() {
        console.log('Modal init');
    }
    closeMe() {
        this.closeMeEvent.emit();
    }
    confirm() {
        this.confirmEvent.emit();
    }
    ngOnDestroy() {
        console.log(' Modal destroyed');
    }
    static { this.ɵfac = function ModalDialogComponent_Factory(t) { return new (t || ModalDialogComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDialogComponent, selectors: [["aa-modal-dialog"]], inputs: { heading: "heading", message: "message", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth", green: "green", orange: "orange", red: "red", blue: "blue", zIndex: "zIndex" }, outputs: { closeMeEvent: "closeMeEvent", confirmEvent: "confirmEvent" }, ngContentSelectors: _c2, decls: 13, vars: 16, consts: [[1, "aa-modal"], [1, "aa-modal-container", 3, "ngClass", "ngStyle"], [1, "aa-modal-header"], [1, "boxed", "align-center"], [1, "aa-modal-content"], [1, "aa-modal-footer", "flex-group", "flex-center"], [1, "cancel", 3, "click"], [1, "primary", 3, "click"]], template: function ModalDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "div", 1)(2, "section", 2)(3, "h2", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "section", 4);
            i0.ɵɵtext(6);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "section", 5)(9, "button", 6);
            i0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_9_listener() { return ctx.closeMe(); });
            i0.ɵɵtext(10, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_11_listener() { return ctx.confirm(); });
            i0.ɵɵtext(12, "Confirm");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(4, _c0, ctx.green, ctx.orange, ctx.red, ctx.blue))("ngStyle", i0.ɵɵpureFunction6(9, _c1, ctx.topPos, ctx.rightPos, ctx.leftPos, ctx.minWidth, ctx.maxWidth, ctx.zIndex));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.heading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDialogComponent, [{
        type: Component,
        args: [{ selector: 'aa-modal-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"aa-modal\">\r\n    <div \r\n      class=\"aa-modal-container\" \r\n      [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n      [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'right' : rightPos,\r\n        'left' : leftPos,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'z-index' : zIndex\r\n      }\"\r\n    >\r\n      <section class=\"aa-modal-header\">\r\n        <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n      </section>\r\n      <section class=\"aa-modal-content\">\r\n        {{message}}\r\n        <ng-content></ng-content>\r\n      </section>\r\n      <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <button (click)=\"closeMe()\" class=\"cancel\">Close</button>\r\n        <button (click)=\"confirm()\" class=\"primary\">Confirm</button>\r\n      </section>\r\n    </div>\r\n  </article>" }]
    }], () => [], { heading: [{
            type: Input
        }], message: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], green: [{
            type: Input
        }], orange: [{
            type: Input
        }], red: [{
            type: Input
        }], blue: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], closeMeEvent: [{
            type: Output
        }], confirmEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDialogComponent, { className: "ModalDialogComponent", filePath: "lib\\widgets\\modal-dialog\\modal-dialog.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRakgsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQjtRQUVTLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQU1yQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFZLEtBQUssQ0FBQztRQUNyQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWY1QixDQUFDO0lBaUJqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7cUZBakNVLG9CQUFvQjtvRUFBcEIsb0JBQW9COztZQ1JqQyxrQ0FBMEIsYUFBQSxpQkFBQSxZQUFBO1lBY2EsWUFBVztZQUFBLGlCQUFLLEVBQUE7WUFFakQsa0NBQWtDO1lBQ2hDLFlBQ0E7WUFBQSxrQkFBeUI7WUFDM0IsaUJBQVU7WUFDVixrQ0FBd0QsZ0JBQUE7WUFDOUMsaUdBQVMsYUFBUyxJQUFDO1lBQWdCLHNCQUFLO1lBQUEsaUJBQVM7WUFDekQsa0NBQTRDO1lBQXBDLGtHQUFTLGFBQVMsSUFBQztZQUFpQix3QkFBTztZQUFBLGlCQUFTLEVBQUEsRUFBQSxFQUFBOztZQW5COUQsY0FBb0U7WUFBcEUsOEZBQW9FLHNIQUFBO1lBV25DLGVBQVc7WUFBWCxpQ0FBVztZQUcxQyxlQUNBO1lBREEsNENBQ0E7OztpRkRWSyxvQkFBb0I7Y0FOaEMsU0FBUzsyQkFDRSxpQkFBaUIsbUJBR1YsdUJBQXVCLENBQUMsTUFBTTtvQkFNdEMsT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07O2tGQWpCSSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1tb2RhbC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBtYXhXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGdyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3JhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxuICBAT3V0cHV0KCkgY2xvc2VNZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjb25maXJtRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01vZGFsIGluaXQnKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTWUoKSB7XHJcbiAgICB0aGlzLmNsb3NlTWVFdmVudC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKCkge1xyXG4gICAgdGhpcy5jb25maXJtRXZlbnQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnIE1vZGFsIGRlc3Ryb3llZCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGFydGljbGUgY2xhc3M9XCJhYS1tb2RhbFwiPlxyXG4gICAgPGRpdiBcclxuICAgICAgY2xhc3M9XCJhYS1tb2RhbC1jb250YWluZXJcIiBcclxuICAgICAgW25nQ2xhc3NdPVwieydncmVlbic6Z3JlZW4sICdvcmFuZ2UnOm9yYW5nZSwgJ3JlZCc6cmVkLCAnYmx1ZSc6Ymx1ZX1cIlxyXG4gICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgJ3RvcCcgOiB0b3BQb3MsXHJcbiAgICAgICAgJ3JpZ2h0JyA6IHJpZ2h0UG9zLFxyXG4gICAgICAgICdsZWZ0JyA6IGxlZnRQb3MsXHJcbiAgICAgICAgJ21pbi13aWR0aCcgOiBtaW5XaWR0aCxcclxuICAgICAgICAnbWF4LXdpZHRoJyA6IG1heFdpZHRoLFxyXG4gICAgICAgICd6LWluZGV4JyA6IHpJbmRleFxyXG4gICAgICB9XCJcclxuICAgID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhYS1tb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJib3hlZCBhbGlnbi1jZW50ZXJcIj57e2hlYWRpbmd9fTwvaDI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhYS1tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAge3ttZXNzYWdlfX1cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhYS1tb2RhbC1mb290ZXIgZmxleC1ncm91cCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlTWUoKVwiIGNsYXNzPVwiY2FuY2VsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb25maXJtKClcIiBjbGFzcz1cInByaW1hcnlcIj5Db25maXJtPC9idXR0b24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvYXJ0aWNsZT4iXX0=