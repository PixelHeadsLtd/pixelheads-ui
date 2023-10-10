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
                template: "<div \r\n  class=\"aa-custom-select\"\r\n  [ngStyle]=\"{'width' : setWidth+'rem'}\"\r\n>\r\n  <button \r\n    class=\"\r\n    border-radius-0-25\r\n    flex-align-center\"\r\n    (click)=\"showDropdown=!showDropdown\"\r\n  >\r\n    <span \r\n      class=\"\r\n      material-icons \r\n      padding-right-0-5\r\n      {{ selectedOption?.iconColor || defaultIconColor }}\"\r\n    >{{ selectedOption?.icon || defaultIcon }}\r\n    </span>\r\n\r\n    <span *ngIf=\"!selectedOption?.display\">{{ defaultName }}</span>\r\n    <span *ngIf=\"selectedOption?.display\">{{ selectedOption?.display }}</span>\r\n\r\n  </button>\r\n  <div \r\n    [class.show-dropdown]=\"showDropdown\" \r\n    class=\"aa-custom-select-dropdown box-shadow\"\r\n    [ngStyle]=\"{'max-height' : maxHeight+'rem'}\"\r\n  >\r\n    <div *ngFor=\" let option of options; let i = index\">\r\n      <button \r\n        (click)=\"optionIsSelected($event, option); setIndex(i)\" \r\n        class=\"flex-align-center\"\r\n        [class.selected]=\"selectedIndex === i\"\r\n      >\r\n        <span \r\n          *ngIf=\"option.showIcon\"\r\n          class=\"\r\n          material-icons \r\n          padding-right-0-5 \r\n          {{option.iconColor}}\"\r\n        >{{ option.icon }}</span>\r\n          {{ option.display }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>",
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
    maxHeight: [{ type: Input }],
    closeDropdown: [{ type: Output }],
    optionSelected: [{ type: Output }],
    highlightSection: [{ type: Output }],
    selectedIndex: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZWxlbWVudHMvY3VzdG9tLXNlbGVjdC9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQnpHLE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDbEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFckQsa0JBQWEsR0FBUSxJQUFJLENBQUM7SUFFVyxDQUFDO0lBR3hDLE9BQU8sQ0FBQyxhQUFhO1FBQzFCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLFlBQTBCO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDIwQ0FBNkM7O2FBRTlDOzs7WUFmZ0QsVUFBVTs7O3NCQWtCeEQsS0FBSzswQkFJTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsTUFBTTs2QkFDTixNQUFNOytCQUNOLE1BQU07NEJBRU4sS0FBSztzQkFJTCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uIHtcclxuICBpZDogYW55O1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpY29uQ29sb3I/OiBzdHJpbmc7XHJcbiAgc2hvd0ljb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWN1c3RvbS1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNlbGVjdE9wdGlvbltdO1xyXG5cclxuICBzaG93RHJvcGRvd246IGJvb2xlYW47XHJcbiAgc2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGVmYXVsdE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBkZWZhdWx0SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRJY29uQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBzZXRXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heEhlaWdodDogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBjbG9zZURyb3Bkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvcHRpb25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0T3B0aW9uPigpO1xyXG4gIEBPdXRwdXQoKSBoaWdobGlnaHRTZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RPcHRpb24+KCk7XHJcbiAgc2VsZWN0ZWRPcHRpb246IFNlbGVjdE9wdGlvbjtcclxuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4OiBhbnkgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKHRhcmdldEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bi5lbWl0KHRoaXMuc2hvd0Ryb3Bkb3duID0gZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3B0aW9uSXNTZWxlY3RlZChldmVudDogYW55LCBzZWxlY3RPcHRpb246IFNlbGVjdE9wdGlvbikge1xyXG4gICAgdGhpcy5zaG93RHJvcGRvd24gPSBmYWxzZTtcclxuICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQuZW1pdChzZWxlY3RPcHRpb24pO1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHNlbGVjdE9wdGlvbjtcclxuICB9XHJcblxyXG4gIHNldEluZGV4KGluZGV4OiBhbnkpIHtcclxuICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2VjdGlvbi5lbWl0KHRoaXMuc2VsZWN0ZWRJbmRleCA9IG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24uZW1pdCh0aGlzLnNob3dEcm9wZG93bik7XHJcbiAgICB0aGlzLmhpZ2hsaWdodFNlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gIH1cclxufVxyXG4iXX0=