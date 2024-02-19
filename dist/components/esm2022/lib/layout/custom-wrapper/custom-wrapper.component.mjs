import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "box-shadow": a0 });
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({ "border-radius": a0, "padding": a1, "min-width": a2, "max-width": a3, "min-height": a4, "max-height": a5, "z-index": a6, "border-width": a7, "border-style": a8, "margin-bottom": a9, "overflow": a10 });
const _c2 = ["*"];
export class CustomWrapperComponent {
    constructor() {
        this.boxShadow = false;
        this.zIndex = 0;
        this.borderStyle = '';
        this.enableScrolling = false;
    }
    static { this.ɵfac = function CustomWrapperComponent_Factory(t) { return new (t || CustomWrapperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomWrapperComponent, selectors: [["aa-custom-wrapper"]], inputs: { boxShadow: "boxShadow", paddingSize: "paddingSize", borderRadius: "borderRadius", minWidth: "minWidth", maxWidth: "maxWidth", minHeight: "minHeight", maxHeight: "maxHeight", zIndex: "zIndex", borderWidth: "borderWidth", borderStyle: "borderStyle", borderColour: "borderColour", backgroundColour: "backgroundColour", marginBottom: "marginBottom", enableScrolling: "enableScrolling" }, ngContentSelectors: _c2, decls: 2, vars: 20, consts: [[3, "ngClass", "ngStyle"]], template: function CustomWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate2("", ctx.borderColour, " ", ctx.backgroundColour, " position-relative");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx.boxShadow))("ngStyle", i0.ɵɵpureFunctionV(8, _c1, [ctx.borderRadius, ctx.paddingSize, ctx.minWidth, ctx.maxWidth, ctx.minHeight, ctx.maxHeight, ctx.zIndex, ctx.borderWidth, ctx.borderStyle, ctx.marginBottom, ctx.enableScrolling ? "auto" : "initial"]));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomWrapperComponent, [{
        type: Component,
        args: [{ selector: 'aa-custom-wrapper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n    class=\"{{borderColour}} {{backgroundColour}} position-relative\"\r\n    [ngClass]=\"{\r\n        'box-shadow' : boxShadow\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'border-radius' : borderRadius,\r\n        'padding' : paddingSize,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'min-height' : minHeight,\r\n        'max-height' : maxHeight,\r\n        'z-index' : zIndex,\r\n        'border-width' : borderWidth,\r\n        'border-style' : borderStyle,\r\n        'margin-bottom' : marginBottom,\r\n        'overflow': enableScrolling ? 'auto' : 'initial'\r\n    }\"\r\n>\r\n    <ng-content></ng-content>\r\n</section>" }]
    }], null, { boxShadow: [{
            type: Input
        }], paddingSize: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], borderWidth: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], borderColour: [{
            type: Input
        }], backgroundColour: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], enableScrolling: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomWrapperComponent, { className: "CustomWrapperComponent", filePath: "lib\\layout\\custom-wrapper\\custom-wrapper.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9jdXN0b20td3JhcHBlci9jdXN0b20td3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2N1c3RvbS13cmFwcGVyL2N1c3RvbS13cmFwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRMUUsTUFBTSxPQUFPLHNCQUFzQjtJQU5uQztRQVFXLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFPM0IsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUl6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztLQUMzQzt1RkFoQlksc0JBQXNCO29FQUF0QixzQkFBc0I7O1lDUm5DLGtDQWtCQztZQUNHLGtCQUF5QjtZQUM3QixpQkFBVTs7WUFuQk4sZ0dBQStEO1lBQy9ELG1FQUVFLGdQQUFBOzs7aUZESU8sc0JBQXNCO2NBTmxDLFNBQVM7MkJBQ0UsbUJBQW1CLG1CQUdaLHVCQUF1QixDQUFDLE1BQU07Z0JBSXRDLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSzs7a0ZBZkssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtY3VzdG9tLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20td3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tV3JhcHBlckNvbXBvbmVudCAge1xyXG5cclxuICBASW5wdXQoKSBib3hTaGFkb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYWRkaW5nU2l6ZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1czogYW55O1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBtaW5IZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgYm9yZGVyV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJTdHlsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYm9yZGVyQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIG1hcmdpbkJvdHRvbTogYW55O1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNjcm9sbGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiIsIjxzZWN0aW9uXHJcbiAgICBjbGFzcz1cInt7Ym9yZGVyQ29sb3VyfX0ge3tiYWNrZ3JvdW5kQ29sb3VyfX0gcG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICdib3gtc2hhZG93JyA6IGJveFNoYWRvd1xyXG4gICAgfVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnIDogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICdwYWRkaW5nJyA6IHBhZGRpbmdTaXplLFxyXG4gICAgICAgICdtaW4td2lkdGgnIDogbWluV2lkdGgsXHJcbiAgICAgICAgJ21heC13aWR0aCcgOiBtYXhXaWR0aCxcclxuICAgICAgICAnbWluLWhlaWdodCcgOiBtaW5IZWlnaHQsXHJcbiAgICAgICAgJ21heC1oZWlnaHQnIDogbWF4SGVpZ2h0LFxyXG4gICAgICAgICd6LWluZGV4JyA6IHpJbmRleCxcclxuICAgICAgICAnYm9yZGVyLXdpZHRoJyA6IGJvcmRlcldpZHRoLFxyXG4gICAgICAgICdib3JkZXItc3R5bGUnIDogYm9yZGVyU3R5bGUsXHJcbiAgICAgICAgJ21hcmdpbi1ib3R0b20nIDogbWFyZ2luQm90dG9tLFxyXG4gICAgICAgICdvdmVyZmxvdyc6IGVuYWJsZVNjcm9sbGluZyA/ICdhdXRvJyA6ICdpbml0aWFsJ1xyXG4gICAgfVwiXHJcbj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9zZWN0aW9uPiJdfQ==