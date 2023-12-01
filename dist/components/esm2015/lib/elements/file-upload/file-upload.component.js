import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class FileUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-file-upload',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <div class=\"file-upload\">\r\n      <input \r\n        name=\"file-upload\" \r\n        type=\"file\" \r\n        id=\"{{fileUploadId}}\" \r\n        accept=\"{{fileUploadExtentions}}\" \r\n        value=\"{{fileUploadValue}}\"\r\n        title=\"{{fileUploadName}}\"\r\n      >\r\n      <div class=\"file-upload-graphic\">\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n    </div>\r\n    <div \r\n      *ngIf=\"fileUploadName\" \r\n      title=\"{{ fileUploadName }}\"\r\n      class=\"file-upload-name italic\"\r\n      [ngClass]=\"{'ellipsis' : truncateFileName}\"\r\n      [ngStyle]=\"{'max-width' : truncateWidth+'rem'}\"\r\n      >\r\n      {{ fileUploadName }}\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FileUploadComponent.ctorParameters = () => [];
FileUploadComponent.propDecorators = {
    fileUploadLabel: [{ type: Input }],
    fileUploadId: [{ type: Input }],
    fileUploadValue: [{ type: Input }],
    fileUploadName: [{ type: Input }],
    fileUploadExtentions: [{ type: Input }],
    fileUploadText: [{ type: Input }],
    fieldClass: [{ type: Input }],
    truncateFileName: [{ type: Input }],
    truncateWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHU0QkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs4QkFHRSxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZmlsZS11cGxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZEV4dGVudGlvbnM6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWxlVXBsb2FkVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpZWxkQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSB0cnVuY2F0ZUZpbGVOYW1lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRydW5jYXRlV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=