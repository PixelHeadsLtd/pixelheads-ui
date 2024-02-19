import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BladeComponent implements OnInit {
    pinBlade: boolean;
    topPosition: any;
    zIndex: number;
    suppressAutoClose: boolean;
    customBlade: boolean;
    enableIcon: boolean;
    iconName: string;
    bladeTabs: boolean;
    customBladeTabs: boolean;
    headingMaxWidth: any;
    blockPageUI: boolean;
    showBladeModal: boolean;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BladeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BladeComponent, "aa-blade", never, { "pinBlade": { "alias": "pinBlade"; "required": false; }; "topPosition": { "alias": "topPosition"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "suppressAutoClose": { "alias": "suppressAutoClose"; "required": false; }; "customBlade": { "alias": "customBlade"; "required": false; }; "enableIcon": { "alias": "enableIcon"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "bladeTabs": { "alias": "bladeTabs"; "required": false; }; "customBladeTabs": { "alias": "customBladeTabs"; "required": false; }; "headingMaxWidth": { "alias": "headingMaxWidth"; "required": false; }; "blockPageUI": { "alias": "blockPageUI"; "required": false; }; "showBladeModal": { "alias": "showBladeModal"; "required": false; }; "bladeSize": { "alias": "bladeSize"; "required": false; }; "bladeHeading": { "alias": "bladeHeading"; "required": false; }; "enablePinning": { "alias": "enablePinning"; "required": false; }; "toggleBlade": { "alias": "toggleBlade"; "required": false; }; "isPinned": { "alias": "isPinned"; "required": false; }; }, { "bladeOpen": "bladeOpen"; "bladePinned": "bladePinned"; }, never, ["[blade-tabs]", "[blade-modal]", "*", "[blade-custom-modal]", "[custom-header]", "[custom-blade-tabs]", "[custom-content]", "[custom-footer]"], false, never>;
}
