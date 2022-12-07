import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ListSelectableComponent {
    ngOnInit() {
    }
}
ListSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-list-selectable',
                template: "<nav \r\n    class=\"\r\n        aa-list-selectable\r\n        flex-group\r\n    \" \r\n    [ngStyle]=\"fixedPosition && {\r\n        'position' : 'fixed', \r\n        'left' : leftPos+'rem', \r\n        'top' : topPos+'rem', \r\n        'bottom' : bottomPos+'rem', \r\n        'z-index' : zIndex\r\n    }\"\r\n    [ngClass]=\"{\r\n        'flex-start' : flexStart\r\n    }\"\r\n    >\r\n    <ul>\r\n        <ng-content></ng-content>\r\n    </ul>\r\n</nav>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2xpc3Qtc2VsZWN0YWJsZS9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyx1QkFBdUI7SUFXbEMsUUFBUTtJQUNSLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsb2RBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozt1QkFHRSxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWxpc3Qtc2VsZWN0YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3Qtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RTZWxlY3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0b3BQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSBib3R0b21Qb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBmbGV4U3RhcnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZml4ZWRQb3NpdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=