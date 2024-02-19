import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./graphic.component";
const _c0 = a0 => ({ "max-width": a0 });
export class UnauthorisedComponent {
    constructor() {
        this.title = '';
        this.strapline = '';
        this.straplineWidth = '';
    }
    static { this.ɵfac = function UnauthorisedComponent_Factory(t) { return new (t || UnauthorisedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UnauthorisedComponent, selectors: [["aa-unauthorised"]], inputs: { title: "title", strapline: "strapline", straplineWidth: "straplineWidth" }, decls: 12, vars: 5, consts: [[1, "unauthorised", "flex-group", "flex-column", "space-between", "flex-nowrap"], [1, "unauthorised-content", "flex-group", "flex-center", "flex-column"], [1, "align-center", "margin-bottom-0-25", 3, "ngStyle"], ["href", "https://core.angloamerican.com/security-amp/amp", 1, "flex-center"], [1, "material-icons", "padding-right-0-25", "aa-blue-100"], [1, "unauthorised-image"], [1, "app-graphic"]], template: function UnauthorisedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 3)(7, "span", 4);
            i0.ɵɵtext(8, "rocket_launch");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " Discover other applications ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelement(11, "aa-graphic", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.straplineWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.strapline, " ");
        } }, dependencies: [i1.NgStyle, i2.GraphicComponent], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnauthorisedComponent, [{
        type: Component,
        args: [{ selector: 'aa-unauthorised', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"unauthorised flex-group flex-column space-between flex-nowrap\">\r\n    <div class=\"unauthorised-content flex-group flex-center flex-column\">\r\n        <h1>{{title}}</h1>\r\n        <p \r\n            class=\"align-center margin-bottom-0-25\"\r\n            [ngStyle]=\"{'max-width' : straplineWidth}\"\r\n        >\r\n            {{strapline}}\r\n        </p>      \r\n        <a class=\"flex-center\" href=\"https://core.angloamerican.com/security-amp/amp\">\r\n            <span class=\"material-icons padding-right-0-25 aa-blue-100\">rocket_launch</span>\r\n            Discover other applications\r\n        </a>\r\n    </div>\r\n    <div class=\"unauthorised-image\">\r\n        <aa-graphic class=\"app-graphic\"></aa-graphic>\r\n    </div>\r\n</section>" }]
    }], () => [], { title: [{
            type: Input
        }], strapline: [{
            type: Input
        }], straplineWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UnauthorisedComponent, { className: "UnauthorisedComponent", filePath: "lib\\layout\\unauthorised\\unauthorised.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3Jpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvdW5hdXRob3Jpc2VkL3VuYXV0aG9yaXNlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3VuYXV0aG9yaXNlZC91bmF1dGhvcmlzZWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFFLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEM7UUFFUyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFKckIsQ0FBQztzRkFGTixxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQ1JsQyxrQ0FBK0UsYUFBQSxTQUFBO1lBRW5FLFlBQVM7WUFBQSxpQkFBSztZQUNsQiw0QkFHQztZQUNHLFlBQ0o7WUFBQSxpQkFBSTtZQUNKLDRCQUE4RSxjQUFBO1lBQ2QsNkJBQWE7WUFBQSxpQkFBTztZQUNoRiw2Q0FDSjtZQUFBLGlCQUFJLEVBQUE7WUFFUiwrQkFBZ0M7WUFDNUIsaUNBQTZDO1lBQ2pELGlCQUFNLEVBQUE7O1lBZEUsZUFBUztZQUFULCtCQUFTO1lBR1QsY0FBMEM7WUFBMUMsd0VBQTBDO1lBRTFDLGNBQ0o7WUFESSw4Q0FDSjs7O2lGREFLLHFCQUFxQjtjQU5qQyxTQUFTOzJCQUNFLGlCQUFpQixtQkFHVix1QkFBdUIsQ0FBQyxNQUFNO29CQU10QyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSzs7a0ZBTksscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdW5hdXRob3Jpc2VkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdW5hdXRob3Jpc2VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91bmF1dGhvcmlzZWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5hdXRob3Jpc2VkQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHN0cmFwbGluZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3RyYXBsaW5lV2lkdGg6IHN0cmluZyA9ICcnO1xyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwidW5hdXRob3Jpc2VkIGZsZXgtZ3JvdXAgZmxleC1jb2x1bW4gc3BhY2UtYmV0d2VlbiBmbGV4LW5vd3JhcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVuYXV0aG9yaXNlZC1jb250ZW50IGZsZXgtZ3JvdXAgZmxleC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8aDE+e3t0aXRsZX19PC9oMT5cclxuICAgICAgICA8cCBcclxuICAgICAgICAgICAgY2xhc3M9XCJhbGlnbi1jZW50ZXIgbWFyZ2luLWJvdHRvbS0wLTI1XCJcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwieydtYXgtd2lkdGgnIDogc3RyYXBsaW5lV2lkdGh9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt7c3RyYXBsaW5lfX1cclxuICAgICAgICA8L3A+ICAgICAgXHJcbiAgICAgICAgPGEgY2xhc3M9XCJmbGV4LWNlbnRlclwiIGhyZWY9XCJodHRwczovL2NvcmUuYW5nbG9hbWVyaWNhbi5jb20vc2VjdXJpdHktYW1wL2FtcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHBhZGRpbmctcmlnaHQtMC0yNSBhYS1ibHVlLTEwMFwiPnJvY2tldF9sYXVuY2g8L3NwYW4+XHJcbiAgICAgICAgICAgIERpc2NvdmVyIG90aGVyIGFwcGxpY2F0aW9uc1xyXG4gICAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInVuYXV0aG9yaXNlZC1pbWFnZVwiPlxyXG4gICAgICAgIDxhYS1ncmFwaGljIGNsYXNzPVwiYXBwLWdyYXBoaWNcIj48L2FhLWdyYXBoaWM+XHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPiJdfQ==