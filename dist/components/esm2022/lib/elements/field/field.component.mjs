import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FieldComponent {
    constructor() {
        this.fieldId = '';
        this.fieldLabel = '';
        this.fieldClass = '';
        this.buttonClass = '';
        this.readOnly = false;
    }
    static { this.ɵfac = function FieldComponent_Factory(t) { return new (t || FieldComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldComponent, selectors: [["aa-field"]], inputs: { fieldId: "fieldId", fieldLabel: "fieldLabel", fieldClass: "fieldClass", inputValue: "inputValue", buttonClass: "buttonClass", readOnly: "readOnly" }, decls: 4, vars: 9, consts: [[3, "for"], ["type", "text", 3, "name", "id", "readonly", "value"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.fieldId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.fieldLabel);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("name", ctx.fieldId);
            i0.ɵɵpropertyInterpolate("id", ctx.fieldId);
            i0.ɵɵpropertyInterpolate("readonly", ctx.readOnly);
            i0.ɵɵpropertyInterpolate("value", ctx.inputValue);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldComponent, [{
        type: Component,
        args: [{ selector: 'aa-field', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fieldId}}\">{{fieldLabel}}</label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{fieldId}}\" \r\n    id=\"{{fieldId}}\" \r\n    readonly=\"{{readOnly}}\" \r\n    value=\"{{inputValue}}\" \r\n  >\r\n</div>" }]
    }], () => [], { fieldId: [{
            type: Input
        }], fieldLabel: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], inputValue: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], readOnly: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldComponent, { className: "FieldComponent", filePath: "lib\\elements\\field\\field.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9maWVsZC9maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFRbEYsTUFBTSxPQUFPLGNBQWM7SUFTekI7UUFQUyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW5CLENBQUM7K0VBVE4sY0FBYztvRUFBZCxjQUFjO1lDUjNCLDJCQUFrQyxlQUFBO1lBQ1AsWUFBYztZQUFBLGlCQUFRO1lBQy9DLDJCQU1DO1lBQ0gsaUJBQU07O1lBVEQsdURBQTRCO1lBQ3hCLGNBQWlCO1lBQWpCLDRDQUFpQjtZQUFDLGNBQWM7WUFBZCxvQ0FBYztZQUdyQyxjQUFrQjtZQUFsQiw2Q0FBa0I7WUFDbEIsMkNBQWdCO1lBQ2hCLGtEQUF1QjtZQUN2QixpREFBc0I7OztpRkRDYixjQUFjO2NBTjFCLFNBQVM7MkJBQ0UsVUFBVSxtQkFHSCx1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSzs7a0ZBUEssY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBmaWVsZElkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmaWVsZExhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmaWVsZENsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbnB1dFZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQge3tmaWVsZENsYXNzfX1cIj5cclxuICA8bGFiZWwgZm9yPVwie3tmaWVsZElkfX1cIj57e2ZpZWxkTGFiZWx9fTwvbGFiZWw+XHJcbiAgPGlucHV0IFxyXG4gICAgdHlwZT1cInRleHRcIiBcclxuICAgIG5hbWU9XCJ7e2ZpZWxkSWR9fVwiIFxyXG4gICAgaWQ9XCJ7e2ZpZWxkSWR9fVwiIFxyXG4gICAgcmVhZG9ubHk9XCJ7e3JlYWRPbmx5fX1cIiBcclxuICAgIHZhbHVlPVwie3tpbnB1dFZhbHVlfX1cIiBcclxuICA+XHJcbjwvZGl2PiJdfQ==