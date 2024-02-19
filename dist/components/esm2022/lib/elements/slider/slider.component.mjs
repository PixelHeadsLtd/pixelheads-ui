import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "slider-inline flex-group flex-start flex-align-center nowrap": a0, "list-display": a1 });
const _c1 = a0 => ({ "min-width": a0 });
export class SliderComponent {
    set sliderChecked(value) {
        this.sliderCheckedValue = value;
    }
    constructor() {
        this.fieldClass = '';
        this.sliderInline = false;
        this.sliderCheckedChanged = new EventEmitter();
    }
    onChange(event) {
        if (event.target.checked) {
            this.sliderCheckedChanged.emit(true);
            this.sliderCheckedValue = true;
        }
        else {
            this.sliderCheckedChanged.emit(false);
            this.sliderCheckedValue = false;
        }
    }
    static { this.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["aa-slider"]], inputs: { fieldClass: "fieldClass", labelText: "labelText", sliderInline: "sliderInline", sliderId: "sliderId", sliderName: "sliderName", disabled: "disabled", labelMinWidth: "labelMinWidth", sliderChecked: "sliderChecked" }, outputs: { sliderCheckedChanged: "sliderCheckedChanged" }, decls: 6, vars: 15, consts: [[3, "ngClass"], [3, "ngStyle"], ["type", "checkbox", 3, "name", "id", "checked", "disabled", "change"], [1, "slider-btn"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label")(4, "input", 2);
            i0.ɵɵlistener("change", function SliderComponent_Template_input_change_4_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("", ctx.fieldClass, " field slider");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c0, ctx.sliderInline, ctx.labelMinWidth));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1, ctx.labelMinWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.labelText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.sliderName)("id", ctx.sliderId)("checked", ctx.sliderCheckedValue)("disabled", ctx.disabled);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{ selector: 'aa-slider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{\r\n        'slider-inline flex-group flex-start flex-align-center nowrap' : sliderInline,\r\n        'list-display' : labelMinWidth\r\n    }\"\r\n>\r\n    <label [ngStyle]=\"{ 'min-width': labelMinWidth }\">{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            [name]=\"sliderName\"\r\n            [id]=\"sliderId\"\r\n            [checked]=\"sliderCheckedValue\"\r\n            [disabled]=\"disabled\"\r\n            (change)=\"onChange($event)\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>" }]
    }], () => [], { fieldClass: [{
            type: Input
        }], labelText: [{
            type: Input
        }], sliderInline: [{
            type: Input
        }], sliderId: [{
            type: Input
        }], sliderName: [{
            type: Input
        }], disabled: [{
            type: Input
        }], labelMinWidth: [{
            type: Input
        }], sliderChecked: [{
            type: Input
        }], sliderCheckedChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "lib\\elements\\slider\\slider.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUXhHLE1BQU0sT0FBTyxlQUFlO0lBVTFCLElBQWEsYUFBYSxDQUFDLEtBQVU7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBR0Q7UUFiUyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBUzdCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFN0MsQ0FBQztJQUVqQixRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztnRkF6QlUsZUFBZTtvRUFBZixlQUFlO1lDUjVCLDhCQU1DLGVBQUE7WUFDcUQsWUFBYTtZQUFBLGlCQUFRO1lBQ3ZFLDZCQUFPLGVBQUE7WUFPQyxtR0FBVSxvQkFBZ0IsSUFBQztZQU4vQixpQkFPRztZQUNILDBCQUFnQztZQUNwQyxpQkFBUSxFQUFBOztZQWpCUiw4REFBbUM7WUFDbkMsMEZBR0U7WUFFSyxjQUEwQztZQUExQyx3RUFBMEM7WUFBQyxjQUFhO1lBQWIsbUNBQWE7WUFJdkQsZUFBbUI7WUFBbkIscUNBQW1CLG9CQUFBLG1DQUFBLDBCQUFBOzs7aUZESGxCLGVBQWU7Y0FOM0IsU0FBUzsyQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFTyxhQUFhO2tCQUF6QixLQUFLO1lBR0ksb0JBQW9CO2tCQUE3QixNQUFNOztrRkFiSSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtc2xpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbGFiZWxUZXh0OiBhbnk7XHJcbiAgQElucHV0KCkgc2xpZGVySW5saW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2xpZGVySWQ6IGFueTtcclxuICBASW5wdXQoKSBzbGlkZXJOYW1lOiBhbnk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGFueTtcclxuICBASW5wdXQoKSBsYWJlbE1pbldpZHRoOiBhbnk7XHJcbiAgc2xpZGVyQ2hlY2tlZFZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0IHNsaWRlckNoZWNrZWQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgQE91dHB1dCgpIHNsaWRlckNoZWNrZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvbkNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkQ2hhbmdlZC5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLnNsaWRlckNoZWNrZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlckNoZWNrZWRDaGFuZ2VkLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLnNsaWRlckNoZWNrZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFxyXG4gICAgY2xhc3M9XCJ7e2ZpZWxkQ2xhc3N9fSBmaWVsZCBzbGlkZXJcIlxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICdzbGlkZXItaW5saW5lIGZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlciBub3dyYXAnIDogc2xpZGVySW5saW5lLFxyXG4gICAgICAgICdsaXN0LWRpc3BsYXknIDogbGFiZWxNaW5XaWR0aFxyXG4gICAgfVwiXHJcbj5cclxuICAgIDxsYWJlbCBbbmdTdHlsZV09XCJ7ICdtaW4td2lkdGgnOiBsYWJlbE1pbldpZHRoIH1cIj57e2xhYmVsVGV4dH19PC9sYWJlbD5cclxuICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIFtuYW1lXT1cInNsaWRlck5hbWVcIlxyXG4gICAgICAgICAgICBbaWRdPVwic2xpZGVySWRcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzbGlkZXJDaGVja2VkVmFsdWVcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyLWJ0blwiPjwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbjwvZGl2PiJdfQ==