import { Component, Input, HostListener, ElementRef } from '@angular/core';
export class PopoverComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showPopover = false;
        }
    }
    open() {
        this.showPopover = true;
        this.setIndex = 200;
    }
    close() {
        this.showPopover = false;
    }
    ngOnInit() { }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-popover',
                template: "<div \r\n  class=\"aa-popover\" \r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover, \r\n  'btn-small' : btnSmall\r\n  }\">\r\n  <div class=\"aa-popover-header\" (click)=\"showPopover=!showPopover\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop && {\r\n        'top' : arrowPos+'rem',\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)' \r\n      }\"\r\n    ></div>\r\n  </div>\r\n  <div \r\n    class=\"aa-popover-content feature-box\" \r\n    [ngStyle]=\"{\r\n    'left': leftPos+'rem', \r\n    'top': topPos+'rem', \r\n    'bottom': bottomPos+'rem', \r\n    'width': width+'rem' \r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>",
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
    width: [{ type: Input }],
    hideLabel: [{ type: Input }],
    btnSmall: [{ type: Input }],
    popoverTop: [{ type: Input }],
    arrowPos: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMkIsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzVHLE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFHeEMsT0FBTyxDQUFDLGFBQWE7UUFDMUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUdELFFBQVEsS0FBSSxDQUFDOzs7WUF6Q2QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixzMEJBQXVDOzthQUl4Qzs7O1lBUnlFLFVBQVU7OzswQkFhakYsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBSUwsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXBvcG92ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2ggLSBub3QgbmVlZGVkLCBzaG93cG92ZXIgaXMgbm90IGlucHV0IGFueW1vcmVcclxuICAvLyBzbyBzaG91bGQgbm90IGJlIHVzZWRcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBzaG93UG9wb3ZlcjogYm9vbGVhbjsgLy8gbm93IGV4cG9zZWQgYXMgYXBpIGFuZCBub3QgcHJvcGVydHkgLSBtb3JlIGZsZXhpYmxlXHJcbiAgc2V0SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSBib3R0b21Qb3M6IGFueTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhpZGVMYWJlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidG5TbWFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwb3BvdmVyVG9wOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93UG9zOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgcHVibGljIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wb3ZlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW4oKSB7XHJcbiAgICB0aGlzLnNob3dQb3BvdmVyID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0SW5kZXggPSAyMDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnNob3dQb3BvdmVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcblxyXG4iXX0=