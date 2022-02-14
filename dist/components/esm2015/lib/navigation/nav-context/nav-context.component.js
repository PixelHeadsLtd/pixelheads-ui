import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class NavContextComponent {
    constructor() { }
    toggle() {
        this.showMenu = !this.showMenu;
    }
    ngOnInit() {
    }
}
NavContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-nav-context',
                template: "<nav class=\"nav-context\" \r\n    [ngStyle]=\"{\r\n        'width' : navWidth+'rem', \r\n        'left' : leftPos+'rem', \r\n        'top' : topPos+'rem', \r\n        'bottom' : bottomPos+'rem', \r\n        'z-index' : zIndex\r\n    }\">\r\n    <div class=\"nav-context-content\">\r\n        <button (click)=\"toggle()\" class=\"material-icons menu\">menu</button>\r\n        <ul [ngClass]=\"{'show-menu' : showMenu}\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </div>\r\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
NavContextComponent.ctorParameters = () => [];
NavContextComponent.propDecorators = {
    navWidth: [{ type: Input }],
    topPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    showMenu: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vbmF2LWNvbnRleHQvbmF2LWNvbnRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxtQkFBbUI7SUFVOUIsZ0JBQWdCLENBQUM7SUFFakIsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixrZ0JBQTJDO2dCQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7dUJBSUUsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1uYXYtY29udGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1jb250ZXh0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtY29udGV4dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2Q29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hdldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbGVmdFBvczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBudW1iZXI7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2hvd01lbnU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuc2hvd01lbnUgPSAhIHRoaXMuc2hvd01lbnU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIl19