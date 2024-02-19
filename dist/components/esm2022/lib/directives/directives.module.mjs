import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { TextareaAutoresizeDirective } from './textarea-autoresize/textarea-autoresize.directive';
import * as i0 from "@angular/core";
export class DirectivesModule {
    static { this.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectivesModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectivesModule, [{
        type: NgModule,
        args: [{
                declarations: [ClickOutsideDirective, TextareaAutoresizeDirective],
                imports: [
                    CommonModule
                ],
                exports: [ClickOutsideDirective, TextareaAutoresizeDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectivesModule, { declarations: [ClickOutsideDirective, TextareaAutoresizeDirective], imports: [CommonModule], exports: [ClickOutsideDirective, TextareaAutoresizeDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFTbEcsTUFBTSxPQUFPLGdCQUFnQjtpRkFBaEIsZ0JBQWdCO21FQUFoQixnQkFBZ0I7dUVBSnpCLFlBQVk7O2lGQUlILGdCQUFnQjtjQVA1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUM7Z0JBQ2xFLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDO2FBQzlEOzt3RkFDWSxnQkFBZ0IsbUJBTloscUJBQXFCLEVBQUUsMkJBQTJCLGFBRS9ELFlBQVksYUFFSixxQkFBcUIsRUFBRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUF1dG9yZXNpemVEaXJlY3RpdmUgfSBmcm9tICcuL3RleHRhcmVhLWF1dG9yZXNpemUvdGV4dGFyZWEtYXV0b3Jlc2l6ZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDbGlja091dHNpZGVEaXJlY3RpdmUsIFRleHRhcmVhQXV0b3Jlc2l6ZURpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLCBUZXh0YXJlYUF1dG9yZXNpemVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVzTW9kdWxlIHsgfVxyXG5cclxuIl19