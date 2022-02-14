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
                template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini\" \r\n  class=\"aa-card flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos+'rem',\r\n    'left' : leftPos+'rem',\r\n    'right' : rightPos+'rem'\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article *ngIf=\"cardOptional && !cardMini\" class=\"aa-card-opt margin-bottom-0-75 box-shadow-light\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img alt=\"{{cardName}}\" onerror=\"this.style.display='none'\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n</article>\r\n\r\n<button *ngIf=\"cardMini && !cardOptional\" class=\"card-mini flex-align-center flex-start {{borderClass}}\">\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGFBQWE7SUF5QnhCO1FBUFUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFPaEMsQ0FBQztJQUxWLFdBQVcsQ0FBQyxDQUFRO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHU5REFBb0M7Z0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhcmROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FyZFJvbGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXJkT3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2FyZE1pbmk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGhlbWVDb2xvdXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgaW1nUGF0aDogYW55O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd0FzSWNvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93QXNQcm9maWxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm9yZGVyQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3BQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSByaWdodFBvczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIGNhcmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkNhcmRDbGljayhlOiBFdmVudCkge1xyXG4gICAgdGhpcy5jYXJkQ2xpY2suZW1pdChlKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==