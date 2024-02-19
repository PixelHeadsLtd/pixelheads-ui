import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ProgressIndicatorAdvancedComponent {
    progressClass: string;
    progressLabel: string;
    iconClass: string;
    showDescription: boolean;
    description: string;
    asLink: boolean;
    progressLink: string;
    progressClick: EventEmitter<Event>;
    onProgressClick(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressIndicatorAdvancedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressIndicatorAdvancedComponent, "aa-progress-indicator-advanced", never, { "progressClass": { "alias": "progressClass"; "required": false; }; "progressLabel": { "alias": "progressLabel"; "required": false; }; "iconClass": { "alias": "iconClass"; "required": false; }; "showDescription": { "alias": "showDescription"; "required": false; }; "description": { "alias": "description"; "required": false; }; "asLink": { "alias": "asLink"; "required": false; }; "progressLink": { "alias": "progressLink"; "required": false; }; }, { "progressClick": "progressClick"; }, never, ["*"], false, never>;
}
