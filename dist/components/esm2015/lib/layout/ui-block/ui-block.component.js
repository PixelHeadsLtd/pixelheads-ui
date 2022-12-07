import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class UiBlockComponent {
    ngOnInit() {
    }
}
UiBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-ui-block',
                template: "<article \r\n    *ngIf=\"showUiBlock\" \r\n    class=\"aa-ui-block flex-group flex-center\"\r\n    [ngStyle]=\"{\r\n        'top' : topPos+'rem',\r\n        'bottom' : bottomPos+'rem'\r\n    }\"\r\n>\r\n    <h1\r\n        [ngStyle]=\"{\r\n            'font-size' : fontSize+'rem',\r\n            'text-transform' : allCaps&&'uppercase'\r\n        }\"\r\n    >\r\n        {{message}}\r\n    </h1>\r\n    <div class=\"background\"></div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UiBlockComponent.propDecorators = {
    showUiBlock: [{ type: Input }],
    topPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    fontSize: [{ type: Input }],
    allCaps: [{ type: Input }],
    message: [{ type: Input }],
    zIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC91aS1ibG9jay91aS1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixRQUFRO0lBQ1IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNmNBQXdDO2dCQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzswQkFHRSxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS11aS1ibG9jaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWJsb2NrLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91aS1ibG9jay5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVaUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2hvd1VpQmxvY2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9wUG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZm9udFNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBhbGxDYXBzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=