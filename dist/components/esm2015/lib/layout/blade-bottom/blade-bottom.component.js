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
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    toggleFullScreen(e) {
        this.isFullScreen = !this.isFullScreen;
        e.stopPropagation();
        this.bladeFullScreen.emit(this.isFullScreen);
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
                template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n        <div (click)=\"toggleFullScreen($event)\" class=\"material-icons flex-end\">\r\n          <span *ngIf=\"!isFullScreen\">open_in_full</span>\r\n          <span *ngIf=\"isFullScreen\">close_fullscreen</span>\r\n        </div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtYm90dG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvYmxhZGUtYm90dG9tL2JsYWRlLWJvdHRvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF4RyxNQUFNLE9BQU8sb0JBQW9CO0lBa0QvQjtRQXJDVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBbUN4QyxDQUFDO0lBakNqQixNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDeEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtJQUN4RSxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHdsQ0FBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs0QkFJRSxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsTUFBTTt3QkFDTixNQUFNOzhCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWJsYWRlLWJvdHRvbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JsYWRlLWJvdHRvbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmxhZGUtYm90dG9tLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFkZUJvdHRvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZ1bGxTY3JlZW5Qb3M6IGFueTtcclxuICBASW5wdXQoKSBzcGxpdFNjcmVlblBvczogYW55O1xyXG4gIEBJbnB1dCgpIGNsb3NlZFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc1Bpbm5lZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlUGlubmluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0Z1bGxTY3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW5uaXRpYWxseVBpbm5lZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb250cm9sc0NvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVhZGVyQmdDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBibGFkZVBpbm5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBibGFkZUZ1bGxTY3JlZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLmlzT3Blbik7XHJcbiAgICBpZiAodGhpcy5pc1Bpbm5lZCAmJiB0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLmlzUGlubmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVRoZVBpbihlKSB7XHJcbiAgICB0aGlzLmlzUGlubmVkID0gISB0aGlzLmlzUGlubmVkO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oZSkge1xyXG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSAhIHRoaXMuaXNGdWxsU2NyZWVuO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVGdWxsU2NyZWVuLmVtaXQodGhpcy5pc0Z1bGxTY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kZWRQb3NpdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VkUG9zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRnVsbFNjcmVlbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5mdWxsU2NyZWVuUG9zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGlubmVkIHx8IHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwbGl0U2NyZWVuUG9zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmlubml0aWFsbHlQaW5uZWQpIHtcclxuICAgICAgdGhpcy5pc1Bpbm5lZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTsgLy8gaXNQaW5uZWQgY2FsbGJhY2tcclxuICAgIHRoaXMuYmxhZGVPcGVuLmVtaXQodGhpcy5pc09wZW4pOyAvLyBpc09wZW4gY2FsbGJhY2tcclxuICAgIHRoaXMuYmxhZGVGdWxsU2NyZWVuLmVtaXQodGhpcy5pc0Z1bGxTY3JlZW4pOyAvLyBpc0Z1bGxTY3JlZW4gY2FsbGJhY2tcclxuICB9XHJcbn1cclxuIl19