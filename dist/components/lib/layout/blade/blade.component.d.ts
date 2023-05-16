import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BladeComponent implements OnInit {
    pinBlade: boolean;
    topPosition: number;
    zIndex: number;
    suppressAutoClose: boolean;
    customBlade: boolean;
    enableIcon: boolean;
    iconName: string;
    bladeTabs: boolean;
    customBladeTabs: boolean;
    headingMaxWidth: number;
    showModal: boolean;
    oneColWidth: boolean;
    bladeSize: string;
    bladeHeading: string;
    enablePinning: boolean;
    toggleBlade: boolean;
    isPinned: boolean;
    bladeOpen: EventEmitter<boolean>;
    bladePinned: EventEmitter<boolean>;
    onClose(): void;
    toggleThePin(e: any): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BladeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BladeComponent, "aa-blade", never, { "toggleBlade": "toggleBlade"; "isPinned": "isPinned"; "pinBlade": "pinBlade"; "topPosition": "topPosition"; "zIndex": "zIndex"; "suppressAutoClose": "suppressAutoClose"; "customBlade": "customBlade"; "enableIcon": "enableIcon"; "iconName": "iconName"; "bladeTabs": "bladeTabs"; "customBladeTabs": "customBladeTabs"; "headingMaxWidth": "headingMaxWidth"; "showModal": "showModal"; "oneColWidth": "oneColWidth"; "bladeSize": "bladeSize"; "bladeHeading": "bladeHeading"; "enablePinning": "enablePinning"; }, { "bladeOpen": "bladeOpen"; "bladePinned": "bladePinned"; }, never, ["[blade-tabs]", "*", "[custom-header]", "[custom-blade-tabs]", "[custom-content]", "[custom-footer]"]>;
}

//# sourceMappingURL=blade.component.d.ts.map