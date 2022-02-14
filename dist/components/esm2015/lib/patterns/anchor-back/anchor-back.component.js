import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class AnchorBackComponent {
    ngOnInit() { }
}
AnchorBackComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-anchor-back',
                template: "<a class=\"anchor-back\" [attr.href]=\"anchorURL\">{{anchorBackText}}</a>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AnchorBackComponent.propDecorators = {
    anchorBackText: [{ type: Input }],
    anchorURL: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLWJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FuY2hvci1iYWNrL2FuY2hvci1iYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRixNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFFBQVEsS0FBSyxDQUFDOzs7WUFWZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscUZBQTJDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OzZCQUdFLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYW5jaG9yLWJhY2snLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmNob3ItYmFjay5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuY2hvckJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBhbmNob3JCYWNrVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFuY2hvclVSTDogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxufVxyXG4iXX0=