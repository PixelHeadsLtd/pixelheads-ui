import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProgressCircleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-circle',
                template: "<div *ngIf=\"!isSmall\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title {{headerColor}}\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span \r\n      title=\"{{name}}\"\r\n      class=\"flex-group flex-align-center\"\r\n      >\r\n      {{ (name.length>19)? (name | slice:0:19)+'...':(name) }}\r\n      <span title=\"Error\" *ngIf=\"isError\" class=\"material-icons status padding-left-0-25 small aa-red-100\">error_outline</span>\r\n      <span title=\"Warning\" *ngIf=\"isWarning\" class=\"material-icons status padding-left-0-25 small aa-orange-100\">warning_amber</span>\r\n      <span title=\"Info\" *ngIf=\"isInfo\" class=\"material-icons-outlined status small padding-left-0-25 aa-light-blue-100\">info</span>\r\n    </span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView && !hideChevron\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n  <span class=\"align-center number\" *ngIf=\"panelView\">{{value}}</span>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressCircleComponent.ctorParameters = () => [];
ProgressCircleComponent.propDecorators = {
    name: [{ type: Input }],
    percent: [{ type: Input }],
    value: [{ type: Input }],
    colour: [{ type: Input }],
    isSmall: [{ type: Input }],
    panelView: [{ type: Input }],
    enableTooltip: [{ type: Input }],
    tooltipTitle: [{ type: Input }],
    tooltipBody: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    tooltipMinWidth: [{ type: Input }],
    hideChevron: [{ type: Input }],
    headerColor: [{ type: Input }],
    isError: [{ type: Input }],
    isWarning: [{ type: Input }],
    isInfo: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBb0JsQyxnQkFBZ0IsQ0FBQztJQUdqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1MkVBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7bUJBR0UsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9ncmVzcy1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwZXJjZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjb2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpc1NtYWxsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBhbmVsVmlldzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlbmFibGVUb29sdGlwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCb2R5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgeHBvczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHlwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwTWluV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoaWRlQ2hldnJvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoZWFkZXJDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNXYXJuaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzSW5mbzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19