import { Directive, TemplateRef } from '@angular/core';
export class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
CarouselItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaCarouselItem]'
            },] }
];
CarouselItemDirective.ctorParameters = () => [
    { type: TemplateRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt2RCxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLFlBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQUksQ0FBQzs7O1lBTC9DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUFKbUIsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FhQ2Fyb3VzZWxJdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSXRlbURpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+ICkge31cclxuXHJcbn1cclxuIl19