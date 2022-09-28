import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class UiBlockComponent {
    ngOnInit() {
    }
}
UiBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-ui-block',
                template: "<article \n    *ngIf=\"showUiBlock\" \n    class=\"aa-ui-block flex-group flex-center\"\n    [ngStyle]=\"{\n        'top' : topPos+'rem',\n        'bottom' : bottomPos+'rem'\n    }\"\n>\n    <h1\n        [ngStyle]=\"{\n            'font-size' : fontSize+'rem',\n            'text-transform' : allCaps&&'uppercase'\n        }\"\n    >\n        {{message}}\n    </h1>\n    <div class=\"background\"></div>\n</article>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC91aS1ibG9jay91aS1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixRQUFRO0lBQ1IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMmFBQXdDO2dCQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzswQkFHRSxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS11aS1ibG9jaycsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1ibG9jay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWJsb2NrLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVpQmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNob3dVaUJsb2NrOiBib29sZWFuO1xuICBASW5wdXQoKSB0b3BQb3M6IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tUG9zOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvbnRTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbENhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19