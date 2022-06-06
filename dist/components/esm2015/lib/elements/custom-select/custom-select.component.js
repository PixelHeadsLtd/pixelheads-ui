import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
export class CustomSelectComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.closeDropdown = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.highlightSection = new EventEmitter();
        this.selectedIndex = null;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.closeDropdown.emit(this.showDropdown = false);
        }
    }
    optionIsSelected(event, selectOption) {
        this.showDropdown = false;
        this.optionSelected.emit(selectOption);
        this.selectedOption = selectOption;
    }
    setIndex(index) {
        if (index !== this.selectedIndex) {
            this.selectedIndex = index;
            this.highlightSection.emit(this.selectedIndex);
        }
        else {
            this.selectedIndex = index;
            this.highlightSection.emit(this.selectedIndex = null);
        }
    }
    ngOnInit() {
        this.closeDropdown.emit(this.showDropdown);
        this.highlightSection.emit(this.selectedIndex);
    }
}
CustomSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-custom-select',
                template: "<div \r\n  class=\"aa-custom-select\"\r\n  [ngStyle]=\"{'width' : setWidth+'rem'}\"\r\n>\r\n  <button \r\n    class=\"\r\n    border-radius-0-25\r\n    flex-align-center\"\r\n    (click)=\"showDropdown=!showDropdown\"\r\n  >\r\n    <span \r\n      class=\"\r\n      material-icons \r\n      padding-right-0-5\r\n      {{ selectedOption?.iconColor || defaultIconColor }}\"\r\n    >{{ selectedOption?.icon || defaultIcon }}\r\n    </span>\r\n\r\n    <span *ngIf=\"!selectedOption?.display\">{{ defaultName }}</span>\r\n    <span *ngIf=\"selectedOption?.display\">{{ selectedOption?.display }}</span>\r\n\r\n  </button>\r\n  <div \r\n    [class.show-dropdown]=\"showDropdown\" \r\n    class=\"aa-custom-select-dropdown box-shadow-strong\"\r\n  >\r\n    <div *ngFor=\" let option of options; let i = index\">\r\n      <button \r\n        (click)=\"optionIsSelected($event, option); setIndex(i)\" \r\n        class=\"flex-align-center\"\r\n        [class.selected]=\"selectedIndex === i\"\r\n      >\r\n        <span \r\n          *ngIf=\"option.showIcon\"\r\n          class=\"\r\n          material-icons \r\n          padding-right-0-5 \r\n          {{option.iconColor}}\"\r\n        >{{ option.icon }}</span>\r\n          {{ option.display }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [""]
            },] }
];
CustomSelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
CustomSelectComponent.propDecorators = {
    options: [{ type: Input }],
    defaultName: [{ type: Input }],
    defaultIcon: [{ type: Input }],
    defaultIconColor: [{ type: Input }],
    setWidth: [{ type: Input }],
    closeDropdown: [{ type: Output }],
    optionSelected: [{ type: Output }],
    highlightSection: [{ type: Output }],
    selectedIndex: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZWxlbWVudHMvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQnpHLE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDbEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFckQsa0JBQWEsR0FBUSxJQUFJLENBQUM7SUFFVyxDQUFDO0lBR3hDLE9BQU8sQ0FBQyxhQUFhO1FBQzFCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLFlBQTBCO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDR4Q0FBNkM7O2FBRTlDOzs7WUFmZ0QsVUFBVTs7O3NCQWtCeEQsS0FBSzswQkFJTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOzRCQUVOLEtBQUs7c0JBSUwsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbiB7XHJcbiAgaWQ6IGFueTtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaWNvbkNvbG9yPzogc3RyaW5nO1xyXG4gIHNob3dJY29uPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jdXN0b20tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21TZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXTtcclxuXHJcbiAgc2hvd0Ryb3Bkb3duOiBib29sZWFuO1xyXG4gIHNob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdEljb246IHN0cmluZztcclxuICBASW5wdXQoKSBkZWZhdWx0SWNvbkNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2V0V2lkdGg6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgY2xvc2VEcm9wZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb3B0aW9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdE9wdGlvbj4oKTtcclxuICBAT3V0cHV0KCkgaGlnaGxpZ2h0U2VjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T3B0aW9uPigpO1xyXG4gIHNlbGVjdGVkT3B0aW9uOiBTZWxlY3RPcHRpb247XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleDogYW55ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcclxuICBwdWJsaWMgb25DbGljayh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24uZW1pdCh0aGlzLnNob3dEcm9wZG93biA9IGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wdGlvbklzU2VsZWN0ZWQoZXZlbnQ6IGFueSwgc2VsZWN0T3B0aW9uOiBTZWxlY3RPcHRpb24pIHtcclxuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wdGlvblNlbGVjdGVkLmVtaXQoc2VsZWN0T3B0aW9uKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RPcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXRJbmRleChpbmRleDogYW55KSB7XHJcbiAgICBpZiAoaW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXggPSBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbG9zZURyb3Bkb3duLmVtaXQodGhpcy5zaG93RHJvcGRvd24pO1xyXG4gICAgdGhpcy5oaWdobGlnaHRTZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICB9XHJcbn1cclxuIl19