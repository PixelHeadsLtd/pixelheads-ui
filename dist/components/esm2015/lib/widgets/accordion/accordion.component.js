import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
export class AccordionComponent {
    constructor() {
        this.open = new EventEmitter();
    }
    onOpen(e) {
        if (this.disabled !== true) {
            this.open.emit();
            this.showBody = !this.showBody;
            e.stopPropagation();
        }
        if (this.disabled !== true && this.showBody && this.enableAnimation) {
            this.setHeight = true;
            this.eleHeight = this.myIdentifier.nativeElement.offsetHeight;
            console.log('Height ' + this.eleHeight);
        }
        else {
            this.eleHeight = 0;
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-accordion',
                template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth+'rem'}\"\r\n  [ngClass]=\"{'box-shadow-strong' : showBody}\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-align-center {{customBgColor}}\" \r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      [ngClass]=\"{'expanded' : showBody, 'clean' : accordionClean, 'disabled' : disabled}\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <span class=\"flex-align-center\">\r\n            <span *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</span>\r\n            <span *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</span>\r\n            <span *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></span>\r\n            <span class=\"nested-icons\">\r\n              <span class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</span>\r\n              <span class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</span>\r\n            </span>\r\n            <span class=\"accordion-heading\">{{accordionHeading}}</span>\r\n        </span>\r\n        <div class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n\r\n  <div \r\n    *ngIf=\"showBody && !enableAnimation\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    >\r\n      <section class=\"padding-1 padding-top-0\">\r\n        <ng-content></ng-content>\r\n      </section>\r\n  </div>\r\n\r\n  <div \r\n    *ngIf=\"enableAnimation\" \r\n    [ngClass]=\"{'show-accordion-panel' : showBody}\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    >\r\n    <section \r\n      class=\"dynamic-height\"\r\n      [ngStyle]=\"{'height': setHeight ? eleHeight+'px' : '0'}\"\r\n    >\r\n      <div class=\"accordion-content\" #myIdentifier>\r\n        <ng-content select=\"[animate]\"></ng-content>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</article>\r\n",
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
    setHeight: [{ type: Input }],
    eleHeight: [{ type: Input }],
    enableAnimation: [{ type: Input }],
    open: [{ type: Output }],
    myIdentifier: [{ type: ViewChild, args: ['myIdentifier',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2SCxNQUFNLE9BQU8sa0JBQWtCO0lBcUM3QjtRQWxCVSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWtCMUIsQ0FBQztJQWZqQixNQUFNLENBQUMsQ0FBbUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4N0VBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO21CQUNMLE1BQU07MkJBQ04sU0FBUyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBzaG93Qm9keTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGljb25zRW5hYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzZWN0aW9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBhY2NvcmRpb25IZWFkaW5nOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbkNsZWFuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvbnRBd2Vzb21lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvbnRDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uQmdDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzZXRIZWlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZWxlSGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZW5hYmxlQW5pbWF0aW9uOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ215SWRlbnRpZmllcicpIG15SWRlbnRpZmllcjogRWxlbWVudFJlZjtcclxuXHJcbiAgb25PcGVuKGU6IHsgc3RvcFByb3BhZ2F0aW9uOiAoKSA9PiB2b2lkOyB9KSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dCb2R5ID0gISB0aGlzLnNob3dCb2R5O1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHRydWUgJiYgdGhpcy5zaG93Qm9keSAmJiB0aGlzLmVuYWJsZUFuaW1hdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVsZUhlaWdodCA9IHRoaXMubXlJZGVudGlmaWVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWlnaHQgJyArIHRoaXMuZWxlSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlSGVpZ2h0ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==