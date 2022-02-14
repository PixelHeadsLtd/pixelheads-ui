import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class BladeTopComponent {
    constructor() {
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    onClose() {
        this.isOpen = false;
        this.bladeOpen.emit(this.isOpen);
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
    }
}
BladeTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-blade-top',
                template: "<section \r\n    class=\"blade-top gradient-h-blue width-control flex-group\"\r\n    [ngClass]=\"{'show-top-blade box-shadow-light' : isOpen}\"\r\n    [ngStyle]=\"{\r\n        'left' : leftPos+'rem', \r\n        'right' : rightPos+'rem',\r\n        'margin-top' : topPos+'rem',\r\n        'z-index' : zIndex,\r\n        'max-height' : maxHeight+'rem'\r\n    }\">\r\n    <div class=\"flex-group flex-start\">\r\n        <div *ngIf=\"userProfile\" class=\"position-relative margin-top-1-5\">\r\n            <div class=\"flag {{countryFlag}}\"></div>\r\n            <div class=\"user-profile fingerprint\" \r\n                [ngStyle]=\"{\r\n                    'border' : borderThickness+'rem'+' solid '+borderColour, \r\n                    'border-style' : 'solid', \r\n                    'width' : profileSize+'rem', \r\n                    'height' : profileSize+'rem'\r\n                }\">\r\n                <ng-content select=\"[user-profile]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"blade-top-controls flex-group\">\r\n        <button (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end margin-right-0-5\" [ngStyle]=\"{'transform': isPinned ? 'rotate(0deg)' : 'rotate(90deg)'}\">push_pin</button>\r\n        <button (click)=\"onClose()\" class=\"material-icons\">close</button>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
BladeTopComponent.ctorParameters = () => [];
BladeTopComponent.propDecorators = {
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    topPos: [{ type: Input }],
    zIndex: [{ type: Input }],
    maxHeight: [{ type: Input }],
    countryFlag: [{ type: Input }],
    paddingTop: [{ type: Input }],
    paddingRight: [{ type: Input }],
    paddingBottom: [{ type: Input }],
    paddingLeft: [{ type: Input }],
    userProfile: [{ type: Input }],
    borderColour: [{ type: Input }],
    profileSize: [{ type: Input }],
    borderThickness: [{ type: Input }],
    isOpen: [{ type: Input }],
    isPinned: [{ type: Input }],
    bladeOpen: [{ type: Output }],
    bladePinned: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtdG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvYmxhZGUtdG9wL2JsYWRlLXRvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF4RyxNQUFNLE9BQU8saUJBQWlCO0lBZ0M1QjtRQWRVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWFwQyxDQUFDO0lBWGpCLE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7SUFDdEQsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsazdDQUF5QztnQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3VCQUdFLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYmxhZGUtdG9wJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmxhZGUtdG9wLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ibGFkZS10b3AuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxhZGVUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSByaWdodFBvczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSB0b3BQb3M6IG51bWJlcjtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb3VudHJ5RmxhZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdUb3A6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGFkZGluZ1JpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdCb3R0b206IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYm9yZGVyQ29sb3VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvZmlsZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBib3JkZXJUaGlja25lc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNQaW5uZWQ6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGJsYWRlT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVQaW5uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLmlzT3Blbik7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaGVQaW4oZSkge1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICF0aGlzLmlzUGlubmVkO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpOyAvLyBpc1Bpbm5lZCBjYWxsYmFja1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLmlzT3Blbik7IC8vIGlzT3BlbiBjYWxsYmFja1xyXG4gIH1cclxuXHJcbn1cclxuIl19