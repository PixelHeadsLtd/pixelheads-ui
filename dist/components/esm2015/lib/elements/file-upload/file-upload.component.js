import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class FileUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-file-upload',
                template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start\">\r\n    <div class=\"file-upload\">\r\n      <input name=\"file-upload\" type=\"file\" id=\"{{fileUploadId}}\" accept=\"{{fileUploadExtentions}}\" value=\"{{fileUploadValue}}\">\r\n      <div class=\"file-upload-graphic\">\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"file-upload-name margin-top-0-5\">{{ fileUploadName }}</div>\r\n  </div>\r\n</div>\r\n",
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
    fieldClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2VsZW1lbnRzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBVTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRpQkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs4QkFHRSxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1maWxlLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZFZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsZVVwbG9hZE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmaWxlVXBsb2FkRXh0ZW50aW9uczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVVcGxvYWRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==