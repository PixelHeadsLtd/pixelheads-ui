import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.aaClickOutside = new EventEmitter();
    }
    onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.aaClickOutside.emit();
        }
    }
    static { this.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "aaClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { aaClickOutside: "aaClickOutside" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[aaClickOutside]',
            }]
    }], () => [{ type: i0.ElementRef }], { aaClickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsTUFBTSxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2pHLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFTixDQUFDO0lBR3hDLE9BQU8sQ0FBQyxNQUFXO1FBQ3hCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO3NGQVpVLHFCQUFxQjtvRUFBckIscUJBQXFCOzRHQUFyQiwwQkFBc0I7OztpRkFBdEIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzJDQUdXLGNBQWM7a0JBQXZCLE1BQU07WUFLQSxPQUFPO2tCQURiLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYUNsaWNrT3V0c2lkZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuXHJcbiAgQE91dHB1dCgpIGFhQ2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKHRhcmdldDogYW55KSB7XHJcbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICB0aGlzLmFhQ2xpY2tPdXRzaWRlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19