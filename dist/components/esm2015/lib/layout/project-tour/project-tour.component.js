import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProjectTourComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectTourComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-project-tour',
                template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode && {'position' : 'relative', 'z-index' : zIndex+1}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos, \r\n              'right' : rightPos, \r\n              'bottom' : bottomPos,\r\n              'left' : leftPos,\r\n              'z-index' : zIndex+1\r\n          }\">\r\n          \r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\" [ngStyle]=\"{'z-index':zIndex}\"></div>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProjectTourComponent.ctorParameters = () => [];
ProjectTourComponent.propDecorators = {
    tourMode: [{ type: Input }],
    enableHeading: [{ type: Input }],
    tourModeHeading: [{ type: Input }],
    tourModeBody: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    panelWidth: [{ type: Input }],
    arrowPos: [{ type: Input }],
    arrowTop: [{ type: Input }],
    arrowRight: [{ type: Input }],
    arrowBottom: [{ type: Input }],
    arrowLeft: [{ type: Input }],
    arrowIsPlum: [{ type: Input }],
    zIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10b3VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvcHJvamVjdC10b3VyL3Byb2plY3QtdG91ci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsOG5EQUE0QztnQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3VCQUdFLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXByb2plY3QtdG91cicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2plY3QtdG91ci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvamVjdC10b3VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RUb3VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdG91ck1vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvdXJNb2RlSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvdXJNb2RlQm9keTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHBhbmVsV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBhcnJvd1BvczogYW55O1xyXG4gIEBJbnB1dCgpIGFycm93VG9wOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93UmlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYXJyb3dCb3R0b206IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYXJyb3dMZWZ0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93SXNQbHVtOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19