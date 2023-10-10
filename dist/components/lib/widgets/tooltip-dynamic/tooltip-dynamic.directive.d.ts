import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
export declare class TooltipDynamicDirective implements OnDestroy {
    private elementRef;
    private appRef;
    private componentFactoryResolver;
    private injector;
    aaTooltip: string | string[];
    position: TooltipDynamicPosition;
    showDelay: number;
    hideDelay: number;
    private componentRef;
    private showTimeout?;
    private hideTimeout?;
    private touchTimeout?;
    constructor(elementRef: ElementRef, appRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    onMouseEnter(): void;
    onMouseLeave(): void;
    onMouseMove($event: MouseEvent): void;
    onTouchStart($event: TouchEvent): void;
    onTouchEnd(): void;
    private initializeTooltip;
    private setTooltipComponentProperties;
    private showTooltip;
    private setHideTooltipTimeout;
    ngOnDestroy(): void;
    destroy(): void;
}
//# sourceMappingURL=tooltip-dynamic.directive.d.ts.map