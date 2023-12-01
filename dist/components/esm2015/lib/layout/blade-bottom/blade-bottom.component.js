import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class BladeBottomComponent {
    constructor() {
        this.bladePinned = new EventEmitter();
        this.bladeOpen = new EventEmitter();
        this.bladeFullScreen = new EventEmitter();
    }
    toggle() {
        this.isOpen = !this.isOpen;
        this.bladeOpen.emit(this.isOpen);
        if (this.isPinned && this.isOpen) {
            this.isPinned = true;
            this.bladePinned.emit(true);
        }
        else {
            this.bladePinned.emit(false);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        if (!this.isPinned) {
            this.isFullScreen = true;
            this.bladeFullScreen.emit(this.isFullScreen);
        }
        else if (this.isPinned) {
            this.isFullScreen = false;
            this.isOpen = true;
        }
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    expandedPosition() {
        if (!this.isOpen) {
            return this.closedPos;
        }
        else if (this.isFullScreen) {
            return this.fullScreenPos;
        }
        else if (this.isPinned || this.isOpen) {
            return this.splitScreenPos;
        }
    }
    ngOnInit() {
        if (this.innitiallyPinned) {
            this.isPinned = true;
            this.isOpen = true;
            this.isFullScreen = false;
        }
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
        this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
    }
}
BladeBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade-bottom',
                template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
BladeBottomComponent.ctorParameters = () => [];
BladeBottomComponent.propDecorators = {
    fullScreenPos: [{ type: Input }],
    splitScreenPos: [{ type: Input }],
    closedPos: [{ type: Input }],
    isOpen: [{ type: Input }],
    isPinned: [{ type: Input }],
    disablePinning: [{ type: Input }],
    isFullScreen: [{ type: Input }],
    innitiallyPinned: [{ type: Input }],
    controlsColor: [{ type: Input }],
    headerBgColor: [{ type: Input }],
    zIndex: [{ type: Input }],
    bladePinned: [{ type: Output }],
    bladeOpen: [{ type: Output }],
    bladeFullScreen: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtYm90dG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvYmxhZGUtYm90dG9tL2JsYWRlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF4RyxNQUFNLE9BQU8sb0JBQW9CO0lBb0QvQjtRQXZDVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBcUN4QyxDQUFDO0lBbkNqQixNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUVELENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7SUFDeEUsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2MkJBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7NEJBSUUsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLE1BQU07d0JBQ04sTUFBTTs4QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1ibGFkZS1ib3R0b20nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibGFkZS1ib3R0b20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JsYWRlLWJvdHRvbS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmxhZGVCb3R0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBmdWxsU2NyZWVuUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgc3BsaXRTY3JlZW5Qb3M6IGFueTtcclxuICBASW5wdXQoKSBjbG9zZWRQb3M6IGFueTtcclxuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNQaW5uZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZVBpbm5pbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNGdWxsU2NyZWVuOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlubml0aWFsbHlQaW5uZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY29udHJvbHNDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlckJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgYmxhZGVQaW5uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGJsYWRlT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVGdWxsU2NyZWVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIHRoaXMuYmxhZGVPcGVuLmVtaXQodGhpcy5pc09wZW4pO1xyXG4gICAgaWYgKHRoaXMuaXNQaW5uZWQgJiYgdGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5pc1Bpbm5lZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaGVQaW4oZSkge1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICEgdGhpcy5pc1Bpbm5lZDtcclxuICAgIGlmICghdGhpcy5pc1Bpbm5lZCkge1xyXG4gICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuYmxhZGVGdWxsU2NyZWVuLmVtaXQodGhpcy5pc0Z1bGxTY3JlZW4pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGlubmVkKSB7XHJcbiAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kZWRQb3NpdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VkUG9zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRnVsbFNjcmVlbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5mdWxsU2NyZWVuUG9zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGlubmVkIHx8IHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwbGl0U2NyZWVuUG9zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlubml0aWFsbHlQaW5uZWQpIHtcclxuICAgICAgdGhpcy5pc1Bpbm5lZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTsgLy8gaXNQaW5uZWQgY2FsbGJhY2tcclxuICAgIHRoaXMuYmxhZGVPcGVuLmVtaXQodGhpcy5pc09wZW4pOyAvLyBpc09wZW4gY2FsbGJhY2tcclxuICAgIHRoaXMuYmxhZGVGdWxsU2NyZWVuLmVtaXQodGhpcy5pc0Z1bGxTY3JlZW4pOyAvLyBpc0Z1bGxTY3JlZW4gY2FsbGJhY2tcclxuICB9XHJcbn1cclxuIl19