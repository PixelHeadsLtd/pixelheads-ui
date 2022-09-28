import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ListSelectableComponent {
    ngOnInit() {
    }
}
ListSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-list-selectable',
                template: "<nav \n    class=\"\n        aa-list-selectable\n        flex-group\n    \" \n    [ngStyle]=\"fixedPosition && {\n        'position' : 'fixed', \n        'left' : leftPos+'rem', \n        'top' : topPos+'rem', \n        'bottom' : bottomPos+'rem', \n        'z-index' : zIndex\n    }\"\n    [ngClass]=\"{\n        'flex-start' : flexStart\n    }\"\n    >\n    <ul>\n        <ng-content></ng-content>\n    </ul>\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ListSelectableComponent.propDecorators = {
    minWidth: [{ type: Input }],
    topPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    flexStart: [{ type: Input }],
    fixedPosition: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2xpc3Qtc2VsZWN0YWJsZS9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyx1QkFBdUI7SUFXbEMsUUFBUTtJQUNSLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsOGFBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozt1QkFHRSxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWxpc3Qtc2VsZWN0YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRvcFBvczogbnVtYmVyO1xuICBASW5wdXQoKSBsZWZ0UG9zOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJvdHRvbVBvczogbnVtYmVyO1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZmxleFN0YXJ0OiBib29sZWFuO1xuICBASW5wdXQoKSBmaXhlZFBvc2l0aW9uOiBib29sZWFuO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==