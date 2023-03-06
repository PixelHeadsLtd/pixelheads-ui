import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
export class DashboardFavouritesComponent {
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
DashboardFavouritesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites',
                template: "<article class=\"dashboard-favourite flex-group flex-align-center\">\r\n  <div *ngIf=\"!materialIcons\" class=\"font-awesome {{favIconClass}}\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <div class=\"flex-group flex-align-center position-absolute top-0-5 right-0-5 margin-right-0\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star\r\n    </button>\r\n  </div>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
DashboardFavouritesComponent.ctorParameters = () => [];
DashboardFavouritesComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    favouritesTitle: [{ type: Input }],
    favouritesText: [{ type: Input }],
    favouritesURL: [{ type: Input }],
    favIconClass: [{ type: Input }],
    iconColour: [{ type: Input }],
    materialIcons: [{ type: Input }],
    tagName: [{ type: Input }],
    favDescription: [{ type: Input }],
    lastViewed: [{ type: Input }],
    anchorClick: [{ type: Output }],
    favClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPeEcsTUFBTSxPQUFPLDRCQUE0QjtJQTJCdkM7UUFkVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFhakMsQ0FBQztJQVhWLGFBQWEsQ0FBQyxDQUFRO1FBQzNCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sVUFBVSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGs4Q0FBb0Q7Z0JBRXBELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzswQkFHRSxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZGFzaGJvYXJkLWZhdm91cml0ZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzRmF2b3VyaXRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmF2b3VyaXRlc1VSTDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdkljb25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXRlcmlhbEljb25zOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRhZ05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmYXZEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhc3RWaWV3ZWQ6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGFuY2hvckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZmF2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkFuY2hvckNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmF2Q2xpY2soZSkge1xyXG4gICAgdGhpcy5pc0Zhdm91cml0ZSA9ICF0aGlzLmlzRmF2b3VyaXRlO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZmF2Q2xpY2suZW1pdCh0aGlzLmlzRmF2b3VyaXRlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mYXZDbGljay5lbWl0KHRoaXMuaXNGYXZvdXJpdGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19