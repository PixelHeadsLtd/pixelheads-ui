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
                template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth+'rem', 'min-height': verticalDisplay ? verticalMinHeight : 'auto' }\"\r\n  [ngClass]=\"{'box-shadow' : showBody, 'vertical flex-group flex-start' : verticalDisplay }\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-nowrap {{customBgColor}}\" \r\n      [ngClass]=\"{\r\n        'expanded' : showBody, \r\n        'clean' : accordionClean, \r\n        'disabled' : disabled, \r\n        'flex-column' : verticalDisplay,\r\n        'flex-align-center' : !verticalDisplay\r\n      }\"\r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-align-center flex-group flex-start\">\r\n            <div *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</div>\r\n            <div *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</div>\r\n            <div *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></div>\r\n            <div class=\"nested-icons\">\r\n              <div class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</div>\r\n              <div class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</div>\r\n            </div>\r\n            <div class=\"accordion-heading\">{{accordionHeading}}</div>\r\n          </div>\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"bespokeHeader\" class=\"bespoke-header\">\r\n          <ng-content select=\"[bespoke-header]\"></ng-content>\r\n          <div *ngIf=\"!hideToggleIcon\" class=\"toggle-icons flex-align-center\">\r\n            <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n            <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n          </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div \r\n    *ngIf=\"showBody\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    [ngStyle]=\"{ 'padding': clearPadding ? '0' : '1rem 1.25rem' }\"\r\n    >\r\n      <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n",
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
    bespokeHeader: [{ type: Input }],
    hideToggleIcon: [{ type: Input }],
    open: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEcsTUFBTSxPQUFPLGtCQUFrQjtJQWdDN0I7UUFYVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVcxQixDQUFDO0lBVGpCLE1BQU0sQ0FBQyxDQUFtQztRQUN4QyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHdwRkFBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21CQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgc2hvd0JvZHk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBpY29uc0VuYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZHJhZ2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2VjdGlvbklkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbklkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBhY2NvcmRpb25DbGVhbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmb250QXdlc29tZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmb250Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbkJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21CZ0NvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xlYXJQYWRkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsRGlzcGxheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbE1pbkhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGJlc3Bva2VIZWFkZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGlkZVRvZ2dsZUljb246IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG9uT3BlbihlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd0JvZHkgPSAhIHRoaXMuc2hvd0JvZHk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=