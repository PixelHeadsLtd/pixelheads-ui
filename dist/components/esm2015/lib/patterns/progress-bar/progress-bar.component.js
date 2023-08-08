import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-bar',
                template: "<div \r\n    class=\"progress-bar\" \r\n    [ngStyle]=\"{'width' : maxWidth}\"\r\n    [ngClass]=\"{'display-over-header' : displayOverHeader}\"\r\n>\r\n    <span>\r\n        <strong>{{titleBold}} </strong>\r\n        <span>{{titleRegular}}</span>\r\n    </span>\r\n    <div class=\"progress {{progressBgColour}}\">\r\n        <div [id]=\"progressId\" class=\"{{progressColour}}\" [ngStyle]=\"{'width' : complete+'%'}\"></div>\r\n    </div>\r\n    <div class=\"flex-group space-between\">\r\n        <div>{{leftSideText}}</div>\r\n        <div>{{rightSideText}}</div>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    titleBold: [{ type: Input }],
    titleRegular: [{ type: Input }],
    leftSideText: [{ type: Input }],
    rightSideText: [{ type: Input }],
    complete: [{ type: Input }],
    maxWidth: [{ type: Input }],
    displayOverHeader: [{ type: Input }],
    progressBgColour: [{ type: Input }],
    progressColour: [{ type: Input }],
    progressId: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBYS9CLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBsQkFBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt3QkFHRSxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9ncmVzcy1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlQm9sZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlUmVndWxhcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlZnRTaWRlVGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0U2lkZVRleHQ6IGFueTtcclxuICBASW5wdXQoKSBjb21wbGV0ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGlzcGxheU92ZXJIZWFkZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NCZ0NvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NJZDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==