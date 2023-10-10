import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostListener, ElementRef } from '@angular/core';
export class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonType = 'button';
        this.buttonClick = new EventEmitter();
    }
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
        this.showBtnMenu = false;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showBtnMenu = false;
        }
    }
    open() {
        this.showBtnMenu = true;
    }
    close() {
        this.showBtnMenu = false;
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-button',
                template: "<div \r\n  *ngIf=\"!buttonEnriched && !buttonSplit &&!buttonSummary &&!buttonDayPicker\" \r\n  class=\"field {{fieldClass}}\"\r\n  [class.button-large]=\"buttonLarge\"\r\n>\r\n  <label \r\n    [ngClass]=\"{ 'show-label': showLabel }\"\r\n    [for]=\"buttonId\">\r\n    {{buttonLabel}}\r\n  </label>\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [class]=\"buttonClass\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    [ngClass]=\"{\r\n      'material-icons' : customIconsRound,\r\n      'material-icons-outlined' : customIconsRoundOutlined\r\n    }\"\r\n  >\r\n    <div *ngIf=\"!customIconsRound && !customIconsRoundOutlined\" [ngClass]=\"{'display-inline-block' : customIcons}\">\r\n      <span *ngIf=\"customIcons\" class=\"material-icons\">{{buttonIcon}}</span>\r\n      <span>{{buttonText}}</span>\r\n      <div *ngIf=\"showCount\" class=\"count {{countColor}}\">{{count}}</div>\r\n    </div>\r\n    <span *ngIf=\"customIconsRound || customIconsRoundOutlined\">{{buttonIcon}}</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonEnriched\" class=\"field {{fieldClass}}\">\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    class=\"btn-enriched box-shadow-light gradient-v-grey\"\r\n  >\r\n    <div class=\"flex-group flex-end btn-enriched-toolbar\">\r\n      <ng-content select=\"[toolbar]\"></ng-content>\r\n    </div>\r\n    <div class=\"btn-enriched-content flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <div \r\n    class=\"button-split\" \r\n    [ngClass]=\"{'nav-left-side' : navLeftside, 'nav-bottom' : navBottom}\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center flex-nowrap\">\r\n      <button\r\n        *ngIf=\"navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n      <button\r\n        (click)=\"onButtonClick($event)\"\r\n        [class]=\"buttonClass\"\r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n        {{buttonText}}\r\n      </button>\r\n      <button\r\n        *ngIf=\"!navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n    </div>\r\n    <nav \r\n      (click)=\"showBtnMenu=false\" \r\n      *ngIf=\"showBtnMenu\" \r\n      class=\"box-shadow\"\r\n      [ngStyle]=\"{'max-height' : maxHeight}\"\r\n    >\r\n      <ng-content select=\"[bs-buttons]\"></ng-content>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSummary\" class=\"field {{fieldClass}} flex-stretch\">\r\n  <button\r\n    class=\"{{status}} button-summary border-radius-0-5 box-shadow-light bg-aa-white-100 padding-1-5 flex-column bd-aa-grey-5\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <h1 class=\"priority bg-aa-white-100 border-radius-50 width-3 height-3 flex-center bd-solid\">{{level}}</h1>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n    <p *ngIf=\"showDescription\" class=\"margin-top-1\">\r\n      {{desc}}\r\n    </p>\r\n  </button>\r\n</div>\r\n\r\n<button\r\n  *ngIf=\"buttonDayPicker\"\r\n  class=\"button-day-picker box-shadow-light\"\r\n  (click)=\"onButtonClick($event)\"\r\n  [type]=\"buttonType\" \r\n  [name]=\"buttonId\" \r\n  [id]=\"buttonId\" \r\n  [disabled]=\"disabled\" \r\n>\r\n  <strong>{{buttonText}}</strong>\r\n  <div></div>\r\n</button>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
ButtonComponent.propDecorators = {
    buttonLabel: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonId: [{ type: Input }],
    buttonClass: [{ type: Input }],
    buttonType: [{ type: Input }],
    disabled: [{ type: Input }],
    fieldClass: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    customIcons: [{ type: Input }],
    buttonEnriched: [{ type: Input }],
    showBtnMenu: [{ type: Input }],
    buttonSplit: [{ type: Input }],
    navBottom: [{ type: Input }],
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    iconColour: [{ type: Input }],
    buttonLarge: [{ type: Input }],
    buttonSummary: [{ type: Input }],
    showDescription: [{ type: Input }],
    status: [{ type: Input }],
    level: [{ type: Input }],
    desc: [{ type: Input }],
    showCount: [{ type: Input }],
    count: [{ type: Input }],
    countColor: [{ type: Input }],
    maxHeight: [{ type: Input }],
    showLabel: [{ type: Input }],
    customIconsRound: [{ type: Input }],
    customIconsRoundOutlined: [{ type: Input }],
    navLeftside: [{ type: Input }],
    buttonDayPicker: [{ type: Input }],
    buttonClick: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbEksTUFBTSxPQUFPLGVBQWU7SUF5QzFCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFwQ2pDLGVBQVUsR0FBRyxRQUFRLENBQUM7UUE0QnJCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQVFKLENBQUM7SUFOeEMsYUFBYSxDQUFDLENBQVE7UUFDM0IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFLTSxPQUFPLENBQUMsYUFBYTtRQUMxQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVqSUFBc0M7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOK0YsVUFBVTs7OzBCQVF2RyxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3VDQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUVMLE1BQU07c0JBU04sWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbklkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25UeXBlID0gJ2J1dHRvbic7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkljb246IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21JY29uczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidXR0b25FbnJpY2hlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93QnRuTWVudTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidXR0b25TcGxpdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuYXZCb3R0b206IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25MYXJnZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidXR0b25TdW1tYXJ5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dEZXNjcmlwdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzdGF0dXM6IHN0cmluZztcclxuICBASW5wdXQoKSBsZXZlbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRlc2M6IGFueTtcclxuICBASW5wdXQoKSBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb3VudENvbG9yOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4SGVpZ2h0OiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUljb25zUm91bmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3VzdG9tSWNvbnNSb3VuZE91dGxpbmVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5hdkxlZnRzaWRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkRheVBpY2tlcjogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKHRhcmdldEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J0bk1lbnUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuKCkge1xyXG4gICAgdGhpcy5zaG93QnRuTWVudSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19