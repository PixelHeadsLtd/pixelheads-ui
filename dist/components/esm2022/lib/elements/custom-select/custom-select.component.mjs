import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CustomSelectComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("\n          material-icons\n          padding-right-0-5\n          ", option_r1.iconColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r1.icon);
} }
function CustomSelectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 4);
    i0.ɵɵlistener("click", function CustomSelectComponent_div_7_Template_button_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r5 = i0.ɵɵnextContext(); ctx_r5.optionIsSelected($event, option_r1); return i0.ɵɵresetView(ctx_r5.setIndex(i_r2)); });
    i0.ɵɵtemplate(2, CustomSelectComponent_div_7_span_2_Template, 2, 4, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("selected", ctx_r0.sIndex === i_r2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r1.showIcon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r1.display, " ");
} }
const _c0 = a0 => ({ "width": a0 });
const _c1 = a0 => ({ "max-height": a0 });
export class CustomSelectComponent {
    set selectedIndex(value) {
        if (value) {
            this.selectedOption = this.options[value];
            this.sIndex = value;
        }
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.options = [];
        this.showDropdown = false;
        this.showIcon = false;
        this.closeDropdown = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.highlightSection = new EventEmitter();
        this.sIndex = 0;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.closeDropdown.emit(this.showDropdown = false);
        }
    }
    optionIsSelected(event, selectOption) {
        this.showDropdown = false;
        this.optionSelected.emit(selectOption);
        this.selectedOption = selectOption;
    }
    setIndex(index) {
        if (index !== this.sIndex) {
            this.sIndex = index;
            this.highlightSection.emit(this.options[this.sIndex]);
        }
        else {
            this.sIndex = index;
            this.highlightSection.emit(undefined);
        }
    }
    ngOnInit() {
        this.closeDropdown.emit(this.showDropdown);
        this.highlightSection.emit(this.selectedOption);
        if (this.sIndex > -1) {
            this.optionIsSelected(null, this.options[this.sIndex]);
        }
        //console.log(this.selectedOption);
    }
    static { this.ɵfac = function CustomSelectComponent_Factory(t) { return new (t || CustomSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomSelectComponent, selectors: [["aa-custom-select"]], hostBindings: function CustomSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CustomSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { options: "options", setWidth: "setWidth", maxHeight: "maxHeight", selectedIndex: "selectedIndex" }, outputs: { closeDropdown: "closeDropdown", optionSelected: "optionSelected", highlightSection: "highlightSection" }, decls: 8, vars: 14, consts: [[1, "aa-custom-select", 3, "ngStyle"], [1, "border-radius-0-25", "flex-align-center", 3, "click"], [1, "aa-custom-select-dropdown", "box-shadow", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "flex-align-center", 3, "click"], [3, "class", 4, "ngIf"]], template: function CustomSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function CustomSelectComponent_Template_button_click_1_listener() { return ctx.showDropdown = !ctx.showDropdown; });
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 2);
            i0.ɵɵtemplate(7, CustomSelectComponent_div_7_Template, 4, 4, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c0, ctx.setWidth));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("\n      material-icons\n      padding-right-0-5\n      ", ctx.selectedOption == null ? null : ctx.selectedOption.iconColor, "");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.selectedOption == null ? null : ctx.selectedOption.icon, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.selectedOption == null ? null : ctx.selectedOption.display);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("show-dropdown", ctx.showDropdown);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c1, ctx.maxHeight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomSelectComponent, [{
        type: Component,
        args: [{ selector: 'aa-custom-select', template: "<div\r\n  class=\"aa-custom-select\"\r\n  [ngStyle]=\"{'width' : setWidth}\"\r\n>\r\n  <button\r\n    class=\"\r\n    border-radius-0-25\r\n    flex-align-center\"\r\n    (click)=\"showDropdown=!showDropdown\"\r\n  >\r\n    <span\r\n      class=\"\r\n      material-icons\r\n      padding-right-0-5\r\n      {{ selectedOption?.iconColor }}\"\r\n    >{{ selectedOption?.icon }}\r\n    </span>\r\n\r\n    <span>{{ selectedOption?.display }}</span>\r\n\r\n  </button>\r\n\r\n  <!-- dropdown -->\r\n  <div\r\n    [class.show-dropdown]=\"showDropdown\"\r\n    class=\"aa-custom-select-dropdown box-shadow\"\r\n    [ngStyle]=\"{'max-height' : maxHeight}\"\r\n  >\r\n    <div *ngFor=\" let option of options; let i = index\">\r\n      <button\r\n        (click)=\"optionIsSelected($event, option); setIndex(i)\"\r\n        class=\"flex-align-center\"\r\n        [class.selected]=\"sIndex === i\"\r\n      >\r\n        <span\r\n          *ngIf=\"option.showIcon\"\r\n          class=\"\r\n          material-icons\r\n          padding-right-0-5\r\n          {{option.iconColor}}\"\r\n        >{{ option.icon }}</span>\r\n          {{ option.display }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i0.ElementRef }], { options: [{
            type: Input
        }], setWidth: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], closeDropdown: [{
            type: Output
        }], optionSelected: [{
            type: Output
        }], highlightSection: [{
            type: Output
        }], selectedIndex: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomSelectComponent, { className: "CustomSelectComponent", filePath: "lib\\elements\\custom-select\\custom-select.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZWxlbWVudHMvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9jdXN0b20tc2VsZWN0L2N1c3RvbS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsWUFBWSxFQUFjLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNrQ2pHLDRCQU1DO0lBQUEsWUFBaUI7SUFBQSxpQkFBTzs7O0lBSnZCLHlIQUdxQjtJQUN0QixjQUFpQjtJQUFqQixvQ0FBaUI7Ozs7SUFadEIsMkJBQW9ELGdCQUFBO0lBRWhELDhQQUFTLDBDQUFnQyxTQUFFLGVBQUEscUJBQVcsQ0FBQSxJQUFDO0lBSXZELDhFQU15QjtJQUN2QixZQUNKO0lBQUEsaUJBQVMsRUFBQTs7Ozs7SUFWUCxjQUErQjtJQUEvQixrREFBK0I7SUFHNUIsY0FBcUI7SUFBckIseUNBQXFCO0lBTXRCLGNBQ0o7SUFESSxrREFDSjs7OztBRDFCTixNQUFNLE9BQU8scUJBQXFCO0lBYWhDLElBQWEsYUFBYSxDQUFDLEtBQXlCO1FBQ2xELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUlELFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFwQmpDLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBRXRD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cG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbiB7XHJcbiAgaWQ6IGFueTtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaWNvbkNvbG9yPzogc3RyaW5nO1xyXG4gIHNob3dJY29uPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jdXN0b20tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21TZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSA9IFtdO1xyXG5cclxuICBzaG93RHJvcGRvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93SWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNldFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4SGVpZ2h0OiBhbnk7XHJcbiAgQE91dHB1dCgpIGNsb3NlRHJvcGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIG9wdGlvblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RPcHRpb24+KCk7XHJcbiAgQE91dHB1dCgpIGhpZ2hsaWdodFNlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9wdGlvbj4oKTtcclxuICBzZWxlY3RlZE9wdGlvbj86IFNlbGVjdE9wdGlvbjtcclxuXHJcbiAgQElucHV0KCkgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbnNbdmFsdWVdO1xyXG4gICAgICB0aGlzLnNJbmRleCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcclxuICBwdWJsaWMgb25DbGljayh0YXJnZXRFbGVtZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24uZW1pdCh0aGlzLnNob3dEcm9wZG93biA9IGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wdGlvbklzU2VsZWN0ZWQoZXZlbnQ6IGFueSwgc2VsZWN0T3B0aW9uOiBTZWxlY3RPcHRpb24pIHtcclxuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wdGlvblNlbGVjdGVkLmVtaXQoc2VsZWN0T3B0aW9uKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RPcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXRJbmRleChpbmRleDogYW55KSB7XHJcbiAgICBpZiAoaW5kZXggIT09IHRoaXMuc0luZGV4KSB7XHJcbiAgICAgIHRoaXMuc0luZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2VjdGlvbi5lbWl0KHRoaXMub3B0aW9uc1t0aGlzLnNJbmRleF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTZWN0aW9uLmVtaXQodW5kZWZpbmVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duLmVtaXQodGhpcy5zaG93RHJvcGRvd24pO1xyXG4gICAgdGhpcy5oaWdobGlnaHRTZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbik7XHJcbiAgICBpZih0aGlzLnNJbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uSXNTZWxlY3RlZChudWxsLCB0aGlzLm9wdGlvbnNbdGhpcy5zSW5kZXhdKTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2codGhpcy5zZWxlY3RlZE9wdGlvbik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBjbGFzcz1cImFhLWN1c3RvbS1zZWxlY3RcIlxyXG4gIFtuZ1N0eWxlXT1cInsnd2lkdGgnIDogc2V0V2lkdGh9XCJcclxuPlxyXG4gIDxidXR0b25cclxuICAgIGNsYXNzPVwiXHJcbiAgICBib3JkZXItcmFkaXVzLTAtMjVcclxuICAgIGZsZXgtYWxpZ24tY2VudGVyXCJcclxuICAgIChjbGljayk9XCJzaG93RHJvcGRvd249IXNob3dEcm9wZG93blwiXHJcbiAgPlxyXG4gICAgPHNwYW5cclxuICAgICAgY2xhc3M9XCJcclxuICAgICAgbWF0ZXJpYWwtaWNvbnNcclxuICAgICAgcGFkZGluZy1yaWdodC0wLTVcclxuICAgICAge3sgc2VsZWN0ZWRPcHRpb24/Lmljb25Db2xvciB9fVwiXHJcbiAgICA+e3sgc2VsZWN0ZWRPcHRpb24/Lmljb24gfX1cclxuICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8c3Bhbj57eyBzZWxlY3RlZE9wdGlvbj8uZGlzcGxheSB9fTwvc3Bhbj5cclxuXHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDwhLS0gZHJvcGRvd24gLS0+XHJcbiAgPGRpdlxyXG4gICAgW2NsYXNzLnNob3ctZHJvcGRvd25dPVwic2hvd0Ryb3Bkb3duXCJcclxuICAgIGNsYXNzPVwiYWEtY3VzdG9tLXNlbGVjdC1kcm9wZG93biBib3gtc2hhZG93XCJcclxuICAgIFtuZ1N0eWxlXT1cInsnbWF4LWhlaWdodCcgOiBtYXhIZWlnaHR9XCJcclxuICA+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cIiBsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJvcHRpb25Jc1NlbGVjdGVkKCRldmVudCwgb3B0aW9uKTsgc2V0SW5kZXgoaSlcIlxyXG4gICAgICAgIGNsYXNzPVwiZmxleC1hbGlnbi1jZW50ZXJcIlxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzSW5kZXggPT09IGlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgICpuZ0lmPVwib3B0aW9uLnNob3dJY29uXCJcclxuICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICBtYXRlcmlhbC1pY29uc1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodC0wLTVcclxuICAgICAgICAgIHt7b3B0aW9uLmljb25Db2xvcn19XCJcclxuICAgICAgICA+e3sgb3B0aW9uLmljb24gfX08L3NwYW4+XHJcbiAgICAgICAgICB7eyBvcHRpb24uZGlzcGxheSB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19