import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProjectTourComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectTourComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-project-tour',
                template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode && {'position' : 'relative', 'z-index' : '999999999'}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos, \r\n              'right' : rightPos, \r\n              'bottom' : bottomPos,\r\n              'left' : leftPos\r\n          }\">\r\n          \r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom\" [ngStyle]=\"{'left' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left\" [ngStyle]=\"{'top' : arrowPos}\" [ngClass]=\"{'arrow-plum':arrowIsPlum}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\"></div>\r\n    </div>\r\n</div>",
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
    arrowIsPlum: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10b3VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvcHJvamVjdC10b3VyL3Byb2plY3QtdG91ci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLG9CQUFvQjtJQWtCL0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IseWpEQUE0QztnQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3VCQUdFLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9qZWN0LXRvdXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9qZWN0LXRvdXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2plY3QtdG91ci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0VG91ckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRvdXJNb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3VyTW9kZUhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3VyTW9kZUJvZHk6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGJvdHRvbVBvczogYW55O1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSBwYW5lbFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgYXJyb3dQb3M6IGFueTtcclxuICBASW5wdXQoKSBhcnJvd1RvcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhcnJvd1JpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93Qm90dG9tOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFycm93TGVmdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhcnJvd0lzUGx1bTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==