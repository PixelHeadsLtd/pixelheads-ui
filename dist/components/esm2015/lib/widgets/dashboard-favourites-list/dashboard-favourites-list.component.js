import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
export class DashboardFavouritesListComponent {
    constructor() {
        this.text = 'Click me';
        this.favClick = new EventEmitter();
        this.anchorClick = new EventEmitter();
    }
    onFavClick(event) {
        this.favClick.emit(event);
    }
    onAnchorClick(event) {
        event.preventDefault();
        this.anchorClick.emit(event);
    }
    ngOnInit() {
    }
}
DashboardFavouritesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites-list',
                template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button (click)=\"onFavClick($event)\" class=\"icon-star-favourites transparent width-3 margin-right-0-5\" [class.selected]=\"isFavourite\"></button>\r\n    <div class=\"margin-top-1 margin-bottom-0-75 description\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{itemAnchor}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{itemDescription}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\" class=\"width-100\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DashboardFavouritesListComponent.ctorParameters = () => [];
DashboardFavouritesListComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    showTags: [{ type: Input }],
    itemAnchorTitle: [{ type: Input }],
    itemAnchorURL: [{ type: Input }],
    itemAnchor: [{ type: Input }],
    itemTitle: [{ type: Input }],
    itemDescription: [{ type: Input }],
    showBody: [{ type: Input }],
    favouriteId: [{ type: Input }],
    iconName: [{ type: Input }],
    tagName: [{ type: Input }],
    lastViewed: [{ type: Input }],
    favouritesTitle: [{ type: Input }],
    favDescription: [{ type: Input }],
    text: [{ type: Input }],
    favClick: [{ type: Output }],
    anchorClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0L2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGdDQUFnQztJQStCM0M7UUFkUyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVczQixDQUFDO0lBVFYsVUFBVSxDQUFDLEtBQVk7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFZO1FBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsNnZDQUF5RDtnQkFFekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7OzBCQUdFLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzttQkFFTCxLQUFLO3VCQUVMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWRhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaXNGYXZvdXJpdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1RhZ3M6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvclRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvclVSTDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1BbmNob3I6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtRGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93Qm9keTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmYXZvdXJpdGVJZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGFnTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhc3RWaWV3ZWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBmYXZEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0ID0gJ0NsaWNrIG1lJztcclxuXHJcbiAgQE91dHB1dCgpIGZhdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIG9uRmF2Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQW5jaG9yQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==