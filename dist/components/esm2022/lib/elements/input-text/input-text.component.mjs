import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function InputTextComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1, "Optional");
    i0.ɵɵelementEnd();
} }
export class InputTextComponent {
    constructor() {
        this.isOptional = false;
        this.readOnly = false;
        this.inputTextLabel = '';
        this.inputTextId = '';
        this.inputPlaceholder = '';
        this.fieldClass = '';
    }
    static { this.ɵfac = function InputTextComponent_Factory(t) { return new (t || InputTextComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputTextComponent, selectors: [["aa-input-text"]], inputs: { isOptional: "isOptional", readOnly: "readOnly", inputTextLabel: "inputTextLabel", inputTextId: "inputTextId", inputPlaceholder: "inputPlaceholder", fieldClass: "fieldClass", inputValue: "inputValue" }, decls: 5, vars: 11, consts: [[3, "for"], ["class", "optional", 4, "ngIf"], ["type", "text", 3, "name", "id", "placeholder", "readonly", "value"], [1, "optional"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵtemplate(3, InputTextComponent_span_3_Template, 2, 0, "span", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.inputTextId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.inputTextLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isOptional);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("name", ctx.inputTextId);
            i0.ɵɵpropertyInterpolate("id", ctx.inputTextId);
            i0.ɵɵpropertyInterpolate("placeholder", ctx.inputPlaceholder);
            i0.ɵɵpropertyInterpolate("readonly", ctx.readOnly);
            i0.ɵɵpropertyInterpolate("value", ctx.inputValue);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputTextComponent, [{
        type: Component,
        args: [{ selector: 'aa-input-text', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{inputTextId}}\">\r\n    {{inputTextLabel}}\r\n    <span class=\"optional\" *ngIf=\"isOptional\">Optional</span>\r\n  </label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{inputTextId}}\" \r\n    id=\"{{inputTextId}}\" \r\n    placeholder=\"{{inputPlaceholder}}\" \r\n    readonly=\"{{readOnly}}\"\r\n    value=\"{{inputValue}}\"\r\n    >\r\n</div>" }]
    }], () => [], { isOptional: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], inputTextLabel: [{
            type: Input
        }], inputTextId: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], inputValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputTextComponent, { className: "InputTextComponent", filePath: "lib\\elements\\input-text\\input-text.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZWxlbWVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9pbnB1dC10ZXh0L2lucHV0LXRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNHdEUsK0JBQTBDO0lBQUEsd0JBQVE7SUFBQSxpQkFBTzs7QURLN0QsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QjtRQVJTLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQUdqQixDQUFDO21GQVZOLGtCQUFrQjtvRUFBbEIsa0JBQWtCO1lDUi9CLDJCQUFrQyxlQUFBO1lBRTlCLFlBQ0E7WUFBQSxxRUFBeUQ7WUFDM0QsaUJBQVE7WUFDUiwyQkFPRztZQUNMLGlCQUFNOztZQWJELHVEQUE0QjtZQUN4QixjQUFxQjtZQUFyQixnREFBcUI7WUFDMUIsY0FDQTtZQURBLG1EQUNBO1lBQXdCLGNBQWdCO1lBQWhCLHFDQUFnQjtZQUl4QyxjQUFzQjtZQUF0QixpREFBc0I7WUFDdEIsK0NBQW9CO1lBQ3BCLDZEQUFrQztZQUNsQyxrREFBdUI7WUFDdkIsaURBQXNCOzs7aUZESGIsa0JBQWtCO2NBTjlCLFNBQVM7MkJBQ0UsZUFBZSxtQkFHUix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQVJLLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWlucHV0LXRleHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0VGV4dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzT3B0aW9uYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlucHV0VGV4dExhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbnB1dFRleHRJZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW5wdXRWYWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkIHt7ZmllbGRDbGFzc319XCI+XHJcbiAgPGxhYmVsIGZvcj1cInt7aW5wdXRUZXh0SWR9fVwiPlxyXG4gICAge3tpbnB1dFRleHRMYWJlbH19XHJcbiAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCIgKm5nSWY9XCJpc09wdGlvbmFsXCI+T3B0aW9uYWw8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuICA8aW5wdXQgXHJcbiAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgbmFtZT1cInt7aW5wdXRUZXh0SWR9fVwiIFxyXG4gICAgaWQ9XCJ7e2lucHV0VGV4dElkfX1cIiBcclxuICAgIHBsYWNlaG9sZGVyPVwie3tpbnB1dFBsYWNlaG9sZGVyfX1cIiBcclxuICAgIHJlYWRvbmx5PVwie3tyZWFkT25seX19XCJcclxuICAgIHZhbHVlPVwie3tpbnB1dFZhbHVlfX1cIlxyXG4gICAgPlxyXG48L2Rpdj4iXX0=