import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class OverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-overlay',
                template: "<article \r\n  class=\"aa-overlay flex-center\" \r\n  *ngIf=\"showOverlay\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex, \r\n    'top' : topPos,\r\n    'right' : rightPos,\r\n    'bottom' : bottomPos,\r\n    'left' : leftPos\r\n  }\">\r\n  <div class=\"aa-overlay-container\">\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
OverlayComponent.ctorParameters = () => [];
OverlayComponent.propDecorators = {
    zIndex: [{ type: Input }],
    showOverlay: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    leftPos: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxnQkFBZ0I7SUFTM0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHViQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3FCQUdFLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2hvd092ZXJsYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSBib3R0b21Qb3M6IGFueTtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19