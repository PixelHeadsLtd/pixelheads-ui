import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
export class TextareaAutoresizeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    set formControlInstance(control) {
        this.cleanControlSubscription();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtYXV0b3Jlc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy90ZXh0YXJlYS1hdXRvcmVzaXplL3RleHRhcmVhLWF1dG9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1qRCxNQUFNLE9BQU8sMkJBQTJCO0lBV3RDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBUjlDLElBQW1DLG1CQUFtQixDQUFDLE9BQXdCO1FBQzdFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU87UUFDTCxNQUFNLDJCQUEyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDbkUsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtZQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyx3QkFBd0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDakcsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7WUFObUIsVUFBVTs7O2tDQVUzQixLQUFLLFNBQUMsc0JBQXNCO3NCQVU1QixZQUFZLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FhVGV4dGFyZWFBdXRvcmVzaXplXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQXV0b3Jlc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGZvcm1Db250cm9sU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgnYWFUZXh0YXJlYUF1dG9yZXNpemUnKSBzZXQgZm9ybUNvbnRyb2xJbnN0YW5jZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgIHRoaXMuY2xlYW5Db250cm9sU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5mb3JtQ29udHJvbFN1YnNjcmlwdGlvbiA9IGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignOmlucHV0JylcclxuICBvbklucHV0KCkge1xyXG4gICAgY29uc3QgaXNSZXNpemVkVGhyb3VnaEZvcm1Db250cm9sID0gISF0aGlzLmZvcm1Db250cm9sU3Vic2NyaXB0aW9uO1xyXG4gICAgaWYgKCFpc1Jlc2l6ZWRUaHJvdWdoRm9ybUNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFuQ29udHJvbFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkNvbnRyb2xTdWJzY3JpcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2l6ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==