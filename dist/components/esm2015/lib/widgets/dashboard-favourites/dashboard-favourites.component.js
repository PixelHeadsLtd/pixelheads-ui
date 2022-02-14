import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
export class DashboardFavouritesComponent {
    constructor() {
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
DashboardFavouritesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-dashboard-favourites',
                template: "<article class=\"dashboard-favourite\">\r\n  <div *ngIf=\"!materialIcons\" [class]=\"favIconClass\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <button (click)=\"onFavClick($event)\" [class.selected]=\"isFavourite\" class=\"icon-star-favourites transparent\"></button>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n",
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
    favClick: [{ type: Output }],
    anchorClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPeEcsTUFBTSxPQUFPLDRCQUE0QjtJQXlCdkM7UUFaVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFXM0IsQ0FBQztJQVRWLFVBQVUsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBWTtRQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUlELFFBQVE7SUFDUixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDgvQkFBb0Q7Z0JBRXBELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzswQkFHRSxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUVMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZGFzaGJvYXJkLWZhdm91cml0ZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRmF2b3VyaXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzRmF2b3VyaXRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmF2b3VyaXRlc1VSTDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZhdkljb25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXRlcmlhbEljb25zOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRhZ05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmYXZEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhc3RWaWV3ZWQ6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGZhdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIG9uRmF2Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQW5jaG9yQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19