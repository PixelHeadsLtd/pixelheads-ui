import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AccordionComponent {
    showBody: boolean;
    disabled: boolean;
    iconsEnabled: boolean;
    minWidth: any;
    dragable: boolean;
    sectionId: string;
    accordionHeading: string;
    accordionId: string;
    iconName: string;
    accordionClean: boolean;
    fontAwesome: boolean;
    fontClassName: string;
    iconBgColor: string;
    customBgColor: string;
    clearPadding: boolean;
    verticalDisplay: boolean;
    verticalMinHeight: any;
    bespokeHeader: boolean;
    hideToggleIcon: boolean;
    toggleIconColor: string;
    open: EventEmitter<void>;
    onOpen(e: {
        stopPropagation: () => void;
    }): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "aa-accordion", never, { "showBody": { "alias": "showBody"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "iconsEnabled": { "alias": "iconsEnabled"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "dragable": { "alias": "dragable"; "required": false; }; "sectionId": { "alias": "sectionId"; "required": false; }; "accordionHeading": { "alias": "accordionHeading"; "required": false; }; "accordionId": { "alias": "accordionId"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "accordionClean": { "alias": "accordionClean"; "required": false; }; "fontAwesome": { "alias": "fontAwesome"; "required": false; }; "fontClassName": { "alias": "fontClassName"; "required": false; }; "iconBgColor": { "alias": "iconBgColor"; "required": false; }; "customBgColor": { "alias": "customBgColor"; "required": false; }; "clearPadding": { "alias": "clearPadding"; "required": false; }; "verticalDisplay": { "alias": "verticalDisplay"; "required": false; }; "verticalMinHeight": { "alias": "verticalMinHeight"; "required": false; }; "bespokeHeader": { "alias": "bespokeHeader"; "required": false; }; "hideToggleIcon": { "alias": "hideToggleIcon"; "required": false; }; "toggleIconColor": { "alias": "toggleIconColor"; "required": false; }; }, { "open": "open"; }, never, ["[header-custom]", "[bespoke-header]", "*"], false, never>;
}
