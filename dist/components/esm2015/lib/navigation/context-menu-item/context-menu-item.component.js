import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class ContextMenuItemComponent {
    constructor(router) {
        this.router = router;
    }
    onClick() {
        this.router.navigate([this.routerLink, 500]);
    }
    ngOnInit() {
    }
}
ContextMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-context-menu-item',
                template: "<li>\r\n    <a \r\n        [routerLink]=\"routerLink\" \r\n        [routerLinkActive]=\"['active']\" \r\n        [routerLinkActiveOptions]=\"{exact: true}\"\r\n        [ngClass]=\"{'nowrap' : noWrap}\"\r\n        >\r\n        {{menuItemText}}\r\n    </a>\r\n</li>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ContextMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
ContextMenuItemComponent.propDecorators = {
    menuItemText: [{ type: Input }],
    routerLink: [{ type: Input }],
    routerLinkActive: [{ type: Input }],
    minWidth: [{ type: Input }],
    noWrap: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vY29udGV4dC1tZW51LWl0ZW0vY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sd0JBQXdCO0lBUW5DLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG1SQUFpRDtnQkFFakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFQUSxNQUFNOzs7MkJBVVosS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jb250ZXh0LW1lbnUtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb250ZXh0LW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBtZW51SXRlbVRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmcgfCBhbnlbXTtcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJvdXRlckxpbmssIDUwMF0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=