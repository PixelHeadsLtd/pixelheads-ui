import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CheckboxComponent {
    constructor() {
        this.checkboxId = '';
        this.checkboxName = '';
        this.checkboxValue = '';
        this.checkboxText = '';
        this.checkboxChecked = '';
        this.fieldClass = '';
        this.disabled = '';
    }
    static { this.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["aa-checkbox"]], inputs: { checkboxId: "checkboxId", checkboxName: "checkboxName", checkboxValue: "checkboxValue", checkboxText: "checkboxText", checkboxChecked: "checkboxChecked", fieldClass: "fieldClass", disabled: "disabled" }, decls: 5, vars: 10, consts: [[3, "for"], ["type", "checkbox", 3, "value", "name", "id", "checked", "disabled"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field checkbox ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.checkboxId);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("value", ctx.checkboxValue);
            i0.ɵɵpropertyInterpolate("name", ctx.checkboxName);
            i0.ɵɵpropertyInterpolate("id", ctx.checkboxId);
            i0.ɵɵpropertyInterpolate("checked", ctx.checkboxChecked);
            i0.ɵɵpropertyInterpolate("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.checkboxText);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{ selector: 'aa-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n  <div class=\"field checkbox {{fieldClass}}\">\r\n      <label for=\"{{checkboxId}}\">\r\n          <input \r\n            type=\"checkbox\" \r\n            value={{checkboxValue}} \r\n            name={{checkboxName}} \r\n            id={{checkboxId}} \r\n            checked={{checkboxChecked}}\r\n            disabled=\"{{disabled}}\"\r\n          >\r\n          <span>{{checkboxText}}</span>\r\n      </label>\r\n  </div>" }]
    }], () => [], { checkboxId: [{
            type: Input
        }], checkboxName: [{
            type: Input
        }], checkboxValue: [{
            type: Input
        }], checkboxText: [{
            type: Input
        }], checkboxChecked: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckboxComponent, { className: "CheckboxComponent", filePath: "lib\\elements\\checkbox\\checkbox.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRMUUsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QjtRQVJTLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBRWYsQ0FBQztrRkFUTixpQkFBaUI7b0VBQWpCLGlCQUFpQjtZQ1A1QiwyQkFBMkMsZUFBQTtZQUVuQywyQkFPQztZQUNELDRCQUFNO1lBQUEsWUFBZ0I7WUFBQSxpQkFBTyxFQUFBLEVBQUE7O1lBVmhDLGdFQUFxQztZQUMvQixjQUFvQjtZQUFwQiwrQ0FBb0I7WUFHckIsY0FBdUI7WUFBdkIsb0RBQXVCO1lBQ3ZCLGtEQUFxQjtZQUNyQiw4Q0FBaUI7WUFDakIsd0RBQTJCO1lBQzNCLGtEQUF1QjtZQUVuQixlQUFnQjtZQUFoQixzQ0FBZ0I7OztpRkRIbkIsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNO29CQUd0QyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLOztrRkFQSyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2hlY2tib3hJZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY2hlY2tib3hOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjaGVja2JveFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjaGVja2JveFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNoZWNrYm94Q2hlY2tlZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCJcclxuICA8ZGl2IGNsYXNzPVwiZmllbGQgY2hlY2tib3gge3tmaWVsZENsYXNzfX1cIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInt7Y2hlY2tib3hJZH19XCI+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICB2YWx1ZT17e2NoZWNrYm94VmFsdWV9fSBcclxuICAgICAgICAgICAgbmFtZT17e2NoZWNrYm94TmFtZX19IFxyXG4gICAgICAgICAgICBpZD17e2NoZWNrYm94SWR9fSBcclxuICAgICAgICAgICAgY2hlY2tlZD17e2NoZWNrYm94Q2hlY2tlZH19XHJcbiAgICAgICAgICAgIGRpc2FibGVkPVwie3tkaXNhYmxlZH19XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPnt7Y2hlY2tib3hUZXh0fX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+Il19