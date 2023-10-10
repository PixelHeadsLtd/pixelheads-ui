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
                template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth+'rem', 'min-height': verticalDisplay ? verticalMinHeight : 'auto' }\"\r\n  [ngClass]=\"{'box-shadow' : showBody, 'vertical flex-group flex-start' : verticalDisplay }\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-nowrap {{customBgColor}}\" \r\n      [ngClass]=\"{\r\n        'expanded' : showBody, \r\n        'clean' : accordionClean, \r\n        'disabled' : disabled, \r\n        'flex-column' : verticalDisplay,\r\n        'flex-align-center' : !verticalDisplay\r\n      }\"\r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-align-center flex-group flex-start\">\r\n            <div *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</div>\r\n            <div *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</div>\r\n            <div *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></div>\r\n            <div class=\"nested-icons\">\r\n              <div class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</div>\r\n              <div class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</div>\r\n            </div>\r\n            <div class=\"accordion-heading\">{{accordionHeading}}</div>\r\n          </div>\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"bespokeHeader\" class=\"bespoke-header\">\r\n          <ng-content select=\"[bespoke-header]\"></ng-content>\r\n          <div class=\"toggle-icons flex-align-center\">\r\n            <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n            <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n          </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div \r\n    *ngIf=\"showBody\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    [ngStyle]=\"{ 'padding': clearPadding ? '0' : '1rem 1.25rem' }\"\r\n    >\r\n      <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n",
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
    open: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEcsTUFBTSxPQUFPLGtCQUFrQjtJQStCN0I7UUFYVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVcxQixDQUFDO0lBVGpCLE1BQU0sQ0FBQyxDQUFtQztRQUN4QyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDhuRkFBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFjY29yZGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dCb2R5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaWNvbnNFbmFibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRyYWdhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNlY3Rpb25JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbkhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSBhY2NvcmRpb25JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uQ2xlYW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9udEF3ZXNvbWU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9udENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25CZ0NvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsZWFyUGFkZGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbERpc3BsYXk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmVydGljYWxNaW5IZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBiZXNwb2tlSGVhZGVyOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBvbk9wZW4oZTogeyBzdG9wUHJvcGFnYXRpb246ICgpID0+IHZvaWQ7IH0pIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dCb2R5ID0gISB0aGlzLnNob3dCb2R5O1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19