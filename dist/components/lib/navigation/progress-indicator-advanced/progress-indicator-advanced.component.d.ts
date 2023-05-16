import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ProgressIndicatorAdvancedComponent implements OnInit {
    progressClass: string;
    progressLabel: string;
    iconClass: string;
    showDescription: boolean;
    description: string;
    asLink: boolean;
    progressLink: string;
    progressClick: EventEmitter<Event>;
    onProgressClick(e: Event): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ProgressIndicatorAdvancedComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ProgressIndicatorAdvancedComponent, "aa-progress-indicator-advanced", never, { "progressClass": "progressClass"; "progressLabel": "progressLabel"; "iconClass": "iconClass"; "showDescription": "showDescription"; "description": "description"; "asLink": "asLink"; "progressLink": "progressLink"; }, { "progressClick": "progressClick"; }, never, ["*"]>;
}

//# sourceMappingURL=progress-indicator-advanced.component.d.ts.map