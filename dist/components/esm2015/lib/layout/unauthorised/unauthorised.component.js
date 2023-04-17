import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class UnauthorisedComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthorisedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-unauthorised',
                template: "<section class=\"unauthorised flex-group flex-column space-between flex-nowrap\">\r\n    <div class=\"unauthorised-content flex-group flex-center flex-column\">\r\n        <h1>{{title}}</h1>\r\n        <p \r\n            class=\"align-center margin-bottom-0-25\"\r\n            [ngStyle]=\"{'max-width' : straplineWidth}\"\r\n        >\r\n            {{strapline}}\r\n        </p>      \r\n        <a class=\"flex-center\" href=\"https://core.angloamerican.com/security-amp/amp\">\r\n            <span class=\"material-icons padding-right-0-25 aa-blue-100\">rocket_launch</span>\r\n            Discover other applications\r\n        </a>\r\n    </div>\r\n    <div class=\"unauthorised-image\">\r\n        <aa-graphic class=\"app-graphic\"></aa-graphic>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
UnauthorisedComponent.ctorParameters = () => [];
UnauthorisedComponent.propDecorators = {
    title: [{ type: Input }],
    strapline: [{ type: Input }],
    straplineWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3Jpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvdW5hdXRob3Jpc2VkL3VuYXV0aG9yaXNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxnQkFBZ0IsQ0FBQztJQU1qQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHd4QkFBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztvQkFLRSxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdW5hdXRob3Jpc2VkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdW5hdXRob3Jpc2VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91bmF1dGhvcmlzZWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5hdXRob3Jpc2VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJhcGxpbmU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHJhcGxpbmVXaWR0aDogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==