import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ActionsSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionsSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-actions-summary',
                template: "<section \r\n    [ngClass]=\"{'bd-right-2 bd-right-blue-15 bd-right-solid' : divider}\"\r\n    class=\"\r\n        flex-center \r\n        flex-group \r\n        flex-column \r\n        margin-0\r\n        margin-bottom-0-75 \r\n        padding-x-1\r\n    \"\r\n>\r\n    <strong class=\"nowrap aa-blue-100 margin-0\">{{title}}</strong>\r\n    <h4 class=\"\r\n        {{status}} \r\n        flex-center \r\n        bd-2 \r\n        bd-solid \r\n        border-radius-50 \r\n        width-2 \r\n        height-2 \r\n        margin-top-0-75\r\n        margin-right-0\"\r\n        >\r\n        {{value}}\r\n    </h4>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ActionsSummaryComponent.ctorParameters = () => [];
ActionsSummaryComponent.propDecorators = {
    title: [{ type: Input }],
    value: [{ type: Input }],
    status: [{ type: Input }],
    divider: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDhuQkFBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztvQkFHRSxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hY3Rpb25zLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25zU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBzdGF0dXM6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXZpZGVyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==