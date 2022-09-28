import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ActionsSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionsSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-actions-summary',
                template: "<section \n    [ngClass]=\"{'bd-right-2 bd-right-blue-15 bd-right-solid' : divider}\"\n    class=\"\n        flex-center \n        flex-group \n        flex-column \n        margin-0\n        margin-bottom-0-75 \n        padding-x-1\n    \"\n>\n    <strong class=\"nowrap aa-blue-100 margin-0\">{{title}}</strong>\n    <h4 class=\"\n        {{status}} \n        flex-center \n        bd-2 \n        bd-solid \n        border-radius-50 \n        width-2 \n        height-2 \n        margin-top-0-75\n        margin-right-0\"\n        >\n        {{value}}\n    </h4>\n</section>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDRrQkFBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztvQkFHRSxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1hY3Rpb25zLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzdGF0dXM6IHN0cmluZztcbiAgQElucHV0KCkgZGl2aWRlcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==