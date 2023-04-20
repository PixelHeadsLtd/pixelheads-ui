import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ActionsSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionsSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-actions-summary',
                template: "<article \r\n    class=\"actions-summary flex-group flex-start\"\r\n    [ngClass]=\"{ \r\n        'flex-column' : verticalDisplay,\r\n        'flex-nowrap' : noWrap\r\n    }\"\r\n>\r\n    <section \r\n        *ngFor=\"let item of actionsSummaryItems; let i = index\" \r\n        title=\"{{item.value}}\"\r\n        class=\"\r\n            flex-center \r\n            flex-group \r\n            flex-column\r\n        \"\r\n    >\r\n        <strong class=\"nowrap margin-0\">{{item.heading}}</strong>\r\n        <h4 class=\"\r\n            {{item.status}} \r\n            flex-center \r\n            bd-2 \r\n            bd-solid \r\n            margin-top-0-75\r\n            margin-right-0\"\r\n            >\r\n            {{(item.value.length>7)? (item.value | slice:0:7)+'...':(item.value)}}\r\n        </h4>\r\n    </section>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ActionsSummaryComponent.ctorParameters = () => [];
ActionsSummaryComponent.propDecorators = {
    heading: [{ type: Input }],
    title: [{ type: Input }],
    value: [{ type: Input }],
    status: [{ type: Input }],
    verticalDisplay: [{ type: Input }],
    noWrap: [{ type: Input }],
    actionsSummaryItems: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBVWxDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHcxQkFBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztzQkFHRSxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSztrQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hY3Rpb25zLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25zU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmVydGljYWxEaXNwbGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhY3Rpb25zU3VtbWFyeUl0ZW1zOiBBcnJheTxvYmplY3Q+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==