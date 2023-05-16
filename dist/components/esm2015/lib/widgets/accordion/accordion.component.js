import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
export class AccordionComponent {
    constructor() {
        this.open = new EventEmitter();
    }
    onOpen(e) {
        e.stopPropagation();
        if (this.disabled !== true) {
            this.open.emit();
            this.showBody = !this.showBody;
            e.stopPropagation();
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-accordion',
                template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth+'rem', 'min-height': verticalDisplay ? verticalMinHeight : 'auto' }\"\r\n  [ngClass]=\"{'box-shadow-strong' : showBody, 'vertical flex-group flex-start' : verticalDisplay }\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-nowrap {{customBgColor}}\" \r\n      [ngClass]=\"{\r\n        'expanded' : showBody, \r\n        'clean' : accordionClean, \r\n        'disabled' : disabled, \r\n        'flex-column' : verticalDisplay,\r\n        'flex-align-center' : !verticalDisplay\r\n      }\"\r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <div class=\"flex-align-center flex-group flex-start\">\r\n            <div *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</div>\r\n            <div *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</div>\r\n            <div *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></div>\r\n            <div class=\"nested-icons\">\r\n              <div class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</div>\r\n              <div class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</div>\r\n            </div>\r\n            <div class=\"accordion-heading\">{{accordionHeading}}</div>\r\n          </div>\r\n        <div class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div \r\n    *ngIf=\"showBody\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    [ngStyle]=\"{ 'padding': clearPadding ? '0' : '1rem 1.25rem' }\"\r\n    >\r\n      <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    showBody: [{ type: Input }],
    disabled: [{ type: Input }],
    minWidth: [{ type: Input }],
    iconsEnabled: [{ type: Input }],
    dragable: [{ type: Input }],
    sectionId: [{ type: Input }],
    accordionHeading: [{ type: Input }],
    accordionId: [{ type: Input }],
    iconName: [{ type: Input }],
    accordionClean: [{ type: Input }],
    fontAwesome: [{ type: Input }],
    fontClassName: [{ type: Input }],
    iconBgColor: [{ type: Input }],
    customBgColor: [{ type: Input }],
    clearPadding: [{ type: Input }],
    verticalDisplay: [{ type: Input }],
    verticalMinHeight: [{ type: Input }],
    open: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEcsTUFBTSxPQUFPLGtCQUFrQjtJQThCN0I7UUFYVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVcxQixDQUFDO0lBVGpCLE1BQU0sQ0FBQyxDQUFtQztRQUN4QyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG90RUFBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7bUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBzaG93Qm9keTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGljb25zRW5hYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZWN0aW9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBhY2NvcmRpb25IZWFkaW5nOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbkNsZWFuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvbnRBd2Vzb21lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvbnRDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uQmdDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGVhclBhZGRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmVydGljYWxEaXNwbGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsTWluSGVpZ2h0OiBhbnk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG9uT3BlbihlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd0JvZHkgPSAhIHRoaXMuc2hvd0JvZHk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=