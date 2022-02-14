import { Directive, TemplateRef } from '@angular/core';
export class TabNavigationHeaderContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TabNavigationHeaderContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[aaTabNavigationHeaderContent]'
            },] }
];
TabNavigationHeaderContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdmlnYXRpb24taGVhZGVyLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vdGFiLW5hdmlnYXRpb24taXRlbS90YWItbmF2aWdhdGlvbi1oZWFkZXItY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLdkQsTUFBTSxPQUFPLG1DQUFtQztJQUM5QyxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOzs7WUFKckQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7YUFDdEQ7OztZQUptQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthYVRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYk5hdmlnYXRpb25IZWFkZXJDb250ZW50RGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuIl19