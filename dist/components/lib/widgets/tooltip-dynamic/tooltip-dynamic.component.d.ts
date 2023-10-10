import { OnInit } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
export declare class TooltipDynamicComponent implements OnInit {
    position: TooltipDynamicPosition;
    tooltip: string | string[];
    left: number;
    top: number;
    visible: boolean;
    isArrayPassed(): boolean;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=tooltip-dynamic.component.d.ts.map