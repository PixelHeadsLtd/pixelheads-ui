import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextareaAutoresizeDirective {
    set formControlInstance(control) {
        this.cleanControlSubscription();
        setTimeout(() => this.resize());
        if (control) {
            this.formControlSubscription = control.valueChanges.subscribe(() => {
                this.resize();
            });
        }
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onInput() {
        const isResizedThroughFormControl = !!this.formControlSubscription;
        if (!isResizedThroughFormControl) {
            this.resize();
        }
    }
    ngOnInit() {
        if (this.elementRef.nativeElement.scrollHeight) {
            setTimeout(() => this.resize());
        }
    }
    ngOnDestroy() {
        this.cleanControlSubscription();
    }
    cleanControlSubscription() {
        if (this.formControlSubscription) {
            this.formControlSubscription.unsubscribe();
        }
    }
    resize() {
        this.elementRef.nativeElement.style.height = '0';
        this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
    }
    static { this.ɵfac = function TextareaAutoresizeDirective_Factory(t) { return new (t || TextareaAutoresizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextareaAutoresizeDirective, selectors: [["", "aaTextareaAutoresize", ""]], hostBindings: function TextareaAutoresizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function TextareaAutoresizeDirective_input_HostBindingHandler() { return ctx.onInput(); });
        } }, inputs: { formControlInstance: [i0.ɵɵInputFlags.None, "aaTextareaAutoresize", "formControlInstance"] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextareaAutoresizeDirective, [{
        type: Directive,
        args: [{
                selector: '[aaTextareaAutoresize]'
            }]
    }], () => [{ type: i0.ElementRef }], { formControlInstance: [{
            type: Input,
            args: ['aaTextareaAutoresize']
        }], onInput: [{
            type: HostListener,
            args: [':input']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtYXV0b3Jlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy90ZXh0YXJlYS1hdXRvcmVzaXplL3RleHRhcmVhLWF1dG9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBTzlGLE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsSUFBbUMsbUJBQW1CLENBQUMsT0FBb0M7UUFDekYsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFaEMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUcsT0FBTyxFQUFFO1lBQ1YsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFHOUMsT0FBTztRQUNMLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO1lBQzlDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNqRyxDQUFDOzRGQTNDVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs0R0FBM0IsYUFBUzs7O2lGQUFULDJCQUEyQjtjQUh2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzsyQ0FJb0MsbUJBQW1CO2tCQUFyRCxLQUFLO21CQUFDLHNCQUFzQjtZQWM3QixPQUFPO2tCQUROLFlBQVk7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FhVGV4dGFyZWFBdXRvcmVzaXplXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQXV0b3Jlc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGZvcm1Db250cm9sU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoJ2FhVGV4dGFyZWFBdXRvcmVzaXplJykgc2V0IGZvcm1Db250cm9sSW5zdGFuY2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLmNsZWFuQ29udHJvbFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgICBpZihjb250cm9sKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xTdWJzY3JpcHRpb24gPSBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCc6aW5wdXQnKVxyXG4gIG9uSW5wdXQoKSB7XHJcbiAgICBjb25zdCBpc1Jlc2l6ZWRUaHJvdWdoRm9ybUNvbnRyb2wgPSAhIXRoaXMuZm9ybUNvbnRyb2xTdWJzY3JpcHRpb247XHJcbiAgICBpZiAoIWlzUmVzaXplZFRocm91Z2hGb3JtQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYW5Db250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuQ29udHJvbFN1YnNjcmlwdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzaXplKCkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcbn1cclxuIl19