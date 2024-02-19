import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a2, a3) => ({ "border": a0, "border-style": "solid", "width": a2, "height": a3 });
function BladeTopComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "div");
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("flag ", ctx_r0.countryFlag, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(4, _c0, ctx_r0.borderThickness + " solid " + ctx_r0.borderColour, ctx_r0.profileSize, ctx_r0.profileSize));
} }
const _c1 = [[["", "custom-content", ""]], [["", "user-profile", ""]]];
const _c2 = a0 => ({ "show-top-blade box-shadow-light": a0 });
const _c3 = (a0, a1, a2, a3, a4) => ({ "left": a0, "right": a1, "margin-top": a2, "z-index": a3, "max-height": a4 });
const _c4 = a0 => ({ "transform": a0 });
const _c5 = ["[custom-content]", "[user-profile]"];
export class BladeTopComponent {
    onClose() {
        this.isOpen = false;
        this.bladeOpen.emit(this.isOpen);
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    constructor() {
        this.zIndex = 0;
        this.countryFlag = '';
        this.paddingTop = false;
        this.paddingRight = false;
        this.paddingBottom = false;
        this.paddingLeft = false;
        this.userProfile = false;
        this.borderColour = '';
        this.isOpen = false;
        this.isPinned = false;
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
    }
    static { this.ɵfac = function BladeTopComponent_Factory(t) { return new (t || BladeTopComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeTopComponent, selectors: [["aa-blade-top"]], inputs: { rightPos: "rightPos", leftPos: "leftPos", topPos: "topPos", zIndex: "zIndex", maxHeight: "maxHeight", countryFlag: "countryFlag", paddingTop: "paddingTop", paddingRight: "paddingRight", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", userProfile: "userProfile", borderColour: "borderColour", profileSize: "profileSize", borderThickness: "borderThickness", isOpen: "isOpen", isPinned: "isPinned" }, outputs: { bladeOpen: "bladeOpen", bladePinned: "bladePinned" }, ngContentSelectors: _c5, decls: 9, vars: 14, consts: [[1, "blade-top", "gradient-h-blue", "width-control", "flex-group", 3, "ngClass", "ngStyle"], [1, "flex-group", "flex-start"], ["class", "position-relative margin-top-1-5", 4, "ngIf"], [1, "blade-top-controls", "flex-group"], [1, "material-icons", "pin", "flex-end", "margin-right-0-5", 3, "ngStyle", "click"], [1, "material-icons", 3, "click"], [1, "position-relative", "margin-top-1-5"], [1, "user-profile", "fingerprint", 3, "ngStyle"]], template: function BladeTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, BladeTopComponent_div_2_Template, 4, 8, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "button", 4);
            i0.ɵɵlistener("click", function BladeTopComponent_Template_button_click_5_listener($event) { return ctx.toggleThePin($event); });
            i0.ɵɵtext(6, "push_pin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function BladeTopComponent_Template_button_click_7_listener() { return ctx.onClose(); });
            i0.ɵɵtext(8, "close");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx.isOpen))("ngStyle", i0.ɵɵpureFunction5(6, _c3, ctx.leftPos, ctx.rightPos, ctx.topPos, ctx.zIndex, ctx.maxHeight));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.userProfile);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c4, ctx.isPinned ? "rotate(0deg)" : "rotate(90deg)"));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeTopComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade-top', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n    class=\"blade-top gradient-h-blue width-control flex-group\"\r\n    [ngClass]=\"{'show-top-blade box-shadow-light' : isOpen}\"\r\n    [ngStyle]=\"{\r\n        'left' : leftPos, \r\n        'right' : rightPos,\r\n        'margin-top' : topPos,\r\n        'z-index' : zIndex,\r\n        'max-height' : maxHeight\r\n    }\">\r\n    <div class=\"flex-group flex-start\">\r\n        <div *ngIf=\"userProfile\" class=\"position-relative margin-top-1-5\">\r\n            <div class=\"flag {{countryFlag}}\"></div>\r\n            <div class=\"user-profile fingerprint\" \r\n                [ngStyle]=\"{\r\n                    'border' : borderThickness+' solid '+borderColour, \r\n                    'border-style' : 'solid', \r\n                    'width' : profileSize, \r\n                    'height' : profileSize\r\n                }\">\r\n                <ng-content select=\"[user-profile]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"blade-top-controls flex-group\">\r\n        <button (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end margin-right-0-5\" [ngStyle]=\"{'transform': isPinned ? 'rotate(0deg)' : 'rotate(90deg)'}\">push_pin</button>\r\n        <button (click)=\"onClose()\" class=\"material-icons\">close</button>\r\n    </div>\r\n</section>" }]
    }], () => [], { rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], countryFlag: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], userProfile: [{
            type: Input
        }], borderColour: [{
            type: Input
        }], profileSize: [{
            type: Input
        }], borderThickness: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isPinned: [{
            type: Input
        }], bladeOpen: [{
            type: Output
        }], bladePinned: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeTopComponent, { className: "BladeTopComponent", filePath: "lib\\layout\\blade-top\\blade-top.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvYmxhZGUtdG9wL2JsYWRlLXRvcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2JsYWRlLXRvcC9ibGFkZS10b3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNXaEcsOEJBQWtFO0lBQzlELHNCQUF3QztJQUN4Qyw4QkFNTztJQUNILHFCQUFpRDtJQUNyRCxpQkFBTSxFQUFBOzs7SUFURCxjQUE0QjtJQUE1QiwwREFBNEI7SUFFN0IsY0FLRTtJQUxGLHNKQUtFOzs7Ozs7O0FEWGxCLE1BQU0sT0FBTyxpQkFBaUI7SUFxQjVCLE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFLO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEO1FBM0JTLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBYXBDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDdEQsQ0FBQztrRkFyQ1UsaUJBQWlCO29FQUFqQixpQkFBaUI7O1lDUjlCLGtDQVNPLGFBQUE7WUFFQyxrRUFXTTtZQUNOLGtCQUFtRDtZQUN2RCxpQkFBTTtZQUNOLDhCQUEyQyxnQkFBQTtZQUMvQixvR0FBUyx3QkFBb0IsSUFBQztZQUE2SCx3QkFBUTtZQUFBLGlCQUFTO1lBQ3BMLGlDQUFtRDtZQUEzQyw4RkFBUyxhQUFTLElBQUM7WUFBd0IscUJBQUs7WUFBQSxpQkFBUyxFQUFBLEVBQUE7O1lBekJyRSxnRUFBd0QseUdBQUE7WUFTOUMsZUFBaUI7WUFBakIsc0NBQWlCO1lBZXFFLGVBQXNFO1lBQXRFLHNHQUFzRTs7O2lGRGxCN0osaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsY0FBYyxtQkFHUCx1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDSSxTQUFTO2tCQUFsQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTs7a0ZBbkJJLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWJsYWRlLXRvcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JsYWRlLXRvcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmxhZGUtdG9wLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJsYWRlVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIG1heEhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGNvdW50cnlGbGFnOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwYWRkaW5nVG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGFkZGluZ1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGFkZGluZ0JvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBib3JkZXJDb2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2ZpbGVTaXplOiBhbnk7XHJcbiAgQElucHV0KCkgYm9yZGVyVGhpY2tuZXNzOiBhbnk7XHJcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNQaW5uZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgYmxhZGVPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBibGFkZVBpbm5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb25DbG9zZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmJsYWRlT3Blbi5lbWl0KHRoaXMuaXNPcGVuKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVRoZVBpbihlOmFueSkge1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICF0aGlzLmlzUGlubmVkO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpOyAvLyBpc1Bpbm5lZCBjYWxsYmFja1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLmlzT3Blbik7IC8vIGlzT3BlbiBjYWxsYmFja1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPHNlY3Rpb24gXHJcbiAgICBjbGFzcz1cImJsYWRlLXRvcCBncmFkaWVudC1oLWJsdWUgd2lkdGgtY29udHJvbCBmbGV4LWdyb3VwXCJcclxuICAgIFtuZ0NsYXNzXT1cInsnc2hvdy10b3AtYmxhZGUgYm94LXNoYWRvdy1saWdodCcgOiBpc09wZW59XCJcclxuICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAnbGVmdCcgOiBsZWZ0UG9zLCBcclxuICAgICAgICAncmlnaHQnIDogcmlnaHRQb3MsXHJcbiAgICAgICAgJ21hcmdpbi10b3AnIDogdG9wUG9zLFxyXG4gICAgICAgICd6LWluZGV4JyA6IHpJbmRleCxcclxuICAgICAgICAnbWF4LWhlaWdodCcgOiBtYXhIZWlnaHRcclxuICAgIH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnRcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlclByb2ZpbGVcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1hcmdpbi10b3AtMS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGFnIHt7Y291bnRyeUZsYWd9fVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1wcm9maWxlIGZpbmdlcnByaW50XCIgXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcicgOiBib3JkZXJUaGlja25lc3MrJyBzb2xpZCAnK2JvcmRlckNvbG91ciwgXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1zdHlsZScgOiAnc29saWQnLCBcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnIDogcHJvZmlsZVNpemUsIFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogcHJvZmlsZVNpemVcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1c2VyLXByb2ZpbGVdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY3VzdG9tLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxhZGUtdG9wLWNvbnRyb2xzIGZsZXgtZ3JvdXBcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVUaGVQaW4oJGV2ZW50KVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGluIGZsZXgtZW5kIG1hcmdpbi1yaWdodC0wLTVcIiBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6IGlzUGlubmVkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSd9XCI+cHVzaF9waW48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsb3NlKClcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L3NlY3Rpb24+Il19