import { Component, Input, Output, EventEmitter } from '@angular/core';
export class BladeComponent {
    constructor() {
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    onClose() {
        this.toggleBlade = false;
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
                template: "<!-- MODAL UI BLOCK -->\r\n<div class=\"aa-blade-modal\" *ngIf=\"toggleBlade && showModal\" [ngStyle]=\"{'z-index' : zIndex}\"></div>\r\n\r\n<!-- HEADER BAKED IN -->\r\n<aside \r\n  *ngIf=\"!customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{'show-blade' : toggleBlade}\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex+10\r\n  }\"\r\n>\r\n  <article class=\"blade-header flex-group space-between\">\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <div \r\n          *ngIf=\"enablePinning\" \r\n          (click)=\"toggleThePin($event)\"\r\n          [ngClass]=\"{'pinned' : isPinned}\" \r\n          class=\"material-icons pin flex-end\"\r\n      >\r\n        push_pin\r\n      </div>\r\n      <div *ngIf=\"enableIcon\" class=\"material-icons margin-right-0-5\">{{iconName}}</div>\r\n      <h2 class=\"margin-top-0-25 margin-0 flex-align-center\">\r\n        {{bladeHeading}}\r\n      </h2>\r\n    </div>\r\n    <a class=\"anchor-close flex-align-center\" (click)=\"onClose()\">Close</a>\r\n    </article>\r\n  <ng-content></ng-content>\r\n</aside>\r\n\r\n<!-- CUSTOMISABLE HEADER, CONTENT AND FOOTER -->\r\n<aside \r\n  *ngIf=\"customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{'show-blade' : toggleBlade}\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition + 'rem', \r\n    'z-index' : zIndex\r\n  }\"\r\n>\r\n  <article class=\"blade-header\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-footer\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </article>\r\n</aside>\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9ibGFkZS9ibGFkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQWlDekI7UUFoQlUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBZXBDLENBQUM7SUFiakIsT0FBTztRQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDM0QsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMHdEQUFxQzs7YUFFdEM7Ozs7dUJBR0UsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFFTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYmxhZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibGFkZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmxhZGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxhZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwaW5CbGFkZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b3BQb3NpdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHN1cHByZXNzQXV0b0Nsb3NlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJsYWRlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgc2hvd01vZGFsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9uZUNvbFdpZHRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJsYWRlU2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJsYWRlSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVBpbm5pbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9nZ2xlQmxhZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNQaW5uZWQ6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGJsYWRlT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVQaW5uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUJsYWRlID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMuc3VwcHJlc3NBdXRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLnRvZ2dsZUJsYWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVRoZVBpbihlKSB7XHJcbiAgICB0aGlzLmlzUGlubmVkID0gIXRoaXMuaXNQaW5uZWQ7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJsYWRlUGlubmVkLmVtaXQodGhpcy5pc1Bpbm5lZCk7IC8vIGlzUGlubmVkIGNhbGxiYWNrXHJcbiAgICB0aGlzLmJsYWRlT3Blbi5lbWl0KHRoaXMudG9nZ2xlQmxhZGUpOyAvLyBpc09wZW4gY2FsbGJhY2tcclxuICB9XHJcblxyXG59XHJcbiJdfQ==