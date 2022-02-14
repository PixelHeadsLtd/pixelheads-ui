import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
export class FavouritesComponent {
    constructor() {
        this.favClick = new EventEmitter();
        this.anchorClick = new EventEmitter();
    }
    onFavClick(event) {
        this.favClick.emit(event);
    }
    onAnchorClick(event) {
        this.anchorClick.emit(event);
    }
    ngOnInit() {
    }
}
FavouritesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-favourites',
                template: "<article class=\"feature-box solid favourite\">\r\n  <a (click)=\"onFavClick($event)\" class=\"margin-left-2\">{{(favouritesTitle.length>40)? (favouritesTitle | slice:0:40)+'...':(favouritesTitle)}}</a>\r\n  <button (click)=\"onAnchorClick($event)\" [class.selected]=\"isFavourite\" class=\"icon-star transparent\"><span>Click to add as favourite</span></button>\r\n  <p>{{(favouritesText.length>120)? (favouritesText | slice:0:120)+'...':(favouritesText)}}</p>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FavouritesComponent.ctorParameters = () => [];
FavouritesComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    favouritesTitle: [{ type: Input }],
    favouritesText: [{ type: Input }],
    favClick: [{ type: Output }],
    anchorClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLG1CQUFtQjtJQWlCOUI7UUFYVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVM0IsQ0FBQztJQVJWLFVBQVUsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBWTtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDJlQUEwQztnQkFFMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7OzBCQUdFLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUVMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWZhdm91cml0ZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYXZvdXJpdGVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhdm91cml0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc0Zhdm91cml0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVGV4dDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgZmF2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFuY2hvckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgb25GYXZDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuZmF2Q2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25BbmNob3JDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==