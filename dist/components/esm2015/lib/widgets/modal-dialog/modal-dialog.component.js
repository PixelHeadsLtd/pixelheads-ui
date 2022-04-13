import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class ModalDialogComponent {
    constructor() {
        this.closeMeEvent = new EventEmitter();
        this.confirmEvent = new EventEmitter();
    }
    ngOnInit() {
        console.log('Modal init');
    }
    closeMe() {
        this.closeMeEvent.emit();
    }
    confirm() {
        this.confirmEvent.emit();
    }
    ngOnDestroy() {
        console.log(' Modal destroyed');
    }
}
ModalDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-modal-dialog',
                template: "<article class=\"aa-modal\">\r\n    <div \r\n      class=\"aa-modal-container\" \r\n      [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n      [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'right' : rightPos,\r\n        'left' : leftPos,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'z-index' : zIndex\r\n      }\"\r\n    >\r\n      <section class=\"aa-modal-header\">\r\n        <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n      </section>\r\n      <section class=\"aa-modal-content\">\r\n        {{message}}\r\n        <ng-content></ng-content>\r\n      </section>\r\n      <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <button (click)=\"closeMe()\" class=\"cancel\">Close</button>\r\n        <button (click)=\"confirm()\" class=\"primary\">Confirm</button>\r\n      </section>\r\n    </div>\r\n  </article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ModalDialogComponent.ctorParameters = () => [];
ModalDialogComponent.propDecorators = {
    heading: [{ type: Input }],
    message: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    green: [{ type: Input }],
    orange: [{ type: Input }],
    red: [{ type: Input }],
    blue: [{ type: Input }],
    zIndex: [{ type: Input }],
    closeMeEvent: [{ type: Output }],
    confirmEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFRakgsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQjtRQWNVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFmNUIsQ0FBQztJQWlCakIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDI1QkFBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztzQkFLRSxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1tb2RhbC1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgZ3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb3JhbmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBibHVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBjbG9zZU1lRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNvbmZpcm1FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9kYWwgaW5pdCcpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNZSgpIHtcclxuICAgIHRoaXMuY2xvc2VNZUV2ZW50LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1FdmVudC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCcgTW9kYWwgZGVzdHJveWVkJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=