import { Component, Input, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
export class PopoverComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.popoverVisibilityChanged = new EventEmitter();
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showPopover = false;
            this.popoverVisibilityChanged.emit(this.showPopover);
        }
    }
    open() {
        this.showPopover = true;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    close() {
        this.showPopover = false;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    changeVisibility() {
        this.showPopover = !this.showPopover;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    ngOnInit() {
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-popover',
                template: "<div \r\n  class=\"aa-popover\" \r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover, \r\n  'btn-small' : btnSmall\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'z-index' : showPopover ? zIndex : ''\r\n  }\"\r\n  >\r\n  <div class=\"aa-popover-header\" (click)=\"changeVisibility()\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop && {\r\n        'top' : arrowPos+'rem',\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)' \r\n      }\"\r\n    ></div>\r\n  </div>\r\n  <div \r\n    class=\"aa-popover-content feature-box\" \r\n    [ngStyle]=\"{\r\n    'top': topPos+'rem', \r\n    'right': rightPos+'rem', \r\n    'bottom': bottomPos+'rem', \r\n    'left': leftPos+'rem', \r\n    'width': width+'rem' \r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>",
                styles: [""]
            },] }
];
PopoverComponent.ctorParameters = () => [
    { type: ElementRef }
];
PopoverComponent.propDecorators = {
    buttonClass: [{ type: Input }],
    leftPos: [{ type: Input }],
    topPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    width: [{ type: Input }],
    hideLabel: [{ type: Input }],
    btnSmall: [{ type: Input }],
    popoverTop: [{ type: Input }],
    arrowPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    popoverVisibilityChanged: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMkIsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTbEksTUFBTSxPQUFPLGdCQUFnQjtJQWlCM0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQyw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRW5CLENBQUM7SUFHeEMsT0FBTyxDQUFDLGFBQWE7UUFDMUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGc3QkFBdUM7O2FBSXhDOzs7WUFSeUUsVUFBVTs7OzBCQVlqRixLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUNBRUwsTUFBTTtzQkFJTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXBvcG92ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2ggLSBub3QgbmVlZGVkLCBzaG93cG92ZXIgaXMgbm90IGlucHV0IGFueW1vcmVcclxuICAvLyBzbyBzaG91bGQgbm90IGJlIHVzZWRcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzaG93UG9wb3ZlcjogYm9vbGVhbjsgLy8gbm93IGV4cG9zZWQgYXMgYXBpIGFuZCBub3QgcHJvcGVydHkgLSBtb3JlIGZsZXhpYmxlXHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhpZGVMYWJlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidG5TbWFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwb3BvdmVyVG9wOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93UG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBwb3BvdmVyVmlzaWJpbGl0eUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgcHVibGljIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wb3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbigpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5wb3BvdmVyVmlzaWJpbGl0eUNoYW5nZWQuZW1pdCh0aGlzLnNob3dQb3BvdmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVmlzaWJpbGl0eSgpIHtcclxuICAgIHRoaXMuc2hvd1BvcG92ZXIgPSAhdGhpcy5zaG93UG9wb3ZlcjtcclxuICAgIHRoaXMucG9wb3ZlclZpc2liaWxpdHlDaGFuZ2VkLmVtaXQodGhpcy5zaG93UG9wb3Zlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBvcG92ZXJWaXNpYmlsaXR5Q2hhbmdlZC5lbWl0KHRoaXMuc2hvd1BvcG92ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuIl19