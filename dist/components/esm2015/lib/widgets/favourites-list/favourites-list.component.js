import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
export class FavouritesListComponent {
    constructor() {
        this.text = 'Click me';
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
FavouritesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-favourites-list',
                template: "<div class=\"flex-group width-control repeatable\">\r\n  <button (click)=\"onFavClick($event)\" class=\"button-star icon-orange one-rem\" [class.selected]=\"isFavourite\"></button>\r\n  <div><a (click)=\"onAnchorClick($event)\" title=\"{{itemAnchorTitle}}\" type=\"button\">{{itemAnchor}}</a></div>\r\n  <div>{{itemDescription}}</div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FavouritesListComponent.ctorParameters = () => [];
FavouritesListComponent.propDecorators = {
    isFavourite: [{ type: Input }],
    itemAnchorTitle: [{ type: Input }],
    itemAnchor: [{ type: Input }],
    itemDescription: [{ type: Input }],
    text: [{ type: Input }],
    favClick: [{ type: Output }],
    anchorClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLHVCQUF1QjtJQW9CbEM7UUFiUyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVUzQixDQUFDO0lBUlYsVUFBVSxDQUFDLEtBQVk7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFZO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixvV0FBK0M7Z0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzswQkFHRSxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO21CQUVMLEtBQUs7dUJBRUwsTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZmF2b3VyaXRlcy1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3VyaXRlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc0Zhdm91cml0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpdGVtQW5jaG9yVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQW5jaG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQgPSAnQ2xpY2sgbWUnO1xyXG5cclxuICBAT3V0cHV0KCkgZmF2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFuY2hvckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgb25GYXZDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuZmF2Q2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25BbmNob3JDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==