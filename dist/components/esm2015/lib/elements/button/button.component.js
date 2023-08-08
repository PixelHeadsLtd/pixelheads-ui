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
                template: "<div \r\n  *ngIf=\"!buttonEnriched && !buttonSplit &&!buttonSummary &&!buttonDayPicker\" \r\n  class=\"field {{fieldClass}}\"\r\n  [class.button-large]=\"buttonLarge\"\r\n>\r\n  <label \r\n    [ngClass]=\"{ 'show-label': showLabel }\"\r\n    [for]=\"buttonId\">\r\n    {{buttonLabel}}\r\n  </label>\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [class]=\"buttonClass\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    [ngClass]=\"{'material-icons' : customIconsRound}\"\r\n  >\r\n    <div *ngIf=\"!customIconsRound\" [ngClass]=\"{'display-inline-block' : customIcons}\">\r\n      <span *ngIf=\"customIcons\" class=\"material-icons\">{{buttonIcon}}</span>\r\n      <span>{{buttonText}}</span>\r\n      <div *ngIf=\"showCount\" class=\"count {{countColor}}\">{{count}}</div>\r\n    </div>\r\n    <span *ngIf=\"customIconsRound\">{{buttonIcon}}</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonEnriched\" class=\"field {{fieldClass}}\">\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    class=\"btn-enriched box-shadow gradient-v-grey\"\r\n  >\r\n    <div class=\"flex-group flex-end btn-enriched-toolbar\">\r\n      <ng-content select=\"[toolbar]\"></ng-content>\r\n    </div>\r\n    <div class=\"btn-enriched-content flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <div class=\"button-split\" [ngClass]=\"{'nav-left-side' : navLeftside}\">\r\n    <div class=\"flex-group flex-start flex-align-center flex-nowrap\">\r\n      <button\r\n        *ngIf=\"navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n      <button\r\n        (click)=\"onButtonClick($event)\"\r\n        [class]=\"buttonClass\"\r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n        {{buttonText}}\r\n      </button>\r\n      <button\r\n        *ngIf=\"!navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n    </div>\r\n    <nav \r\n      (click)=\"showBtnMenu=false\" \r\n      *ngIf=\"showBtnMenu\" \r\n      class=\"box-shadow-strong\"\r\n      [ngStyle]=\"{'max-height' : maxHeight}\"\r\n    >\r\n      <ng-content select=\"[bs-buttons]\"></ng-content>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSummary\" class=\"field {{fieldClass}} flex-stretch\">\r\n  <button\r\n    class=\"{{status}} button-summary border-radius-0-5 box-shadow bg-aa-white-100 padding-1-5 flex-column bd-aa-grey-5\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <h1 class=\"priority bg-aa-white-100 border-radius-50 width-3 height-3 flex-center bd-solid\">{{level}}</h1>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n    <p *ngIf=\"showDescription\" class=\"margin-top-1\">\r\n      {{desc}}\r\n    </p>\r\n  </button>\r\n</div>\r\n\r\n<button\r\n  *ngIf=\"buttonDayPicker\"\r\n  class=\"button-day-picker box-shadow-strong\"\r\n  (click)=\"onButtonClick($event)\"\r\n  [type]=\"buttonType\" \r\n  [name]=\"buttonId\" \r\n  [id]=\"buttonId\" \r\n  [disabled]=\"disabled\" \r\n>\r\n  <strong>{{buttonText}}</strong>\r\n  <div></div>\r\n</button>\r\n\r\n",
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
    navLeftside: [{ type: Input }],
    buttonDayPicker: [{ type: Input }],
    buttonClick: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbEksTUFBTSxPQUFPLGVBQWU7SUF1QzFCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQ2pDLGVBQVUsR0FBRyxRQUFRLENBQUM7UUEwQnJCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQVFKLENBQUM7SUFOeEMsYUFBYSxDQUFDLENBQVE7UUFDM0IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFLTSxPQUFPLENBQUMsYUFBYTtRQUMxQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHkzSEFBc0M7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOK0YsVUFBVTs7OzBCQVF2RyxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsTUFBTTtzQkFTTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblR5cGUgPSAnYnV0dG9uJztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmaWVsZENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uSWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUljb25zOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkVucmljaGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dCdG5NZW51OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblNwbGl0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uQ29sb3VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uTGFyZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYnV0dG9uU3VtbWFyeTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlcjtcclxuICBASW5wdXQoKSBkZXNjOiBhbnk7XHJcbiAgQElucHV0KCkgc2hvd0NvdW50OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY291bnRDb2xvcjogYW55O1xyXG4gIEBJbnB1dCgpIG1heEhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIHNob3dMYWJlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXN0b21JY29uc1JvdW5kOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5hdkxlZnRzaWRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkRheVBpY2tlcjogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKHRhcmdldEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J0bk1lbnUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuKCkge1xyXG4gICAgdGhpcy5zaG93QnRuTWVudSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19