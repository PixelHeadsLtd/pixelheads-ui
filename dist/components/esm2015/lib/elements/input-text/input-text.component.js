import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class InputTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-input-text',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{inputTextId}}\">\r\n    {{inputTextLabel}}\r\n    <span class=\"optional\" *ngIf=\"isOptional\">Optional</span>\r\n  </label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{inputTextId}}\" \r\n    id=\"{{inputTextId}}\" \r\n    placeholder=\"{{inputPlaceholder}}\" \r\n    readonly=\"{{readOnly}}\"\r\n    value=\"{{inputValue}}\"\r\n    >\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InputTextComponent.ctorParameters = () => [];
InputTextComponent.propDecorators = {
    isOptional: [{ type: Input }],
    readOnly: [{ type: Input }],
    inputTextLabel: [{ type: Input }],
    inputTextId: [{ type: Input }],
    inputPlaceholder: [{ type: Input }],
    fieldClass: [{ type: Input }],
    inputValue: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZWxlbWVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sa0JBQWtCO0lBVTdCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixzYUFBMEM7Z0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt5QkFHRSxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1pbnB1dC10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc09wdGlvbmFsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlucHV0VGV4dExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5wdXRUZXh0SWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlucHV0VmFsdWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=