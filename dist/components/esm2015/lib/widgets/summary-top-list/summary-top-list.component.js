import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class SummaryTopListComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryTopListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-summary-top-list',
                template: "<div class=\"dl-repeater\" [ngClass]=\"{'highlight' : highlight, 'truncate-text' : truncate}\">\r\n  <dt title=\"{{itemTitle}}\" [ngStyle]=\"{'max-width' : maxWidth+'rem'}\">{{itemTitle}}</dt>\r\n  <dd title=\"{{itemDescription}}\" [ngStyle]=\"{'max-width' : maxWidth+'rem'}\">{{itemDescription}}</dd>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SummaryTopListComponent.ctorParameters = () => [];
SummaryTopListComponent.propDecorators = {
    itemTitle: [{ type: Input }],
    itemDescription: [{ type: Input }],
    highlight: [{ type: Input }],
    truncate: [{ type: Input }],
    maxWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS10b3AtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9zdW1tYXJ5LXRvcC1saXN0L3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyx1QkFBdUI7SUFRbEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsdVVBQWdEO2dCQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7d0JBR0UsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1zdW1tYXJ5LXRvcC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VtbWFyeS10b3AtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VtbWFyeS10b3AtbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5VG9wTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGl0ZW1UaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhpZ2hsaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0cnVuY2F0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==