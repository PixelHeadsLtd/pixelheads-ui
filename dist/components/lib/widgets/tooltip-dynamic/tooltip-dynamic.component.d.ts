import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
import * as i0 from "@angular/core";
export declare class TooltipDynamicComponent {
    position: TooltipDynamicPosition;
    tooltip: string | string[];
    left: number;
    top: number;
    visible: boolean;
    isArrayPassed(): boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDynamicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipDynamicComponent, "aa-tooltip-dynamic", never, {}, {}, never, never, false, never>;
}
