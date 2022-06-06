import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class ProgressIndicatorAdvancedComponent {
    constructor() {
        this.progressClick = new EventEmitter();
    }
    onProgressClick(e) {
        e.stopPropagation();
        this.progressClick.emit(e);
    }
    ngOnInit() {
    }
}
ProgressIndicatorAdvancedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-indicator-advanced',
                template: "<section class=\"indicator-item flex-group {{ progressClass }}\">\r\n    <div *ngIf=\"showDescription\" class=\"description\">\r\n        <p class=\"box-shadow\">{{description}}</p>\r\n        <div class=\"material-icons {{iconClass}}\">pan_tool_alt</div>\r\n    </div>\r\n    <div class=\"bus-stop flex-group flex-column flex-center\">\r\n        <div \r\n            *ngIf=\"!asLink\" \r\n            class=\"material-icons\"\r\n        >\r\n        </div>\r\n        <a \r\n            *ngIf=\"asLink\" \r\n            href=\"{{ progressLink }}\"\r\n            class=\"material-icons\"\r\n        >\r\n        </a>\r\n        <label>{{ progressLabel }}</label>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressIndicatorAdvancedComponent.propDecorators = {
    progressClass: [{ type: Input }],
    progressLabel: [{ type: Input }],
    iconClass: [{ type: Input }],
    showDescription: [{ type: Input }],
    description: [{ type: Input }],
    asLink: [{ type: Input }],
    progressLink: [{ type: Input }],
    progressClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGtDQUFrQztJQU4vQztRQWdCWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFVdEQsQ0FBQztJQVJRLGVBQWUsQ0FBQyxDQUFRO1FBQzdCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsZ3NCQUEyRDtnQkFFM0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7NEJBR0UsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtcHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NJbmRpY2F0b3JBZHZhbmNlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBwcm9ncmVzc0xhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbkNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0Rlc2NyaXB0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYXNMaW5rOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzTGluazogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcHJvZ3Jlc3NDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBvblByb2dyZXNzQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzQ2xpY2suZW1pdChlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19