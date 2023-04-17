import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ActionsSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionsSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-actions-summary',
                template: "<article \r\n    class=\"actions-summary flex-group flex-start\"\r\n    [ngClass]=\"{ \r\n        'flex-column' : verticalDisplay,\r\n        'flex-nowrap' : noWrap\r\n    }\"\r\n>\r\n    <section \r\n        *ngFor=\"let item of actionsSummaryItems; let i = index\" \r\n        class=\"\r\n            flex-center \r\n            flex-group \r\n            flex-column\r\n        \"\r\n    >\r\n        <strong class=\"nowrap margin-0\">{{item.title}}</strong>\r\n        <h4 class=\"\r\n            {{item.status}} \r\n            flex-center \r\n            bd-2 \r\n            bd-solid \r\n            border-radius-50 \r\n            width-2 \r\n            height-2 \r\n            margin-top-0-75\r\n            margin-right-0\"\r\n            >\r\n            {{item.value}}\r\n        </h4>\r\n    </section>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ActionsSummaryComponent.ctorParameters = () => [];
ActionsSummaryComponent.propDecorators = {
    title: [{ type: Input }],
    value: [{ type: Input }],
    status: [{ type: Input }],
    verticalDisplay: [{ type: Input }],
    noWrap: [{ type: Input }],
    actionsSummaryItems: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBU2xDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDQwQkFBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztvQkFHRSxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7a0NBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYWN0aW9ucy1zdW1tYXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uc1N1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmVydGljYWxEaXNwbGF5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhY3Rpb25zU3VtbWFyeUl0ZW1zOiBBcnJheTxvYmplY3Q+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==