import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
export class CardComponent {
    constructor() {
        this.cardClick = new EventEmitter();
    }
    onCardClick(e) {
        this.cardClick.emit(e);
        e.stopPropagation();
    }
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-card',
                template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini && !cardDetailed\" \r\n  class=\"aa-card flex-group width-control box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos+'rem',\r\n    'left' : leftPos+'rem',\r\n    'right' : rightPos+'rem'\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article \r\n  *ngIf=\"cardOptional\" \r\n  class=\"aa-card-opt box-shadow\" \r\n  [ngStyle]=\"{'z-index' : zIndex}\"\r\n>\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n    <ng-content select=\"[card-hover-content]\"></ng-content>\r\n</article>\r\n\r\n<button \r\n  *ngIf=\"cardMini\" \r\n  class=\"card-mini flex-align-center flex-start {{borderClass}} box-shadow\"\r\n  (click)=\"onCardClick($event)\"\r\n>\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n\r\n<article \r\n  *ngIf=\"cardDetailed\" \r\n  class=\"aa-card card-detailed flex-group flex-nowrap box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'width' : cardWidth\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <ng-content select=\"[card-detailed-content]\"></ng-content>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    cardName: [{ type: Input }],
    cardRole: [{ type: Input }],
    cardOptional: [{ type: Input }],
    cardMini: [{ type: Input }],
    cardDetailed: [{ type: Input }],
    cardWidth: [{ type: Input }],
    themeColour: [{ type: Input }],
    zIndex: [{ type: Input }],
    imgPath: [{ type: Input }],
    title: [{ type: Input }],
    showAsIcon: [{ type: Input }],
    showAsProfile: [{ type: Input }],
    iconName: [{ type: Input }],
    borderClass: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    cardClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGFBQWE7SUEyQnhCO1FBUFUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFPaEMsQ0FBQztJQUxWLFdBQVcsQ0FBQyxDQUFRO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGtqRkFBb0M7Z0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjYXJkTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNhcmRSb2xlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FyZE9wdGlvbmFsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNhcmRNaW5pOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNhcmREZXRhaWxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjYXJkV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSB0aGVtZUNvbG91cjogYm9vbGVhbjtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBpbWdQYXRoOiBhbnk7XHJcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcclxuICBASW5wdXQoKSBzaG93QXNJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dBc1Byb2ZpbGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBib3JkZXJDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgY2FyZENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQ2FyZENsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmNhcmRDbGljay5lbWl0KGUpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19