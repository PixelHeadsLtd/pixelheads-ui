import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AccordionComponent {
    showBody: boolean;
    disabled: boolean;
    minWidth: number;
    iconsEnabled: boolean;
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
    open: EventEmitter<void>;
    onOpen(e: {
        stopPropagation: () => void;
    }): void;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<AccordionComponent, "aa-accordion", never, { "showBody": "showBody"; "disabled": "disabled"; "minWidth": "minWidth"; "iconsEnabled": "iconsEnabled"; "dragable": "dragable"; "sectionId": "sectionId"; "accordionHeading": "accordionHeading"; "accordionId": "accordionId"; "iconName": "iconName"; "accordionClean": "accordionClean"; "fontAwesome": "fontAwesome"; "fontClassName": "fontClassName"; "iconBgColor": "iconBgColor"; "customBgColor": "customBgColor"; "clearPadding": "clearPadding"; "verticalDisplay": "verticalDisplay"; "verticalMinHeight": "verticalMinHeight"; }, { "open": "open"; }, never, ["[header-custom]", "*"]>;
}

//# sourceMappingURL=accordion.component.d.ts.map