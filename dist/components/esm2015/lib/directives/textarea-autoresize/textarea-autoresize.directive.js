import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
export class TextareaAutoresizeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    set formControlInstance(control) {
        this.cleanControlSubscription();
        setTimeout(() => this.resize());
        this.formControlSubscription = control.valueChanges.subscribe(() => {
            this.resize();
        });
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
}
TextareaAutoresizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaTextareaAutoresize]'
            },] }
];
TextareaAutoresizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
TextareaAutoresizeDirective.propDecorators = {
    formControlInstance: [{ type: Input, args: ['aaTextareaAutoresize',] }],
    onInput: [{ type: HostListener, args: [':input',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtYXV0b3Jlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy90ZXh0YXJlYS1hdXRvcmVzaXplL3RleHRhcmVhLWF1dG9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1qRCxNQUFNLE9BQU8sMkJBQTJCO0lBWXRDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBVDlDLElBQW1DLG1CQUFtQixDQUFDLE9BQXdCO1FBQzdFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRWhDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxPQUFPO1FBQ0wsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQ25FLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7WUFDOUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ2pHLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7O1lBTm1CLFVBQVU7OztrQ0FVM0IsS0FBSyxTQUFDLHNCQUFzQjtzQkFXNUIsWUFBWSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYVRleHRhcmVhQXV0b3Jlc2l6ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUF1dG9yZXNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoJ2FhVGV4dGFyZWFBdXRvcmVzaXplJykgc2V0IGZvcm1Db250cm9sSW5zdGFuY2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICB0aGlzLmNsZWFuQ29udHJvbFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sU3Vic2NyaXB0aW9uID0gY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCc6aW5wdXQnKVxyXG4gIG9uSW5wdXQoKSB7XHJcbiAgICBjb25zdCBpc1Jlc2l6ZWRUaHJvdWdoRm9ybUNvbnRyb2wgPSAhIXRoaXMuZm9ybUNvbnRyb2xTdWJzY3JpcHRpb247XHJcbiAgICBpZiAoIWlzUmVzaXplZFRocm91Z2hGb3JtQ29udHJvbCkge1xyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYW5Db250cm9sU3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuQ29udHJvbFN1YnNjcmlwdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzaXplKCkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcbn1cclxuIl19