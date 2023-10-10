import { Component, Input, Output, EventEmitter } from '@angular/core';
export class BladeComponent {
    constructor() {
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    onClose() {
        this.bladeOpen.emit(this.toggleBlade = false);
        if (!this.suppressAutoClose) {
            this.bladeOpen.emit(this.toggleBlade);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.toggleBlade); // isOpen callback
    }
}
BladeComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade',
                template: "<!-- MODAL UI BLOCK -->\r\n<div class=\"aa-blade-modal\" *ngIf=\"toggleBlade && showModal\" [ngStyle]=\"{'z-index' : zIndex}\"></div>\r\n\r\n<!-- HEADER BAKED IN -->\r\n<aside \r\n  *ngIf=\"!customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade box-shadow' : toggleBlade,\r\n    'show-tabs' : bladeTabs\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex+10\r\n  }\"\r\n>\r\n  <article class=\"blade-header flex-group space-between\">\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <div \r\n          *ngIf=\"enablePinning\" \r\n          (click)=\"toggleThePin($event)\"\r\n          [ngClass]=\"{'pinned' : isPinned}\" \r\n          class=\"material-icons pin flex-end\"\r\n      >\r\n        push_pin\r\n      </div>\r\n      <div *ngIf=\"enableIcon\" class=\"material-icons header-icon margin-right-0-5\">{{iconName}}</div>\r\n      <h2 class=\"margin-top-0-25 margin-0 ellipsis\" [ngStyle]=\"{'max-width' : headingMaxWidth+'rem' }\">\r\n        {{bladeHeading}}\r\n      </h2>\r\n    </div>\r\n    <a class=\"anchor-close flex-align-center\" (click)=\"onClose()\">Close</a>\r\n    <ng-content *ngIf=\"bladeTabs\" select=\"[blade-tabs]\"></ng-content>\r\n  </article>\r\n  <ng-content></ng-content>\r\n</aside>\r\n\r\n<!-- CUSTOMISABLE HEADER, CONTENT AND FOOTER -->\r\n<aside \r\n  *ngIf=\"customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade box-shadow' : toggleBlade,\r\n    'show-tabs custom-header-tabs' : customBladeTabs\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex\r\n  }\"\r\n>\r\n  <article class=\"blade-header custom-header\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n    <ng-content *ngIf=\"customBladeTabs\" select=\"[custom-blade-tabs]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-footer\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </article>\r\n</aside>\r\n\r\n",
                styles: [""]
            },] }
];
BladeComponent.ctorParameters = () => [];
BladeComponent.propDecorators = {
    pinBlade: [{ type: Input }],
    topPosition: [{ type: Input }],
    zIndex: [{ type: Input }],
    suppressAutoClose: [{ type: Input }],
    customBlade: [{ type: Input }],
    enableIcon: [{ type: Input }],
    iconName: [{ type: Input }],
    bladeTabs: [{ type: Input }],
    customBladeTabs: [{ type: Input }],
    headingMaxWidth: [{ type: Input }],
    showModal: [{ type: Input }],
    oneColWidth: [{ type: Input }],
    bladeSize: [{ type: Input }],
    bladeHeading: [{ type: Input }],
    enablePinning: [{ type: Input }],
    toggleBlade: [{ type: Input }],
    isPinned: [{ type: Input }],
    bladeOpen: [{ type: Output }],
    bladePinned: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9ibGFkZS9ibGFkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQW9DekI7UUFoQlUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBZXBDLENBQUM7SUFiakIsT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtJQUMzRCxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwrbkVBQXFDOzthQUV0Qzs7Ozt1QkFHRSxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUVMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1ibGFkZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JsYWRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ibGFkZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbGFkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHBpbkJsYWRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvcFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3VwcHJlc3NBdXRvQ2xvc2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3VzdG9tQmxhZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlSWNvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJsYWRlVGFiczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXN0b21CbGFkZVRhYnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVhZGluZ01heFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dNb2RhbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvbmVDb2xXaWR0aDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBibGFkZVNpemU6IHN0cmluZztcclxuICBASW5wdXQoKSBibGFkZUhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSBlbmFibGVQaW5uaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUJsYWRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzUGlubmVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBibGFkZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGJsYWRlUGlubmVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvbkNsb3NlKCkge1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLnRvZ2dsZUJsYWRlID0gZmFsc2UpO1xyXG4gICAgaWYgKCF0aGlzLnN1cHByZXNzQXV0b0Nsb3NlKSB7XHJcbiAgICAgIHRoaXMuYmxhZGVPcGVuLmVtaXQodGhpcy50b2dnbGVCbGFkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaGVQaW4oZSkge1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICF0aGlzLmlzUGlubmVkO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpOyAvLyBpc1Bpbm5lZCBjYWxsYmFja1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLnRvZ2dsZUJsYWRlKTsgLy8gaXNPcGVuIGNhbGxiYWNrXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=