import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BladeBottomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function BladeBottomComponent_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleThePin($event)); });
    i0.ɵɵtext(1, "push_pin");
    i0.ɵɵelementEnd();
} }
const _c0 = [[["", "custom-header", ""]], [["", "custom-content", ""]]];
const _c1 = (a0, a1, a2) => ({ "show": a0, "pinned": a1, "fullscreen": a2 });
const _c2 = (a0, a1) => ({ "top": a0, "z-index": a1 });
const _c3 = ["[custom-header]", "[custom-content]"];
export class BladeBottomComponent {
    toggle() {
        this.isOpen = !this.isOpen;
        this.bladeOpen.emit(this.isOpen);
        if (this.isPinned && this.isOpen) {
            this.isPinned = true;
            this.bladePinned.emit(true);
        }
        else {
            this.bladePinned.emit(false);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        if (!this.isPinned) {
            this.isFullScreen = true;
            this.bladeFullScreen.emit(this.isFullScreen);
        }
        else if (this.isPinned) {
            this.isFullScreen = false;
            this.isOpen = true;
        }
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    expandedPosition() {
        if (!this.isOpen) {
            return this.closedPos;
        }
        else if (this.isFullScreen) {
            return this.fullScreenPos;
        }
        else if (this.isPinned || this.isOpen) {
            return this.splitScreenPos;
        }
    }
    constructor() {
        this.isOpen = false;
        this.isPinned = false;
        this.disablePinning = false;
        this.isFullScreen = false;
        this.innitiallyPinned = false;
        this.controlsColor = '';
        this.headerBgColor = '';
        this.zIndex = 0;
        this.bladePinned = new EventEmitter();
        this.bladeOpen = new EventEmitter();
        this.bladeFullScreen = new EventEmitter();
    }
    ngOnInit() {
        if (this.innitiallyPinned) {
            this.isPinned = true;
            this.isOpen = true;
            this.isFullScreen = false;
        }
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
        this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
    }
    static { this.ɵfac = function BladeBottomComponent_Factory(t) { return new (t || BladeBottomComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeBottomComponent, selectors: [["aa-blade-bottom"]], inputs: { fullScreenPos: "fullScreenPos", splitScreenPos: "splitScreenPos", closedPos: "closedPos", isOpen: "isOpen", isPinned: "isPinned", disablePinning: "disablePinning", isFullScreen: "isFullScreen", innitiallyPinned: "innitiallyPinned", controlsColor: "controlsColor", headerBgColor: "headerBgColor", zIndex: "zIndex" }, outputs: { bladePinned: "bladePinned", bladeOpen: "bladeOpen", bladeFullScreen: "bladeFullScreen" }, ngContentSelectors: _c3, decls: 8, vars: 16, consts: [[1, "blade-bottom", 3, "ngClass", "ngStyle"], [3, "click"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "material-icons pin flex-end", 3, "click", 4, "ngIf"], [1, "blade-bottom-content"], [1, "material-icons", "pin", "flex-end", 3, "click"]], template: function BladeBottomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1);
            i0.ɵɵlistener("click", function BladeBottomComponent_Template_section_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵtemplate(5, BladeBottomComponent_div_5_Template, 2, 0, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "section", 4);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(9, _c1, ctx.isOpen, ctx.isPinned, ctx.isFullScreen))("ngStyle", i0.ɵɵpureFunction2(13, _c2, ctx.expandedPosition(), ctx.zIndex));
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("blade-bottom-header flex-group cursor-pointer ", ctx.headerBgColor, "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("flex-group flex-end controls ", ctx.controlsColor, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.disablePinning);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeBottomComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade-bottom', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n" }]
    }], () => [], { fullScreenPos: [{
            type: Input
        }], splitScreenPos: [{
            type: Input
        }], closedPos: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isPinned: [{
            type: Input
        }], disablePinning: [{
            type: Input
        }], isFullScreen: [{
            type: Input
        }], innitiallyPinned: [{
            type: Input
        }], controlsColor: [{
            type: Input
        }], headerBgColor: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], bladePinned: [{
            type: Output
        }], bladeOpen: [{
            type: Output
        }], bladeFullScreen: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeBottomComponent, { className: "BladeBottomComponent", filePath: "lib\\layout\\blade-bottom\\blade-bottom.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtYm90dG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvYmxhZGUtYm90dG9tL2JsYWRlLWJvdHRvbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2JsYWRlLWJvdHRvbS9ibGFkZS1ib3R0b20uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNnQmhHLDhCQUFnRztJQUFuRSxvS0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFBcUMsd0JBQVE7SUFBQSxpQkFBTTs7Ozs7O0FEUnRILE1BQU0sT0FBTyxvQkFBb0I7SUFpQi9CLE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFLO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJ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QXBCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTs7a0ZBZkksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1ibGFkZS1ib3R0b20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibGFkZS1ib3R0b20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JsYWRlLWJvdHRvbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmxhZGVCb3R0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBmdWxsU2NyZWVuUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgc3BsaXRTY3JlZW5Qb3M6IGFueTtcclxuICBASW5wdXQoKSBjbG9zZWRQb3M6IGFueTtcclxuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1Bpbm5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVQaW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNGdWxsU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5uaXRpYWxseVBpbm5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xzQ29sb3I6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhlYWRlckJnQ29sb3I6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxuICBAT3V0cHV0KCkgYmxhZGVQaW5uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGJsYWRlT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVGdWxsU2NyZWVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIHRoaXMuYmxhZGVPcGVuLmVtaXQodGhpcy5pc09wZW4pO1xyXG4gICAgaWYgKHRoaXMuaXNQaW5uZWQgJiYgdGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5pc1Bpbm5lZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaGVQaW4oZTphbnkpIHtcclxuICAgIHRoaXMuaXNQaW5uZWQgPSAhIHRoaXMuaXNQaW5uZWQ7XHJcbiAgICBpZiAoIXRoaXMuaXNQaW5uZWQpIHtcclxuICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmJsYWRlRnVsbFNjcmVlbi5lbWl0KHRoaXMuaXNGdWxsU2NyZWVuKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Bpbm5lZCkge1xyXG4gICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZGVkUG9zaXRpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsb3NlZFBvcztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZnVsbFNjcmVlblBvcztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Bpbm5lZCB8fCB0aGlzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zcGxpdFNjcmVlblBvcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pbm5pdGlhbGx5UGlubmVkKSB7XHJcbiAgICAgIHRoaXMuaXNQaW5uZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJsYWRlUGlubmVkLmVtaXQodGhpcy5pc1Bpbm5lZCk7IC8vIGlzUGlubmVkIGNhbGxiYWNrXHJcbiAgICB0aGlzLmJsYWRlT3Blbi5lbWl0KHRoaXMuaXNPcGVuKTsgLy8gaXNPcGVuIGNhbGxiYWNrXHJcbiAgICB0aGlzLmJsYWRlRnVsbFNjcmVlbi5lbWl0KHRoaXMuaXNGdWxsU2NyZWVuKTsgLy8gaXNGdWxsU2NyZWVuIGNhbGxiYWNrXHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgXHJcbiAgY2xhc3M9XCJibGFkZS1ib3R0b21cIiBcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAnc2hvdycgOiBpc09wZW4sIFxyXG4gICAgJ3Bpbm5lZCcgOiBpc1Bpbm5lZCwgXHJcbiAgICAnZnVsbHNjcmVlbicgOiBpc0Z1bGxTY3JlZW5cclxuICB9XCIgXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgJ3RvcCc6IGV4cGFuZGVkUG9zaXRpb24oKSwgXHJcbiAgICAnei1pbmRleCc6IHpJbmRleFxyXG4gIH1cIj5cclxuICA8c2VjdGlvbiBjbGFzcz1cImJsYWRlLWJvdHRvbS1oZWFkZXIgZmxleC1ncm91cCBjdXJzb3ItcG9pbnRlciB7e2hlYWRlckJnQ29sb3J9fVwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0IGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1lbmQgY29udHJvbHMge3tjb250cm9sc0NvbG9yfX1cIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWRpc2FibGVQaW5uaW5nXCIgKGNsaWNrKT1cInRvZ2dsZVRoZVBpbigkZXZlbnQpXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBwaW4gZmxleC1lbmRcIj5wdXNoX3BpbjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJibGFkZS1ib3R0b20tY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICA8L3NlY3Rpb24+XHJcbjwvZGl2PlxyXG4iXX0=