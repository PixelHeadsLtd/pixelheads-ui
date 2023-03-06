import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
export class DashboardFavouritesListComponent {
    constructor() {
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
    }
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    ngOnInit() {
        this.favClick.emit(this.isFavourite);
    }
}
DashboardFavouritesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites-list',
                template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star\r\n    </button>\r\n\r\n    <div class=\"margin-top-1 margin-bottom-0-75 description\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{itemAnchor}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{itemDescription}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
    anchorClick: [{ type: Output }],
    favClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0L2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGdDQUFnQztJQStCM0M7UUFkVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFhakMsQ0FBQztJQVhWLGFBQWEsQ0FBQyxDQUFRO1FBQzNCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sVUFBVSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLDJnREFBeUQ7Z0JBRXpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzswQkFHRSxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBRUwsTUFBTTt1QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc0Zhdm91cml0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VGFnczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpdGVtQW5jaG9yVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQW5jaG9yVVJMOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1UaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dCb2R5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZUlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFzdFZpZXdlZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdkRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZhdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwdWJsaWMgb25BbmNob3JDbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdChlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZhdkNsaWNrKGUpIHtcclxuICAgIHRoaXMuaXNGYXZvdXJpdGUgPSAhdGhpcy5pc0Zhdm91cml0ZTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQodGhpcy5pc0Zhdm91cml0ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmF2Q2xpY2suZW1pdCh0aGlzLmlzRmF2b3VyaXRlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==